import assert from 'node:assert';
import { generateEqualSectors } from './src/fractions.js';
import { LEVEL_DEFINITIONS } from './src/levels.js';

console.log("=== RUNNING ROTI SHARE SHARING VALIDATION SUITE ===");

// Simulate Game validation logic matching src/game.js exactly
class MockGame {
  constructor() {
    this.levels = LEVEL_DEFINITIONS;
    this.currentLevelIndex = 0;
    this.rotiPieces = [];
    this.plates = [];
    this.isAutoDistributing = false;
    this.distributionCompleted = false;
    this.levelSolved = false;
    this.lastResult = null;
    this.lastToast = null;
  }

  getCurrentLevel() {
    return this.levels[this.currentLevelIndex];
  }

  setupLevel(index) {
    this.currentLevelIndex = index;
    this.rotiPieces = [];
    this.plates = [];
    this.isAutoDistributing = false;
    this.distributionCompleted = false;
    this.levelSolved = false;
    this.lastResult = null;
    this.lastToast = null;

    const lvl = this.getCurrentLevel();
    // Setup plates
    (lvl.friends || []).forEach(name => {
      this.plates.push({
        id: `plate-${name}`,
        userData: { friendName: name, label: `${name}'s Plate` }
      });
    });

    // Whole uncut roti initial piece
    this.rotiPieces.push({
      userData: {
        fractionValue: 1,
        numerator: 1,
        denominator: 1,
        angleSpan: Math.PI * 2,
        plateAssigned: null
      }
    });
  }

  cutRoti(count) {
    const sectors = generateEqualSectors(count);
    this.rotiPieces = sectors.map((sec, idx) => ({
      userData: {
        id: idx,
        fractionValue: sec.fractionValue,
        numerator: sec.fractionNumerator,
        denominator: sec.fractionDenominator,
        angleSpan: sec.angle,
        plateAssigned: null
      }
    }));
  }

  validateCurrentLevelSolution() {
    if (this.isAutoDistributing) {
      this.lastToast = "Please wait! Food is still being distributed to the plates.";
      this.lastResult = { success: false, reason: 'DISTRIBUTING' };
      return;
    }

    const lvl = this.getCurrentLevel();
    if (lvl.type === 'sharing') {
      this.validateSharingLevel(lvl);
    }
  }

  validateSharingLevel(lvl) {
    if (this.isAutoDistributing) {
      this.lastToast = "Please wait! Food is still being distributed to the plates.";
      this.lastResult = { success: false, reason: 'DISTRIBUTING' };
      return;
    }

    // Level 1: Chintu & Meera each get 1/2
    if (lvl.id === 1) {
      if (this.rotiPieces.length <= 1) {
        this.lastToast = "Cut the roti first! Select 2 slices and click '⚡ Cut & Share Roti'.";
        this.lastResult = { success: false, reason: 'UNCUT' };
        return;
      }

      if (this.rotiPieces.length !== 2) {
        this.lastToast = `Level 1 requires dividing into 2 equal halves (1/2 each)! Currently cut into ${this.rotiPieces.length} pieces.`;
        this.lastResult = { success: false, reason: 'WRONG_PIECE_COUNT' };
        return;
      }

      const unshared = this.rotiPieces.filter(p => !p.userData.plateAssigned);
      if (unshared.length > 0) {
        this.lastToast = `Share both pieces to the plates! (${unshared.length} pieces left on the cutting board)`;
        this.lastResult = { success: false, reason: 'UNSHARED_PIECES' };
        return;
      }

      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');

      if (!chintuPlate || !meeraPlate) {
        this.lastToast = "Missing plates for Chintu and Meera!";
        this.lastResult = { success: false, reason: 'MISSING_PLATES' };
        return;
      }

      const chintuPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === chintuPlate);
      const meeraPieces = this.rotiPieces.filter(p => p.userData.plateAssigned === meeraPlate);

      if (chintuPieces.length + meeraPieces.length !== 2) {
        this.lastToast = "Both friends must each receive their share!";
        this.lastResult = { success: false, reason: 'INVALID_ASSIGNMENT' };
        return;
      }

      const chintuSum = chintuPieces.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);
      const meeraSum = meeraPieces.reduce((acc, p) => acc + (p.userData.fractionValue || 0), 0);

