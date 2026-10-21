/**
 * food.js
 * High-Quality 3D Procedural Food & Kitchen Tableware:
 * - Ultra-Realistic 3D Roti:
 *   - Irregular rolled dough perimeter with soft organic boundary
 *   - Genuine puffy bread thickness with blister height variations
 *   - Realistic layered baked surface: toasted tawa blister spots, golden crust, and dusted flour speckles
 *   - Distinct floury interior dough cross-section on cut faces
 * - Genuine 3D Radial Sector Meshes:
 *   - Independent BufferGeometry wedges with top, bottom, curved rim, and sliced side planes
 *   - Outward physical displacement upon cutting
 * - 3D Golden Laddoos:
 *   - Rich saffron spherical sweets with boondi droplets and pistachio flakes
 * - 3D Teakwood Chakla (Cutting board with grain ring grooves and brass accents)
 * - 3D Stainless Steel Plates (Thalis with embossed rims and floating character tags)
 * - 3D Brass Tumblers (Drinking glasses)
 */

import * as THREE from 'three';

// Procedural high-resolution texture generator for authentic Indian Roti
export function createRotiTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Base golden-wheat baked dough gradient
  const grad = ctx.createRadialGradient(512, 512, 60, 512, 512, 512);
  grad.addColorStop(0, '#fef0cf');   // Soft warm center
  grad.addColorStop(0.4, '#f7dfa4'); // Golden wheat
  grad.addColorStop(0.75, '#e5be73'); // Baked crust
  grad.addColorStop(0.92, '#ca9849'); // Tawa toasted rim
  grad.addColorStop(1.0, '#a6722d');  // Crispy outer edge
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1024);

  // Organic flour & atta speckle grain
  const imgData = ctx.getImageData(0, 0, 1024, 1024);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 18;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
  }
  ctx.putImageData(imgData, 0, 0);

  // Authentically distributed toasted blister spots (Tawa chars)
  const spotClusters = 85;
  for (let s = 0; s < spotClusters; s++) {
    const angle = Math.random() * Math.PI * 2;
    // Spread naturally across radius with realistic density
    const dist = Math.pow(Math.random(), 0.65) * 460;
    const x = 512 + Math.cos(angle) * dist;
    const y = 512 + Math.sin(angle) * dist;
    const radius = 6 + Math.random() * 26;

    const spotGrad = ctx.createRadialGradient(x, y, 1, x, y, radius);
    const darkness = Math.random();
    if (darkness > 0.62) {
      // Dark toasted / charred bubble
      spotGrad.addColorStop(0, 'rgba(45, 18, 5, 0.92)');
      spotGrad.addColorStop(0.45, 'rgba(110, 50, 15, 0.7)');
      spotGrad.addColorStop(0.8, 'rgba(175, 100, 35, 0.35)');
      spotGrad.addColorStop(1, 'rgba(210, 150, 70, 0)');
    } else if (darkness > 0.3) {
      // Golden-brown puffed spot
      spotGrad.addColorStop(0, 'rgba(145, 75, 20, 0.85)');
      spotGrad.addColorStop(0.5, 'rgba(195, 125, 45, 0.5)');
      spotGrad.addColorStop(1, 'rgba(235, 180, 90, 0)');
    } else {
      // Light blister ring
      spotGrad.addColorStop(0, 'rgba(215, 150, 65, 0.7)');
      spotGrad.addColorStop(0.6, 'rgba(240, 195, 115, 0.4)');
      spotGrad.addColorStop(1, 'rgba(255, 235, 175, 0)');
    }

    ctx.fillStyle = spotGrad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Dusted flour patches (white flour dusting on top surface)
  for (let f = 0; f < 12; f++) {
    const fx = 200 + Math.random() * 624;
    const fy = 200 + Math.random() * 624;
    const fr = 20 + Math.random() * 50;
    const flourGrad = ctx.createRadialGradient(fx, fy, 2, fx, fy, fr);
    flourGrad.addColorStop(0, 'rgba(255, 255, 245, 0.35)');
    flourGrad.addColorStop(1, 'rgba(255, 255, 245, 0)');
    ctx.fillStyle = flourGrad;
    ctx.beginPath();
    ctx.arc(fx, fy, fr, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Procedural texture for Laddoo sweet
export function createLaddooTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base saffron-amber
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(0, 0, 512, 512);

  // Tiny boondi droplets & pistachio garnish
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = 3 + Math.random() * 7;
    const isPistachio = Math.random() > 0.93;
    const isAlmond = Math.random() > 0.97;

    if (isPistachio) {
      ctx.fillStyle = '#22c55e'; // Bright emerald pistachio
    } else if (isAlmond) {
      ctx.fillStyle = '#fef3c7'; // Creamy almond sliver
    } else {
      ctx.fillStyle = Math.random() > 0.5 ? '#d97706' : '#fbbf24';
    }
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

/**
 * Creates genuine 3D Roti Wedge (Sector) BufferGeometry
 * With realistic bread thickness, organic wavy dough edges, and puffed volume
 */
export function createRotiSectorGeometry(radius = 1.35, thickness = 0.055, startAngle = 0, angleSpan = Math.PI, segments = 36) {
  const vertices = [];
  const normals = [];
  const uvs = [];
  const indices = [];

  const halfT = thickness / 2;
  const numCurvedPoints = Math.max(5, Math.ceil(segments * (angleSpan / (2 * Math.PI))));

  // Center top vertex (index 0)
  const centerTopIndex = 0;
  vertices.push(0, halfT + 0.012, 0); // slight dome puffed center
  normals.push(0, 1, 0);
  uvs.push(0.5, 0.5);

  // Center bottom vertex (index 1)
  const centerBottomIndex = 1;
  vertices.push(0, -halfT, 0);
  normals.push(0, -1, 0);
  uvs.push(0.5, 0.5);

  let currentIndex = 2;
  const topPerimeterIndices = [];
  const bottomPerimeterIndices = [];

  // Generate perimeter vertices around the sector arc
  for (let i = 0; i <= numCurvedPoints; i++) {
    const fraction = i / numCurvedPoints;
    const currentAngle = startAngle + fraction * angleSpan;

    // Organic hand-rolled edge wave
    const rWobble = radius * (1.0 + Math.sin(currentAngle * 7) * 0.018 + Math.cos(currentAngle * 13) * 0.008);
    const x = Math.cos(currentAngle) * rWobble;
    const z = Math.sin(currentAngle) * rWobble;

    // Top surface perimeter: soft bread dome variation
    const yTop = halfT + Math.sin(fraction * Math.PI) * 0.012 + Math.sin(currentAngle * 5) * 0.004;
    vertices.push(x, yTop, z);
    normals.push(0, 1, 0);

    const u = 0.5 + 0.5 * (x / radius);
    const v = 0.5 + 0.5 * (z / radius);
    uvs.push(u, v);
    topPerimeterIndices.push(currentIndex);
    currentIndex++;

    // Bottom perimeter vertex
    vertices.push(x, -halfT, z);
    normals.push(0, -1, 0);
    uvs.push(u, v);
    bottomPerimeterIndices.push(currentIndex);
    currentIndex++;
  }

  // 1. Top Surface Triangles (Fan from center)
  for (let i = 0; i < topPerimeterIndices.length - 1; i++) {
    indices.push(centerTopIndex, topPerimeterIndices[i], topPerimeterIndices[i + 1]);
  }

  // 2. Bottom Surface Triangles (Fan from center, reversed winding)
  for (let i = 0; i < bottomPerimeterIndices.length - 1; i++) {
    indices.push(centerBottomIndex, bottomPerimeterIndices[i + 1], bottomPerimeterIndices[i]);
  }

  // 3. Radial Cut Faces (Only for genuine sliced sectors, not for full uncut circle)
  if (angleSpan < Math.PI * 2 - 0.001) {
    const startTop = topPerimeterIndices[0];
    const startBottom = bottomPerimeterIndices[0];
    indices.push(centerTopIndex, centerBottomIndex, startTop);
    indices.push(centerBottomIndex, startBottom, startTop);

    const endTop = topPerimeterIndices[topPerimeterIndices.length - 1];
    const endBottom = bottomPerimeterIndices[bottomPerimeterIndices.length - 1];
    indices.push(centerTopIndex, endTop, centerBottomIndex);
    indices.push(centerBottomIndex, endTop, endBottom);
  }

  // 5. Outer Curved Rim (Quads along the arc)
  for (let i = 0; i < topPerimeterIndices.length - 1; i++) {
    const topCurr = topPerimeterIndices[i];
    const topNext = topPerimeterIndices[i + 1];
    const botCurr = bottomPerimeterIndices[i];
    const botNext = bottomPerimeterIndices[i + 1];

    indices.push(topCurr, botCurr, topNext);
    indices.push(botCurr, botNext, topNext);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

/**
 * Creates a single 3D sector mesh with material, fraction metadata, and interaction support
 */
export function createRotiSectorMesh(rotiTexture, {
  radius = 1.35,
  thickness = 0.055,
  startAngle = 0,
  angleSpan = Math.PI,
  numerator = 1,
  denominator = 2,
  id = 0
} = {}) {
  const geometry = createRotiSectorGeometry(radius, thickness, startAngle, angleSpan, 40);

  const material = new THREE.MeshStandardMaterial({
    map: rotiTexture,
    roughness: 0.82,
    metalness: 0.04,
    bumpMap: rotiTexture,
    bumpScale: 0.02,
    side: THREE.DoubleSide
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  // Custom metadata for fraction logic and interactions
  mesh.userData = {
    type: 'roti-piece',
    id,
    startAngle,
    angleSpan,
    numerator,
    denominator,
    fractionValue: numerator / denominator,
    fractionString: `${numerator}/${denominator}`,
    originalPosition: new THREE.Vector3(0, 0, 0),
    plateAssigned: null,
    isSelected: false,
    radius,
    centerAngle: startAngle + angleSpan / 2
  };

  return mesh;
}

/**
 * Creates the complete Indian Kitchen cutting board (Chakla)
 */
export function createCuttingBoard() {
  const group = new THREE.Group();
  group.name = "cutting-board";

  const boardRadius = 1.7;
  const boardHeight = 0.1;
  const boardGeo = new THREE.CylinderGeometry(boardRadius, boardRadius * 1.03, boardHeight, 48);

  const boardMat = new THREE.MeshStandardMaterial({
    color: 0x92400e, // Warm carved teakwood
    roughness: 0.65,
    metalness: 0.08
  });
  const boardMesh = new THREE.Mesh(boardGeo, boardMat);
  boardMesh.position.y = boardHeight / 2;
  boardMesh.receiveShadow = true;
  boardMesh.castShadow = true;
  group.add(boardMesh);

  // Brass feet under cutting board
  for (let f = 0; f < 3; f++) {
    const angle = (f / 3) * Math.PI * 2;
    const footGeo = new THREE.CylinderGeometry(0.12, 0.08, 0.06, 16);
    const footMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.85, roughness: 0.25 });
    const foot = new THREE.Mesh(footGeo, footMat);
    foot.position.set(Math.cos(angle) * 1.25, 0.03, Math.sin(angle) * 1.25);
    foot.castShadow = true;
    group.add(foot);
  }

  // Handle
  const handleGeo = new THREE.BoxGeometry(0.38, boardHeight * 0.75, 0.75);
  const handleMesh = new THREE.Mesh(handleGeo, boardMat);
  handleMesh.position.set(0, boardHeight / 2, -boardRadius - 0.28);
  handleMesh.castShadow = true;
  group.add(handleMesh);

  // Concentric groove in wood
  const ringGeo = new THREE.TorusGeometry(1.52, 0.018, 12, 48);
  const ringMat = new THREE.MeshStandardMaterial({ color: 0x542308, roughness: 0.8 });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 2;
  ringMesh.position.y = boardHeight + 0.002;
  group.add(ringMesh);

  return group;
}

/**
 * Creates a text canvas badge sprite for plates
 */
export function createTextBadge(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 80;
  const ctx = canvas.getContext('2d');

  const x = 8, y = 8, w = 240, h = 64, r = 16;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
  }
  ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
  ctx.fill();

  ctx.strokeStyle = '#b45309';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.font = 'bold 30px Fredoka, Quicksand, sans-serif';
  ctx.fillStyle = '#78350f';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 40);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({ map: texture, depthTest: false });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(1.15, 0.36, 1);
  return sprite;
}

/**
 * Creates an Indian Thali / Plate
 */
export function createPlate(label = "Chintu's Plate", color = 0xd1d5db) {
  const group = new THREE.Group();
  group.name = `plate-${label}`;

  const radius = 0.98;
  const baseGeo = new THREE.CylinderGeometry(radius, radius * 0.9, 0.045, 36);
  const plateMat = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.75, // polished stainless steel thali
    roughness: 0.25
  });
  const plateMesh = new THREE.Mesh(baseGeo, plateMat);
  plateMesh.position.y = 0.022;
  plateMesh.receiveShadow = true;
  group.add(plateMesh);

  // Plate Rim
  const rimGeo = new THREE.TorusGeometry(radius * 0.98, 0.035, 12, 36);
  const rimMesh = new THREE.Mesh(rimGeo, plateMat);
  rimMesh.rotation.x = Math.PI / 2;
  rimMesh.position.y = 0.045;
  rimMesh.receiveShadow = true;
  group.add(rimMesh);

  // Traditional small brass water tumbler (Lota/Glass) beside each plate
  const glassGeo = new THREE.CylinderGeometry(0.18, 0.14, 0.42, 16);
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.85, roughness: 0.25 });
  const glass = new THREE.Mesh(glassGeo, brassMat);
  glass.position.set(radius + 0.28, 0.21, -0.2);
  glass.castShadow = true;
  group.add(glass);

  group.userData = {
    type: 'plate',
    label,
    allocatedPieces: []
  };

  return group;
}

