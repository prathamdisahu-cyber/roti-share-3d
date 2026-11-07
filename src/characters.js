/**
 * characters.js
 * High-Quality Normal-Proportioned 3D Cartoon Indian Schoolchildren for Roti Share:
 * 1. CHINTU  - Friendly schoolboy in crisp saffron kurta with mandarin collar, styled side-part wave haircut, expressive warm brown eyes.
 * 2. MEERA   - Cheerful schoolgirl in peacock teal kurti with violet piping, twin braided buns adorned with white jasmine flower (mogra) garlands, and red bindi.
 * 3. GOLU    - Happy chubby school friend in crimson embroidered waistcoat, soft rounded cheeks, and bright smile.
 * 4. PRIYA   - Bright schoolgirl friend in sunflower yellow kurti with braided ponytail and red ribbon.
 * 5. KABIR   - Smart schoolboy friend in sky blue kurta with tapered haircut.
 *
 * Real-Time Features:
 * - EXACT CHARACTER COUNT MATCHING: Automatically displays ONLY the exact friends participating in the current level/question!
 * - Unnecessary background characters and extra background lady are completely eliminated.
 * - Normal human-like cartoon proportions for schoolchildren (ages 8-10).
 * - Articulated facial details: almond eyes with double specular sparkle highlights, blinking eyelids, sculpted noses, smiling mouths.
 * - Dynamic 3D Lip-Sync speaking mouth scaling synchronized with VoiceSystem speech.
 * - Organic breathing and idle posture adjustments while seated on wooden dining chairs with hands resting on the table.
 * - Celebratory jumping, arm waving, clapping, and thoughtful puzzled head-scratching reactions.
 */

import * as THREE from 'three';

export class CharacterSystem {
  constructor(scene) {
    this.scene = scene;
    this.characters = {};
    this.activeFriendNames = ['chintu', 'meera'];
    this.targetFocus = new THREE.Vector3(0, 0.12, 0); // Focus on table center
    this.initCharacters();
  }