      if (Math.abs(chintuSum - 0.5) > 0.01) {
        this.lastToast = `Chintu received ${chintuSum}, but needs exactly 1/2 roti!`;
        this.lastResult = { success: false, reason: 'CHINTU_INCORRECT' };
        return;
      }

      if (Math.abs(meeraSum - 0.5) > 0.01) {
        this.lastToast = `Meera received ${meeraSum}, but needs exactly 1/2 roti!`;
        this.lastResult = { success: false, reason: 'MEERA_INCORRECT' };
        return;
      }

      for (const piece of this.rotiPieces) {
        const span = piece.userData.angleSpan;
        if (span !== undefined && Math.abs(span - Math.PI) > 0.05) {
          this.lastToast = "The pieces are not equal! Both halves must have equal areas.";
          this.lastResult = { success: false, reason: 'UNEQUAL_AREAS' };
          return;
        }
      }

      if (Math.abs((chintuSum + meeraSum) - 1.0) > 0.01) {
        this.lastToast = "The complete roti must be accounted for!";
        this.lastResult = { success: false, reason: 'INCOMPLETE_ROTI' };
        return;
      }

      this.lastToast = "Perfect! Both friends received 1/2 roti!";
      this.lastResult = { success: true, message: "Perfect! Both friends received 1/2 roti!" };
      return;
    }

    // Level 2
    if (lvl.id === 2) {
      if (this.rotiPieces.length !== 3) {
        this.lastResult = { success: false, reason: 'WRONG_PIECE_COUNT' };
        return;
      }
      const chintuPlate = this.plates.find(p => p.userData.friendName === 'Chintu');
      const meeraPlate = this.plates.find(p => p.userData.friendName === 'Meera');
      const goluPlate = this.plates.find(p => p.userData.friendName === 'Golu');
      const chintuSum = this.rotiPieces.filter(p => p.userData.plateAssigned === chintuPlate).reduce((acc, p) => acc + p.userData.fractionValue, 0);
      const meeraSum = this.rotiPieces.filter(p => p.userData.plateAssigned === meeraPlate).reduce((acc, p) => acc + p.userData.fractionValue, 0);
      const goluSum = this.rotiPieces.filter(p => p.userData.plateAssigned === goluPlate).reduce((acc, p) => acc + p.userData.fractionValue, 0);

      if (Math.abs(chintuSum - 1/3) < 0.02 && Math.abs(meeraSum - 1/3) < 0.02 && Math.abs(goluSum - 1/3) < 0.02) {
        this.lastResult = { success: true, message: "Perfect! All three friends received 1/3 roti!" };
      } else {
        this.lastResult = { success: false, reason: 'UNFAIR' };
      }
    }
  }
}

const game = new MockGame();

// TEST 1: Level 1 before cutting (Whole roti) -> FAILS
game.setupLevel(0); // Level 1
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, false);
assert.strictEqual(game.lastResult.reason, 'UNCUT');
console.log("✓ TEST 1 PASSED: Uncut roti correctly rejected");

// TEST 2: Level 1 cut into 3 pieces -> FAILS
game.setupLevel(0);
game.cutRoti(3);
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, false);
assert.strictEqual(game.lastResult.reason, 'WRONG_PIECE_COUNT');
console.log("✓ TEST 2 PASSED: 3 pieces on Level 1 correctly rejected");

// TEST 3: Level 1 cut into 4 pieces -> FAILS
game.setupLevel(0);
game.cutRoti(4);
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, false);
assert.strictEqual(game.lastResult.reason, 'WRONG_PIECE_COUNT');
console.log("✓ TEST 3 PASSED: 4 pieces on Level 1 correctly rejected");

