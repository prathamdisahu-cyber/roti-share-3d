/**
 * characters.js
 * Adorable, High-Quality 3D Cartoon Indian Schoolchildren for Roti Share:
 * 1. CHINTU  - Lovable schoolboy in bright sunny saffron kurta, styled side-part wave fringe, expressive warm brown eyes.
 * 2. MEERA   - Cheerful schoolgirl in peacock teal kurti with violet/pink floral accents, twin side buns with jasmine flower gajras, and sweet bindi.
 * 3. GOLU    - Happy chubby school friend in crimson embroidered waistcoat, cute rounded cheeks, and bright smile.
 * 4. PRIYA   - Sweet schoolgirl friend in sunflower yellow kurti with braided ponytail and red ribbon.
 * 5. KABIR   - Smart schoolboy friend in sky blue kurta with neat tapered haircut.
 *
 * Core Features:
 * - Cute stylized cartoon proportions (warm Disney/Pixar-inspired friendly appeal).
 * - Button nose, rosy blushing cheeks, sweet smiling mouth, and expressive cartoon eyes with sparkling dual highlights.
 * - Dynamic 3D lip-sync speech scaling synchronized with VoiceSystem speech.
 * - Natural eye blinking, breathing, smiling, and idle head bobbing.
 * - Seated comfortably at the dining table on carved wooden chairs with hands resting gently on the table.
 * - Exact character count matching: displays ONLY the exact friends participating in the current level.
 * - Cheerful celebration (arm waving, clapping), puzzled head-scratching, and welcoming home-page wave.
 */

import * as THREE from 'three';

export class CharacterSystem {
  constructor(scene) {
    this.scene = scene;
    this.characters = {};
    this.activeFriendNames = ['chintu', 'meera'];
    this.targetFocus = new THREE.Vector3(0, 0.12, 0);
    this.initCharacters();
  }