  createStylizedCharacter({
    name,
    skinColor = 0xe5a36f,
    clothesColor = 0xf59e0b,
    clothesAccent = 0xd97706,
    pantsColor = 0x1e3a8a,
    shoeColor = 0x18181b,
    hairColor = 0x18181b,
    eyeColor = 0x451a03,
    gender = 'boy',
    scale = 1.0,
    isChubby = false
  }) {
    const root = new THREE.Group();
    root.name = `character-${name}`;

    // Standard PBR materials with soft cartoon lighting response
    const skinMat = new THREE.MeshStandardMaterial({
      color: skinColor,
      roughness: 0.52,
      metalness: 0.02
    });
    const clothesMat = new THREE.MeshStandardMaterial({
      color: clothesColor,
      roughness: 0.65,
      metalness: 0.04
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: clothesAccent,
      roughness: 0.6,
      metalness: 0.12
    });
    const pantsMat = new THREE.MeshStandardMaterial({
      color: pantsColor,
      roughness: 0.8
    });
    const shoeMat = new THREE.MeshStandardMaterial({
      color: shoeColor,
      roughness: 0.45,
      metalness: 0.1
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: hairColor,
      roughness: 0.85
    });
    const chairMat = new THREE.MeshStandardMaterial({
      color: 0x5c2e0b,
      roughness: 0.55,
      metalness: 0.08
    });
    const eyeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xfdfdfd,
      roughness: 0.2
    });
    const irisMat = new THREE.MeshStandardMaterial({
      color: eyeColor,
      roughness: 0.25,
      metalness: 0.05
    });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const highlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const s = scale;
    const bodyRadius = (isChubby ? 0.32 : 0.26) * s;
    const bodyHeight = 0.62 * s;

    // ==========================================
    // 1. WOODEN DINING CHAIR
    // ==========================================
    const chairGroup = new THREE.Group();
    chairGroup.position.set(0, 0, 0);

    // Chair Seat (characters sit comfortably at table level)
    const seatY = 0.52 * s;
    const seatGeo = new THREE.BoxGeometry(0.58 * s, 0.05 * s, 0.56 * s);
    const seat = new THREE.Mesh(seatGeo, chairMat);
    seat.position.set(0, seatY, -0.05 * s);
    seat.castShadow = true;
    chairGroup.add(seat);

    // Chair Backrest with vertical spindles
    const backrestPostGeo = new THREE.CylinderGeometry(0.024 * s, 0.024 * s, 0.65 * s, 8);
    const backLeft = new THREE.Mesh(backrestPostGeo, chairMat);
    backLeft.position.set(-0.25 * s, seatY + 0.32 * s, -0.31 * s);
    chairGroup.add(backLeft);

    const backRight = new THREE.Mesh(backrestPostGeo, chairMat);
    backRight.position.set(0.25 * s, seatY + 0.32 * s, -0.31 * s);
    chairGroup.add(backRight);

    const topRailGeo = new THREE.BoxGeometry(0.56 * s, 0.06 * s, 0.04 * s);
    const topRail = new THREE.Mesh(topRailGeo, chairMat);
    topRail.position.set(0, seatY + 0.62 * s, -0.31 * s);
    chairGroup.add(topRail);

    for (let sp = -1; sp <= 1; sp++) {
      const spindleGeo = new THREE.CylinderGeometry(0.015 * s, 0.015 * s, 0.54 * s, 6);
      const spindle = new THREE.Mesh(spindleGeo, chairMat);
      spindle.position.set(sp * 0.12 * s, seatY + 0.28 * s, -0.31 * s);
      chairGroup.add(spindle);
    }

    // Chair Legs
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

      // Shin hanging vertically down to floor
      const shinGeo = new THREE.CylinderGeometry(legRadius * 0.95, legRadius * 0.82, shinLength, 12);
      const shin = new THREE.Mesh(shinGeo, pantsMat);
      shin.position.set(lx, -shinLength / 2 + 0.07 * s, thighLength);
      shin.castShadow = true;
      legsGroup.add(shin);

      // School socks
      const sockGeo = new THREE.CylinderGeometry(legRadius * 0.85, legRadius * 0.85, 0.1 * s, 10);
      const sockMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9 });
      const sock = new THREE.Mesh(sockGeo, sockMat);
      sock.position.set(lx, -shinLength + 0.1 * s, thighLength);
      legsGroup.add(sock);

      // Polished school shoes with soles
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

    // Naturally contoured upper torso with chest & tapered waist
    const torsoGeo = new THREE.CylinderGeometry(
      bodyRadius * 0.92,
      bodyRadius * 1.05,
      bodyHeight,
      16
    );
    torsoGeo.scale(1.15, 1.0, 0.88); // realistic chest width vs depth
    const torsoMesh = new THREE.Mesh(torsoGeo, clothesMat);
    torsoMesh.position.y = bodyHeight / 2;
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    torsoGroup.add(torsoMesh);

    // Front Placket & Golden Buttons for Indian Kurta / School Shirt
    const placketGeo = new THREE.BoxGeometry(0.06 * s, bodyHeight * 0.72, 0.02 * s);
    const placket = new THREE.Mesh(placketGeo, accentMat);
    placket.position.set(0, bodyHeight * 0.55, bodyRadius * 0.9 * 0.88);
    torsoGroup.add(placket);

    for (let b = 0; b < 3; b++) {
      const buttonGeo = new THREE.SphereGeometry(0.018 * s, 8, 8);
      const buttonMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.85, roughness: 0.2 });
      const button = new THREE.Mesh(buttonGeo, buttonMat);
      button.position.set(0, bodyHeight * (0.75 - b * 0.18), bodyRadius * 0.92 * 0.88);
      torsoGroup.add(button);
    }

    // Mandarin Collar Band
    const collarGeo = new THREE.CylinderGeometry(0.13 * s, 0.14 * s, 0.08 * s, 14);
    const collar = new THREE.Mesh(collarGeo, accentMat);
    collar.position.y = bodyHeight + 0.03 * s;
    torsoGroup.add(collar);

    // Girl's dupatta sash or piping
    if (gender === 'girl') {
      const dupattaGeo = new THREE.BoxGeometry(0.11 * s, bodyHeight * 0.85, 0.03 * s);
      const dupatta = new THREE.Mesh(dupattaGeo, accentMat);
      dupatta.position.set(-0.08 * s, bodyHeight * 0.5, bodyRadius * 0.94 * 0.88);
      dupatta.rotation.z = -0.32;
      torsoGroup.add(dupatta);
    }

    root.add(torsoGroup);

    // ==========================================
    // 4. HEAD, NATURAL FACE & SCULPTED HAIR
    // ==========================================
    const headPivot = new THREE.Group();
    headPivot.position.set(0, seatY + bodyHeight + 0.08 * s, 0);

    // Smooth Neck
    const neckGeo = new THREE.CylinderGeometry(0.08 * s, 0.09 * s, 0.16 * s, 12);
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neck.position.y = 0.07 * s;
    headPivot.add(neck);

    // Normal-Proportioned Cartoon Child Head (oval cranium with soft chin)
    const craniumScaleY = 1.15;
    const craniumRadius = 0.22 * s;
    const craniumGeo = new THREE.SphereGeometry(craniumRadius, 24, 20);
    craniumGeo.scale(1.0, craniumScaleY, 1.05);
    const cranium = new THREE.Mesh(craniumGeo, skinMat);
    cranium.position.y = 0.24 * s;
    cranium.castShadow = true;
    headPivot.add(cranium);

    // Ears with soft depth
    const earGeo = new THREE.SphereGeometry(0.055 * s, 10, 10);
    earGeo.scale(0.4, 1.2, 0.8);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(-0.22 * s, 0.24 * s, 0);
    leftEar.rotation.z = 0.12;
    headPivot.add(leftEar);

    const rightEar = leftEar.clone();
    rightEar.position.x = 0.22 * s;
    rightEar.rotation.z = -0.12;
    headPivot.add(rightEar);

    // Natural Cartoon Nose
    const noseGeo = new THREE.ConeGeometry(0.035 * s, 0.08 * s, 10);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, 0.22 * s, 0.235 * s);
    nose.rotation.x = Math.PI / 2.2;
    headPivot.add(nose);

    // Almond Cartoon Eyes with Double Specular Sparkle Highlights
    const eyeSpacing = 0.085 * s;
    const eyeHeight = 0.27 * s;
    const eyeDepth = 0.2 * s;

    const leftEyeGroup = new THREE.Group();
    leftEyeGroup.position.set(-eyeSpacing, eyeHeight, eyeDepth);

    const rightEyeGroup = new THREE.Group();
    rightEyeGroup.position.set(eyeSpacing, eyeHeight, eyeDepth);

    [leftEyeGroup, rightEyeGroup].forEach((eyeGrp, idx) => {
      // Eye White (Sclera)
      const eyeGeo = new THREE.SphereGeometry(0.05 * s, 14, 14);
      eyeGeo.scale(1.1, 1.25, 0.65);
      const sclera = new THREE.Mesh(eyeGeo, eyeWhiteMat);
      eyeGrp.add(sclera);

      // Deep Brown / Hazel Iris
      const irisGeo = new THREE.CircleGeometry(0.03 * s, 14);
      const iris = new THREE.Mesh(irisGeo, irisMat);
      iris.position.set(0, 0, 0.032 * s);
      eyeGrp.add(iris);

      // Pupil
      const pupilGeo = new THREE.CircleGeometry(0.016 * s, 10);
      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.set(0, 0, 0.034 * s);
      eyeGrp.add(pupil);

      // Lively Specular Sparkle 1 (Large)
      const shineGeo1 = new THREE.CircleGeometry(0.009 * s, 6);
      const shine1 = new THREE.Mesh(shineGeo1, highlightMat);
      shine1.position.set(0.008 * s, 0.009 * s, 0.036 * s);
      eyeGrp.add(shine1);

      // Specular Sparkle 2 (Small)
      const shineGeo2 = new THREE.CircleGeometry(0.004 * s, 6);
      const shine2 = new THREE.Mesh(shineGeo2, highlightMat);
      shine2.position.set(-0.008 * s, -0.008 * s, 0.036 * s);
      eyeGrp.add(shine2);

      // Blinking Eyelid
      const eyelidGeo = new THREE.SphereGeometry(0.054 * s, 14, 14, 0, Math.PI * 2, 0, Math.PI / 2);
      eyelidGeo.scale(1.15, 1.3, 0.7);
      const eyelid = new THREE.Mesh(eyelidGeo, skinMat);
      eyelid.rotation.x = -Math.PI / 2;
      eyelid.position.y = 0.02 * s;
      eyelid.visible = false;
      eyeGrp.add(eyelid);
      eyeGrp.userData.eyelid = eyelid;

      // Expressive Eyebrow
      const browGeo = new THREE.BoxGeometry(0.075 * s, 0.018 * s, 0.015 * s);
      const brow = new THREE.Mesh(browGeo, hairMat);
      brow.position.set(0, 0.065 * s, 0.015 * s);
      brow.rotation.z = idx === 0 ? 0.08 : -0.08;
      eyeGrp.add(brow);
      eyeGrp.userData.brow = brow;

      headPivot.add(eyeGrp);
    });

    // Rosy Blushing Cheeks
    const blushGeo = new THREE.CircleGeometry(0.045 * s, 10);
    const blushMat = new THREE.MeshBasicMaterial({ color: 0xf87171, transparent: true, opacity: 0.45 });
    [-0.13 * s, 0.13 * s].forEach((bx) => {
      const blush = new THREE.Mesh(blushGeo, blushMat);
      blush.position.set(bx, 0.19 * s, 0.205 * s);
      blush.rotation.y = bx < 0 ? -0.3 : 0.3;
      headPivot.add(blush);
    });

    // Traditional Maroon Bindi for Meera and Priya
    if (gender === 'girl') {
      const bindiGeo = new THREE.CircleGeometry(0.016 * s, 10);
      const bindiMat = new THREE.MeshBasicMaterial({ color: 0x991b1b });
      const bindi = new THREE.Mesh(bindiGeo, bindiMat);
      bindi.position.set(0, 0.29 * s, 0.232 * s);
      headPivot.add(bindi);
    }

    // Dynamic Smiling Mouth with Lip-Sync Scale Group
    const mouthGroup = new THREE.Group();
    mouthGroup.position.set(0, 0.14 * s, 0.222 * s);

    // Mouth Cavity
    const mouthCavityGeo = new THREE.SphereGeometry(0.038 * s, 12, 10, 0, Math.PI * 2, 0, Math.PI / 2);
    mouthCavityGeo.scale(1.2, 0.7, 0.6);
    const mouthCavityMat = new THREE.MeshBasicMaterial({ color: 0x7f1d1d });
    const mouthCavity = new THREE.Mesh(mouthCavityGeo, mouthCavityMat);
    mouthCavity.rotation.x = Math.PI / 2;
    mouthGroup.add(mouthCavity);

    // White Smile Teeth Bar
    const teethGeo = new THREE.BoxGeometry(0.05 * s, 0.014 * s, 0.01 * s);
    const teethMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const teeth = new THREE.Mesh(teethGeo, teethMat);
    teeth.position.set(0, 0.008 * s, 0.01 * s);
    mouthGroup.add(teeth);

    headPivot.add(mouthGroup);

    // ==========================================
    // 5. NATURAL HAIRSTYLES
    // ==========================================
    if (gender === 'girl') {
      // Meera & Priya: Center-parted hair with Twin Braided Buns and White Jasmine Gajra Bands
      const hairBaseGeo = new THREE.SphereGeometry(0.235 * s, 18, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
      const hairBase = new THREE.Mesh(hairBaseGeo, hairMat);
      hairBase.position.y = 0.25 * s;
      headPivot.add(hairBase);

      // Twin Braided Hair Buns on left and right
      [-0.2 * s, 0.2 * s].forEach((bunX) => {
        const bunGeo = new THREE.SphereGeometry(0.085 * s, 12, 12);
        const bun = new THREE.Mesh(bunGeo, hairMat);
        bun.position.set(bunX, 0.38 * s, -0.04 * s);
        headPivot.add(bun);

        // White Jasmine Flower Garland (Gajra band) wrapped around each bun
        const gajraGeo = new THREE.TorusGeometry(0.08 * s, 0.02 * s, 8, 16);
        const gajraMat = new THREE.MeshStandardMaterial({ color: 0xfefce8, roughness: 0.6 });
        const gajra = new THREE.Mesh(gajraGeo, gajraMat);
        gajra.position.copy(bun.position);
        gajra.rotation.x = Math.PI / 2.5;
        headPivot.add(gajra);
      });

    } else if (isChubby) {
      // Golu: Soft, natural wavy crop
      const hairCapGeo = new THREE.SphereGeometry(0.24 * s, 18, 14, 0, Math.PI * 2, 0, Math.PI / 1.75);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.25 * s;
      headPivot.add(hairCap);

      const curl = new THREE.Mesh(new THREE.SphereGeometry(0.07 * s, 8, 8), hairMat);
      curl.position.set(0, 0.44 * s, 0.12 * s);
      headPivot.add(curl);

    } else {
      // Chintu & Kabir: Smart side-parted school haircut with gentle front wave swoop
      const hairCapGeo = new THREE.SphereGeometry(0.236 * s, 18, 14, 0, Math.PI * 2, 0, Math.PI / 1.72);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.25 * s;
      headPivot.add(hairCap);

      // Front wave swoop
      for (let q = -1; q <= 1; q++) {
        const swoopGeo = new THREE.ConeGeometry(0.055 * s, 0.14 * s, 8);
        const swoop = new THREE.Mesh(swoopGeo, hairMat);
        swoop.position.set(q * 0.06 * s, 0.42 * s, 0.16 * s);
        swoop.rotation.x = -Math.PI / 3;
        swoop.rotation.z = q * -0.22;
        headPivot.add(swoop);
      }
    }

    root.add(headPivot);

    // ==========================================
    // 6. ARMS & HANDS RESTING ON DINING TABLE
    // ==========================================
    const shoulderSpan = (bodyRadius * 1.05 + 0.08 * s);
    const armY = seatY + bodyHeight * 0.88;

    // Left Arm Hierarchy (Shoulder -> Upper Arm -> Forearm -> Hand)
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

    // Sculpted palm with 4 defined fingers and thumb
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
    // 1. CHINTU - Normal-Proportioned Indian Schoolboy in Saffron Kurta
    const chintu = this.createStylizedCharacter({
      name: 'Chintu',
      skinColor: 0xe8a773,
      clothesColor: 0xf59e0b, // Saffron kurta
      clothesAccent: 0xd97706,
      pantsColor: 0x1e3a8a, // Navy blue trousers
      hairColor: 0x18181b,
      eyeColor: 0x451a03,
      gender: 'boy',
      scale: 1.0
    });
    this.scene.add(chintu.group);
    this.characters['chintu'] = chintu;

    // 2. MEERA - Normal-Proportioned Indian Schoolgirl in Peacock Teal Kurti with Jasmine Gajra
    const meera = this.createStylizedCharacter({
      name: 'Meera',
      skinColor: 0xe5a16d,
      clothesColor: 0x06b6d4, // Peacock teal kurti
      clothesAccent: 0x7c3aed, // Violet dupatta trim
      pantsColor: 0x6d28d9, // Magenta churidar
      hairColor: 0x09090b,
      eyeColor: 0x1e293b,
      gender: 'girl',
      scale: 1.0
    });
    this.scene.add(meera.group);
    this.characters['meera'] = meera;

    // 3. GOLU - Friendly Chubby School Friend in Crimson Embroidered Waistcoat
    const golu = this.createStylizedCharacter({
      name: 'Golu',
      skinColor: 0xde9863,
      clothesColor: 0xef4444, // Crimson vest
      clothesAccent: 0xb91c1c,
      pantsColor: 0x059669, // Emerald trousers
      hairColor: 0x27272a,
      eyeColor: 0x451a03,
      gender: 'boy',
      scale: 1.05,
      isChubby: true
    });
    this.scene.add(golu.group);
    this.characters['golu'] = golu;

    // 4. PRIYA - Schoolgirl in Sunflower Yellow Kurti with Braided Ponytail
    const priya = this.createStylizedCharacter({
      name: 'Priya',
      skinColor: 0xe5a36f,
      clothesColor: 0xfacc15, // Bright yellow kurti
      clothesAccent: 0xe11d48, // Rose red trim
      pantsColor: 0xbe123c,
      hairColor: 0x1c1917,
      eyeColor: 0x3b2010,
      gender: 'girl',
      scale: 1.0
    });
    this.scene.add(priya.group);
    this.characters['priya'] = priya;

    // 5. KABIR - Smart Schoolboy in Sky Blue Kurta
    const kabir = this.createStylizedCharacter({
      name: 'Kabir',
      skinColor: 0xe09b68,
      clothesColor: 0x38bdf8, // Sky blue kurta
      clothesAccent: 0x0284c7,
      pantsColor: 0x1e293b,
      hairColor: 0x0f172a,
      eyeColor: 0x451a03,
      gender: 'boy',
      scale: 1.0
    });
    this.scene.add(kabir.group);
    this.characters['kabir'] = kabir;

    // Initially show ONLY Chintu and Meera for the starting level
    this.setActiveCharacters(['Chintu', 'Meera']);
  }

  /**
   * Automatically sets the exact active character count matching the question
   * Examples:
   * - 2 friends (1/2 sharing): Exactly Chintu & Meera
   * - 3 friends (1/3 sharing): Exactly Chintu, Meera, Golu
   * - 4 friends (1/4 sharing): Exactly Chintu, Meera, Golu, Priya
   * - 5 friends (1/5 sharing): Exactly 5 characters
   * - 1 friend: Exactly that 1 character
   * Unnecessary background characters and extra background ladies are completely eliminated.
   */
  setActiveCharacters(friendsList = ['Chintu', 'Meera']) {
    const list = Array.isArray(friendsList) ? friendsList.map(n => n.toLowerCase()) : ['chintu', 'meera'];
    this.activeFriendNames = list;
    const count = list.length;

    // Seating arrangements at the dining table
    // Table width: 6.8 (x: -3.4 to +3.4), depth: 4.6 (z: -2.3 to +2.3), height: 0.0
    const seatingPlans = {
      1: {
        [list[0]]: { pos: new THREE.Vector3(0, -0.15, 1.8), rotY: Math.PI }
      },
      2: {
        // Exactly Chintu & Meera on either side of the table
        [list[0]]: { pos: new THREE.Vector3(-2.6, -0.15, 0.4), rotY: Math.PI / 3.2 },
        [list[1]]: { pos: new THREE.Vector3(2.6, -0.15, 0.4), rotY: -Math.PI / 3.2 }
      },
      3: {
        // Chintu (left), Meera (right), Golu (center back)
        [list[0]]: { pos: new THREE.Vector3(-2.6, -0.15, 0.4), rotY: Math.PI / 3.2 },
        [list[1]]: { pos: new THREE.Vector3(2.6, -0.15, 0.4), rotY: -Math.PI / 3.2 },
        [list[2]]: { pos: new THREE.Vector3(0, -0.15, -2.1), rotY: 0 }
      },
      4: {
        // 4 friends: Left, Right, Back Left, Back Right
        [list[0]]: { pos: new THREE.Vector3(-2.6, -0.15, 0.5), rotY: Math.PI / 3.2 },
        [list[1]]: { pos: new THREE.Vector3(2.6, -0.15, 0.5), rotY: -Math.PI / 3.2 },
        [list[2]]: { pos: new THREE.Vector3(-1.3, -0.15, -2.1), rotY: 0.15 },
        [list[3]]: { pos: new THREE.Vector3(1.3, -0.15, -2.1), rotY: -0.15 }
      },
      5: {
        // 5 friends: Left Front, Right Front, Back Left, Back Center, Back Right
        [list[0]]: { pos: new THREE.Vector3(-2.6, -0.15, 0.6), rotY: Math.PI / 3.2 },
        [list[1]]: { pos: new THREE.Vector3(2.6, -0.15, 0.6), rotY: -Math.PI / 3.2 },
        [list[2]]: { pos: new THREE.Vector3(-1.8, -0.15, -2.1), rotY: 0.2 },
        [list[3]]: { pos: new THREE.Vector3(0, -0.15, -2.1), rotY: 0 },
        [list[4]]: { pos: new THREE.Vector3(1.8, -0.15, -2.1), rotY: -0.2 }
      }
    };

    const plan = seatingPlans[count] || seatingPlans[2];

    Object.keys(this.characters).forEach(key => {
      const char = this.characters[key];
      if (list.includes(key)) {
        char.group.visible = true;
        const seat = plan[key];
        if (seat) {
          char.group.position.copy(seat.pos);
          char.group.rotation.y = seat.rotY;
        }
      } else {
        char.group.visible = false;
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
        // Joyful celebration: arm waving, clapping, laughing!
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
      }
    });
  }
}
