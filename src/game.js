/**
 * game.js
 * Comprehensive 3D Game Engine & Mathematics Gameplay Controller for Roti Share:
 * - Rich Indian Village Kitchen Environment & Atmosphere
 * - Interactive Equipment:
 *   1. 3D Butter Knife (guided radial cutting & slice animation)
 *   2. 3D Serving Spatula (visual lifting and plate placement)
 *   3. 3D Measuring Tool (protractor degrees arc & fraction comparison)
 *   4. 3D Balance Scale (torque tilting based on fraction weights, balancing on 1/2 = 2/4)
 *   5. 3D Fraction Tiles Rack (interactive 1/2, 1/3, 1/4, 2/4, 3/4, 1/8 tiles)
 *   6. Dynamic 3D Plate Labels (shows friend name and current served fraction)
 * - 8 Learning Modes:
 *   - Mode 1: Fair Sharing (2, 3, 4 friends)
 *   - Mode 2: Fraction Finder (piece identification)
 *   - Mode 3: Fraction Comparison (1/2 vs 1/4 with Balance Scale)
 *   - Mode 4: Equivalent Fractions (1/2 = 2/4 on Scale & Tiles)
 *   - Mode 5: Fraction Addition (1/4 + 1/4 = 2/4)
 *   - Mode 6: Roti Shop (Customer orders & coin earnings)
 *   - Mode 7: Timed Challenge (Countdown rush)
 *   - Mode 8: Creative Kitchen (Roti, Pizza, Pancake, Laddoo)
 * - Stylized Character Animations & Reactions
 * - Rewards, Coins, Stars, and Achievements Saved to localStorage
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CharacterSystem } from './characters.js';
import { VoiceSystem } from './voice.js';
import {
  createRotiTexture,
  createLaddooTexture,
  createPizzaTexture,
  createPancakeTexture,
  createRotiSectorMesh,
  createFoodSectorMesh,
  createCuttingBoard,
  createPlate,
  createLaddoo
} from './food.js';
import {
  createButterKnife,
  createServingSpatula,
  createAngleMeasuringTool,
  createBalanceScale,
  createFractionTilesRack,
  createPlateLabelTag
} from './equipment.js';
import {
  LEVEL_DEFINITIONS,
  ROTI_SHOP_ORDERS,
  CREATIVE_KITCHEN_FOODS,
  ACHIEVEMENTS_LIST
} from './levels.js';
import {
  Fraction,
  generateEqualSectors,
  validateEqualSlicing,
  validateFairDistribution
} from './fractions.js';
import { UIManager } from './ui.js';

export class RotiShareGame {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    this.levels = LEVEL_DEFINITIONS;
    this.currentLevelIndex = 0;
    this.difficulty = 'easy';
    this.score = 0;
    this.coins = 0;
    this.isMenuOpen = true;
    this.gameMode = 'campaign'; // 'campaign', 'shop', 'timed', 'creative'
    this.interactionMode = 'cut';
    this.currentEquipment = 'knife'; // 'knife', 'spatula', 'measure', 'scale', 'tiles'
    this.previewSliceCount = 2;
    this.creativeFoodType = 'roti';

    // Timed Mode State
    this.timerSeconds = 60;
    this.timerInterval = null;

    // Roti Shop State
    this.shopOrderIndex = 0;

    // Raycasting & Interaction State
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.draggedObject = null;
    this.dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.planeIntersect = new THREE.Vector3();
    this.isPointerDown = false;
    this.pointerStartPos = new THREE.Vector2();
    this.isDraggingFood = false;

    // 3D Collections
    this.foodItemsGroup = new THREE.Group();
    this.rotiPieces = [];
    this.plates = [];
    this.laddoos = [];
    this.cuttingGuides = [];
    // Automated Cutting & Distribution Tracking State
    this.isAutoDistributing = false;
    this.distributionCompleted = false;
    this.levelSolved = false;
    this.activeAnimationTimeouts = [];
    this.activeAnimationFrames = [];

    this.loadProgress();

    this.initScene();
    this.initLights();
    this.initEnvironment();
    this.initEquipment();
    this.initCharacters();
    this.initUI();
    this.initEventListeners();

    this.clock = new THREE.Clock();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem('roti_share_progress');
      if (saved) {
        this.progress = JSON.parse(saved);
      } else {
        this.progress = {
          unlockedLevelIndex: 0,
          stars: {},
          score: 0,
          coins: 0,
          stats: {
            fairSharesCount: 0,
            fractionsIdentified: 0,
            equivalentMastered: false
          },
          achievements: {}
        };
      }
    } catch (e) {
      this.progress = {
        unlockedLevelIndex: 0,
        stars: {},
        score: 0,
        coins: 0,
        stats: { fairSharesCount: 0, fractionsIdentified: 0, equivalentMastered: false },
        achievements: {}
      };
    }
    this.score = this.progress.score || 0;
    this.coins = this.progress.coins || 0;
  }

  saveProgress() {
    try {
      this.progress.score = this.score;
      this.progress.coins = this.coins;
      localStorage.setItem('roti_share_progress', JSON.stringify(this.progress));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  getProgress() {
    return this.progress;
  }

  resetAllProgress() {
    this.progress = {
      unlockedLevelIndex: 0,
      stars: {},
      score: 0,
      coins: 0,
      stats: { fairSharesCount: 0, fractionsIdentified: 0, equivalentMastered: false },
      achievements: {}
    };
    this.score = 0;
    this.coins = 0;
    this.saveProgress();
    this.ui.updateHUD(this.getCurrentLevel(), this.score, 0, this.coins);
  }

  awardAchievement(achId) {
    if (this.progress.achievements[achId]) return;
    this.progress.achievements[achId] = true;
    this.saveProgress();
    const achDef = ACHIEVEMENTS_LIST.find(a => a.id === achId);
    if (achDef) {
      this.ui.showToast(`🏆 Achievement Unlocked: ${achDef.title}!`, "🌟");
    }
  }

  checkAchievements() {
    if (this.progress.stats.fairSharesCount >= 5) this.awardAchievement('fair_share');
    if (this.progress.stats.fractionsIdentified >= 10) this.awardAchievement('fraction_finder');
    if (this.progress.stats.equivalentMastered) this.awardAchievement('equivalent_expert');
    if (this.progress.unlockedLevelIndex >= 9) this.awardAchievement('roti_master');
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffedd5); // Soft warm peach morning sky
    this.scene.fog = new THREE.FogExp2(0xfef3c7, 0.02);

    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
    this.defaultCameraPos = new THREE.Vector3(0, 4.4, 5.4);
    this.camera.position.copy(this.defaultCameraPos);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI / 2.15;
    this.controls.minDistance = 2.4;
    this.controls.maxDistance = 10.0;
    this.controls.target.set(0, 0.45, 0);

    this.scene.add(this.foodItemsGroup);

    // Procedural Food Textures
    this.rotiTexture = createRotiTexture();
    this.laddooTexture = createLaddooTexture();
    this.pizzaTexture = createPizzaTexture();
    this.pancakeTexture = createPancakeTexture();

    // 3D Cutting interactive drag line
    this.cuttingLineGeo = new THREE.BufferGeometry();
    this.cuttingLineGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
    this.cuttingLineMat = new THREE.LineBasicMaterial({
      color: 0xef4444,
      linewidth: 4,
      depthTest: false
    });
    this.interactiveCutLine = new THREE.Line(this.cuttingLineGeo, this.cuttingLineMat);
    this.interactiveCutLine.visible = false;
    this.interactiveCutLine.renderOrder = 999;
    this.scene.add(this.interactiveCutLine);

    // 3D Cut Blade plane indicator
    const bladeGeo = new THREE.PlaneGeometry(3.4, 0.45);
    const bladeMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.bladePreview = new THREE.Mesh(bladeGeo, bladeMat);
    this.bladePreview.position.y = 0.2;
    this.bladePreview.rotation.x = Math.PI / 2;
    this.bladePreview.visible = false;
    this.scene.add(this.bladePreview);
  }

  initLights() {
    // Warm hemisphere ambient light with terracotta ground bounce
    const hemiLight = new THREE.HemisphereLight(0xfff7ed, 0x9a3412, 0.95);
    this.scene.add(hemiLight);

    // Warm morning golden sunlight streaming through the Jharokha window
    this.sunLight = new THREE.DirectionalLight(0xffedd5, 2.2);
    this.sunLight.position.set(4, 9, 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 30;
    this.sunLight.shadow.camera.left = -6.5;
    this.sunLight.shadow.camera.right = 6.5;
    this.sunLight.shadow.camera.top = 6.5;
    this.sunLight.shadow.camera.bottom = -6.5;
    this.sunLight.shadow.bias = -0.0003;
    this.scene.add(this.sunLight);

    // Soft sky and garden bounce light
    const gardenBounce = new THREE.DirectionalLight(0xecfdf5, 0.55);
    gardenBounce.position.set(-6, 5, -5);
    this.scene.add(gardenBounce);

    // Warm interior table spotlight highlighting brass and fresh baked roti
    const tableSpot = new THREE.PointLight(0xfef08a, 1.3, 12, 1.6);
    tableSpot.position.set(0, 3.2, 0);
    this.scene.add(tableSpot);
  }

  initEnvironment() {
    // 1. Terracotta Checkered Floor with Hand-Painted Lotus Rangoli Mandala
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 1024;
    floorCanvas.height = 1024;
    const fctx = floorCanvas.getContext('2d');

    // Base terracotta tiles with mortar grooves
    fctx.fillStyle = '#b45309';
    fctx.fillRect(0, 0, 1024, 1024);
    for (let r = 0; r < 16; r++) {
      for (let c = 0; c < 16; c++) {
        fctx.fillStyle = (r + c) % 2 === 0 ? '#9a3412' : '#c2410c';
        fctx.fillRect(c * 64 + 3, r * 64 + 3, 58, 58);
        fctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        fctx.fillRect(c * 64 + 3, r * 64 + 3, 58, 6);
      }
    }

    // Center traditional Lotus Rangoli / Kolam mandala under the table
    const cx = 512, cy = 512;
    fctx.strokeStyle = '#ffffff';
    fctx.lineWidth = 5;
    fctx.beginPath();
    fctx.arc(cx, cy, 280, 0, Math.PI * 2);
    fctx.stroke();

    for (let a = 0; a < Math.PI * 2; a += Math.PI / 12) {
      fctx.fillStyle = '#fef3c7';
      fctx.beginPath();
      fctx.arc(cx + Math.cos(a) * 280, cy + Math.sin(a) * 280, 7, 0, Math.PI * 2);
      fctx.fill();
    }

    fctx.fillStyle = 'rgba(245, 158, 11, 0.45)';
    fctx.beginPath();
    fctx.arc(cx, cy, 240, 0, Math.PI * 2);
    fctx.fill();
    fctx.strokeStyle = '#fef08a';
    fctx.lineWidth = 4;
    fctx.stroke();

    // 8 Lotus Petals in Vermilion Red & White
    if (typeof fctx.translate === 'function' && typeof fctx.rotate === 'function') {
      for (let p = 0; p < 8; p++) {
        const angle = (p * Math.PI) / 4;
        fctx.save();
        fctx.translate(cx, cy);
        fctx.rotate(angle);
        fctx.beginPath();
        fctx.moveTo(0, 0);
        if (typeof fctx.quadraticCurveTo === 'function') {
          fctx.quadraticCurveTo(70, 140, 0, 220);
          fctx.quadraticCurveTo(-70, 140, 0, 0);
        } else {
          fctx.lineTo(0, 220);
        }
        fctx.fillStyle = 'rgba(220, 38, 38, 0.75)';
        fctx.fill();
        fctx.strokeStyle = '#ffffff';
        fctx.lineWidth = 4;
        fctx.stroke();
        fctx.restore();
      }
    }

    // Inner golden sun core
    fctx.fillStyle = '#fbbf24';
    fctx.beginPath();
    fctx.arc(cx, cy, 60, 0, Math.PI * 2);
    fctx.fill();
    fctx.strokeStyle = '#ffffff';
    fctx.lineWidth = 4;
    fctx.stroke();

    const floorTex = new THREE.CanvasTexture(floorCanvas);
    floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(1, 1);

    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTex,
      roughness: 0.65,
      metalness: 0.04
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // 2. Baseboards & Warm Saffron-Cream Plaster Walls with Stenciled Border
    const skirtingMat = new THREE.MeshStandardMaterial({ color: 0x3e1f08, roughness: 0.7 });
    const backSkirting = new THREE.Mesh(new THREE.BoxGeometry(36, 0.4, 0.15), skirtingMat);
    backSkirting.position.set(0, -1.0, -6.4);
    this.scene.add(backSkirting);

    const wallCanvas = document.createElement('canvas');
    wallCanvas.width = 1024;
    wallCanvas.height = 512;
    const wctx = wallCanvas.getContext('2d');
    wctx.fillStyle = '#fffbeb';
    wctx.fillRect(0, 0, 1024, 512);

    wctx.fillStyle = '#fed7aa';
    wctx.fillRect(0, 380, 1024, 132);
    wctx.fillStyle = '#ea580c';
    wctx.fillRect(0, 376, 1024, 6);

    wctx.fillStyle = '#b45309';
    for (let x = 16; x < 1024; x += 48) {
      wctx.beginPath();
      wctx.arc(x, 40, 12, 0, Math.PI);
      wctx.fill();
      wctx.fillRect(x - 3, 20, 6, 20);
    }
    wctx.fillStyle = '#d97706';
    wctx.fillRect(0, 56, 1024, 4);

    const wallTex = new THREE.CanvasTexture(wallCanvas);
    const wallMat = new THREE.MeshStandardMaterial({
      map: wallTex,
      roughness: 0.9
    });

    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(36, 16), wallMat);
    backWall.position.set(0, 6.5, -6.5);
    backWall.receiveShadow = true;
    this.scene.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(24, 16), wallMat);
    leftWall.position.set(-10, 6.5, 0);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.receiveShadow = true;
    this.scene.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(24, 16), wallMat);
    rightWall.position.set(10, 6.5, 0);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.receiveShadow = true;
    this.scene.add(rightWall);

    const teakMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.6 });
    const backCornice = new THREE.Mesh(new THREE.BoxGeometry(36, 0.45, 0.35), teakMat);
    backCornice.position.set(0, 8.2, -6.35);
    this.scene.add(backCornice);

    // 3. Festive Indian Toran (Garland) draped with mango leaves & marigold pompoms
    const toranGroup = new THREE.Group();
    toranGroup.position.set(0, 6.35, -6.36);

    const toranString = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 7.8, 8), new THREE.MeshBasicMaterial({ color: 0xd97706 }));
    toranString.rotation.z = Math.PI / 2;
    toranGroup.add(toranString);

    for (let i = -14; i <= 14; i++) {
      const x = i * 0.26;
      const sag = Math.sin((i / 14) * Math.PI) * -0.15;
      const flowerColor = Math.abs(i) % 2 === 0 ? 0xf97316 : 0xfacc15;
      const flower = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), new THREE.MeshStandardMaterial({ color: flowerColor, roughness: 0.7 }));
      flower.position.set(x, sag - 0.05, 0.04);
      toranGroup.add(flower);

      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.22, 6), new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 }));
      leaf.rotation.x = Math.PI;
      leaf.position.set(x + 0.05, sag - 0.16, 0.03);
      toranGroup.add(leaf);
    }
    this.scene.add(toranGroup);

    // 4. Carved Wooden Jharokha Window with Morning Garden View & Sunbeam
    const windowGroup = new THREE.Group();
    windowGroup.position.set(0, 4.3, -6.45);

    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 512;
    skyCanvas.height = 384;
    const sctx = skyCanvas.getContext('2d');
    const skyGrad = sctx.createLinearGradient(0, 0, 0, 384);
    skyGrad.addColorStop(0, '#60a5fa');
    skyGrad.addColorStop(0.5, '#bae6fd');
    skyGrad.addColorStop(0.85, '#fef08a');
    skyGrad.addColorStop(1, '#fed7aa');
    sctx.fillStyle = skyGrad;
    sctx.fillRect(0, 0, 512, 384);

    sctx.fillStyle = '#86efac';
    sctx.beginPath();
    sctx.arc(140, 420, 220, 0, Math.PI * 2);
    sctx.arc(380, 440, 240, 0, Math.PI * 2);
    sctx.fill();

    sctx.fillStyle = '#15803d';
    for (let t = 0; t < 12; t++) {
      const tx = 60 + Math.random() * 400;
      const ty = 180 + Math.random() * 120;
      const tr = 35 + Math.random() * 45;
      sctx.beginPath();
      sctx.arc(tx, ty, tr, 0, Math.PI * 2);
      sctx.fill();
    }
    sctx.fillStyle = '#16a34a';
    for (let t = 0; t < 8; t++) {
      const tx = 80 + Math.random() * 360;
      const ty = 170 + Math.random() * 100;
      const tr = 25 + Math.random() * 35;
      sctx.beginPath();
      sctx.arc(tx, ty, tr, 0, Math.PI * 2);
      sctx.fill();
    }

    const outdoorTex = new THREE.CanvasTexture(skyCanvas);
    const outdoorBackdrop = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 3.6), new THREE.MeshBasicMaterial({ map: outdoorTex }));
    outdoorBackdrop.position.z = -0.06;
    windowGroup.add(outdoorBackdrop);

    const jharokhaFrame = new THREE.Mesh(new THREE.BoxGeometry(5.4, 3.8, 0.28), teakMat);
    windowGroup.add(jharokhaFrame);

    const jaliCanvas = document.createElement('canvas');
    jaliCanvas.width = 256;
    jaliCanvas.height = 64;
    const jctx = jaliCanvas.getContext('2d');
    jctx.fillStyle = '#451a03';
    jctx.fillRect(0, 0, 256, 64);
    jctx.fillStyle = '#fef3c7';
    for (let x = 16; x < 256; x += 24) {
      for (let y = 16; y < 64; y += 24) {
        jctx.beginPath();
        jctx.arc(x, y, 6, 0, Math.PI * 2);
        jctx.fill();
      }
    }
    const jaliTex = new THREE.CanvasTexture(jaliCanvas);
    const jaliMesh = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 0.75), new THREE.MeshStandardMaterial({ map: jaliTex, roughness: 0.7 }));
    jaliMesh.position.set(0, 1.35, 0.12);
    windowGroup.add(jaliMesh);

    const sill = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.2, 0.45), teakMat);
    sill.position.set(0, -1.9, 0.18);
    windowGroup.add(sill);

    // Soft golden volumetric Godray sunbeam angled towards the table
    const godrayGeo = new THREE.CylinderGeometry(0.9, 2.6, 6.5, 16, 1, true);
    const godrayMat = new THREE.MeshBasicMaterial({
      color: 0xfef08a,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const godray = new THREE.Mesh(godrayGeo, godrayMat);
    godray.position.set(0.6, -1.2, 2.4);
    godray.rotation.x = Math.PI / 4.5;
    godray.rotation.z = -0.15;
    windowGroup.add(godray);

    this.scene.add(windowGroup);

    // 5. Decorative Wall Thalis (Engraved Brass & Terracotta Plates)
    const brassPlateMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.88, roughness: 0.22 });
    const centerThali = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.05, 28), brassPlateMat);
    centerThali.rotation.x = Math.PI / 2;
    centerThali.position.set(0, 6.7, -6.4);
    centerThali.castShadow = true;
    this.scene.add(centerThali);

    const terraPlateMat = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.75 });
    const leftPlate = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.04, 24), terraPlateMat);
    leftPlate.rotation.x = Math.PI / 2;
    leftPlate.position.set(-3.8, 5.4, -6.4);
    this.scene.add(leftPlate);

    const rightPlate = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.04, 24), terraPlateMat);
    rightPlate.rotation.x = Math.PI / 2;
    rightPlate.position.set(3.8, 5.4, -6.4);
    this.scene.add(rightPlate);

    // 6. Upper Wooden Cabinets & Two Open Kitchen Shelves with Authentic Utensils
    const cabinetGroup = new THREE.Group();
    cabinetGroup.position.set(-6.2, 4.6, -6.1);
    const cabinetBox = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.2, 0.75), teakMat);
    cabinetBox.castShadow = true;
    cabinetGroup.add(cabinetBox);

    [-0.8, 0.8].forEach(kx => {
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 12), brassPlateMat);
      knob.position.set(kx, 0, 0.42);
      cabinetGroup.add(knob);
    });
    this.scene.add(cabinetGroup);

    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.65 });
    const shelfGeo = new THREE.BoxGeometry(4.8, 0.16, 0.85);

    const shelf1 = new THREE.Mesh(shelfGeo, shelfMat);
    shelf1.position.set(6.2, 4.2, -6.0);
    shelf1.castShadow = true;
    this.scene.add(shelf1);

    const shelf2 = new THREE.Mesh(shelfGeo, shelfMat);
    shelf2.position.set(6.2, 2.8, -6.0);
    shelf2.castShadow = true;
    this.scene.add(shelf2);

    // Shelf 1: Clay Matka + Copper Handi + 4 Glass Spice Jars
    const matkaGroup = new THREE.Group();
    const matkaBelly = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 16), new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.85 }));
    matkaBelly.position.y = 0.38;
    matkaBelly.castShadow = true;
    matkaGroup.add(matkaBelly);
    const matkaNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 0.18, 16), new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.85 }));
    matkaNeck.position.y = 0.72;
    matkaGroup.add(matkaNeck);
    const matkaLid = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.06, 16), new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.8 }));
    matkaLid.position.y = 0.84;
    matkaGroup.add(matkaLid);
    matkaGroup.position.set(4.6, 4.28, -5.9);
    this.scene.add(matkaGroup);

    const copperMat = new THREE.MeshStandardMaterial({ color: 0xca6028, metalness: 0.85, roughness: 0.3 });
    const handiBelly = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), copperMat);
    handiBelly.position.set(5.7, 4.58, -5.9);
    handiBelly.scale.set(1.0, 0.75, 1.0);
    handiBelly.castShadow = true;
    this.scene.add(handiBelly);

    const spiceColors = [0xeab308, 0xdc2626, 0x78350f, 0x16a34a];
    spiceColors.forEach((color, idx) => {
      const jarGroup = new THREE.Group();
      const spice = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.26, 12), new THREE.MeshStandardMaterial({ color, roughness: 0.8 }));
      spice.position.y = 0.13;
      jarGroup.add(spice);
      const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.06, 12), brassPlateMat);
      lid.position.y = 0.28;
      jarGroup.add(lid);
      jarGroup.position.set(6.8 + idx * 0.32, 4.28, -5.9);
      jarGroup.castShadow = true;
      this.scene.add(jarGroup);
    });

    // Shelf 2: Granite Mortar & Pestle (Khalbatta) + Stack of Steel Bowls + Diya Lamp
    const mortarGroup = new THREE.Group();
    const mortarMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.9 });
    const mortar = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.18, 0.25, 14), mortarMat);
    mortar.position.y = 0.13;
    mortarGroup.add(mortar);
    const pestle = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.38, 10), mortarMat);
    pestle.position.set(0.05, 0.22, 0.05);
    pestle.rotation.z = 0.35;
    mortarGroup.add(pestle);
    mortarGroup.position.set(4.7, 2.88, -5.9);
    mortarGroup.castShadow = true;
    this.scene.add(mortarGroup);

    const steelMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.95, roughness: 0.15 });
    for (let k = 0; k < 4; k++) {
      const katori = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.14, 0.09, 16, 1, true), steelMat);
      katori.position.set(5.8, 2.92 + k * 0.06, -5.9);
      katori.castShadow = true;
      this.scene.add(katori);
    }

    const diyaGroup = new THREE.Group();
    const diyaBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.08, 0.08, 14), brassPlateMat);
    diyaBowl.position.y = 0.04;
    diyaGroup.add(diyaBowl);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.12, 8), new THREE.MeshBasicMaterial({ color: 0xfbbf24 }));
    flame.position.set(0.12, 0.12, 0);
    diyaGroup.add(flame);
    diyaGroup.position.set(7.6, 2.88, -5.9);
    this.scene.add(diyaGroup);

    // 7. Sacred Potted Tulsi Plant (Holy Basil) in Vrindavan Terracotta Planter
    const tulsiGroup = new THREE.Group();
    tulsiGroup.position.set(-4.2, -0.15, -3.2);

    const planterMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8 });
    const planterBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.7, 0.65), planterMat);
    planterBody.position.y = 0.35;
    planterBody.castShadow = true;
    tulsiGroup.add(planterBody);

    const base = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.14, 0.78), planterMat);
    base.position.y = 0.07;
    tulsiGroup.add(base);

    const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 });
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.8 });

    const mainStem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.6, 8), stemMat);
    mainStem.position.y = 0.95;
    tulsiGroup.add(mainStem);

    for (let i = 0; i < 18; i++) {
      const leafSphere = new THREE.Mesh(new THREE.SphereGeometry(0.12 + Math.random() * 0.08, 8, 8), leafMat);
      const la = Math.random() * Math.PI * 2;
      const lr = 0.08 + Math.random() * 0.22;
      const ly = 0.85 + Math.random() * 0.45;
      leafSphere.position.set(Math.cos(la) * lr, ly, Math.sin(la) * lr);
      leafSphere.scale.set(1.2, 0.5, 0.8);
      tulsiGroup.add(leafSphere);
    }

    const manjariMat = new THREE.MeshStandardMaterial({ color: 0x65a30d, roughness: 0.7 });
    for (let m = 0; m < 4; m++) {
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 6), manjariMat);
      stalk.position.set((m - 1.5) * 0.08, 1.35, (Math.random() - 0.5) * 0.1);
      tulsiGroup.add(stalk);
    }
    this.scene.add(tulsiGroup);

    // 8. Dining Table & Center Chakla
    const tableTopGeo = new THREE.BoxGeometry(6.8, 0.24, 4.6);
    const woodTextureCanvas = document.createElement('canvas');
    woodTextureCanvas.width = 512;
    woodTextureCanvas.height = 512;
    const wtctx = woodTextureCanvas.getContext('2d');
    wtctx.fillStyle = '#6e3107';
    wtctx.fillRect(0, 0, 512, 512);
    wtctx.fillStyle = 'rgba(40, 16, 4, 0.18)';
    for (let i = 0; i < 48; i++) {
      wtctx.fillRect(0, i * 11, 512, 4 + Math.random() * 5);
    }
    const woodTex = new THREE.CanvasTexture(woodTextureCanvas);
    const tableMat = new THREE.MeshStandardMaterial({
      map: woodTex,
      roughness: 0.52,
      metalness: 0.06
    });
    this.table = new THREE.Mesh(tableTopGeo, tableMat);
    this.table.position.set(0, -0.12, 0);
    this.table.receiveShadow = true;
    this.scene.add(this.table);

    // Turned Table Legs with brass foot caps
    const legGeo = new THREE.CylinderGeometry(0.12, 0.09, 1.2, 16);
    const legPositions = [
      [-3.1, -0.65, -2.0],
      [3.1, -0.65, -2.0],
      [-3.1, -0.65, 2.0],
      [3.1, -0.65, 2.0]
    ];
    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, tableMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      this.scene.add(leg);

      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.1, 16), brassPlateMat);
      cap.position.set(x, -1.15, z);
      this.scene.add(cap);
    });

    // Center Cutting Board (Chakla)
    this.cuttingBoard = createCuttingBoard();
    this.cuttingBoard.position.set(0, 0.02, 0);
    this.scene.add(this.cuttingBoard);

    // Table Props: Belan (wooden rolling pin)
    const pinGroup = new THREE.Group();
    const pinBody = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 1.25, 16), new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.45 }));
    pinBody.rotation.z = Math.PI / 2;
    pinGroup.add(pinBody);
    pinGroup.position.set(2.4, 0.08, -1.4);
    pinGroup.rotation.y = -0.45;
    pinGroup.castShadow = true;
    this.scene.add(pinGroup);

    // Table Props: Traditional Brass Masala Dabba
    const masalaDabba = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.22, 28), brassPlateMat);
    masalaDabba.position.set(-2.5, 0.13, -1.5);
    masalaDabba.castShadow = true;
    this.scene.add(masalaDabba);

    // Table Props: Traditional Brass Water Lota / Jug & Tumbler
    const jugGroup = new THREE.Group();
    const jugBelly = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), brassPlateMat);
    jugBelly.position.y = 0.24;
    jugGroup.add(jugBelly);
    const jugNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.22, 16), brassPlateMat);
    jugNeck.position.y = 0.48;
    jugGroup.add(jugNeck);
    jugGroup.position.set(2.6, 0.01, 1.4);
    jugGroup.castShadow = true;
    this.scene.add(jugGroup);

    const tumbler = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.075, 0.24, 16), brassPlateMat);
    tumbler.position.set(2.2, 0.12, 1.3);
    tumbler.castShadow = true;
    this.scene.add(tumbler);
  }

  initEquipment() {
    // 1. Butter Knife (Visual cutting equipment)
    this.knife = createButterKnife();
    this.knife.position.set(0.8, 0.65, 0);
    this.knife.rotation.z = Math.PI / 4;
    this.knife.visible = true;
    this.scene.add(this.knife);

    // 2. Serving Spatula (Visual piece moving equipment)
    this.spatula = createServingSpatula();
    this.spatula.position.set(-2.2, 0.08, 0.5);
    this.spatula.rotation.y = Math.PI / 6;
    this.spatula.visible = true;
    this.scene.add(this.spatula);

    // 3. Measuring Tool / Protractor
    this.measuringTool = createAngleMeasuringTool();
    this.measuringTool.position.set(0, 0.15, 0);
    this.measuringTool.visible = false;
    this.scene.add(this.measuringTool);

    // 4. Functional Balance Scale
    this.balanceScale = createBalanceScale();
    this.balanceScale.position.set(2.2, 0.04, -0.4);
    this.balanceScale.visible = true;
    this.scene.add(this.balanceScale);

    // 5. Fraction Tiles Rack
    this.fractionTilesRack = createFractionTilesRack();
    this.fractionTilesRack.position.set(0, 0.04, 1.85);
    this.fractionTilesRack.visible = true;
    this.scene.add(this.fractionTilesRack);
  }

  initCharacters() {
    this.characterSystem = new CharacterSystem(this.scene);
    this.voice = new VoiceSystem(this.characterSystem);
  }

  showValidationError(message, icon = "⚠️") {
    this.ui.sound.playError();
    this.ui.showToast(message, icon);
    this.characterSystem.confuseAll();
    if (this.voice) {
      this.voice.speakIncorrectShare(message);
    }
  }

  initUI() {
    this.ui = new UIManager(this);
    this.loadLevel(this.currentLevelIndex);
  }

  getCurrentLevel() {
    return this.levels[this.currentLevelIndex];
  }

  setEquipment(toolName) {
    this.currentEquipment = toolName;
    if (toolName === 'knife') {
      this.knife.visible = true;
      this.measuringTool.visible = false;
      this.setInteractionMode('cut');
      this.ui.showToast("Butter Knife selected. Choose slice count to cut!", "🔪");
    } else if (toolName === 'spatula') {
      this.measuringTool.visible = false;
      this.setInteractionMode('move');
      this.ui.showToast("Serving Spatula selected. Pick & place slices to plates!", "🥄");
    } else if (toolName === 'measure') {
      this.measuringTool.visible = true;
      this.ui.showToast("Measuring Tool active. Click any piece to inspect degrees & fraction!", "📏");
    } else if (toolName === 'scale') {
      this.measuringTool.visible = false;
      this.updateBalanceScaleWeights();
      this.ui.showToast("Balance Scale active! Compare left and right portions.", "⚖️");
    } else if (toolName === 'tiles') {
      this.measuringTool.visible = false;
      this.ui.showToast("Fraction Tiles Rack active! Select tiles to explore fractions.", "🧩");
    }
  }

  setInteractionMode(mode) {
    this.interactionMode = mode;
    this.controls.enabled = true;
  }

  setDifficulty(diff) {
    this.difficulty = diff;
  }

  setPreviewSliceCount(count) {
    this.previewSliceCount = count;
    this.renderCuttingGuides();
  }

  startLevel(index) {
    this.gameMode = 'campaign';
    this.isMenuOpen = false;
    this.currentLevelIndex = index;
    this.loadLevel(index);
    this.ui.setGameMode('CAMPAIGN');
    if (this.voice) {
      this.voice.speakLevelIntro(this.getCurrentLevel());
    }
  }

  nextLevel() {
    if (this.currentLevelIndex < this.levels.length - 1) {
      this.currentLevelIndex++;
      this.loadLevel(this.currentLevelIndex);
    } else {
      this.awardAchievement('roti_master');
      this.ui.showToast("Congratulations! You completed all 10 Fraction Levels!", "🏆");
      this.ui.showMainMenu();
    }
  }

  resetCurrentLevel() {
    this.clearAnimationTimeouts();
    this.isAutoDistributing = false;
    this.distributionCompleted = false;
    this.levelSolved = false;
    this.ui.setControlsDisabled(false);
    this.ui.hideToast();
    if (this.spatula) {
      this.spatula.position.set(-2.2, 0.08, 0.5);
      this.spatula.rotation.set(0, Math.PI / 6, 0);
    }
    this.loadLevel(this.currentLevelIndex);
    this.ui.showToast("Level reset! Ready to cut fresh roti.", "↺");
  }

  loadLevel(index) {
    const levelData = this.levels[index];
    this.clearAnimationTimeouts();
    this.isAutoDistributing = false;
    this.distributionCompleted = false;
    this.levelSolved = false;
    this.ui.setControlsDisabled(false);
    this.ui.hideToast();

    this.clearFoodScene();

    this.characterSystem.resetAll();
    this.resetCamera();

    const activeFriends = levelData.friends && levelData.friends.length ? levelData.friends : ['Chintu', 'Meera'];
    this.setupPlates(activeFriends);
    this.characterSystem.setActiveCharacters(activeFriends);

    if (levelData.foodType === 'laddoo') {
      this.setupLaddooFood(levelData);
    } else if (levelData.foodType === 'dual_roti') {
      this.setupDualRotiFood(levelData);
    } else {
      this.setupStandardRotiFood(levelData);
    }

    const stars = this.progress.stars[levelData.id] || 0;
    this.ui.updateHUD(levelData, this.score, stars, this.coins);

    // Update Balance Scale for compare levels
    if (levelData.id === 6) {
      this.balanceScale.setWeights(levelData.leftVal, levelData.rightVal);
    } else if (levelData.id === 7) {
      this.balanceScale.setWeights(levelData.leftVal, levelData.rightVal); // 1/2 vs 2/4 = balanced!
      this.progress.stats.equivalentMastered = true;
      this.checkAchievements();
    } else {
      this.balanceScale.setWeights(0, 0);
    }

    this.renderCuttingGuides();
    this.updatePlateLabels();

    if (!this.isMenuOpen && this.voice) {
      this.voice.speakLevelIntro(levelData);
    }
  }

  clearFoodScene() {
    this.rotiPieces.forEach(p => {
      this.foodItemsGroup.remove(p);
      if (p.geometry) p.geometry.dispose();
      if (p.material) {
        if (Array.isArray(p.material)) p.material.forEach(m => m.dispose());
        else p.material.dispose();
      }
    });
    this.rotiPieces = [];

    this.plates.forEach(pl => {
      this.scene.remove(pl);
      pl.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
          else child.material.dispose();
        }
      });
    });
    this.plates = [];

    this.laddoos.forEach(l => {
      this.foodItemsGroup.remove(l);
      if (l.geometry) l.geometry.dispose();
      if (l.material) {
        if (Array.isArray(l.material)) l.material.forEach(m => m.dispose());
        else l.material.dispose();
      }
    });
    this.laddoos = [];

    this.clearCuttingGuides();
    this.ui.hideFractionCallout();
  }

  clearRotiPiecesOnly() {
    this.rotiPieces.forEach(p => {
      this.foodItemsGroup.remove(p);
      if (p.geometry) p.geometry.dispose();
      if (p.material) {
        if (Array.isArray(p.material)) p.material.forEach(m => m.dispose());
        else p.material.dispose();
      }
    });
    this.rotiPieces = [];

    this.laddoos.forEach(l => {
      this.foodItemsGroup.remove(l);
      if (l.geometry) l.geometry.dispose();
      if (l.material) {
        if (Array.isArray(l.material)) l.material.forEach(m => m.dispose());
        else l.material.dispose();
      }
    });
    this.laddoos = [];

    this.plates.forEach(pl => {
      if (pl.labelSprite) pl.labelSprite.updateFraction('0');
    });

    this.clearCuttingGuides();
    this.ui.hideFractionCallout();
  }

  setupPlates(friendsList) {
    const count = friendsList.length;
    const plateCoords = {
      'Chintu': new THREE.Vector3(-1.8, 0.03, 0.65),
      'Meera': new THREE.Vector3(1.8, 0.03, 0.65),
      'Golu': count <= 3 ? new THREE.Vector3(0, 0.03, -1.25) : new THREE.Vector3(-1.1, 0.03, -1.25),
      'Priya': new THREE.Vector3(1.1, 0.03, -1.25),
      'Kabir': new THREE.Vector3(0, 0.03, -1.25)
    };

    if (count === 1) {
      plateCoords[friendsList[0]] = new THREE.Vector3(0, 0.03, 0.85);
    }

    friendsList.forEach(name => {
      const pos = plateCoords[name] || new THREE.Vector3(0, 0.03, 0.85);
      const plate = createPlate(`${name}'s Plate`);
      plate.position.copy(pos);
      plate.userData.friendName = name;

      // Attach dynamic 3D fraction label badge
      const labelBadge = createPlateLabelTag(name, '0');
      labelBadge.position.set(0, 0.48, -0.65);
      plate.add(labelBadge);
      plate.labelSprite = labelBadge;

      this.scene.add(plate);
      this.plates.push(plate);
    });
  }

  updatePlateLabels() {
    this.plates.forEach(plate => {
      const assigned = this.rotiPieces.filter(p => p.userData.plateAssigned === plate);
      const assignedLaddoos = this.laddoos.filter(l => l.userData.plateAssigned === plate);

      if (assignedLaddoos.length > 0) {
        if (plate.labelSprite) plate.labelSprite.updateFraction(`${assignedLaddoos.length} Items`);
      } else if (assigned.length === 0) {
        if (plate.labelSprite) plate.labelSprite.updateFraction('0');
      } else {
        const sum = assigned.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);
        let fractionStr = '';
        if (Math.abs(sum - 0.5) < 0.01) fractionStr = '1/2';
        else if (Math.abs(sum - 0.25) < 0.01) fractionStr = '1/4';
        else if (Math.abs(sum - 0.75) < 0.01) fractionStr = '3/4';
        else if (Math.abs(sum - 1 / 3) < 0.01) fractionStr = '1/3';
        else if (Math.abs(sum - 2 / 3) < 0.01) fractionStr = '2/3';
        else if (Math.abs(sum - 1) < 0.01) fractionStr = '1 Whole';
        else fractionStr = `${assigned.length}/${assigned[0].userData.denominator || 4}`;

        if (plate.labelSprite) plate.labelSprite.updateFraction(fractionStr);
      }
    });
  }

  getFoodTexture() {
    if (this.creativeFoodType === 'pizza') return this.pizzaTexture;
    if (this.creativeFoodType === 'pancake') return this.pancakeTexture;
    return this.rotiTexture;
  }

  setupStandardRotiFood(levelData) {
    const isLevel4 = levelData.type === 'identify';
    const numInitialPieces = isLevel4 ? levelData.initialPieces : 1;
    const tex = this.getFoodTexture();

    if (numInitialPieces === 1) {
      const wholeRoti = createFoodSectorMesh(this.creativeFoodType, tex, {
        radius: 1.35,
        thickness: 0.055,
        startAngle: 0,
        angleSpan: Math.PI * 2,
        numerator: 1,
        denominator: 1,
        id: 0
      });
      wholeRoti.position.set(0, 0.12, 0);
      wholeRoti.userData.originalPosition.copy(wholeRoti.position);
      this.foodItemsGroup.add(wholeRoti);
      this.rotiPieces.push(wholeRoti);
    } else {
      const sectors = generateEqualSectors(numInitialPieces);
      sectors.forEach((sec, idx) => {
        const piece = createFoodSectorMesh(this.creativeFoodType, tex, {
          radius: 1.35,
          thickness: 0.055,
          startAngle: sec.startAngle,
          angleSpan: sec.angle,
          numerator: sec.fractionNumerator,
          denominator: sec.fractionDenominator,
          id: idx
        });

        const pushDist = 0.05;
        const pushX = Math.cos(sec.centerAngle) * pushDist;
        const pushZ = Math.sin(sec.centerAngle) * pushDist;
        piece.position.set(pushX, 0.12, pushZ);
        piece.userData.originalPosition.copy(piece.position);

        if (idx === (levelData.highlightIndex || 0)) {
          piece.material.color.setHex(0xffe066);
          piece.material.emissive = new THREE.Color(0x553300);
        }

        this.foodItemsGroup.add(piece);
        this.rotiPieces.push(piece);
      });
    }
  }

  setupDualRotiFood(levelData) {
    const leftSectors = generateEqualSectors(levelData.leftPieces);
    leftSectors.forEach((sec, idx) => {
      const piece = createRotiSectorMesh(this.rotiTexture, {
        radius: 1.08,
        thickness: 0.05,
        startAngle: sec.startAngle,
        angleSpan: sec.angle,
        numerator: sec.fractionNumerator,
        denominator: sec.fractionDenominator,
        id: `left-${idx}`
      });
      piece.position.set(-1.45, 0.12, 0);
      if (idx === 0) {
        piece.material.color.setHex(0xffea75);
        piece.material.emissive = new THREE.Color(0x443300);
      }
      this.foodItemsGroup.add(piece);
      this.rotiPieces.push(piece);
    });

    const rightSectors = generateEqualSectors(levelData.rightPieces);
    rightSectors.forEach((sec, idx) => {
      const piece = createRotiSectorMesh(this.rotiTexture, {
        radius: 1.08,
        thickness: 0.05,
        startAngle: sec.startAngle,
        angleSpan: sec.angle,
        numerator: sec.fractionNumerator,
        denominator: sec.fractionDenominator,
        id: `right-${idx}`
      });
      piece.position.set(1.45, 0.12, 0);

      const shouldHighlight = levelData.id === 7 ? idx < 2 : idx === 0;
      if (shouldHighlight) {
        piece.material.color.setHex(0x93c5fd);
        piece.material.emissive = new THREE.Color(0x002244);
      }
      this.foodItemsGroup.add(piece);
      this.rotiPieces.push(piece);
    });
  }

  setupLaddooFood(levelData) {
    const total = levelData.totalItems || 6;
    const radius = 0.65;
    for (let i = 0; i < total; i++) {
      const laddoo = createLaddoo(0.28, this.laddooTexture);
      const angle = (i / total) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      laddoo.position.set(x, 0.28, z);
      laddoo.userData.id = i;
      laddoo.userData.originalPosition = laddoo.position.clone();
      laddoo.userData.plateAssigned = null;
      laddoo.userData.fractionValue = 1 / total;
      this.foodItemsGroup.add(laddoo);
      this.laddoos.push(laddoo);
    }
  }

  clearCuttingGuides() {
    this.cuttingGuides.forEach(g => this.scene.remove(g));
    this.cuttingGuides = [];
    if (this.interactiveCutLine) this.interactiveCutLine.visible = false;
    if (this.bladePreview) this.bladePreview.visible = false;
  }

  renderCuttingGuides() {
    this.clearCuttingGuides();
    const lvl = this.getCurrentLevel();
    if (lvl.type === 'identify' || lvl.type === 'compare' || lvl.foodType === 'laddoo') return;
    if (this.rotiPieces.length > 1) return;

    const count = this.previewSliceCount || 2;
    const anglePerSlice = (2 * Math.PI) / count;

    for (let i = 0; i < count; i++) {
      const angle = i * anglePerSlice;
      const points = [];
      points.push(new THREE.Vector3(0, 0.16, 0));
      points.push(new THREE.Vector3(Math.cos(angle) * 1.55, 0.16, Math.sin(angle) * 1.55));

      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineDashedMaterial({
        color: 0xef4444,
        dashSize: 0.1,
        gapSize: 0.05,
        linewidth: 3
      });
      const line = new THREE.Line(lineGeo, lineMat);
      line.computeLineDistances();
      this.scene.add(line);
      this.cuttingGuides.push(line);
    }
  }

  clearAnimationTimeouts() {
    if (this.activeAnimationTimeouts) {
      this.activeAnimationTimeouts.forEach(t => clearTimeout(t));
    }
    this.activeAnimationTimeouts = [];
  }

  executeSlicing(requestedPieces = null) {
    if (this.isAutoDistributing) return;

    const lvl = this.getCurrentLevel();
    if (lvl.type === 'identify' || lvl.type === 'compare') {
      this.ui.showToast("Slicing is not needed for this challenge.");
      return;
    }

    if (lvl.foodType === 'laddoo') {
      this.autoDistributeLaddoos();
      return;
    }

    if (this.rotiPieces.length > 1) {
      this.ui.showToast("Roti is already cut! Click ↺ Reset to start fresh.", "ℹ️");
      return;
    }

    const count = requestedPieces || this.previewSliceCount || 2;
    this.isAutoDistributing = true;
    this.distributionCompleted = false;
    this.levelSolved = false;
    this.ui.setControlsDisabled(true);

    this.clearRotiPiecesOnly();
    if (this.plates.length === 0) {
      this.setupPlates(lvl.friends || []);
    }

    const tex = this.getFoodTexture();
    const sectors = generateEqualSectors(count);

    // 1. Butter Knife chops down through the roti smoothly
    this.animateKnifeCut(() => {
      sectors.forEach((sec, idx) => {
        const piece = createFoodSectorMesh(this.creativeFoodType, tex, {
          radius: 1.35,
          thickness: 0.055,
          startAngle: sec.startAngle,
          angleSpan: sec.angle,
          numerator: sec.fractionNumerator,
          denominator: sec.fractionDenominator,
          id: idx
        });

        // Separate pieces outward slightly to show visible cut
        const sepDist = 0.12;
        const sepX = Math.cos(sec.centerAngle) * sepDist;
        const sepZ = Math.sin(sec.centerAngle) * sepDist;

        piece.position.set(sepX, 0.12, sepZ);
        piece.userData.originalPosition.copy(piece.position);
        piece.userData.centerAngle = sec.centerAngle;
        piece.userData.plateAssigned = null;

        this.foodItemsGroup.add(piece);
        this.rotiPieces.push(piece);
      });

      this.ui.sound.playSlice();
      this.ui.showToast(`Cut into ${count} equal slices (1/${count} each)! Distributing to plates...`, "⚡");
      this.ui.showFractionCallout(1, count, `1/${count} Portion`);
      this.updatePlateLabels();

      // 2. Automatically distribute pieces one by one to the correct plates!
      this.autoDistributeFood(count);
    });
  }

  animateKnifeCut(onComplete) {
    if (!this.knife) {
      if (onComplete) onComplete();
      return;
    }
    const initialY = 0.65;
    const cutY = 0.14;
    let progress = 0;

    const cutInterval = setInterval(() => {
      progress += 0.14;
      if (progress < 0.5) {
        this.knife.position.y = initialY - (initialY - cutY) * (progress * 2);
      } else if (progress <= 1.0) {
        this.knife.position.y = cutY + (initialY - cutY) * ((progress - 0.5) * 2);
      } else {
        clearInterval(cutInterval);
        this.knife.position.y = initialY;
        if (onComplete) onComplete();
      }
    }, 25);
  }

  determineDistributionPlan(count) {
    const lvl = this.getCurrentLevel();
    const assignments = [];

    if (this.gameMode === 'shop') {
      const order = ROTI_SHOP_ORDERS[this.shopOrderIndex];
      const customerPlate = this.plates[0];
      if (customerPlate) {
        const piecesToGive = Math.min(Math.round(order.requestedFractionVal * count), this.rotiPieces.length);
        for (let i = 0; i < piecesToGive; i++) {
          assignments.push({ piece: this.rotiPieces[i], targetPlate: customerPlate });
        }
      }
      return assignments;
    }

    if (lvl.id === 1) {
      // Level 1: Divide into 2 equal pieces. 1 to Chintu, 1 to Meera.
      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      if (this.rotiPieces[0] && chintuPlate) assignments.push({ piece: this.rotiPieces[0], targetPlate: chintuPlate });
      if (this.rotiPieces[1] && meeraPlate) assignments.push({ piece: this.rotiPieces[1], targetPlate: meeraPlate });

    } else if (lvl.id === 2) {
      // Level 2: Divide into 3 equal pieces. 1 to Chintu, 1 to Meera, 1 to Golu.
      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');
      if (this.rotiPieces[0] && chintuPlate) assignments.push({ piece: this.rotiPieces[0], targetPlate: chintuPlate });
      if (this.rotiPieces[1] && meeraPlate) assignments.push({ piece: this.rotiPieces[1], targetPlate: meeraPlate });
      if (this.rotiPieces[2] && goluPlate) assignments.push({ piece: this.rotiPieces[2], targetPlate: goluPlate });

    } else if (lvl.id === 3) {
      // Level 3: Four Quarters. 1 quarter to Chintu, 1 to Meera, 1 to Golu (1 remains on board).
      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');
      if (this.rotiPieces[0] && chintuPlate) assignments.push({ piece: this.rotiPieces[0], targetPlate: chintuPlate });
      if (this.rotiPieces[1] && meeraPlate) assignments.push({ piece: this.rotiPieces[1], targetPlate: meeraPlate });
      if (this.rotiPieces[2] && goluPlate) assignments.push({ piece: this.rotiPieces[2], targetPlate: goluPlate });

    } else if (lvl.id === 5) {
      // Level 5: Three-Quarters (3/4). Automatically move 3 pieces to Golu's plate. 1 remains on board.
      const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');
      if (goluPlate) {
        const countToGive = Math.min(3, this.rotiPieces.length);
        for (let i = 0; i < countToGive; i++) {
          assignments.push({ piece: this.rotiPieces[i], targetPlate: goluPlate });
        }
      }

    } else if (lvl.id === 8) {
      // Level 8: Adding Fractions. Move two 1/4 pieces to Meera's plate (1/4 + 1/4 = 2/4).
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      if (meeraPlate) {
        const countToGive = Math.min(2, this.rotiPieces.length);
        for (let i = 0; i < countToGive; i++) {
          assignments.push({ piece: this.rotiPieces[i], targetPlate: meeraPlate });
        }
      }

    } else if (lvl.id === 9 && lvl.type === 'shop_level') {
      // Level 9: Roti Shop. Customer requests 1/2 of a roti.
      const customerPlate = this.plates[0];
      if (customerPlate && this.rotiPieces[0]) {
        assignments.push({ piece: this.rotiPieces[0], targetPlate: customerPlate });
      }

    } else if (lvl.id === 10) {
      // Level 10: Fraction Master. 6 pieces total: 2 to Chintu, 2 to Meera, 2 to Golu.
      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');
      if (chintuPlate) {
        if (this.rotiPieces[0]) assignments.push({ piece: this.rotiPieces[0], targetPlate: chintuPlate });
        if (this.rotiPieces[1]) assignments.push({ piece: this.rotiPieces[1], targetPlate: chintuPlate });
      }
      if (meeraPlate) {
        if (this.rotiPieces[2]) assignments.push({ piece: this.rotiPieces[2], targetPlate: meeraPlate });
        if (this.rotiPieces[3]) assignments.push({ piece: this.rotiPieces[3], targetPlate: meeraPlate });
      }
      if (goluPlate) {
        if (this.rotiPieces[4]) assignments.push({ piece: this.rotiPieces[4], targetPlate: goluPlate });
        if (this.rotiPieces[5]) assignments.push({ piece: this.rotiPieces[5], targetPlate: goluPlate });
      }

    } else {
      // Generic fair sharing across all available plates
      let pIdx = 0;
      for (let i = 0; i < this.rotiPieces.length && this.plates.length > 0; i++) {
        assignments.push({
          piece: this.rotiPieces[i],
          targetPlate: this.plates[pIdx % this.plates.length]
        });
        pIdx++;
      }
    }

    return assignments;
  }

  animatePieceToPlate(piece, targetPlate, indexOnPlate, onComplete) {
    const startPos = piece.position.clone();
    const startScale = piece.scale.clone();
    const targetScale = new THREE.Vector3(0.58, 0.58, 0.58); // Scale to fit comfortably within plate radius 0.98

    // Compute neat arrangement inside plate
    // Plates have radius 0.98, rim height 0.045
    let targetOffset = new THREE.Vector3(0, 0, 0);
    let targetRotY = piece.rotation.y;

    if (indexOnPlate === 0) {
      targetOffset.set(0, 0, 0);
    } else if (indexOnPlate === 1) {
      targetOffset.set(0.18, 0, -0.10);
      targetRotY += 0.35;
    } else if (indexOnPlate === 2) {
      targetOffset.set(-0.16, 0, 0.12);
      targetRotY -= 0.35;
    } else {
      const angle = indexOnPlate * 1.05;
      targetOffset.set(Math.cos(angle) * 0.22, 0, Math.sin(angle) * 0.22);
      targetRotY += (indexOnPlate * 0.4);
    }

    // Plate position is at y = 0.03, plate rim is 0.045, piece resting surface at y = 0.065
    const targetPos = new THREE.Vector3(
      targetPlate.position.x + targetOffset.x,
      0.065,
      targetPlate.position.z + targetOffset.z
    );

    const duration = 650;
    const startTime = performance.now();

    if (this.spatula) {
      this.spatula.visible = true;
      this.spatula.position.set(startPos.x, startPos.y - 0.08, startPos.z);
    }

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1.0, elapsed / duration);
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      piece.position.x = startPos.x + (targetPos.x - startPos.x) * ease;
      piece.position.z = startPos.z + (targetPos.z - startPos.z) * ease;
      piece.position.y = startPos.y + (targetPos.y - startPos.y) * ease + Math.sin(progress * Math.PI) * 0.45;
      piece.rotation.x = Math.sin(progress * Math.PI) * 0.2;
      piece.rotation.y = piece.rotation.y + (targetRotY - piece.rotation.y) * 0.05;

      // Smoothly scale down to plate size during flight
      piece.scale.lerpVectors(startScale, targetScale, ease);

      if (this.spatula) {
        this.spatula.position.set(piece.position.x, piece.position.y - 0.08, piece.position.z);
        this.spatula.rotation.y = Math.atan2(targetPos.x - startPos.x, targetPos.z - startPos.z);
      }

      if (progress < 1.0) {
        requestAnimationFrame(step);
      } else {
        piece.position.copy(targetPos);
        piece.scale.copy(targetScale);
        piece.rotation.set(0, targetRotY, 0);
        piece.userData.plateAssigned = targetPlate;
        this.ui.sound.playDropPiece();
        this.ui.sound.playPlateClink();
        this.updatePlateLabels();

        const friendKey = targetPlate.userData.friendName ? targetPlate.userData.friendName.toLowerCase() : null;
        if (friendKey && this.characterSystem) {
          this.characterSystem.setEmotion(friendKey, 'reaching');
          setTimeout(() => this.characterSystem.setEmotion(friendKey, 'eating'), 600);
        }

        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(step);
  }

  autoDistributeFood(count) {
    const assignments = this.determineDistributionPlan(count);
    if (assignments.length === 0) {
      this.isAutoDistributing = false;
      this.distributionCompleted = true;
      this.ui.setControlsDisabled(false);
      this.ui.showToast("Cut complete! Click '✓ Check Sharing' to verify.", "✨");
      return;
    }

    let currentIdx = 0;
    const plateCounts = new Map();

    const processNext = () => {
      if (currentIdx >= assignments.length) {
        // Complete! Settle down
        this.isAutoDistributing = false;
        this.distributionCompleted = true;
        this.ui.setControlsDisabled(false);
        this.updateBalanceScaleWeights();

        if (this.spatula) {
          this.spatula.position.set(-2.2, 0.08, 0.5);
          this.spatula.rotation.set(0, Math.PI / 6, 0);
        }

        this.ui.showToast("Roti pieces shared! Click '✓ Check Sharing' to verify.", "✨");
        return;
      }

      const item = assignments[currentIdx];
      const pId = item.targetPlate.id;
      const onPlateCount = plateCounts.get(pId) || 0;
      plateCounts.set(pId, onPlateCount + 1);

      this.animatePieceToPlate(item.piece, item.targetPlate, onPlateCount, () => {
        currentIdx++;
        const timeout = setTimeout(processNext, 250);
        this.activeAnimationTimeouts.push(timeout);
      });
    };

    const initialTimeout = setTimeout(processNext, 350);
    this.activeAnimationTimeouts.push(initialTimeout);
  }

  autoDistributeLaddoos() {
    if (this.isAutoDistributing) return;
    this.isAutoDistributing = true;
    this.distributionCompleted = false;
    this.levelSolved = false;
    this.ui.setControlsDisabled(true);

    const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
    const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
    const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');

    const assignments = [
      { piece: this.laddoos[0], targetPlate: chintuPlate, idx: 0 },
      { piece: this.laddoos[1], targetPlate: chintuPlate, idx: 1 },
      { piece: this.laddoos[2], targetPlate: meeraPlate, idx: 0 },
      { piece: this.laddoos[3], targetPlate: meeraPlate, idx: 1 },
      { piece: this.laddoos[4], targetPlate: goluPlate, idx: 0 },
      { piece: this.laddoos[5], targetPlate: goluPlate, idx: 1 }
    ];

    let i = 0;
    const nextLaddoo = () => {
      if (i >= assignments.length) {
        this.isAutoDistributing = false;
        this.distributionCompleted = true;
        this.ui.setControlsDisabled(false);
        this.ui.showToast("Laddoos shared! Click '✓ Check Sharing' to verify.", "✨");
        return;
      }
      const a = assignments[i];
      this.animatePieceToPlate(a.piece, a.targetPlate, a.idx, () => {
        i++;
        const timeout = setTimeout(nextLaddoo, 220);
        this.activeAnimationTimeouts.push(timeout);
      });
    };
    nextLaddoo();
  }

  updateBalanceScaleWeights() {
    if (!this.balanceScale) return;
    const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
    const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');

    let leftW = 0;
    let rightW = 0;

    if (chintuPlate) {
      leftW = this.rotiPieces.filter(p => p.userData.plateAssigned === chintuPlate).reduce((acc, p) => acc + p.userData.fractionValue, 0);
    }
    if (meeraPlate) {
      rightW = this.rotiPieces.filter(p => p.userData.plateAssigned === meeraPlate).reduce((acc, p) => acc + p.userData.fractionValue, 0);
    }

    this.balanceScale.setWeights(leftW, rightW);
  }

  validateCurrentLevelSolution() {
    if (this.isAutoDistributing) {
      this.ui.showToast("Please wait! Food is still being distributed to the plates.", "⏳");
      return;
    }

    if (this.gameMode === 'shop') {
      this.validateShopOrder();
      return;
    }

    const lvl = this.getCurrentLevel();

    if (lvl.type === 'sharing') {
      this.validateSharingLevel(lvl);
    } else if (lvl.type === 'serve_amount') {
      this.validateServeAmountLevel(lvl);
    } else if (lvl.type === 'addition') {
      this.validateAdditionLevel(lvl);
    } else if (lvl.type === 'shop_level') {
      this.validateShopLevel(lvl);
    } else if (lvl.type === 'laddoo_share') {
      this.validateLaddooSharingLevel(lvl);
    }
  }

  validateShopLevel(lvl) {
    if (this.isAutoDistributing) {
      this.ui.showToast("Please wait! Food is still being distributed to the plate.", "⏳");
      return;
    }

    if (this.rotiPieces.length <= 1) {
      this.ui.sound.playError();
      this.ui.showToast(`Prepare the roti first! Select 2 slices and click '⚡ Cut & Share Roti'.`, "⚠️");
      this.characterSystem.confuseAll();
      return;
    }

    const customerPlate = this.plates[0];
    if (!customerPlate) return;

    const allocated = this.rotiPieces.filter(p => p.userData.plateAssigned === customerPlate);
    const sum = allocated.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);

    if (Math.abs(sum - lvl.targetFractionPerFriend) < 0.05) {
      const explain = "Customer Chintu received 1/2 of the roti!\nOrder served accurately and happily.";
      this.ui.showToast("Order Complete! Served 1/2 roti to Chintu! 🎉", "🎉");
      this.onSuccess(3, explain, "Roti Shop Order Fulfilled!");
    } else {
      this.ui.sound.playError();
      this.ui.showToast(`Customer requested ${lvl.targetFractionStr}! Currently served ${sum.toFixed(2)}.`, "❌");
      this.characterSystem.confuseAll();
    }
  }

  validateSharingLevel(lvl) {
    if (this.isAutoDistributing) {
      this.ui.showToast("Please wait! Food is still being distributed to the plates.", "⏳");
      return;
    }

    // Level 1: Chintu & Meera each get 1/2
    if (lvl.id === 1) {
      // 1. Check if roti is cut
      if (this.rotiPieces.length <= 1) {
        this.ui.sound.playError();
        this.ui.showToast("Cut the roti first! Select 2 slices and click '⚡ Cut & Share Roti'.", "⚠️");
        this.characterSystem.confuseAll();
        return;
      }

      // 2. Check piece count
      if (this.rotiPieces.length !== 2) {
        this.ui.sound.playError();
        this.ui.showToast(`Level 1 requires dividing into 2 equal halves (1/2 each)! Currently cut into ${this.rotiPieces.length} pieces.`, "❌");
        this.characterSystem.confuseAll();
        return;
      }

      // 3. Check for unshared pieces on the cutting board
      const unshared = this.rotiPieces.filter(p => !p.userData.plateAssigned);
      if (unshared.length > 0) {
        this.ui.sound.playError();
        this.ui.showToast(`Share both pieces to the plates! (${unshared.length} piece${unshared.length > 1 ? 's' : ''} left on the cutting board)`, "⚠️");
        this.characterSystem.confuseAll();
        return;
      }

      // 4. Verify plates for Chintu and Meera
      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');

      if (!chintuPlate || !meeraPlate) {
        this.ui.sound.playError();
        this.ui.showToast("Missing plates for Chintu and Meera!", "⚠️");
        return;
      }

      const chintuPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === chintuPlate);
      const meeraPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === meeraPlate);

      // Verify no piece is counted twice
      if (chintuPieces.length + meeraPieces.length !== 2) {
        this.ui.sound.playError();
        this.ui.showToast("Both friends must each receive their share!", "⚠️");
        this.characterSystem.confuseAll();
        return;
      }

      const chintuSum = chintuPieces.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);
      const meeraSum = meeraPieces.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);

      // Verify each friend receives exactly 1/2
      if (Math.abs(chintuSum - 0.5) > 0.01) {
        this.ui.sound.playError();
        const chintuGot = chintuSum === 0 ? "0" : (chintuSum === 1 ? "1 Whole" : `${chintuPieces.length}/${this.rotiPieces.length}`);
        this.ui.showToast(`Chintu received ${chintuGot}, but needs exactly 1/2 roti!`, "❌");
        this.characterSystem.confuseAll();
        return;
      }

      if (Math.abs(meeraSum - 0.5) > 0.01) {
        this.ui.sound.playError();
        const meeraGot = meeraSum === 0 ? "0" : (meeraSum === 1 ? "1 Whole" : `${meeraPieces.length}/${this.rotiPieces.length}`);
        this.ui.showToast(`Meera received ${meeraGot}, but needs exactly 1/2 roti!`, "❌");
        this.characterSystem.confuseAll();
        return;
      }

      // 5. Verify area equality (angles are each PI)
      for (const piece of this.rotiPieces) {
        const span = piece.userData.angleSpan;
        if (span !== undefined && Math.abs(span - Math.PI) > 0.05) {
          this.ui.sound.playError();
          this.ui.showToast("The pieces are not equal! Both halves must have equal areas.", "❌");
          this.characterSystem.confuseAll();
          return;
        }
      }

      // 6. Complete roti accounted for (sum is 1.0)
      if (Math.abs((chintuSum + meeraSum) - 1.0) > 0.01) {
        this.ui.sound.playError();
        this.ui.showToast("The complete roti must be accounted for!", "❌");
        this.characterSystem.confuseAll();
        return;
      }

      // Valid Level 1!
      const explain = "Chintu received 1/2 • Meera received 1/2\n1/2 + 1/2 = 1 Whole Roti! Both friends received exactly equal shares.";
      this.progress.stats.fairSharesCount++;
      this.checkAchievements();
      this.ui.showToast("Perfect! Both friends received 1/2 roti!", "🎉");
      this.onSuccess(3, explain, "Perfect! Both friends received 1/2 roti!");
      return;
    }

    // Level 2: Three equal thirds (1/3 each to Chintu, Meera, Golu)
    if (lvl.id === 2) {
      if (this.rotiPieces.length <= 1) {
        this.ui.sound.playError();
        this.ui.showToast("Cut the roti first! Select 3 slices and click '⚡ Cut & Share Roti'.", "⚠️");
        this.characterSystem.confuseAll();
        return;
      }

      if (this.rotiPieces.length !== 3) {
        this.ui.sound.playError();
        this.ui.showToast(`Level 2 requires dividing into 3 equal pieces (1/3 each)! Currently cut into ${this.rotiPieces.length} pieces.`, "❌");
        this.characterSystem.confuseAll();
        return;
      }

      const unshared = this.rotiPieces.filter(p => !p.userData.plateAssigned);
      if (unshared.length > 0) {
        this.ui.sound.playError();
        this.ui.showToast(`Share all 3 pieces to the plates! (${unshared.length} remaining on the cutting board)`, "⚠️");
        this.characterSystem.confuseAll();
        return;
      }

      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');

      const chintuSum = this.rotiPieces.filter(p => p.userData.plateAssigned === chintuPlate).reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);
      const meeraSum = this.rotiPieces.filter(p => p.userData.plateAssigned === meeraPlate).reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);
      const goluSum = this.rotiPieces.filter(p => p.userData.plateAssigned === goluPlate).reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);

      const targetFrac = 1 / 3;
      if (Math.abs(chintuSum - targetFrac) > 0.02 || Math.abs(meeraSum - targetFrac) > 0.02 || Math.abs(goluSum - targetFrac) > 0.02) {
        this.ui.sound.playError();
        this.ui.showToast("Unfair sharing! Each friend needs exactly 1/3 of the roti.", "❌");
        this.characterSystem.confuseAll();
        return;
      }

      const explain = "Chintu received 1/3 • Meera received 1/3 • Golu received 1/3\n1/3 + 1/3 + 1/3 = 1 Whole Roti! All three friends received equal thirds.";
      this.progress.stats.fairSharesCount++;
      this.checkAchievements();
      this.ui.showToast("Perfect! All three friends received 1/3 roti!", "🎉");
      this.onSuccess(3, explain, "Perfect! All three friends received 1/3 roti!");
      return;
    }

    // Level 3: Four equal quarters (1/4 each to Chintu, Meera, Golu; 1/4 remains on board)
    if (lvl.id === 3) {
      if (this.rotiPieces.length <= 1) {
        this.ui.sound.playError();
        this.ui.showToast("Cut the roti first! Select 4 slices and click '⚡ Cut & Share Roti'.", "⚠️");
        this.characterSystem.confuseAll();
        return;
      }

      if (this.rotiPieces.length !== 4) {
        this.ui.sound.playError();
        this.ui.showToast(`Level 3 requires dividing into 4 equal quarters (1/4 each)! Currently cut into ${this.rotiPieces.length} pieces.`, "❌");
        this.characterSystem.confuseAll();
        return;
      }

      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');

      const chintuPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === chintuPlate);
      const meeraPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === meeraPlate);
      const goluPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === goluPlate);

      if (chintuPieces.length === 1 && meeraPieces.length === 1 && goluPieces.length === 1) {
        const explain = "Chintu: 1/4 • Meera: 1/4 • Golu: 1/4 (1/4 remains on board)\nEveryone received equal one-quarter shares!";
        this.progress.stats.fairSharesCount++;
        this.checkAchievements();
        this.ui.showToast("Perfect! Everyone received equal 1/4 shares!", "🎉");
        this.onSuccess(3, explain, "Perfect! Everyone received 1/4 shares!");
        return;
      } else {
        this.ui.sound.playError();
        this.ui.showToast("Each of the 3 friends must receive exactly 1 quarter (1/4)!", "❌");
        this.characterSystem.confuseAll();
        return;
      }
    }

    // Level 10: Fraction Master - 6 pieces total, 2 to Chintu, 2 to Meera, 2 to Golu
    if (lvl.id === 10) {
      if (this.rotiPieces.length <= 1) {
        this.ui.sound.playError();
        this.ui.showToast("Cut the roti first! Select 6 slices and click '⚡ Cut & Share Roti'.", "⚠️");
        this.characterSystem.confuseAll();
        return;
      }

      if (this.rotiPieces.length !== 6) {
        this.ui.sound.playError();
        this.ui.showToast(`Grand Finale requires dividing into 6 equal slices! Currently cut into ${this.rotiPieces.length} pieces.`, "❌");
        this.characterSystem.confuseAll();
        return;
      }

      const unshared = this.rotiPieces.filter(p => !p.userData.plateAssigned);
      if (unshared.length > 0) {
        this.ui.sound.playError();
        this.ui.showToast(`Share all 6 pieces to the plates! (${unshared.length} remaining on the cutting board)`, "⚠️");
        this.characterSystem.confuseAll();
        return;
      }

      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');

      const chintuPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === chintuPlate);
      const meeraPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === meeraPlate);
      const goluPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === goluPlate);

      if (chintuPieces.length === 2 && meeraPieces.length === 2 && goluPieces.length === 2) {
        const explain = "Chintu: 2/6 (1/3) • Meera: 2/6 (1/3) • Golu: 2/6 (1/3)\n2/6 + 2/6 + 2/6 = 6/6 = 1 Whole Roti! You are a Certified Fractions Hero!";
        this.progress.stats.fairSharesCount++;
        this.checkAchievements();
        this.awardAchievement('roti_master');
        this.ui.showToast("MASTER OF FRACTIONS! Perfect sharing!", "🏆");
        this.onSuccess(3, explain, "Certified Fractions Hero! 🏆");
        return;
      } else {
        this.ui.sound.playError();
        this.ui.showToast("Each of the 3 friends must receive exactly 2 slices (2/6 each)!", "❌");
        this.characterSystem.confuseAll();
        return;
      }
    }

    // Generic Sharing Levels
    if (this.rotiPieces.length < (lvl.targetPieces || 2)) {
      this.ui.sound.playError();
      this.ui.showToast(`Divide into ${lvl.targetPieces} pieces first!`, "⚠️");
      this.characterSystem.confuseAll();
      return;
    }

    const allocations = this.plates.map(plate => {
      return this.rotiPieces.filter(p => p.userData.plateAssigned === plate);
    });

    let isFair = true;
    for (const alloc of allocations) {
      const sum = alloc.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);
      if (Math.abs(sum - lvl.targetFractionPerFriend) > 0.05) {
        isFair = false;
        break;
      }
    }

    if (isFair) {
      this.progress.stats.fairSharesCount++;
      this.checkAchievements();
      this.onSuccess(3, lvl.explanation, "Fair Sharing Complete!");
    } else {
      this.ui.sound.playError();
      this.ui.showToast("Unfair sharing! Each friend needs an equal fraction.", "❌");
      this.characterSystem.confuseAll();
    }
  }

  validateServeAmountLevel(lvl) {
    if (this.isAutoDistributing) {
      this.ui.showToast("Please wait! Food is still being distributed.", "⏳");
      return;
    }

    if (this.rotiPieces.length <= 1) {
      this.ui.sound.playError();
      this.ui.showToast("Cut the roti first! Select 4 slices and click '⚡ Cut & Share Roti'.", "⚠️");
      this.characterSystem.confuseAll();
      return;
    }

    const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');
    if (!goluPlate) return;

    const allocated = this.rotiPieces.filter(p => p.userData.plateAssigned === goluPlate);
    const sum = allocated.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);

    if (Math.abs(sum - lvl.requiredFraction) < 0.05) {
      const explain = "Golu received 3/4 of the roti. 1/4 remains on the cutting board!\n3/4 + 1/4 = 1 Whole Roti.";
      this.ui.showToast("Perfect! Golu received 3/4 roti!", "🎉");
      this.onSuccess(3, explain, "Three-Quarters Challenge Complete!");
    } else {
      this.ui.sound.playError();
      this.ui.showToast(`Golu needs exactly ${lvl.targetFractionStr}! Currently has ${allocated.length}/4.`, "❌");
      this.characterSystem.confuseAll();
    }
  }

  validateAdditionLevel(lvl) {
    if (this.isAutoDistributing) {
      this.ui.showToast("Please wait! Food is still being distributed.", "⏳");
      return;
    }

    if (this.rotiPieces.length <= 1) {
      this.ui.sound.playError();
      this.ui.showToast("Cut the roti into 4 slices first!", "⚠️");
      this.characterSystem.confuseAll();
      return;
    }

    const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
    if (!meeraPlate) return;

    const allocated = this.rotiPieces.filter(p => p.userData.plateAssigned === meeraPlate);
    const sum = allocated.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);

    if (Math.abs(sum - 0.5) < 0.05) {
      const explain = "Meera received two quarter pieces: 1/4 + 1/4 = 2/4 = 1/2 of the roti!";
      this.ui.showToast("Perfect! 1/4 + 1/4 = 2/4 = 1/2 roti!", "🎉");
      this.onSuccess(3, explain, "Fraction Addition Complete!");
    } else {
      this.ui.sound.playError();
      this.ui.showToast("Move two 1/4 pieces to Meera's plate to show 1/4 + 1/4 = 2/4!", "❌");
      this.characterSystem.confuseAll();
    }
  }

  validateLaddooSharingLevel(lvl) {
    if (this.isAutoDistributing) {
      this.ui.showToast("Please wait! Laddoos are still being distributed.", "⏳");
      return;
    }

    let isFair = true;
    for (const plate of this.plates) {
      const count = this.laddoos.filter(l => l.userData.plateAssigned === plate).length;
      if (count !== lvl.itemsPerFriend) {
        isFair = false;
        break;
      }
    }

    if (isFair) {
      const explain = "Chintu: 2 laddoos • Meera: 2 laddoos • Golu: 2 laddoos\nEach friend received 1/3 of the 6 laddoos (6 ÷ 3 = 2)!";
      this.ui.showToast("Perfect! Each friend received 2 laddoos!", "🎉");
      this.onSuccess(3, explain, "Fair Laddoo Sharing Complete!");
    } else {
      this.ui.sound.playError();
      this.ui.showToast(`Each friend needs exactly ${lvl.itemsPerFriend} laddoos (1/3 of 6)!`, "❌");
      this.characterSystem.confuseAll();
    }
  }

  handleQuizAnswer(selectedOption, correctOption) {
    const isCorrect = selectedOption === correctOption;
    if (isCorrect) {
      this.progress.stats.fractionsIdentified++;
      this.checkAchievements();
      if (this.voice) {
        this.voice.speak(`Shabash! ${selectedOption} is the correct fraction!`, 'teacher');
      }
      this.onSuccess(3);
    } else {
      const msg = "Not quite! Look at the fraction of the whole circle, or check the Teacher's Hint.";
      this.showValidationError(msg, "❌");
    }
  }

  onSuccess(stars = 3, explanation = "", title = "Level Complete! 🎉") {
    if (this.levelSolved) {
      this.ui.showSuccessModal(stars, explanation, title);
      return;
    }
    this.levelSolved = true;

    this.characterSystem.celebrateAll();
    this.score += 100 * stars;
    this.coins += 25 * stars;

    const lvl = this.getCurrentLevel();
    const lvlId = lvl.id;
    this.progress.stars[lvlId] = Math.max(this.progress.stars[lvlId] || 0, stars);
    if (this.currentLevelIndex >= this.progress.unlockedLevelIndex) {
      this.progress.unlockedLevelIndex = Math.min(this.levels.length - 1, this.currentLevelIndex + 1);
    }
    this.saveProgress();

    this.ui.updateHUD(lvl, this.score, stars, this.coins);
    this.ui.showSuccessModal(stars, explanation, title);

    if (this.voice) {
      const fracStr = lvl.targetFractionStr || "equal shares";
      const friendCount = (lvl.friends && lvl.friends.length) || 2;
      this.voice.speakCorrectShare(fracStr, friendCount);
    }
  }

  /* Roti Shop Order Mode */
  startRotiShopMode() {
    this.gameMode = 'shop';
    this.shopOrderIndex = 0;
    this.ui.setGameMode('ROTI SHOP');
    this.clearFoodScene();
    this.resetCamera();
    this.loadShopOrder(0);
  }

  loadShopOrder(idx) {
    this.shopOrderIndex = idx % ROTI_SHOP_ORDERS.length;
    const order = ROTI_SHOP_ORDERS[this.shopOrderIndex];
    this.clearFoodScene();

    this.setupPlates([order.customer]);
    this.characterSystem.setActiveCharacters([order.customer]);
    this.setupStandardRotiFood({ type: 'sharing', initialPieces: 1 });

    this.ui.showShopOrder(order);
    this.ui.showToast(`New Order from ${order.customer}: ${order.requestedFractionStr}!`, "📋");
    this.updatePlateLabels();
    if (this.voice) {
      this.voice.speak(order.orderSpeech, order.customer.toLowerCase());
    }
  }

  validateShopOrder() {
    const order = ROTI_SHOP_ORDERS[this.shopOrderIndex];
    const customerPlate = this.plates[0];
    if (!customerPlate) return;

    const allocated = this.rotiPieces.filter(p => p.userData.plateAssigned === customerPlate);
    const sum = allocated.reduce((acc, p) => acc + p.userData.fractionValue, 0);

    if (Math.abs(sum - order.requestedFractionVal) < 0.05) {
      this.ui.sound.playSuccess();
      this.coins += order.coinsReward;
      this.score += 150;
      this.saveProgress();
      this.characterSystem.celebrateAll();
      this.ui.showToast(`Order Complete! Earned +${order.coinsReward} Coins 🪙`, "🎉");
      this.ui.updateCoins(this.coins);
      if (this.voice) {
        this.voice.speak("Thank you so much! This is exactly what I ordered! Delicious!", order.customer.toLowerCase());
      }
      setTimeout(() => this.loadShopOrder(this.shopOrderIndex + 1), 2400);
    } else {
      const msg = `Order requested ${order.requestedFractionStr}! Check your slices.`;
      this.showValidationError(msg, "❌");
    }
  }

  /* Timed Mode */
  startTimedChallenge() {
    this.gameMode = 'timed';
    this.timerSeconds = 60;
    this.ui.setGameMode('TIMED RUSH');
    this.startLevel(0);
    this.ui.showTimer(this.timerSeconds);

    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.ui.updateTimer(this.timerSeconds);
      if (this.timerSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.ui.showToast("Time's Up! Great effort!", "⏱️");
        this.ui.showMainMenu();
      }
    }, 1000);
  }

  /* Creative Kitchen Sandbox Mode */
  startCreativeKitchen() {
    this.gameMode = 'creative';
    this.ui.setGameMode('CREATIVE');
    this.ui.showCreativeFoodPicker();
    this.setCreativeFood('roti');
  }

  setCreativeFood(foodType) {
    this.creativeFoodType = foodType;
    this.clearFoodScene();
    this.setupPlates(['Chintu', 'Meera', 'Golu']);
    this.characterSystem.setActiveCharacters(['Chintu', 'Meera', 'Golu']);
    if (foodType === 'laddoo') {
      this.setupLaddooFood({ totalItems: 6 });
    } else {
      this.setupStandardRotiFood({ type: 'sharing', initialPieces: 1 });
    }
    this.ui.showToast(`Creative Kitchen: Switched to ${foodType.toUpperCase()}!`, "✨");
    this.renderCuttingGuides();
    this.updatePlateLabels();
    if (this.voice) {
      this.voice.speak(`Creative Kitchen! Let's explore sharing ${foodType} fairly!`, 'teacher');
    }
  }

  resetCamera() {
    this.camera.position.copy(this.defaultCameraPos);
    this.controls.target.set(0, 0.45, 0);
    this.controls.update();
  }

  initEventListeners() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const dom = this.renderer.domElement;
    dom.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    dom.addEventListener('pointermove', (e) => this.onPointerMove(e));
    window.addEventListener('pointerup', (e) => this.onPointerUp(e));
  }

  getPointerCoords(event) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((event.clientY - rect.top) / rect.height) * 2 + 1
    };
  }

  onPointerDown(event) {
    if (this.isMenuOpen || this.isAutoDistributing) return;
    const coords = this.getPointerCoords(event);
    this.mouse.set(coords.x, coords.y);
    this.pointerStartPos.set(event.clientX, event.clientY);
    this.isPointerDown = true;

    // Check interaction with Fraction Tiles rack
    this.raycaster.setFromCamera(this.mouse, this.camera);
    if (this.fractionTilesRack && this.fractionTilesRack.tiles) {
      const tileIntersects = this.raycaster.intersectObjects(this.fractionTilesRack.tiles, true);
      if (tileIntersects.length > 0) {
        let tileObj = tileIntersects[0].object;
        while (tileObj && (!tileObj.userData || !tileObj.userData.isFractionTile)) {
          tileObj = tileObj.parent;
        }
        if (tileObj && tileObj.userData) {
          const frac = tileObj.userData.fraction;
          const val = tileObj.userData.value;
          this.ui.sound.playClick();
          this.ui.showFractionCallout(
            tileObj.userData.fraction.split('/')[0] || 1,
            tileObj.userData.fraction.split('/')[1] || 2,
            `Fraction Tile: ${frac} (${val})`
          );
          this.ui.showToast(`Selected Tile: ${frac}`, "🧩");
          return;
        }
      }
    }

    // Inspect Food Item on click
    const interactables = [...this.rotiPieces, ...this.laddoos];
    const intersects = this.raycaster.intersectObjects(interactables, true);

    if (intersects.length > 0) {
      let hitMesh = intersects[0].object;
      while (hitMesh.parent && hitMesh.parent !== this.foodItemsGroup && hitMesh.parent !== this.scene) {
        if (hitMesh.userData && (hitMesh.userData.type === 'roti-piece' || hitMesh.userData.type === 'laddoo')) {
          break;
        }
        hitMesh = hitMesh.parent;
      }

      if (hitMesh && hitMesh.userData && hitMesh.userData.fractionValue) {
        this.ui.showFractionCallout(
          hitMesh.userData.numerator || 1,
          hitMesh.userData.denominator || this.rotiPieces.length,
          `${hitMesh.userData.numerator || 1}/${hitMesh.userData.denominator || this.rotiPieces.length} Portion`
        );

        if (this.measuringTool && this.measuringTool.visible) {
          this.measuringTool.position.copy(hitMesh.position);
          this.measuringTool.updateMeasurement(hitMesh.userData.angleSpan || Math.PI, hitMesh.userData.fractionString || '1/2');
        }
      }
      this.ui.sound.playClick();
    }
  }

  onPointerMove(event) {
    if (!this.isPointerDown || this.isAutoDistributing) return;
    const coords = this.getPointerCoords(event);
    this.mouse.set(coords.x, coords.y);
  }

  onPointerUp(event) {
    this.isPointerDown = false;
  }

  checkFoodDropTarget(foodItem) {
    let nearestPlate = null;
    let minDist = 1.35;

    this.plates.forEach(plate => {
      const dist = foodItem.position.distanceTo(plate.position);
      if (dist < minDist) {
        minDist = dist;
        nearestPlate = plate;
      }
    });

    if (nearestPlate) {
      const prevPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === nearestPlate && p !== foodItem);
      const pieceOffset = prevPieces.length;
      let targetOffset = new THREE.Vector3(0, 0, 0);
      let targetRotY = foodItem.rotation.y;

      if (pieceOffset === 0) {
        targetOffset.set(0, 0, 0);
      } else if (pieceOffset === 1) {
        targetOffset.set(0.18, 0, -0.10);
        targetRotY += 0.35;
      } else if (pieceOffset === 2) {
        targetOffset.set(-0.16, 0, 0.12);
        targetRotY -= 0.35;
      } else {
        const angle = pieceOffset * 1.05;
        targetOffset.set(Math.cos(angle) * 0.22, 0, Math.sin(angle) * 0.22);
        targetRotY += (pieceOffset * 0.4);
      }

      foodItem.position.set(
        nearestPlate.position.x + targetOffset.x,
        0.065,
        nearestPlate.position.z + targetOffset.z
      );
      foodItem.scale.set(0.58, 0.58, 0.58);
      foodItem.rotation.set(0, targetRotY, 0);
      foodItem.userData.plateAssigned = nearestPlate;
      this.ui.sound.playDropPiece();
      this.ui.sound.playPlateClink();
      this.ui.showToast(`Placed piece on ${nearestPlate.userData.label}!`, "🍽️");

      // Character reacts by reaching eagerly towards their plate!
      const friendKey = nearestPlate.userData.friendName ? nearestPlate.userData.friendName.toLowerCase() : null;
      if (friendKey && this.characterSystem) {
        this.characterSystem.setEmotion(friendKey, 'reaching');
        setTimeout(() => this.characterSystem.setEmotion(friendKey, 'eating'), 1200);
      }
    } else {
      const distToBoard = foodItem.position.distanceTo(this.cuttingBoard.position);
      if (distToBoard < 1.6) {
        foodItem.userData.plateAssigned = null;
        foodItem.scale.set(1.0, 1.0, 1.0);
        foodItem.position.y = 0.12;
        this.ui.sound.playDropPiece();
      } else {
        foodItem.position.copy(foodItem.userData.originalPosition || new THREE.Vector3(0, 0.12, 0));
        foodItem.scale.set(1.0, 1.0, 1.0);
        foodItem.userData.plateAssigned = null;
      }
    }

    this.updatePlateLabels();
    this.updateBalanceScaleWeights();
  }

  animate() {
    requestAnimationFrame(this.animate);
    const delta = this.clock.getDelta();

    if (this.isMenuOpen) {
      const t = this.clock.getElapsedTime() * 0.16;
      this.camera.position.x = 1.3 + Math.sin(t) * 2.8;
      this.camera.position.z = 4.8 + Math.cos(t) * 1.2;
      this.camera.position.y = 3.6 + Math.sin(t * 0.4) * 0.22;
      this.camera.lookAt(0.5, 0.45, 0);
    } else {
      this.controls.update();
    }

    if (this.balanceScale) {
      this.balanceScale.updateAnimation(delta);
    }

    if (this.characterSystem) {
      this.characterSystem.update(delta);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