  createStylizedCharacter({
    name,
    skinColor = 0xf5b888,
    clothesColor = 0xf59e0b,
    clothesAccent = 0xd97706,
    pantsColor = 0x1e3a8a,
    shoeColor = 0x27272a,
    hairColor = 0x18181b,
    eyeColor = 0x54260d,
    gender = 'boy',
    scale = 1.0,
    isChubby = false
  }) {
    const root = new THREE.Group();
    root.name = `character-${name}`;

    // Soft, velvety PBR cartoon materials with warm lighting response
    const skinMat = new THREE.MeshStandardMaterial({
      color: skinColor,
      roughness: 0.42,
      metalness: 0.02
    });
    const clothesMat = new THREE.MeshStandardMaterial({
      color: clothesColor,
      roughness: 0.58,
      metalness: 0.04
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: clothesAccent,
      roughness: 0.52,
      metalness: 0.12
    });
    const pantsMat = new THREE.MeshStandardMaterial({
      color: pantsColor,
      roughness: 0.72
    });
    const shoeMat = new THREE.MeshStandardMaterial({
      color: shoeColor,
      roughness: 0.45,
      metalness: 0.08
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: hairColor,
      roughness: 0.78
    });
    const chairMat = new THREE.MeshStandardMaterial({
      color: 0x6e3609,
      roughness: 0.52,
      metalness: 0.06
    });
    const eyeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15
    });
    const irisMat = new THREE.MeshStandardMaterial({
      color: eyeColor,
      roughness: 0.22,
      metalness: 0.06
    });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x09090b });
    const highlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const s = scale;
    const bodyRadius = (isChubby ? 0.34 : 0.27) * s;
    const bodyHeight = 0.62 * s;

    // ==========================================
    // 1. CARVED WOODEN DINING CHAIR
    // ==========================================
    const chairGroup = new THREE.Group();
    const seatY = 0.52 * s;

    // Seat
    const seatGeo = new THREE.BoxGeometry(0.58 * s, 0.05 * s, 0.56 * s);
    const seat = new THREE.Mesh(seatGeo, chairMat);
    seat.position.set(0, seatY, -0.05 * s);
    seat.castShadow = true;
    chairGroup.add(seat);

    // Backrest posts
    const backrestPostGeo = new THREE.CylinderGeometry(0.024 * s, 0.024 * s, 0.65 * s, 8);
    const backLeft = new THREE.Mesh(backrestPostGeo, chairMat);
    backLeft.position.set(-0.25 * s, seatY + 0.32 * s, -0.31 * s);
    chairGroup.add(backLeft);

    const backRight = new THREE.Mesh(backrestPostGeo, chairMat);
    backRight.position.set(0.25 * s, seatY + 0.32 * s, -0.31 * s);
    chairGroup.add(backRight);

    // Top curved crest rail
    const topRailGeo = new THREE.BoxGeometry(0.56 * s, 0.06 * s, 0.04 * s);
    const topRail = new THREE.Mesh(topRailGeo, chairMat);
    topRail.position.set(0, seatY + 0.62 * s, -0.31 * s);
    chairGroup.add(topRail);

    // Spindles
    for (let sp = -1; sp <= 1; sp++) {
      const spindleGeo = new THREE.CylinderGeometry(0.015 * s, 0.015 * s, 0.54 * s, 6);
      const spindle = new THREE.Mesh(spindleGeo, chairMat);
      spindle.position.set(sp * 0.12 * s, seatY + 0.28 * s, -0.31 * s);
      chairGroup.add(spindle);
    }

    // Chair legs
    const chairLegGeo = new THREE.CylinderGeometry(0.028 * s, 0.022 * s, seatY, 8);
    [
      [-0.24, -seatY / 2, -0.28],
      [0.24, -seatY / 2, -0.28],
      [-0.24, -seatY / 2, 0.18],
      [0.24, -seatY / 2, 0.18]
    ].forEach(([cx, cy, cz]) => {
      const leg = new THREE.Mesh(chairLegGeo, chairMat);
      leg.position.set(cx * s, cy + seatY, cz * s);
      leg.castShadow = true;
      chairGroup.add(leg);
    });
    root.add(chairGroup);

    // ==========================================
    // 2. SEATED LOWER BODY & LEGS
    // ==========================================
    const legsGroup = new THREE.Group();
    legsGroup.position.set(0, seatY, 0);

    const legRadius = 0.075 * s;
    const thighLength = 0.36 * s;
    const shinLength = 0.44 * s;

    [-0.13 * s, 0.13 * s].forEach((lx) => {
      // Thigh resting horizontally on chair forward
      const thighGeo = new THREE.CylinderGeometry(legRadius, legRadius * 0.95, thighLength, 12);
      const thigh = new THREE.Mesh(thighGeo, pantsMat);
      thigh.rotation.x = Math.PI / 2;
      thigh.position.set(lx, 0.07 * s, thighLength / 2);
      thigh.castShadow = true;
      legsGroup.add(thigh);

      // Shin hanging vertically down
      const shinGeo = new THREE.CylinderGeometry(legRadius * 0.95, legRadius * 0.82, shinLength, 12);
      const shin = new THREE.Mesh(shinGeo, pantsMat);
      shin.position.set(lx, -shinLength / 2 + 0.07 * s, thighLength);
      shin.castShadow = true;
      legsGroup.add(shin);

      // Socks
      const sockGeo = new THREE.CylinderGeometry(legRadius * 0.85, legRadius * 0.85, 0.1 * s, 10);
      const sockMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 });
      const sock = new THREE.Mesh(sockGeo, sockMat);
      sock.position.set(lx, -shinLength + 0.1 * s, thighLength);
      legsGroup.add(sock);

      // Shoes
      const shoeGeo = new THREE.BoxGeometry(0.13 * s, 0.08 * s, 0.22 * s);
      const shoe = new THREE.Mesh(shoeGeo, shoeMat);
      shoe.position.set(lx, -shinLength + 0.04 * s, thighLength + 0.05 * s);
      shoe.castShadow = true;
      legsGroup.add(shoe);
    });
    root.add(legsGroup);

    // ==========================================
    // 3. TORSO, SHOULDERS & INDIAN ATTIRE
    // ==========================================
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, seatY + 0.05 * s, 0);

    const torsoGeo = new THREE.CylinderGeometry(
      bodyRadius * 0.94,
      bodyRadius * 1.06,
      bodyHeight,
      18
    );
    torsoGeo.scale(1.15, 1.0, 0.88);
    const torsoMesh = new THREE.Mesh(torsoGeo, clothesMat);
    torsoMesh.position.y = bodyHeight / 2;
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    torsoGroup.add(torsoMesh);

    // Placket & Golden Buttons for Indian Kurta
    const placketGeo = new THREE.BoxGeometry(0.06 * s, bodyHeight * 0.72, 0.02 * s);
    const placket = new THREE.Mesh(placketGeo, accentMat);
    placket.position.set(0, bodyHeight * 0.55, bodyRadius * 0.9 * 0.88);
    torsoGroup.add(placket);

    for (let b = 0; b < 3; b++) {
      const buttonGeo = new THREE.SphereGeometry(0.018 * s, 8, 8);
      const buttonMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.88, roughness: 0.18 });
      const button = new THREE.Mesh(buttonGeo, buttonMat);
      button.position.set(0, bodyHeight * (0.75 - b * 0.18), bodyRadius * 0.92 * 0.88);
      torsoGroup.add(button);
    }

    // Mandarin Collar Band
    const collarGeo = new THREE.CylinderGeometry(0.135 * s, 0.145 * s, 0.08 * s, 16);
    const collar = new THREE.Mesh(collarGeo, accentMat);
    collar.position.y = bodyHeight + 0.03 * s;
    torsoGroup.add(collar);

    // Girl's dupatta sash
    if (gender === 'girl') {
      const dupattaGeo = new THREE.BoxGeometry(0.11 * s, bodyHeight * 0.85, 0.03 * s);
      const dupatta = new THREE.Mesh(dupattaGeo, accentMat);
      dupatta.position.set(-0.08 * s, bodyHeight * 0.5, bodyRadius * 0.94 * 0.88);
      dupatta.rotation.z = -0.32;
      torsoGroup.add(dupatta);
    }

    root.add(torsoGroup);

    // ==========================================
    // 4. CUTE CARTOON HEAD & EXPRESSIVE FACE
    // ==========================================
    const headPivot = new THREE.Group();
    headPivot.position.set(0, seatY + bodyHeight + 0.08 * s, 0);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.08 * s, 0.09 * s, 0.16 * s, 12);
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neck.position.y = 0.07 * s;
    headPivot.add(neck);

    // Cute Rounded Head with Chubby Cheeks
    const craniumRadius = 0.235 * s;
    const craniumGeo = new THREE.SphereGeometry(craniumRadius, 24, 20);
    craniumGeo.scale(1.0, 1.12, 1.05);
    const cranium = new THREE.Mesh(craniumGeo, skinMat);
    cranium.position.y = 0.25 * s;
    cranium.castShadow = true;
    headPivot.add(cranium);

    // Cute Chubby Cheeks
    [-0.14 * s, 0.14 * s].forEach((cx) => {
      const cheekGeo = new THREE.SphereGeometry(0.085 * s, 12, 12);
      const cheek = new THREE.Mesh(cheekGeo, skinMat);
      cheek.position.set(cx, 0.2 * s, 0.14 * s);
      cheek.scale.set(1.0, 0.85, 0.9);
      headPivot.add(cheek);

      // Sweet Rosy Blush
      const blushGeo = new THREE.CircleGeometry(0.042 * s, 12);
      const blushMat = new THREE.MeshBasicMaterial({ color: 0xf472b6, transparent: true, opacity: 0.5 });
      const blush = new THREE.Mesh(blushGeo, blushMat);
      blush.position.set(cx * 1.05, 0.2 * s, 0.21 * s);
      blush.rotation.y = cx < 0 ? -0.35 : 0.35;
      headPivot.add(blush);
    });

    // Ears
    const earGeo = new THREE.SphereGeometry(0.055 * s, 10, 10);
    earGeo.scale(0.35, 1.1, 0.8);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(-0.235 * s, 0.25 * s, 0);
    leftEar.rotation.z = 0.12;
    headPivot.add(leftEar);

    const rightEar = leftEar.clone();
    rightEar.position.x = 0.235 * s;
    rightEar.rotation.z = -0.12;
    headPivot.add(rightEar);

    // Cute Button Nose (Smooth, Friendly Sphere instead of a cone)
    const noseGeo = new THREE.SphereGeometry(0.028 * s, 12, 12);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, 0.225 * s, 0.245 * s);
    headPivot.add(nose);

    // Adorable Pixar/Disney Cartoon Eyes with Dual Sparkles
    const eyeSpacing = 0.088 * s;
    const eyeHeight = 0.28 * s;
    const eyeDepth = 0.21 * s;

    const leftEyeGroup = new THREE.Group();
    leftEyeGroup.position.set(-eyeSpacing, eyeHeight, eyeDepth);

    const rightEyeGroup = new THREE.Group();
    rightEyeGroup.position.set(eyeSpacing, eyeHeight, eyeDepth);

    [leftEyeGroup, rightEyeGroup].forEach((eyeGrp, idx) => {
      // Sclera (White)
      const eyeGeo = new THREE.SphereGeometry(0.055 * s, 16, 16);
      eyeGeo.scale(1.15, 1.25, 0.65);
      const sclera = new THREE.Mesh(eyeGeo, eyeWhiteMat);
      eyeGrp.add(sclera);

      // Large Sparkling Iris
      const irisGeo = new THREE.CircleGeometry(0.034 * s, 16);
      const iris = new THREE.Mesh(irisGeo, irisMat);
      iris.position.set(0, 0, 0.034 * s);
      eyeGrp.add(iris);

      // Pupil
      const pupilGeo = new THREE.CircleGeometry(0.019 * s, 12);
      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.set(0, 0, 0.036 * s);
      eyeGrp.add(pupil);

      // Main Sparkle (Big)
      const shineGeo1 = new THREE.CircleGeometry(0.01 * s, 8);
      const shine1 = new THREE.Mesh(shineGeo1, highlightMat);
      shine1.position.set(0.009 * s, 0.01 * s, 0.038 * s);
      eyeGrp.add(shine1);

      // Cute Secondary Sparkle (Small)
      const shineGeo2 = new THREE.CircleGeometry(0.005 * s, 6);
      const shine2 = new THREE.Mesh(shineGeo2, highlightMat);
      shine2.position.set(-0.009 * s, -0.009 * s, 0.038 * s);
      eyeGrp.add(shine2);

      // Blinking Eyelid
      const eyelidGeo = new THREE.SphereGeometry(0.058 * s, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      eyelidGeo.scale(1.18, 1.3, 0.7);
      const eyelid = new THREE.Mesh(eyelidGeo, skinMat);
      eyelid.rotation.x = -Math.PI / 2;
      eyelid.position.y = 0.02 * s;
      eyelid.visible = false;
      eyeGrp.add(eyelid);
      eyeGrp.userData.eyelid = eyelid;

      // Soft Expressive Eyebrow
      const browGeo = new THREE.BoxGeometry(0.075 * s, 0.018 * s, 0.015 * s);
      const brow = new THREE.Mesh(browGeo, hairMat);
      brow.position.set(0, 0.068 * s, 0.015 * s);
      brow.rotation.z = idx === 0 ? 0.08 : -0.08;
      eyeGrp.add(brow);
      eyeGrp.userData.brow = brow;

      headPivot.add(eyeGrp);
    });

    // Traditional Maroon Bindi for Meera and Priya
    if (gender === 'girl') {
      const bindiGeo = new THREE.CircleGeometry(0.016 * s, 12);
      const bindiMat = new THREE.MeshBasicMaterial({ color: 0xbe123c });
      const bindi = new THREE.Mesh(bindiGeo, bindiMat);
      bindi.position.set(0, 0.3 * s, 0.245 * s);
      headPivot.add(bindi);
    }

    // Dynamic Sweet Smiling Mouth with Lip-Sync
    const mouthGroup = new THREE.Group();
    mouthGroup.position.set(0, 0.145 * s, 0.235 * s);

    // Cheerful Mouth Opening
    const mouthCavityGeo = new THREE.SphereGeometry(0.04 * s, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2);
    mouthCavityGeo.scale(1.25, 0.72, 0.6);
    const mouthCavityMat = new THREE.MeshBasicMaterial({ color: 0x991b1b });
    const mouthCavity = new THREE.Mesh(mouthCavityGeo, mouthCavityMat);
    mouthCavity.rotation.x = Math.PI / 2;
    mouthGroup.add(mouthCavity);

    // Pearly White Smile Teeth
    const teethGeo = new THREE.BoxGeometry(0.052 * s, 0.015 * s, 0.01 * s);
    const teethMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const teeth = new THREE.Mesh(teethGeo, teethMat);
    teeth.position.set(0, 0.009 * s, 0.01 * s);
    mouthGroup.add(teeth);

    headPivot.add(mouthGroup);

    // ==========================================
    // 5. CUTE STYLIZED HAIRSTYLES
    // ==========================================
    if (gender === 'girl') {
      // Meera & Priya: Adorable twin side buns with jasmine flower gajras
      const hairBaseGeo = new THREE.SphereGeometry(0.245 * s, 20, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
      const hairBase = new THREE.Mesh(hairBaseGeo, hairMat);
      hairBase.position.y = 0.26 * s;
      headPivot.add(hairBase);

      // Twin Braided Hair Buns
      [-0.21 * s, 0.21 * s].forEach((bunX) => {
        const bunGeo = new THREE.SphereGeometry(0.09 * s, 14, 14);
        const bun = new THREE.Mesh(bunGeo, hairMat);
        bun.position.set(bunX, 0.39 * s, -0.04 * s);
        headPivot.add(bun);

        // Jasmine Gajra Floral Ring
        const gajraGeo = new THREE.TorusGeometry(0.085 * s, 0.022 * s, 8, 16);
        const gajraMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
        const gajra = new THREE.Mesh(gajraGeo, gajraMat);
        gajra.position.copy(bun.position);
        gajra.rotation.x = Math.PI / 2.5;
        headPivot.add(gajra);
      });

      // Cute Bangs Framing Forehead
      for (let b = -2; b <= 2; b++) {
        const bang = new THREE.Mesh(new THREE.SphereGeometry(0.045 * s, 8, 8), hairMat);
        bang.scale.set(1.2, 0.6, 0.8);
        bang.position.set(b * 0.045 * s, 0.42 * s, 0.19 * s);
        headPivot.add(bang);
      }

    } else if (isChubby) {
      // Golu: Cute wavy crop with soft curl
      const hairCapGeo = new THREE.SphereGeometry(0.25 * s, 20, 16, 0, Math.PI * 2, 0, Math.PI / 1.75);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.26 * s;
      headPivot.add(hairCap);

      const curl = new THREE.Mesh(new THREE.SphereGeometry(0.075 * s, 8, 8), hairMat);
      curl.position.set(0, 0.45 * s, 0.14 * s);
      headPivot.add(curl);

    } else {
      // Chintu & Kabir: Smart side-swept wave fringe haircut
      const hairCapGeo = new THREE.SphereGeometry(0.245 * s, 20, 16, 0, Math.PI * 2, 0, Math.PI / 1.72);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.26 * s;
      headPivot.add(hairCap);

      // Soft Swept Fringe Waves
      for (let q = -1; q <= 1; q++) {
        const wave = new THREE.Mesh(new THREE.ConeGeometry(0.055 * s, 0.14 * s, 8), hairMat);
        wave.position.set(q * 0.06 * s, 0.43 * s, 0.17 * s);
        wave.rotation.x = -Math.PI / 3;
        wave.rotation.z = q * -0.25;
        headPivot.add(wave);
      }
    }

    root.add(headPivot);

    // ==========================================
    // 6. ARMS & HANDS RESTING ON DINING TABLE
    // ==========================================
    const shoulderSpan = (bodyRadius * 1.05 + 0.08 * s);
    const armY = seatY + bodyHeight * 0.88;

    // Left Arm Hierarchy
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-shoulderSpan, armY, 0.05 * s);

    const upperArmGeo = new THREE.CylinderGeometry(0.055 * s, 0.048 * s, 0.28 * s, 10);
    const upperArmL = new THREE.Mesh(upperArmGeo, clothesMat);
    upperArmL.position.y = -0.14 * s;
    upperArmL.castShadow = true;
    leftArmGroup.add(upperArmL);

    const forearmGroupL = new THREE.Group();
    forearmGroupL.position.set(0, -0.28 * s, 0);

    const forearmGeo = new THREE.CylinderGeometry(0.048 * s, 0.042 * s, 0.26 * s, 10);
    const forearmL = new THREE.Mesh(forearmGeo, skinMat);
    forearmL.position.y = -0.13 * s;
    forearmGroupL.add(forearmL);

    const palmGeo = new THREE.BoxGeometry(0.07 * s, 0.07 * s, 0.03 * s);
    const palmL = new THREE.Mesh(palmGeo, skinMat);
    palmL.position.y = -0.28 * s;
    forearmGroupL.add(palmL);

    const thumbGeo = new THREE.CylinderGeometry(0.015 * s, 0.015 * s, 0.05 * s, 6);
    const thumbL = new THREE.Mesh(thumbGeo, skinMat);
    thumbL.position.set(0.035 * s, -0.26 * s, 0.015 * s);
    thumbL.rotation.z = -Math.PI / 4;
    forearmGroupL.add(thumbL);

    leftArmGroup.add(forearmGroupL);
    root.add(leftArmGroup);

    // Right Arm Hierarchy
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(shoulderSpan, armY, 0.05 * s);

    const upperArmR = new THREE.Mesh(upperArmGeo, clothesMat);
    upperArmR.position.y = -0.14 * s;
    upperArmR.castShadow = true;
    rightArmGroup.add(upperArmR);

    const forearmGroupR = new THREE.Group();
    forearmGroupR.position.set(0, -0.28 * s, 0);

    const forearmR = new THREE.Mesh(forearmGeo, skinMat);
    forearmR.position.y = -0.13 * s;
    forearmGroupR.add(forearmR);

    const palmR = new THREE.Mesh(palmGeo, skinMat);
    palmR.position.y = -0.28 * s;
    forearmGroupR.add(palmR);

    const thumbR = new THREE.Mesh(thumbGeo, skinMat);
    thumbR.position.set(-0.035 * s, -0.26 * s, 0.015 * s);
    thumbR.rotation.z = Math.PI / 4;
    forearmGroupR.add(thumbR);

    rightArmGroup.add(forearmGroupR);
    root.add(rightArmGroup);

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
    // 1. CHINTU - Cute Indian Schoolboy in Bright Saffron Kurta with White Pajama
    const chintu = this.createStylizedCharacter({
      name: 'Chintu',
      skinColor: 0xf5b888,
      clothesColor: 0xf59e0b, // Vibrant Saffron / Marigold Yellow
      clothesAccent: 0xd97706,
      pantsColor: 0xf8fafc, // Clean White Pajama
      hairColor: 0x18181b,
      eyeColor: 0x54260d,
      gender: 'boy',
      scale: 1.05
    });
    this.scene.add(chintu.group);
    this.characters['chintu'] = chintu;

    // 2. MEERA - Cute Indian Schoolgirl in Peacock Teal Kurti with Jasmine Gajra Buns
    const meera = this.createStylizedCharacter({
      name: 'Meera',
      skinColor: 0xf8c49e,
      clothesColor: 0x06b6d4, // Peacock Cyan / Teal
      clothesAccent: 0xec4899, // Bright Rose-Pink Piping
      pantsColor: 0xbe185d, // Magenta Churidar
      hairColor: 0x09090b,
      eyeColor: 0x311b0e,
      gender: 'girl',
      scale: 1.0
    });
    this.scene.add(meera.group);
    this.characters['meera'] = meera;

    // 3. GOLU - Lovable Chubby School Friend in Crimson Embroidered Vest
    const golu = this.createStylizedCharacter({
      name: 'Golu',
      skinColor: 0xefb080,
      clothesColor: 0xef4444, // Crimson Red Waistcoat
      clothesAccent: 0xb91c1c,
      pantsColor: 0x059669, // Emerald Green Trousers
      hairColor: 0x27272a,
      eyeColor: 0x54260d,
      gender: 'boy',
      scale: 1.08,
      isChubby: true
    });
    this.scene.add(golu.group);
    this.characters['golu'] = golu;

    // 4. PRIYA - Schoolgirl Friend in Sunflower Yellow Kurti
    const priya = this.createStylizedCharacter({
      name: 'Priya',
      skinColor: 0xf5b888,
      clothesColor: 0xfacc15,
      clothesAccent: 0xe11d48,
      pantsColor: 0x9f1239,
      hairColor: 0x18181b,
      eyeColor: 0x3b1d0c,
      gender: 'girl',
      scale: 1.0
    });
    this.scene.add(priya.group);
    this.characters['priya'] = priya;

    // 5. KABIR - Smart Schoolboy Friend in Sky Blue Kurta
    const kabir = this.createStylizedCharacter({
      name: 'Kabir',
      skinColor: 0xf0ab76,
      clothesColor: 0x38bdf8,
      clothesAccent: 0x0284c7,
      pantsColor: 0x1e293b,
      hairColor: 0x0f172a,
      eyeColor: 0x54260d,
      gender: 'boy',
      scale: 1.02
    });
    this.scene.add(kabir.group);
    this.characters['kabir'] = kabir;

    // Initially show ONLY Chintu and Meera for the starting level
    this.setActiveCharacters(['Chintu', 'Meera']);
    this.setEmotion('chintu', 'greeting');
    this.setEmotion('meera', 'greeting');
  }

  /**
   * Automatically sets the exact active character count matching the question
   */
  setActiveCharacters(friendsList) {
    if (!Array.isArray(friendsList) || friendsList.length === 0) {
      friendsList = ['Chintu', 'Meera'];
    }

    const lowerFriends = friendsList.map(n => n.toLowerCase());
    this.activeFriendNames = lowerFriends.filter(k => this.characters[k]);

    Object.keys(this.characters).forEach(key => {
      const char = this.characters[key];
      const shouldBeVisible = this.activeFriendNames.includes(key);
      char.group.visible = shouldBeVisible;
      if (!shouldBeVisible) {
        char.state = 'idle';
        char.isSpeaking = false;
      }
    });

    const count = this.activeFriendNames.length;
    const seatingPlans = {
      1: [{ pos: [0, -0.15, 1.4], rot: Math.PI }],
      2: [
        { pos: [-1.9, -0.15, 0.45], rot: Math.PI / 2.6 },
        { pos: [1.9, -0.15, 0.45], rot: -Math.PI / 2.6 }
      ],
      3: [
        { pos: [-1.9, -0.15, 0.55], rot: Math.PI / 2.6 },
        { pos: [1.9, -0.15, 0.55], rot: -Math.PI / 2.6 },
        { pos: [0, -0.15, -1.8], rot: 0 }
      ],
      4: [
        { pos: [-2.0, -0.15, 0.6], rot: Math.PI / 2.6 },
        { pos: [2.0, -0.15, 0.6], rot: -Math.PI / 2.6 },
        { pos: [-1.2, -0.15, -1.8], rot: 0 },
        { pos: [1.2, -0.15, -1.8], rot: 0 }
      ],
      5: [
        { pos: [-2.1, -0.15, 0.6], rot: Math.PI / 2.6 },
        { pos: [2.1, -0.15, 0.6], rot: -Math.PI / 2.6 },
        { pos: [-1.6, -0.15, -1.8], rot: 0 },
        { pos: [0, -0.15, -1.85], rot: 0 },
        { pos: [1.6, -0.15, -1.8], rot: 0 }
      ]
    };

    const plan = seatingPlans[count] || seatingPlans[2];
    this.activeFriendNames.forEach((key, idx) => {
      const char = this.characters[key];
      if (char && plan[idx]) {
        const { pos, rot } = plan[idx];
        char.group.position.set(pos[0], pos[1], pos[2]);
        char.group.rotation.y = rot;
      }
    });
  }

  setFocusTarget(pos) {
    if (pos) this.targetFocus.copy(pos);
  }

  startSpeaking(charKey) {
    const char = this.characters[charKey];
    if (char && char.group.visible) {
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
    if (!char || !char.group.visible) return;
    char.state = emotion;

    if (emotion === 'happy') {
      char.mouthGroup.scale.set(1.2, 1.3, 1.0);
    } else if (emotion === 'greeting') {
      char.mouthGroup.scale.set(1.15, 1.25, 1.0);
    } else if (emotion === 'confused') {
      char.mouthGroup.scale.set(0.8, 0.7, 1.0);
    } else {
      char.mouthGroup.scale.set(1.0, 1.0, 1.0);
    }
  }

  celebrateAll() {
    this.activeFriendNames.forEach(key => this.setEmotion(key, 'happy'));
  }

  confuseAll() {
    this.activeFriendNames.forEach(key => this.setEmotion(key, 'confused'));
  }

  resetAll() {
    this.activeFriendNames.forEach(key => {
      this.setEmotion(key, 'idle');
      const char = this.characters[key];
      if (char) {
        char.group.position.y = -0.15;
      }
    });
  }

  update(delta) {
    Object.keys(this.characters).forEach(key => {
      const char = this.characters[key];
      if (!char || !char.group.visible) return;

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

      // Synchronized 3D Lip-Sync Mouth Animation during Speech
      if (char.isSpeaking) {
        char.speechTimer += delta * 15;
        const mouthOpen = 1.0 + Math.abs(Math.sin(char.speechTimer)) * 0.95;
        char.mouthGroup.scale.set(1.0, mouthOpen, 1.0);
      } else if (char.state === 'idle') {
        char.mouthGroup.scale.set(1.0, 1.0, 1.0);
      }

      // Natural Schoolchild Seated Behavior
      if (char.state === 'idle') {
        // Gentle organic chest breathing & subtle head rhythm
        char.headPivot.position.y = 0.75 * char.scale + Math.sin(t * 1.8) * 0.012;
        char.headPivot.rotation.z = Math.sin(t * 0.9) * 0.02;
        char.headPivot.rotation.x = 0.09 + Math.sin(t * 1.3) * 0.015; // looking warmly towards the roti on table

        // Relaxed hands resting comfortably on table edge
        char.leftArmGroup.rotation.z = 0.28 + Math.sin(t * 1.5) * 0.015;
        char.leftArmGroup.rotation.x = 0.42;
        char.forearmGroupL.rotation.x = -0.65;

        char.rightArmGroup.rotation.z = -0.28 - Math.sin(t * 1.5) * 0.015;
        char.rightArmGroup.rotation.x = 0.42;
        char.forearmGroupR.rotation.x = -0.65;

        // Relaxed eyebrows
        char.leftEyeGroup.userData.brow.rotation.z = 0.08;
        char.rightEyeGroup.userData.brow.rotation.z = -0.08;

      } else if (char.state === 'happy') {
        // Joyful celebration: clapping and cheering!
        char.headPivot.rotation.x = -0.12 + Math.sin(t * 6) * 0.08;
        char.headPivot.rotation.z = Math.sin(t * 8) * 0.1;

        if (char.gender === 'girl') {
          // Meera/Priya claps hands joyfully in excitement
          char.leftArmGroup.rotation.x = 0.85 + Math.sin(t * 12) * 0.15;
          char.leftArmGroup.rotation.z = 0.45;
          char.forearmGroupL.rotation.x = -0.85;

          char.rightArmGroup.rotation.x = 0.85 + Math.sin(t * 12) * 0.15;
          char.rightArmGroup.rotation.z = -0.45;
          char.forearmGroupR.rotation.x = -0.85;
        } else {
          // Chintu/Golu/Kabir waves arms high in victory!
          char.leftArmGroup.rotation.z = 2.2 + Math.sin(t * 9) * 0.25;
          char.leftArmGroup.rotation.x = 0.2;
          char.forearmGroupL.rotation.x = -0.3;

          char.rightArmGroup.rotation.z = -2.2 - Math.sin(t * 9) * 0.25;
          char.rightArmGroup.rotation.x = 0.2;
          char.forearmGroupR.rotation.x = -0.3;
        }

        char.leftEyeGroup.userData.brow.rotation.z = 0.22;
        char.rightEyeGroup.userData.brow.rotation.z = -0.22;

      } else if (char.state === 'confused') {
        // Inquisitive head tilt, scratching head thoughtfully
        char.headPivot.rotation.z = 0.28 + Math.sin(t * 2.5) * 0.06;
        char.headPivot.rotation.y = Math.sin(t * 1.8) * 0.12;

        char.leftArmGroup.rotation.z = 0.2;
        char.leftArmGroup.rotation.x = 0.3;
        char.forearmGroupL.rotation.x = -0.5;

        char.rightArmGroup.rotation.z = -2.0;
        char.rightArmGroup.rotation.x = 0.65;
        char.forearmGroupR.rotation.x = -1.15;

        char.leftEyeGroup.userData.brow.rotation.z = -0.15;
        char.rightEyeGroup.userData.brow.rotation.z = -0.28;

      } else if (char.state === 'reaching') {
        // Eagerly reaching towards plate
        char.headPivot.rotation.x = 0.22;
        char.leftArmGroup.rotation.x = 1.05 + Math.sin(t * 3) * 0.06;
        char.leftArmGroup.rotation.z = 0.15;
        char.forearmGroupL.rotation.x = -0.35;

        char.rightArmGroup.rotation.x = 1.05 + Math.sin(t * 3) * 0.06;
        char.rightArmGroup.rotation.z = -0.15;
        char.forearmGroupR.rotation.x = -0.35;

      } else if (char.state === 'eating') {
        // Happily chewing & enjoying food
        char.headPivot.rotation.x = 0.15 + Math.sin(t * 5) * 0.06;
        char.mouthGroup.scale.set(1.1, 1.2, 1.0);
        char.rightArmGroup.rotation.x = 0.9 + Math.sin(t * 4) * 0.08;
        char.rightArmGroup.rotation.z = -0.35;
        char.forearmGroupR.rotation.x = -0.8;

      } else if (char.state === 'greeting') {
        // Welcoming friendly wave to the player on the home page!
        char.headPivot.position.y = 0.75 * char.scale + Math.sin(t * 1.8) * 0.012;
        char.headPivot.rotation.x = 0.04;
        char.headPivot.rotation.y = (key === 'chintu' ? -0.25 : 0.25) + Math.sin(t * 1.5) * 0.06;
        char.headPivot.rotation.z = Math.sin(t * 2.5) * 0.04;

        char.mouthGroup.scale.set(1.15, 1.25, 1.0);

        if (key === 'chintu') {
          // Chintu waves with right arm
          char.rightArmGroup.rotation.z = -1.75 - Math.sin(t * 7) * 0.25;
          char.rightArmGroup.rotation.x = 0.35;
          char.forearmGroupR.rotation.x = -0.55;

          char.leftArmGroup.rotation.z = 0.3;
          char.leftArmGroup.rotation.x = 0.42;
          char.forearmGroupL.rotation.x = -0.65;
        } else {
          // Meera waves with left arm
          char.leftArmGroup.rotation.z = 1.75 + Math.sin(t * 7) * 0.25;
          char.leftArmGroup.rotation.x = 0.35;
          char.forearmGroupL.rotation.x = -0.55;

          char.rightArmGroup.rotation.z = -0.3;
          char.rightArmGroup.rotation.x = 0.42;
          char.forearmGroupR.rotation.x = -0.65;
        }

        char.leftEyeGroup.userData.brow.rotation.z = 0.16;
        char.rightEyeGroup.userData.brow.rotation.z = -0.16;
      }
    });
  }
}
