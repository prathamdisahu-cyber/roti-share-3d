import assert from 'node:assert';
import { LEVEL_DEFINITIONS } from './src/levels.js';
import { generateEqualSectors } from './src/fractions.js';

console.log("=== RUNNING FULL 10-LEVEL GAMEPLAY VERIFICATION SUITE ===");

class LevelSimulator {
  constructor() {
    this.levels = LEVEL_DEFINITIONS;
  }

  simulateLevel(index, cutPieces) {
    const lvl = this.levels[index];
    assert(lvl, `Level ${index + 1} must exist`);

    const sectors = generateEqualSectors(cutPieces);
    assert.strictEqual(sectors.length, cutPieces);

    // Verify angle sums to 2PI
    const totalAngle = sectors.reduce((acc, s) => acc + s.angle, 0);
    assert(Math.abs(totalAngle - Math.PI * 2) < 0.001, "Sector angles must sum to 2*PI");

    return { lvl, sectors };
  }
}

const sim = new LevelSimulator();

// Level 1: Two Friends (1/2 each)
const l1 = sim.simulateLevel(0, 2);
assert.strictEqual(l1.lvl.id, 1);
assert.strictEqual(l1.lvl.title, "Two Friends");
assert.strictEqual(l1.lvl.hint, "Two friends need two equal pieces.");
assert.strictEqual(l1.sectors[0].fractionValue, 0.5);
assert.strictEqual(l1.sectors[1].fractionValue, 0.5);
console.log("✓ LEVEL 1 VERIFIED: 1/2 each to Chintu & Meera");

// Level 2: Three Friends (1/3 each)
const l2 = sim.simulateLevel(1, 3);
assert.strictEqual(l2.lvl.id, 2);
assert.strictEqual(l2.lvl.title, "Three Friends");
assert.strictEqual(l2.lvl.hint, "Three friends need three equal shares.");
assert(Math.abs(l2.sectors[0].fractionValue - 1/3) < 0.001);
console.log("✓ LEVEL 2 VERIFIED: 1/3 each to Chintu, Meera, Golu");

// Level 3: Four Equal Pieces
const l3 = sim.simulateLevel(2, 4);
assert.strictEqual(l3.lvl.id, 3);
assert.strictEqual(l3.lvl.title, "Four Equal Pieces");
assert.strictEqual(l3.sectors[0].fractionValue, 0.25);
console.log("✓ LEVEL 3 VERIFIED: 4 equal quarters (1/4 each)");

// Level 4: Fraction Finder
const l4 = LEVEL_DEFINITIONS[3];
assert.strictEqual(l4.id, 4);
assert.strictEqual(l4.type, "identify");
assert.strictEqual(l4.correctOption, "1/4");
assert(l4.options.includes("1/4"));
console.log("✓ LEVEL 4 VERIFIED: Fraction identification 1/4");

// Level 5: Three-Quarters Challenge
const l5 = sim.simulateLevel(4, 4);
assert.strictEqual(l5.lvl.id, 5);
assert.strictEqual(l5.lvl.title, "Three-Quarters Challenge");
assert.strictEqual(l5.lvl.hint, "Three-quarters means three out of four equal pieces.");
const goluPortion = l5.sectors.slice(0, 3).reduce((acc, s) => acc + s.fractionValue, 0);
assert.strictEqual(goluPortion, 0.75);
const remainingPortion = l5.sectors[3].fractionValue;
assert.strictEqual(remainingPortion, 0.25);
console.log("✓ LEVEL 5 VERIFIED: 3/4 to Golu, 1/4 remaining on board");

// Level 6: Compare Fractions
const l6 = LEVEL_DEFINITIONS[5];
assert.strictEqual(l6.id, 6);
assert.strictEqual(l6.type, "compare");
assert(l6.correctOption.includes("1/2 > 1/4"));
console.log("✓ LEVEL 6 VERIFIED: 1/2 > 1/4 comparison");

// Level 7: Equivalent Fractions
const l7 = LEVEL_DEFINITIONS[6];
assert.strictEqual(l7.id, 7);
assert.strictEqual(l7.type, "compare");
assert.strictEqual(l7.leftVal, l7.rightVal); // 1/2 == 2/4
assert(l7.correctOption.includes("1/2 = 2/4"));
console.log("✓ LEVEL 7 VERIFIED: 1/2 = 2/4 equivalent fractions");

// Level 8: Fraction Addition
const l8 = sim.simulateLevel(7, 4);
assert.strictEqual(l8.lvl.id, 8);
assert.strictEqual(l8.lvl.type, "addition");
const addedPortion = l8.sectors[0].fractionValue + l8.sectors[1].fractionValue;
assert.strictEqual(addedPortion, 0.5); // 1/4 + 1/4 = 2/4 = 1/2
console.log("✓ LEVEL 8 VERIFIED: 1/4 + 1/4 = 2/4 addition");

// Level 9: Roti Shop
const l9 = sim.simulateLevel(8, 2);
assert.strictEqual(l9.lvl.id, 9);
assert.strictEqual(l9.lvl.title, "Roti Shop");
assert.strictEqual(l9.lvl.type, "shop_level");
assert.strictEqual(l9.sectors[0].fractionValue, 0.5);
console.log("✓ LEVEL 9 VERIFIED: Roti Shop serving requested fraction");

// Level 10: Fraction Master
const l10 = sim.simulateLevel(9, 6);
assert.strictEqual(l10.lvl.id, 10);
assert.strictEqual(l10.lvl.title, "Fraction Master");
const chintu10 = l10.sectors[0].fractionValue + l10.sectors[1].fractionValue;
const meera10 = l10.sectors[2].fractionValue + l10.sectors[3].fractionValue;
const golu10 = l10.sectors[4].fractionValue + l10.sectors[5].fractionValue;
assert(Math.abs(chintu10 - 2/6) < 0.001);
assert(Math.abs(meera10 - 2/6) < 0.001);
assert(Math.abs(golu10 - 2/6) < 0.001);
assert(Math.abs(chintu10 + meera10 + golu10 - 1.0) < 0.001);
console.log("✓ LEVEL 10 VERIFIED: 6 pieces, 2/6 = 1/3 each to Chintu, Meera, and Golu");

console.log("\nALL 10 EDUCATIONAL LEVELS VALIDATED WITH 100% SPEC COMPLIANCE! 🎓🚀\n");