/**
 * Creates 3D Laddoo model
 */
export function createLaddoo(radius = 0.35, texture = null) {
  const geo = new THREE.DodecahedronGeometry(radius, 2);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    roughness: 0.85,
    metalness: 0.05,
    map: texture || null
  });
  const laddoo = new THREE.Mesh(geo, mat);
  laddoo.castShadow = true;
  laddoo.receiveShadow = true;
  laddoo.userData = {
    type: 'laddoo',
    radius
  };
  return laddoo;
}

/**
 * Procedural texture for 3D Pizza (Creative Kitchen mode)
 */
export function createPizzaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Outer toasted crust
  const crustGrad = ctx.createRadialGradient(512, 512, 420, 512, 512, 512);
  crustGrad.addColorStop(0, '#fde047');
  crustGrad.addColorStop(0.85, '#d97706');
  crustGrad.addColorStop(1, '#92400e');
  ctx.fillStyle = crustGrad;
  ctx.fillRect(0, 0, 1024, 1024);

  // Tomato sauce base
  ctx.fillStyle = '#b91c1c';
  ctx.beginPath();
  ctx.arc(512, 512, 450, 0, Math.PI * 2);
  ctx.fill();

  // Melted mozzarella layer
  const cheeseGrad = ctx.createRadialGradient(512, 512, 50, 512, 512, 440);
  cheeseGrad.addColorStop(0, '#fef08a');
  cheeseGrad.addColorStop(0.7, '#fde047');
  cheeseGrad.addColorStop(0.95, '#eab308');
  cheeseGrad.addColorStop(1.0, '#ca8a04');
  ctx.fillStyle = cheeseGrad;
  ctx.beginPath();
  ctx.arc(512, 512, 435, 0, Math.PI * 2);
  ctx.fill();

  // Toasted cheese spots
  for (let i = 0; i < 40; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 380;
    const x = 512 + Math.cos(angle) * r;
    const y = 512 + Math.sin(angle) * r;
    ctx.fillStyle = 'rgba(161, 98, 7, 0.65)';
    ctx.beginPath();
    ctx.arc(x, y, 6 + Math.random() * 14, 0, Math.PI * 2);
    ctx.fill();
  }

  // Bell peppers & Basil
  for (let i = 0; i < 28; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = 60 + Math.random() * 340;
    const x = 512 + Math.cos(angle) * r;
    const y = 512 + Math.sin(angle) * r;
    ctx.fillStyle = '#15803d'; // Green pepper
    ctx.beginPath();
    ctx.arc(x, y, 14, 0.4, 2.8);
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#166534';
    ctx.stroke();
  }

  // Black olives
  for (let i = 0; i < 22; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = 50 + Math.random() * 350;
    const x = 512 + Math.cos(angle) * r;
    const y = 512 + Math.sin(angle) * r;
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(x, y, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fde047';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Procedural texture for 3D Pancake (Creative Kitchen mode)
 */
export function createPancakeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Fluffy golden pancake gradient
  const grad = ctx.createRadialGradient(512, 512, 80, 512, 512, 512);
  grad.addColorStop(0, '#fed7aa');
  grad.addColorStop(0.5, '#fbbf24');
  grad.addColorStop(0.85, '#d97706');
  grad.addColorStop(1, '#92400e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1024);

  // Maple syrup pool
  const syrupGrad = ctx.createRadialGradient(512, 512, 20, 512, 512, 320);
  syrupGrad.addColorStop(0, 'rgba(180, 83, 9, 0.85)');
  syrupGrad.addColorStop(0.6, 'rgba(217, 119, 6, 0.6)');
  syrupGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
  ctx.fillStyle = syrupGrad;
  ctx.beginPath();
  ctx.arc(512, 512, 320, 0, Math.PI * 2);
  ctx.fill();

  // Melting butter square
  ctx.fillStyle = '#fde047';
  ctx.fillRect(440, 440, 144, 144);
  ctx.fillStyle = 'rgba(254, 240, 138, 0.8)';
  ctx.fillRect(455, 455, 114, 114);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Creates 3D food sector mesh for any food type (Roti, Pizza, Pancake)
 */
export function createFoodSectorMesh(foodType, texture, options) {
  const mesh = createRotiSectorMesh(texture, options);
  mesh.userData.foodType = foodType;
  return mesh;
}

