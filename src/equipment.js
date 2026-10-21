/**
 * equipment.js
 * Interactive 3D Game Equipment for Roti Share:
 * 1. Butter Knife - Child-friendly wooden handle + rounded stainless/brass butter blade.
 * 2. Serving Spatula - Wooden handle + flat angled lifting spatula.
 * 3. 3D Angle Measuring Tool / Protractor - Visual degrees arc + fraction sector overlay.
 * 4. 3D Balance Scale - Working brass scale with fulcrum, balance beam, pans, and realistic torque tilting.
 * 5. Interactive Fraction Tiles - 3D colorful labeled tiles (1/2, 1/3, 1/4, 2/4, 3/4, 1/8).
 * 6. Plate Fraction Display Badges - Dynamic canvas labels for each friend's plate.
 */

import * as THREE from 'three';

/**
 * Creates a child-friendly 3D Butter Knife
 */
export function createButterKnife() {
  const knifeGroup = new THREE.Group();
  knifeGroup.name = 'butterKnife';

  // Wooden contoured handle
  const handleGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.75, 16);
  const handleMat = new THREE.MeshStandardMaterial({
    color: 0x8b4513,
    roughness: 0.5,
    metalness: 0.1
  });
  const handle = new THREE.Mesh(handleGeo, handleMat);
  handle.position.y = -0.38;
  handle.castShadow = true;
  knifeGroup.add(handle);

  // Brass bolster ring
  const bolsterGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.06, 16);
  const brassMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.25,
    metalness: 0.8
  });
  const bolster = new THREE.Mesh(bolsterGeo, brassMat);
  bolster.position.y = 0.01;
  bolster.castShadow = true;
  knifeGroup.add(bolster);

  // Child-friendly rounded butter blade (safe rounded tip)
  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(0, 0);
  bladeShape.lineTo(0.08, 0.1);
  bladeShape.lineTo(0.08, 0.9);
  bladeShape.quadraticCurveTo(0.06, 1.05, 0, 1.05); // Rounded tip
  bladeShape.quadraticCurveTo(-0.06, 1.05, -0.06, 0.9);
  bladeShape.lineTo(-0.06, 0.1);
  bladeShape.closePath();

  const extrudeSettings = {
    steps: 1,
    depth: 0.02,
    bevelEnabled: true,
    bevelThickness: 0.01,
    bevelSize: 0.01,
    bevelSegments: 3
  };

  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, extrudeSettings);
  bladeGeo.center();
  const steelMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    roughness: 0.2,
    metalness: 0.85
  });
  const blade = new THREE.Mesh(bladeGeo, steelMat);
  blade.position.y = 0.55;
  blade.castShadow = true;
  knifeGroup.add(blade);

  knifeGroup.scale.set(0.9, 0.9, 0.9);
  return knifeGroup;
}

/**
 * Creates a 3D Serving Spatula for picking up and placing roti slices
 */
