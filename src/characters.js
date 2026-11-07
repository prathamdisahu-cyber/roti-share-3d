/**
 * characters.js
 * High-Quality Stylized 3D Cartoon Characters for Roti Share:
 * 1. CHINTU  - Enthusiastic boy in saffron kurta, dynamic eyes with pupils/sparkle highlights, styled hair quiff, celebratory jumps.
 * 2. MEERA   - Clever, cheerful girl in peacock teal salwar suit, dual braided hair buns with white jasmine flower gajra bands, clapping celebrations.
 * 3. GOLU    - Friendly chubby friend in crimson patterned waistcoat, round cheeks, eager smiles.
 * 4. TEACHER - Kind, knowledgeable classroom educator (Shanti Ma'am) in elegant Indian Saree with draped pallu, stylish glasses, bindi, graceful pointing gestures and synchronized lip-sync speech!
 *
 * Real-Time Features:
 * - Dynamic 3D Lip-Sync speaking animations synchronized with VoiceSystem speech synthesis.
 * - Organic breathing and idle posture adjustments.
 * - Natural eye blinking and food look-at tracking.
 * - Responsive celebration jumping and puzzled error reactions.
 */

import * as THREE from 'three';

export class CharacterSystem {
  constructor(scene) {
    this.scene = scene;
    this.characters = {};
    this.targetFocus = new THREE.Vector3(0, 0.12, 0); // Focus on table center by default
    this.initCharacters();
  }