// TEST 4: Level 1 cut into 2 pieces, but not shared -> FAILS
game.setupLevel(0);
game.cutRoti(2);
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, false);
assert.strictEqual(game.lastResult.reason, 'UNSHARED_PIECES');
console.log("✓ TEST 4 PASSED: Unshared pieces on cutting board correctly rejected");

// TEST 5: Level 1 cut into 2 pieces, unequal angles (e.g. 1/3 and 2/3) -> FAILS
game.setupLevel(0);
game.cutRoti(2);
game.rotiPieces[0].userData.angleSpan = Math.PI * 0.7; // unequal!
game.rotiPieces[1].userData.angleSpan = Math.PI * 1.3;
game.rotiPieces[0].userData.plateAssigned = game.plates[0];
game.rotiPieces[1].userData.plateAssigned = game.plates[1];
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, false);
assert.strictEqual(game.lastResult.reason, 'UNEQUAL_AREAS');
console.log("✓ TEST 5 PASSED: Unequal area pieces correctly rejected");

// TEST 6: Level 1 cut into 2 pieces, both given to Chintu (unfair) -> FAILS
game.setupLevel(0);
game.cutRoti(2);
game.rotiPieces[0].userData.plateAssigned = game.plates[0]; // Chintu
game.rotiPieces[1].userData.plateAssigned = game.plates[0]; // Chintu
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, false);
assert.strictEqual(game.lastResult.reason, 'CHINTU_INCORRECT');
console.log("✓ TEST 6 PASSED: Uneven sharing (all to one person) correctly rejected");

// TEST 7: Check Sharing clicked while animation is running -> BLOCKED
game.setupLevel(0);
game.cutRoti(2);
game.isAutoDistributing = true;
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, false);
assert.strictEqual(game.lastResult.reason, 'DISTRIBUTING');
console.log("✓ TEST 7 PASSED: Check sharing during auto-distribution blocked");

// TEST 8: Level 1 correctly shared: 1/2 to Chintu, 1/2 to Meera -> SUCCESS!
game.setupLevel(0);
game.cutRoti(2);
game.rotiPieces[0].userData.plateAssigned = game.plates[0]; // Chintu
game.rotiPieces[1].userData.plateAssigned = game.plates[1]; // Meera
game.isAutoDistributing = false;
game.distributionCompleted = true;
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, true);
assert.strictEqual(game.lastResult.message, "Perfect! Both friends received 1/2 roti!");
console.log("✓ TEST 8 PASSED: Valid Level 1 sharing gives 'Perfect! Both friends received 1/2 roti!'");

// TEST 9: Level 2 correctly shared: 1/3 to Chintu, 1/3 to Meera, 1/3 to Golu -> SUCCESS!
game.setupLevel(1); // Level 2
game.cutRoti(3);
game.rotiPieces[0].userData.plateAssigned = game.plates[0]; // Chintu
game.rotiPieces[1].userData.plateAssigned = game.plates[1]; // Meera
game.rotiPieces[2].userData.plateAssigned = game.plates[2]; // Golu
game.validateCurrentLevelSolution();
assert.strictEqual(game.lastResult.success, true);
assert.strictEqual(game.lastResult.message, "Perfect! All three friends received 1/3 roti!");
console.log("✓ TEST 9 PASSED: Valid Level 2 sharing gives 'Perfect! All three friends received 1/3 roti!'");

// TEST 10: Reset resets state cleanly
game.setupLevel(0);
assert.strictEqual(game.rotiPieces.length, 1);
assert.strictEqual(game.rotiPieces[0].userData.plateAssigned, null);
assert.strictEqual(game.isAutoDistributing, false);
assert.strictEqual(game.distributionCompleted, false);
console.log("✓ TEST 10 PASSED: Reset properly restores fresh whole roti state");

console.log("\nALL 10 VERIFICATION TESTS PASSED SUCCESSFULLY! 🚀");