export function createServingSpatula() {
  const spatulaGroup = new THREE.Group();
  spatulaGroup.name = 'servingSpatula';

  // Wooden handle
  const handleGeo = new THREE.CylinderGeometry(0.05, 0.07, 0.85, 16);
  const handleMat = new THREE.MeshStandardMaterial({
    color: 0x9a3412,
    roughness: 0.45,
    metalness: 0.1
  });
  const handle = new THREE.Mesh(handleGeo, handleMat);
  handle.position.y = -0.42;
  handle.castShadow = true;
  spatulaGroup.add(handle);

  // Brass ferrule
  const ferruleGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.08, 16);
  const brassMat = new THREE.MeshStandardMaterial({
    color: 0xfbbf24,
    roughness: 0.2,
    metalness: 0.85
  });
  const ferrule = new THREE.Mesh(ferruleGeo, brassMat);
  ferrule.position.y = 0.02;
  spatulaGroup.add(ferrule);

  // Angled neck
  const neckGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.35, 12);
  const steelMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    roughness: 0.25,
    metalness: 0.85
  });
  const neck = new THREE.Mesh(neckGeo, steelMat);
  neck.position.set(0, 0.2, 0.06);
  neck.rotation.x = 0.35;
  neck.castShadow = true;
  spatulaGroup.add(neck);

  // Wide flat spatula blade with rounded corners
  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(-0.24, 0);
  bladeShape.lineTo(0.24, 0);
  bladeShape.lineTo(0.26, 0.55);
  bladeShape.quadraticCurveTo(0.24, 0.62, 0.18, 0.62);
  bladeShape.lineTo(-0.18, 0.62);
  bladeShape.quadraticCurveTo(-0.24, 0.62, -0.26, 0.55);
  bladeShape.closePath();

  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, {
    depth: 0.015,
    bevelEnabled: true,
    bevelThickness: 0.005,
    bevelSize: 0.005,
    bevelSegments: 2
  });
  const blade = new THREE.Mesh(bladeGeo, steelMat);
  blade.position.set(0, 0.32, 0.14);
  blade.rotation.x = -0.2;
  blade.castShadow = true;
  spatulaGroup.add(blade);

  // Perforated slot holes on spatula blade
  for (let i = -1; i <= 1; i++) {
    const slotGeo = new THREE.BoxGeometry(0.04, 0.25, 0.02);
    const slotMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3 });
    const slot = new THREE.Mesh(slotGeo, slotMat);
    slot.position.set(i * 0.1, 0.55, 0.17);
    slot.rotation.x = -0.2;
    spatulaGroup.add(slot);
  }

  spatulaGroup.scale.set(0.9, 0.9, 0.9);
  return spatulaGroup;
}

/**
 * Creates an interactive 3D Protractor / Angle Measuring Tool
 */
export function createAngleMeasuringTool() {
  const toolGroup = new THREE.Group();
  toolGroup.name = 'measuringTool';

  // Brass semi-circular transparent arc
  const arcGeo = new THREE.RingGeometry(1.2, 1.48, 48, 1, 0, Math.PI * 2);
  const arcMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.7,
    roughness: 0.3,
    side: THREE.DoubleSide
  });
  const arcMesh = new THREE.Mesh(arcGeo, arcMat);
  arcMesh.rotation.x = -Math.PI / 2;
  toolGroup.add(arcMesh);

  // Inner degree graduations (marks for 45, 60, 90, 120, 180 deg)
  const keyAngles = [
    { deg: 45, label: '1/8 (45°)' },
    { deg: 60, label: '1/6 (60°)' },
    { deg: 90, label: '1/4 (90°)' },
    { deg: 120, label: '1/3 (120°)' },
    { deg: 180, label: '1/2 (180°)' }
  ];

  keyAngles.forEach(({ deg }) => {
    const rad = (deg * Math.PI) / 180;
    const pinGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.35, 8);
    const pinMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.2 });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.set(Math.cos(rad) * 1.35, 0.02, Math.sin(rad) * 1.35);
    toolGroup.add(pin);
  });

  // Dynamic floating degree canvas tag
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.roundRect(4, 4, 248, 120, 18);
  ctx.fill();
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.fillStyle = '#78350f';
  ctx.font = 'bold 36px Fredoka, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Measure Tool', 128, 52);
  ctx.font = 'bold 28px Quicksand, sans-serif';
  ctx.fillStyle = '#059669';
  ctx.fillText('Select any piece', 128, 95);

  const texture = new THREE.CanvasTexture(canvas);
  const tagMat = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(tagMat);
  sprite.scale.set(1.2, 0.6, 1);
  sprite.position.set(0, 0.6, 0);
  toolGroup.add(sprite);

  toolGroup.updateMeasurement = (angleRad, fractionStr) => {
    const deg = Math.round((angleRad * 180) / Math.PI);
    ctx.clearRect(0, 0, 256, 128);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.roundRect(4, 4, 248, 120, 18);
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fillStyle = '#b45309';
    ctx.font = 'bold 44px Fredoka, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${fractionStr}`, 128, 52);

    ctx.font = 'bold 30px Quicksand, sans-serif';
    ctx.fillStyle = '#10b981';
    ctx.fillText(`${deg}° Sector`, 128, 96);
    texture.needsUpdate = true;
  };

  return toolGroup;
}