  createStylizedCharacter({
    name,
    skinColor = 0xe5a36f,
    clothesColor = 0xf59e0b,
    clothesAccent = 0xd97706,
    pantsColor = 0x1e3a8a,
    shoeColor = 0x451a03,
    hairColor = 0x1c1917,
    eyeColor = 0x3b2010,
    gender = 'boy', // 'boy', 'girl', or 'teacher'
    scale = 1.0,
    isChubby = false
  }) {
    const root = new THREE.Group();
    root.name = `character-${name}`;

    // Standard stylized PBR materials with soft cartoon lighting response
    const skinMat = new THREE.MeshStandardMaterial({
      color: skinColor,
      roughness: 0.55,
      metalness: 0.02
    });
    const clothesMat = new THREE.MeshStandardMaterial({
      color: clothesColor,
      roughness: 0.65,
      metalness: 0.05
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: clothesAccent,
      roughness: 0.6,
      metalness: 0.15
    });
    const pantsMat = new THREE.MeshStandardMaterial({
      color: pantsColor,
      roughness: 0.8
    });
    const shoeMat = new THREE.MeshStandardMaterial({
      color: shoeColor,
      roughness: 0.6
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: hairColor,
      roughness: 0.85
    });
    const eyeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xfdfdfd,
      roughness: 0.2
    });
    const irisMat = new THREE.MeshStandardMaterial({
      color: eyeColor,
      roughness: 0.3
    });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const highlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const toothMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const s = scale;
    const isTeacher = gender === 'teacher';
    const bodyRadius = isTeacher ? 0.38 * s : (isChubby ? 0.54 * s : 0.44 * s);
    const bodyHeight = isTeacher ? 1.25 * s : 0.95 * s;

    // ==========================================
    // 1. TORSO, WAIST & CLOTHING
    // ==========================================
    const torsoGroup = new THREE.Group();
    torsoGroup.position.y = 0.85 * s;

    if (isTeacher) {
      // Teacher: Elegant Indian Saree drape with blouse and pallu
      const blouseGeo = new THREE.CylinderGeometry(bodyRadius * 0.85, bodyRadius * 0.98, bodyHeight * 0.55, 20);
      const blouse = new THREE.Mesh(blouseGeo, clothesMat);
      blouse.position.y = bodyHeight * 0.22;
      blouse.castShadow = true;
      torsoGroup.add(blouse);

      // Saree skirt drape (pleats reaching down)
      const sareeGeo = new THREE.CylinderGeometry(bodyRadius * 0.95, bodyRadius * 1.35, bodyHeight * 0.9, 20);
      const saree = new THREE.Mesh(sareeGeo, accentMat);
      saree.position.y = -bodyHeight * 0.32;
      saree.castShadow = true;
      torsoGroup.add(saree);

      // Golden Zari Border at bottom of Saree
      const borderGeo = new THREE.CylinderGeometry(bodyRadius * 1.36, bodyRadius * 1.37, 0.08 * s, 20);
      const border = new THREE.Mesh(borderGeo, new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.8, roughness: 0.25 }));
      border.position.y = -bodyHeight * 0.72;
      torsoGroup.add(border);

      // Saree Pallu draped diagonally across chest over left shoulder
      const palluGeo = new THREE.BoxGeometry(0.24 * s, bodyHeight * 0.85, 0.06 * s);
      const pallu = new THREE.Mesh(palluGeo, accentMat);
      pallu.position.set(-0.12 * s, 0.1 * s, bodyRadius * 0.92);
      pallu.rotation.z = -0.38;
      pallu.rotation.y = 0.15;
      torsoGroup.add(pallu);

    } else {
      // Contoured Kurta / Vest for Kids
      const torsoGeo = new THREE.CylinderGeometry(
        bodyRadius * 0.88,
        bodyRadius * 1.05,
        bodyHeight,
        20
      );
      const torsoMesh = new THREE.Mesh(torsoGeo, clothesMat);
      torsoMesh.castShadow = true;
      torsoMesh.receiveShadow = true;
      torsoGroup.add(torsoMesh);

      // Decorative Front Placket & Golden Buttons
      const placketGeo = new THREE.BoxGeometry(0.08 * s, bodyHeight * 0.75, 0.03 * s);
      const placket = new THREE.Mesh(placketGeo, accentMat);
      placket.position.set(0, 0.1 * s, bodyRadius * 0.95);
      torsoGroup.add(placket);

      for (let b = 0; b < 3; b++) {
        const buttonGeo = new THREE.SphereGeometry(0.025 * s, 8, 8);
        const button = new THREE.Mesh(buttonGeo, new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.8, roughness: 0.2 }));
        button.position.set(0, (0.25 - b * 0.18) * s, bodyRadius * 0.98);
        torsoGroup.add(button);
      }

      // Traditional Collar (Nehru collar band)
      const collarGeo = new THREE.CylinderGeometry(0.24 * s, 0.26 * s, 0.14 * s, 16);
      const collar = new THREE.Mesh(collarGeo, accentMat);
      collar.position.y = bodyHeight / 2 + 0.05 * s;
      torsoGroup.add(collar);
    }

    root.add(torsoGroup);

    // ==========================================
    // 2. HEAD & FACIAL FEATURES
    // ==========================================
    const headPivot = new THREE.Group();
    headPivot.position.y = (isTeacher ? 1.85 : 1.48) * s;

    // Neck
    const neckRadius = isTeacher ? 0.15 * s : 0.18 * s;
    const neckGeo = new THREE.CylinderGeometry(neckRadius, neckRadius * 1.1, 0.22 * s, 14);
    const neckMesh = new THREE.Mesh(neckGeo, skinMat);
    neckMesh.position.y = -0.09 * s;
    headPivot.add(neckMesh);

    // Cranium / Face (organic rounded shape with sculpted cheeks)
    const headScaleY = isTeacher ? 1.14 : 1.08;
    const craniumGeo = new THREE.SphereGeometry(0.48 * s, 28, 24);
    craniumGeo.scale(1.0, headScaleY, 1.02);
    const cranium = new THREE.Mesh(craniumGeo, skinMat);
    cranium.castShadow = true;
    headPivot.add(cranium);

    // Ears
    const earGeo = new THREE.SphereGeometry(0.11 * s, 12, 12);
    earGeo.scale(0.5, 1.2, 0.8);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(-0.48 * s, 0.02 * s, 0);
    leftEar.rotation.z = 0.15;
    const rightEar = leftEar.clone();
    rightEar.position.x = 0.48 * s;
    rightEar.rotation.z = -0.15;
    headPivot.add(leftEar);
    headPivot.add(rightEar);

    // Sculpted Nose
    const noseGeo = new THREE.ConeGeometry(0.065 * s, 0.14 * s, 12);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, 0.02 * s, 0.5 * s);
    nose.rotation.x = Math.PI / 2.3;
    headPivot.add(nose);

    // EYES & EYEBROWS (Left & Right)
    const eyeSpacing = 0.16 * s;
    const eyeHeight = 0.11 * s;
    const eyeDepth = 0.43 * s;

    const leftEyeGroup = new THREE.Group();
    leftEyeGroup.position.set(-eyeSpacing, eyeHeight, eyeDepth);

    const rightEyeGroup = new THREE.Group();
    rightEyeGroup.position.set(eyeSpacing, eyeHeight, eyeDepth);

    [leftEyeGroup, rightEyeGroup].forEach((eyeGrp, idx) => {
      // Eye White (Sclera)
      const eyeGeo = new THREE.SphereGeometry(0.095 * s, 16, 16);
      eyeGeo.scale(1.05, 1.15, 0.6);
      const sclera = new THREE.Mesh(eyeGeo, eyeWhiteMat);
      eyeGrp.add(sclera);

      // Iris
      const irisGeo = new THREE.CircleGeometry(0.055 * s, 16);
      const iris = new THREE.Mesh(irisGeo, irisMat);
      iris.position.set(0, 0, 0.058 * s);
      eyeGrp.add(iris);

      // Pupil
      const pupilGeo = new THREE.CircleGeometry(0.03 * s, 12);
      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.set(0, 0, 0.06 * s);
      eyeGrp.add(pupil);

      // Sparkle Highlights (gives lively Disney/Pixar cartoon eyes)
      const shineGeo1 = new THREE.CircleGeometry(0.016 * s, 8);
      const shine1 = new THREE.Mesh(shineGeo1, highlightMat);
      shine1.position.set(0.015 * s, 0.018 * s, 0.062 * s);
      eyeGrp.add(shine1);

      const shineGeo2 = new THREE.CircleGeometry(0.008 * s, 8);
      const shine2 = new THREE.Mesh(shineGeo2, highlightMat);
      shine2.position.set(-0.015 * s, -0.015 * s, 0.062 * s);
      eyeGrp.add(shine2);

      // Blinking Eyelid (Upper cover)
      const eyelidGeo = new THREE.SphereGeometry(0.102 * s, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      eyelidGeo.scale(1.1, 1.2, 0.65);
      const eyelid = new THREE.Mesh(eyelidGeo, skinMat);
      eyelid.rotation.x = -Math.PI / 2;
      eyelid.position.y = 0.04 * s;
      eyelid.visible = false; // toggle for blink
      eyeGrp.add(eyelid);
      eyeGrp.userData.eyelid = eyelid;

      // Stylized Eyebrow
      const browGeo = new THREE.BoxGeometry(0.14 * s, 0.035 * s, 0.03 * s);
      const brow = new THREE.Mesh(browGeo, hairMat);
      brow.position.set(0, 0.13 * s, 0.02 * s);
      brow.rotation.z = idx === 0 ? 0.08 : -0.08;
      eyeGrp.add(brow);
      eyeGrp.userData.brow = brow;

      headPivot.add(eyeGrp);
    });

    // Traditional Bindi for Meera and Teacher
    if (gender === 'girl' || isTeacher) {
      const bindiGeo = new THREE.CircleGeometry(isTeacher ? 0.038 * s : 0.028 * s, 12);
      const bindiMat = new THREE.MeshBasicMaterial({ color: 0x991b1b }); // Deep crimson
      const bindi = new THREE.Mesh(bindiGeo, bindiMat);
      bindi.position.set(0, 0.16 * s, 0.49 * s);
      headPivot.add(bindi);
    }

    // Teacher Spectacles (Stylish round thin-frame glasses)
    if (isTeacher) {
      const glassesGroup = new THREE.Group();
      glassesGroup.position.set(0, eyeHeight, eyeDepth + 0.035 * s);

      const frameMat = new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.85, roughness: 0.3 });
      const rimGeo = new THREE.TorusGeometry(0.092 * s, 0.012 * s, 8, 20);

      const leftRim = new THREE.Mesh(rimGeo, frameMat);
      leftRim.position.x = -eyeSpacing;
      glassesGroup.add(leftRim);

      const rightRim = new THREE.Mesh(rimGeo, frameMat);
      rightRim.position.x = eyeSpacing;
      glassesGroup.add(rightRim);

      // Glasses bridge
      const bridgeGeo = new THREE.CylinderGeometry(0.01 * s, 0.01 * s, eyeSpacing, 8);
      const bridge = new THREE.Mesh(bridgeGeo, frameMat);
      bridge.rotation.z = Math.PI / 2;
      bridge.position.y = 0.02 * s;
      glassesGroup.add(bridge);

      headPivot.add(glassesGroup);
    }

    // Rosy Cheeks
    const blushGeo = new THREE.CircleGeometry(0.09 * s, 14);
    const blushMat = new THREE.MeshBasicMaterial({ color: 0xf87171, transparent: true, opacity: 0.55 });
    const blushL = new THREE.Mesh(blushGeo, blushMat);
    blushL.position.set(-0.25 * s, -0.04 * s, 0.44 * s);
    blushL.rotation.y = -0.35;
    const blushR = blushL.clone();
    blushR.position.x = 0.25 * s;
    blushR.rotation.y = 0.35;
    headPivot.add(blushL);
    headPivot.add(blushR);

    // Expressive Smiling Mouth (Animated during Lip-Sync)
    const mouthGroup = new THREE.Group();
    mouthGroup.position.set(0, -0.16 * s, 0.45 * s);

    // Mouth Rim / Smile Arch
    const smileArchGeo = new THREE.TorusGeometry(0.13 * s, 0.025 * s, 10, 16, Math.PI * 0.95);
    const smileRim = new THREE.Mesh(smileArchGeo, new THREE.MeshBasicMaterial({ color: 0x991b1b }));
    smileRim.rotation.x = Math.PI;
    mouthGroup.add(smileRim);

    // Tooth Smile Fill
    const teethGeo = new THREE.BoxGeometry(0.12 * s, 0.035 * s, 0.02 * s);
    const teeth = new THREE.Mesh(teethGeo, toothMat);
    teeth.position.set(0, 0.02 * s, 0);
    mouthGroup.add(teeth);

    headPivot.add(mouthGroup);

    // ==========================================
    // 3. HAIR STYLES
    // ==========================================
    if (isTeacher) {
      // Teacher: Elegant sleek low bun (Jooda) with golden pin
      const hairBaseGeo = new THREE.SphereGeometry(0.51 * s, 20, 20, 0, Math.PI * 2, 0, Math.PI / 1.7);
      const hairBase = new THREE.Mesh(hairBaseGeo, hairMat);
      hairBase.position.y = 0.04 * s;
      headPivot.add(hairBase);

      const bunGeo = new THREE.SphereGeometry(0.28 * s, 18, 18);
      const bun = new THREE.Mesh(bunGeo, hairMat);
      bun.position.set(0, 0.12 * s, -0.42 * s);
      headPivot.add(bun);

      const hairPinGeo = new THREE.CylinderGeometry(0.015 * s, 0.015 * s, 0.45 * s, 8);
      const pinMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 });
      const pin = new THREE.Mesh(hairPinGeo, pinMat);
      pin.position.set(0, 0.15 * s, -0.42 * s);
      pin.rotation.z = Math.PI / 4;
      headPivot.add(pin);

    } else if (gender === 'girl') {
      // Meera: Sleek part, elegant twin buns with golden jasmine flower rings
      const hairBaseGeo = new THREE.SphereGeometry(0.51 * s, 20, 20, 0, Math.PI * 2, 0, Math.PI / 1.7);
      const hairBase = new THREE.Mesh(hairBaseGeo, hairMat);
      hairBase.position.y = 0.03 * s;
      headPivot.add(hairBase);

      // Twin Side Buns (Joodas)
      const bunGeo = new THREE.SphereGeometry(0.23 * s, 16, 16);
      const ringGeo = new THREE.TorusGeometry(0.18 * s, 0.035 * s, 8, 16);
      const gajraMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }); // White Jasmine garland

      // Left Bun
      const bunL = new THREE.Mesh(bunGeo, hairMat);
      bunL.position.set(-0.48 * s, 0.32 * s, -0.05 * s);
      const gajraL = new THREE.Mesh(ringGeo, gajraMat);
      gajraL.position.copy(bunL.position);
      gajraL.rotation.y = Math.PI / 2;
      headPivot.add(bunL);
      headPivot.add(gajraL);

      // Right Bun
      const bunR = new THREE.Mesh(bunGeo, hairMat);
      bunR.position.set(0.48 * s, 0.32 * s, -0.05 * s);
      const gajraR = new THREE.Mesh(ringGeo, gajraMat);
      gajraR.position.copy(bunR.position);
      gajraR.rotation.y = Math.PI / 2;
      headPivot.add(bunR);
      headPivot.add(gajraR);

    } else if (isChubby) {
      // Golu: Cute rounded side puff and friendly top cap
      const hairCapGeo = new THREE.SphereGeometry(0.52 * s, 20, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.04 * s;
      headPivot.add(hairCap);

      const curlGeo = new THREE.SphereGeometry(0.14 * s, 10, 10);
      const curl = new THREE.Mesh(curlGeo, hairMat);
      curl.position.set(0, 0.48 * s, 0.22 * s);
      headPivot.add(curl);

    } else {
      // Chintu: Energetic spike quiff, boyish fade
      const hairCapGeo = new THREE.SphereGeometry(0.51 * s, 20, 16, 0, Math.PI * 2, 0, Math.PI / 1.8);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.05 * s;
      headPivot.add(hairCap);

      // Front stylized hair swoop
      for (let q = -1; q <= 1; q++) {
        const swoopGeo = new THREE.ConeGeometry(0.11 * s, 0.28 * s, 8);
        const swoop = new THREE.Mesh(swoopGeo, hairMat);
        swoop.position.set(q * 0.12 * s, 0.46 * s, 0.34 * s);
        swoop.rotation.x = -Math.PI / 3;
        swoop.rotation.z = q * -0.25;
        headPivot.add(swoop);
      }
    }

    root.add(headPivot);

    // ==========================================
    // 4. ARMS & DETAILED HANDS
    // ==========================================
    const shoulderSpan = (bodyRadius * 0.95 + 0.12 * s);
    const armY = (isTeacher ? 1.55 : 1.25) * s;

    // Left Arm Hierarchy (Shoulder -> Upper Arm -> Forearm -> Hand)
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-shoulderSpan, armY, 0);

    const upperArmGeo = new THREE.CylinderGeometry(0.09 * s, 0.08 * s, 0.45 * s, 12);
    const upperArmL = new THREE.Mesh(upperArmGeo, clothesMat);
    upperArmL.position.y = -0.22 * s;
    upperArmL.castShadow = true;
    leftArmGroup.add(upperArmL);

    const forearmGroupL = new THREE.Group();
    forearmGroupL.position.set(0, -0.45 * s, 0);

    const forearmGeo = new THREE.CylinderGeometry(0.08 * s, 0.07 * s, 0.4 * s, 12);
    const forearmL = new THREE.Mesh(forearmGeo, skinMat);
    forearmL.position.y = -0.2 * s;
    forearmGroupL.add(forearmL);

    const palmGeo = new THREE.BoxGeometry(0.11 * s, 0.11 * s, 0.05 * s);
    const palmL = new THREE.Mesh(palmGeo, skinMat);
    palmL.position.y = -0.44 * s;
    forearmGroupL.add(palmL);

    const thumbGeo = new THREE.CylinderGeometry(0.024 * s, 0.024 * s, 0.08 * s, 8);
    const thumbL = new THREE.Mesh(thumbGeo, skinMat);
    thumbL.position.set(0.055 * s, -0.42 * s, 0.02 * s);
    thumbL.rotation.z = -Math.PI / 4;
    forearmGroupL.add(thumbL);

    leftArmGroup.add(forearmGroupL);
    root.add(leftArmGroup);

    // Right Arm Hierarchy
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(shoulderSpan, armY, 0);

    const upperArmR = new THREE.Mesh(upperArmGeo, clothesMat);
    upperArmR.position.y = -0.22 * s;
    upperArmR.castShadow = true;
    rightArmGroup.add(upperArmR);

    const forearmGroupR = new THREE.Group();
    forearmGroupR.position.set(0, -0.45 * s, 0);

    const forearmR = new THREE.Mesh(forearmGeo, skinMat);
    forearmR.position.y = -0.2 * s;
    forearmGroupR.add(forearmR);

    const palmR = new THREE.Mesh(palmGeo, skinMat);
    palmR.position.y = -0.44 * s;
    forearmGroupR.add(palmR);

    const thumbR = new THREE.Mesh(thumbGeo, skinMat);
    thumbR.position.set(-0.055 * s, -0.42 * s, 0.02 * s);
    thumbR.rotation.z = Math.PI / 4;
    forearmGroupR.add(thumbR);

    rightArmGroup.add(forearmGroupR);
    root.add(rightArmGroup);

    // Teacher Pointer Stick / Notebook
    if (isTeacher) {
      const pointerGeo = new THREE.CylinderGeometry(0.012 * s, 0.008 * s, 0.75 * s, 8);
      const pointerMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3 });
      const pointer = new THREE.Mesh(pointerGeo, pointerMat);
      pointer.position.set(0, -0.5 * s, 0.22 * s);
      pointer.rotation.x = Math.PI / 3;
      forearmGroupR.add(pointer);
    }

    // ==========================================
    // 5. LEGS & FOOTWEAR
    // ==========================================
    const legSpacing = 0.22 * s;
    const legLength = (isTeacher ? 0.95 : 0.65) * s;
    const legGeo = new THREE.CylinderGeometry(0.12 * s, 0.1 * s, legLength, 12);

    // Left Leg
    const legL = new THREE.Mesh(legGeo, isTeacher ? accentMat : pantsMat);
    legL.position.set(-legSpacing, legLength / 2, 0);
    legL.castShadow = true;
    root.add(legL);

    // Right Leg
    const legR = new THREE.Mesh(legGeo, isTeacher ? accentMat : pantsMat);
    legR.position.set(legSpacing, legLength / 2, 0);
    legR.castShadow = true;
    root.add(legR);

    // Shoes with defined soles (Juttis / Sandals)
    const shoeGeo = new THREE.BoxGeometry(0.18 * s, 0.11 * s, 0.32 * s);
    const soleGeo = new THREE.BoxGeometry(0.19 * s, 0.03 * s, 0.34 * s);
    const soleMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.9 });

    [-legSpacing, legSpacing].forEach(lx => {
      const shoeGroup = new THREE.Group();
      shoeGroup.position.set(lx, 0.06 * s, 0.06 * s);

      const shoe = new THREE.Mesh(shoeGeo, shoeMat);
      shoe.castShadow = true;
      shoeGroup.add(shoe);

      const sole = new THREE.Mesh(soleGeo, soleMat);
      sole.position.y = -0.055 * s;
      shoeGroup.add(sole);

      root.add(shoeGroup);
    });

    return {
      group: root,
      name,
      gender,
      headPivot,
      mouthGroup,
      leftArmGroup,
      rightArmGroup,
      forearmGroupL,
      forearmGroupR,
      leftEyeGroup,
      rightEyeGroup,
      scale: s,
      state: 'idle',
      animTime: Math.random() * 10,
      blinkTimer: 2 + Math.random() * 3,
      isBlinking: false,
      isSpeaking: false,
      speechTimer: 0
    };
  }

  initCharacters() {
    // 1. CHINTU - Bright Saffron Kurta, Deep Indigo Trousers, Amber Eyes
    const chintu = this.createStylizedCharacter({
      name: 'Chintu',
      skinColor: 0xe8a773,
      clothesColor: 0xf59e0b, // Saffron yellow
      clothesAccent: 0xd97706,
      pantsColor: 0x1e3a8a,
      hairColor: 0x18181b,
      eyeColor: 0x78350f,
      gender: 'boy',
      scale: 1.05
    });
    chintu.group.position.set(-2.8, -0.15, 0.6);
    chintu.group.rotation.y = Math.PI / 3;
    this.scene.add(chintu.group);
    this.characters['chintu'] = chintu;

    // 2. MEERA - Peacock Cyan/Teal Kurti with Violet accents, Gajra Buns
    const meera = this.createStylizedCharacter({
      name: 'Meera',
      skinColor: 0xe5a16d,
      clothesColor: 0x06b6d4, // Cyan/teal
      clothesAccent: 0x7c3aed,
      pantsColor: 0x6d28d9,
      hairColor: 0x09090b,
      eyeColor: 0x1e293b,
      gender: 'girl',
      scale: 1.0
    });
    meera.group.position.set(2.8, -0.15, 0.6);
    meera.group.rotation.y = -Math.PI / 3;
    this.scene.add(meera.group);
    this.characters['meera'] = meera;

    // 3. GOLU - Chubby friend with Crimson Embroidered Vest, Jade pants
    const golu = this.createStylizedCharacter({
      name: 'Golu',
      skinColor: 0xde9863,
      clothesColor: 0xef4444, // Crimson red
      clothesAccent: 0xb91c1c,
      pantsColor: 0x059669,
      hairColor: 0x27272a,
      eyeColor: 0x451a03,
      gender: 'boy',
      scale: 1.15,
      isChubby: true
    });
    golu.group.position.set(0, -0.1, -2.5);
    golu.group.rotation.y = 0;
    this.scene.add(golu.group);
    this.characters['golu'] = golu;

    // 4. TEACHER (Shanti Ma'am) - Warm classroom teacher in Mustard-Gold & Maroon Indian Saree
    const teacher = this.createStylizedCharacter({
      name: 'Teacher',
      skinColor: 0xe6a36f,
      clothesColor: 0xd97706, // Warm mustard blouse
      clothesAccent: 0x991b1b, // Rich maroon saree with gold zari
      pantsColor: 0x7f1d1d,
      hairColor: 0x18181b,
      eyeColor: 0x451a03,
      gender: 'teacher',
      scale: 1.35
    });
    teacher.group.position.set(-3.5, -0.15, -1.3);
    teacher.group.rotation.y = Math.PI / 4.2;
    this.scene.add(teacher.group);
    this.characters['teacher'] = teacher;
  }

  setFocusTarget(pos) {
    if (pos) this.targetFocus.copy(pos);
  }

  startSpeaking(charKey) {
    const char = this.characters[charKey];
    if (char) {
      char.isSpeaking = true;
      char.speechTimer = 0;
    }
  }

  stopSpeaking(charKey) {
    const char = this.characters[charKey];
    if (char) {
      char.isSpeaking = false;
      char.mouthGroup.scale.set(1.0, 1.0, 1.0);
    }
  }

  setEmotion(charKey, emotion = 'idle') {
    const char = this.characters[charKey];
    if (!char) return;
    char.state = emotion;

    if (emotion === 'happy') {
      char.mouthGroup.scale.set(1.2, 1.3, 1.0);
    } else if (emotion === 'confused') {
      char.mouthGroup.scale.set(0.8, 0.7, 1.0);
    } else {
      char.mouthGroup.scale.set(1.0, 1.0, 1.0);
    }
  }

  celebrateAll() {
    Object.keys(this.characters).forEach(key => this.setEmotion(key, 'happy'));
  }

  confuseAll() {
    Object.keys(this.characters).forEach(key => this.setEmotion(key, 'confused'));
  }

  resetAll() {
    Object.keys(this.characters).forEach(key => {
      this.setEmotion(key, 'idle');
      this.stopSpeaking(key);
    });
  }

  update(delta) {
    Object.values(this.characters).forEach(char => {
      char.animTime += delta;
      const t = char.animTime;

      // Natural eye blinking
      char.blinkTimer -= delta;
      if (char.blinkTimer <= 0) {
        char.isBlinking = true;
        char.leftEyeGroup.userData.eyelid.visible = true;
        char.rightEyeGroup.userData.eyelid.visible = true;
        if (char.blinkTimer <= -0.12) {
          char.leftEyeGroup.userData.eyelid.visible = false;
          char.rightEyeGroup.userData.eyelid.visible = false;
          char.isBlinking = false;
          char.blinkTimer = 2.5 + Math.random() * 4.0;
        }
      }

      // Synchronized Lip-Sync Mouth Animation during Speech
      if (char.isSpeaking) {
        char.speechTimer += delta * 15;
        const mouthOpen = 1.0 + Math.abs(Math.sin(char.speechTimer)) * 0.95;
        char.mouthGroup.scale.set(1.0, mouthOpen, 1.0);
      } else if (char.state === 'idle') {
        char.mouthGroup.scale.set(1.0, 1.0, 1.0);
      }

      // Teacher-specific pedagogical gestures
      if (char.gender === 'teacher') {
        if (char.isSpeaking) {
          // Pointing gracefully towards the table while speaking
          char.headPivot.rotation.x = 0.05 + Math.sin(t * 3) * 0.04;
          char.headPivot.rotation.y = 0.12 + Math.sin(t * 2) * 0.06;
          char.rightArmGroup.rotation.x = 0.85 + Math.sin(t * 2.5) * 0.08;
          char.rightArmGroup.rotation.z = -0.25;
          char.forearmGroupR.rotation.x = -0.35;
          char.leftArmGroup.rotation.x = 0.25;
          char.leftArmGroup.rotation.z = 0.2;
        } else if (char.state === 'happy') {
          // Warm smiling approval & proud hands together / namaste nod
          char.headPivot.rotation.x = 0.12 + Math.sin(t * 5) * 0.05;
          char.rightArmGroup.rotation.x = 0.65;
          char.rightArmGroup.rotation.z = -0.3;
          char.forearmGroupR.rotation.x = -0.7;
          char.leftArmGroup.rotation.x = 0.65;
          char.leftArmGroup.rotation.z = 0.3;
          char.forearmGroupL.rotation.x = -0.7;
        } else {
          // Calm standing poise
          char.headPivot.position.y = 1.85 * char.scale + Math.sin(t * 1.5) * 0.015;
          char.headPivot.rotation.x = 0.08 + Math.sin(t * 1.2) * 0.02;
          char.rightArmGroup.rotation.x = 0.35 + Math.sin(t * 1.5) * 0.03;
          char.rightArmGroup.rotation.z = -0.22;
          char.forearmGroupR.rotation.x = -0.4;
          char.leftArmGroup.rotation.x = 0.25;
          char.leftArmGroup.rotation.z = 0.18;
          char.forearmGroupL.rotation.x = -0.4;
        }
        return;
      }

      // Student Reactions (Chintu, Meera, Golu)
      if (char.state === 'idle') {
        // Natural organic breathing (chest expansion & head rhythm)
        char.headPivot.position.y = 1.48 * char.scale + Math.sin(t * 1.8) * 0.025;
        char.headPivot.rotation.z = Math.sin(t * 0.9) * 0.035;
        char.headPivot.rotation.x = 0.08 + Math.sin(t * 1.4) * 0.025; // Gentle tilt down towards food on table

        // Soft forearm rest on table
        char.leftArmGroup.rotation.z = 0.35 + Math.sin(t * 1.5) * 0.03;
        char.leftArmGroup.rotation.x = 0.3;
        char.forearmGroupL.rotation.x = -0.55;

        char.rightArmGroup.rotation.z = -0.35 - Math.sin(t * 1.5) * 0.03;
        char.rightArmGroup.rotation.x = 0.3;
        char.forearmGroupR.rotation.x = -0.55;

        // Normal relaxed eyebrows
        char.leftEyeGroup.userData.brow.rotation.z = 0.08;
        char.rightEyeGroup.userData.brow.rotation.z = -0.08;

      } else if (char.state === 'happy') {
        // Joyful jumping & celebration arms up!
        char.group.position.y = -0.15 + Math.abs(Math.sin(t * 8)) * 0.22;
        char.headPivot.rotation.x = -0.15 + Math.sin(t * 6) * 0.08;
        char.headPivot.rotation.z = Math.sin(t * 8) * 0.12;

        if (char.gender === 'girl') {
          // Meera claps hands joyfully
          char.leftArmGroup.rotation.x = 0.8 + Math.sin(t * 12) * 0.15;
          char.leftArmGroup.rotation.z = 0.45;
          char.forearmGroupL.rotation.x = -0.8;
          char.rightArmGroup.rotation.x = 0.8 + Math.sin(t * 12) * 0.15;
          char.rightArmGroup.rotation.z = -0.45;
          char.forearmGroupR.rotation.x = -0.8;
        } else {
          // Chintu waves arms high in victory
          char.leftArmGroup.rotation.z = 2.4 + Math.sin(t * 9) * 0.3;
          char.leftArmGroup.rotation.x = 0.2;
          char.forearmGroupL.rotation.x = -0.3;

          char.rightArmGroup.rotation.z = -2.4 - Math.sin(t * 9) * 0.3;
          char.rightArmGroup.rotation.x = 0.2;
          char.forearmGroupR.rotation.x = -0.3;
        }

        // Cheerful raised eyebrows
        char.leftEyeGroup.userData.brow.rotation.z = 0.22;
        char.rightEyeGroup.userData.brow.rotation.z = -0.22;

      } else if (char.state === 'confused') {
        // Scratching head thoughtfully, questioning expression
        char.headPivot.rotation.z = 0.32 + Math.sin(t * 2.5) * 0.08;
        char.headPivot.rotation.y = Math.sin(t * 1.8) * 0.15;

        // Left arm rests, right arm scratches head
        char.leftArmGroup.rotation.z = 0.2;
        char.leftArmGroup.rotation.x = 0.2;

        char.rightArmGroup.rotation.z = -2.1;
        char.rightArmGroup.rotation.x = 0.7;
        char.forearmGroupR.rotation.x = -1.2;

        // Inquisitive asymmetric eyebrows
        char.leftEyeGroup.userData.brow.rotation.z = -0.18;
        char.rightEyeGroup.userData.brow.rotation.z = -0.3;

      } else if (char.state === 'reaching') {
        // Eagerly reaching towards plate
        char.headPivot.rotation.x = 0.25;
        char.leftArmGroup.rotation.x = 1.1 + Math.sin(t * 3) * 0.08;
        char.leftArmGroup.rotation.z = 0.15;
        char.forearmGroupL.rotation.x = -0.35;

        char.rightArmGroup.rotation.x = 1.1 + Math.sin(t * 3) * 0.08;
        char.rightArmGroup.rotation.z = -0.15;
        char.forearmGroupR.rotation.x = -0.35;

      } else if (char.state === 'eating') {
        // Happily enjoying delicious food bite
        char.headPivot.rotation.x = 0.18 + Math.sin(t * 5) * 0.08;
        char.mouthGroup.scale.set(1.15, 1.25, 1.0);
        char.rightArmGroup.rotation.x = 0.95 + Math.sin(t * 4) * 0.1;
        char.rightArmGroup.rotation.z = -0.4;
        char.forearmGroupR.rotation.x = -0.85;
      }
    });
  }
}