/**
 * Creates a functional 3D Balance Scale that tilts according to fraction weights
 */
export function createBalanceScale() {
  const scaleGroup = new THREE.Group();
  scaleGroup.name = 'balanceScale';

  const brassMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.25,
    metalness: 0.85
  });

  const darkBrassMat = new THREE.MeshStandardMaterial({
    color: 0x996515,
    roughness: 0.35,
    metalness: 0.8
  });

  // Base stand
  const baseGeo = new THREE.CylinderGeometry(0.5, 0.65, 0.12, 32);
  const base = new THREE.Mesh(baseGeo, darkBrassMat);
  base.position.y = 0.06;
  base.castShadow = true;
  base.receiveShadow = true;
  scaleGroup.add(base);

  // Central vertical pillar
  const pillarGeo = new THREE.CylinderGeometry(0.06, 0.08, 1.8, 16);
  const pillar = new THREE.Mesh(pillarGeo, brassMat);
  pillar.position.y = 1.0;
  pillar.castShadow = true;
  scaleGroup.add(pillar);

  // Top fulcrum ornament / pivot needle
  const fulcrumGeo = new THREE.ConeGeometry(0.12, 0.25, 16);
  const fulcrum = new THREE.Mesh(fulcrumGeo, brassMat);
  fulcrum.position.y = 1.95;
  scaleGroup.add(fulcrum);

  // Rotating Crossbeam Assembly
  const beamPivot = new THREE.Group();
  beamPivot.position.set(0, 1.85, 0);
  scaleGroup.add(beamPivot);

  // Horizontal Crossbeam
  const beamArmGeo = new THREE.BoxGeometry(2.4, 0.06, 0.06);
  const beamArm = new THREE.Mesh(beamArmGeo, brassMat);
  beamArm.castShadow = true;
  beamPivot.add(beamArm);

  // Center indicator needle
  const needleGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.5, 8);
  const needleMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.5 });
  const needle = new THREE.Mesh(needleGeo, needleMat);
  needle.position.y = -0.25;
  beamPivot.add(needle);

  // Left & Right Suspension Pans
  function createPanAssembly(xOffset) {
    const panGroup = new THREE.Group();
    panGroup.position.set(xOffset, 0, 0);

    // 3 fine suspension chains / wires
    for (let c = 0; c < 3; c++) {
      const angle = (c * Math.PI * 2) / 3;
      const chainGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.75, 6);
      const chain = new THREE.Mesh(chainGeo, brassMat);
      chain.position.set(Math.cos(angle) * 0.32, -0.38, Math.sin(angle) * 0.32);
      panGroup.add(chain);
    }

    // Dish / Pan
    const dishGeo = new THREE.CylinderGeometry(0.42, 0.34, 0.05, 32);
    const dish = new THREE.Mesh(dishGeo, brassMat);
    dish.position.y = -0.75;
    dish.castShadow = true;
    dish.receiveShadow = true;
    panGroup.add(dish);

    return panGroup;
  }

  const leftPan = createPanAssembly(-1.1);
  const rightPan = createPanAssembly(1.1);
  beamPivot.add(leftPan);
  beamPivot.add(rightPan);

  // Target and current tilt angle
  let currentTilt = 0;
  let targetTilt = 0;
  let leftWeight = 0;
  let rightWeight = 0;

  scaleGroup.setWeights = (leftVal, rightVal) => {
    leftWeight = leftVal;
    rightWeight = rightVal;
    const diff = leftVal - rightVal;
    // Max tilt angle = ~18 degrees (0.31 radians)
    targetTilt = THREE.MathUtils.clamp(diff * 0.6, -0.32, 0.32);
  };

  scaleGroup.updateAnimation = (delta = 0.016) => {
    // Smooth damped spring motion towards target tilt
    currentTilt += (targetTilt - currentTilt) * 4.5 * delta;
    beamPivot.rotation.z = currentTilt;
    // Keep pans hanging vertically under gravity
    leftPan.rotation.z = -currentTilt;
    rightPan.rotation.z = -currentTilt;
  };

  scaleGroup.getTiltState = () => {
    if (Math.abs(leftWeight - rightWeight) < 1e-4) return 'balanced';
    return leftWeight > rightWeight ? 'left_heavy' : 'right_heavy';
  };

  scaleGroup.scale.set(0.85, 0.85, 0.85);
  return scaleGroup;
}

/**
 * Creates 3D Interactive Fraction Tiles Rack
 */
export function createFractionTilesRack() {
  const rackGroup = new THREE.Group();
  rackGroup.name = 'fractionTilesRack';

  // Wooden grooved display tray
  const trayGeo = new THREE.BoxGeometry(2.8, 0.08, 0.7);
  const trayMat = new THREE.MeshStandardMaterial({
    color: 0x5c2e0b,
    roughness: 0.6
  });
  const tray = new THREE.Mesh(trayGeo, trayMat);
  tray.receiveShadow = true;
  rackGroup.add(tray);

  const tileDefs = [
    { fraction: '1/2', val: 0.5, color: '#0ea5e9' },
    { fraction: '1/3', val: 1 / 3, color: '#10b981' },
    { fraction: '1/4', val: 0.25, color: '#f59e0b' },
    { fraction: '2/4', val: 0.5, color: '#8b5cf6' },
    { fraction: '3/4', val: 0.75, color: '#f97316' },
    { fraction: '1/8', val: 0.125, color: '#14b8a6' }
  ];

  const tiles = [];

  tileDefs.forEach((def, idx) => {
    const tileMeshGroup = new THREE.Group();
    const xPos = -1.15 + idx * 0.46;

    // Tile block geometry
    const tileGeo = new THREE.BoxGeometry(0.38, 0.48, 0.06);
    const tileMat = new THREE.MeshStandardMaterial({
      color: def.color,
      roughness: 0.35,
      metalness: 0.15
    });
    const block = new THREE.Mesh(tileGeo, tileMat);
    block.castShadow = true;
    tileMeshGroup.add(block);

    // Label on front of tile
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = def.color;
    ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 58px Fredoka, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(def.fraction, 64, 82);

    const tex = new THREE.CanvasTexture(canvas);
    const labelGeo = new THREE.PlaneGeometry(0.34, 0.34);
    const labelMat = new THREE.MeshBasicMaterial({ map: tex });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.z = 0.032;
    tileMeshGroup.add(labelMesh);

    tileMeshGroup.position.set(xPos, 0.28, 0);
    tileMeshGroup.rotation.x = -0.15; // Slightly tilted back for easy reading
    tileMeshGroup.userData = {
      isFractionTile: true,
      fraction: def.fraction,
      value: def.val
    };

    rackGroup.add(tileMeshGroup);
    tiles.push(tileMeshGroup);
  });

  rackGroup.tiles = tiles;
  rackGroup.scale.set(0.85, 0.85, 0.85);
  return rackGroup;
}

/**
 * Creates dynamic 3D Plate Name & Fraction Total Tag
 */
export function createPlateLabelTag(friendName, initialFraction = '0') {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  function render(fractionText) {
    ctx.clearRect(0, 0, 256, 128);
    // Translucent background
    ctx.fillStyle = 'rgba(35, 18, 7, 0.88)';
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(6, 6, 244, 116, 20);
      ctx.fill();
    } else {
      ctx.beginPath();
      const x = 6, y = 6, w = 244, h = 116, r = 20;
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.fill();
    }
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Friend Name
    ctx.fillStyle = '#fde68a';
    ctx.font = 'bold 38px Fredoka, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(friendName, 128, 52);

    // Served Fraction Amount
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 36px Quicksand, sans-serif';
    ctx.fillText(`Share: ${fractionText}`, 128, 96);
  }

  render(initialFraction);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(0.9, 0.45, 1);

  sprite.updateFraction = (fractionStr) => {
    render(fractionStr);
    texture.needsUpdate = true;
  };

  return sprite;
}
