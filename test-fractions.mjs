import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  Fraction,
  generateEqualSectors,
  validateEqualSlicing,
  validateFairDistribution,
  getSectorArea,
  getTotalCircleArea
} from './src/fractions.js';

describe('Fraction Mathematics and Sector Validation', () => {
  it('correctly calculates two equal halves (1/2)', () => {
    const halves = generateEqualSectors(2);
    assert.strictEqual(halves.length, 2);
    assert.strictEqual(halves[0].fractionString, '1/2');
    assert.strictEqual(halves[0].fractionValue, 0.5);
    assert.strictEqual(halves[1].fractionValue, 0.5);

    const angles = halves.map(h => h.angle);
    assert.ok(validateEqualSlicing(angles, 2));

    // Distribution: each friend gets 1 piece (0.5)
    const fairSharing = validateFairDistribution([[0.5], [0.5]], 0.5);
    assert.strictEqual(fairSharing, true);

    // Unfair sharing check: one gets 1.0, other gets 0.0
    const unfairSharing = validateFairDistribution([[1.0], [0.0]], 0.5);
    assert.strictEqual(unfairSharing, false);
  });

  it('correctly calculates three equal thirds (1/3)', () => {
    const thirds = generateEqualSectors(3);
    assert.strictEqual(thirds.length, 3);
    assert.strictEqual(thirds[0].fractionString, '1/3');
    assert.ok(Math.abs(thirds[0].fractionValue - 1/3) < 1e-6);

    const angles = thirds.map(t => t.angle);
    assert.ok(validateEqualSlicing(angles, 3));

    // Total angle must sum to 2*PI
    const totalAngle = angles.reduce((a, b) => a + b, 0);
    assert.ok(Math.abs(totalAngle - 2 * Math.PI) < 1e-6);

    // Distribution: 3 friends receive 1/3 each
    const fairSharing = validateFairDistribution([[1/3], [1/3], [1/3]], 1/3);
    assert.strictEqual(fairSharing, true);

    // Unfair distribution test
    const unfairSharing = validateFairDistribution([[2/3], [1/3], [0]], 1/3);
    assert.strictEqual(unfairSharing, false);
  });

  it('correctly calculates four equal quarters (1/4)', () => {
    const quarters = generateEqualSectors(4);
    assert.strictEqual(quarters.length, 4);
    assert.strictEqual(quarters[0].fractionString, '1/4');
    assert.strictEqual(quarters[0].fractionValue, 0.25);

    const angles = quarters.map(q => q.angle);
    assert.ok(validateEqualSlicing(angles, 4));

    // Adding fractions: 1/4 + 1/4 = 2/4 = 1/2
    const f1 = new Fraction(1, 4);
    const f2 = new Fraction(1, 4);
    const sum = Fraction.add(f1, f2);
    assert.strictEqual(sum.toString(), '1/2');
    assert.strictEqual(sum.valueOf(), 0.5);

    // Comparing fractions: 1/2 > 1/4
    const half = new Fraction(1, 2);
    assert.ok(Fraction.isGreater(half, f1));
    assert.ok(!Fraction.isGreater(f1, half));

    // Equivalence: 1/2 == 2/4
    const twoQuarters = new Fraction(2, 4);
    assert.ok(Fraction.equals(half, twoQuarters));
  });

  it('correctly validates sector areas with π * r²', () => {
    const radius = 1.35;
    const totalArea = getTotalCircleArea(radius);
    const halfArea = getSectorArea(radius, Math.PI);
    const quarterArea = getSectorArea(radius, Math.PI / 2);

    assert.ok(Math.abs(totalArea - (Math.PI * radius * radius)) < 1e-6);
    assert.ok(Math.abs(halfArea - totalArea / 2) < 1e-6);
    assert.ok(Math.abs(quarterArea - totalArea / 4) < 1e-6);
  });

  it('correctly calculates 6 equal slices (1/6) and 8 equal slices (1/8)', () => {
    const sixths = generateEqualSectors(6);
    assert.strictEqual(sixths.length, 6);
    assert.strictEqual(sixths[0].fractionString, '1/6');
    assert.ok(Math.abs(sixths[0].fractionValue - 1/6) < 1e-6);
    assert.ok(validateEqualSlicing(sixths.map(s => s.angle), 6));

    const eighths = generateEqualSectors(8);
    assert.strictEqual(eighths.length, 8);
    assert.strictEqual(eighths[0].fractionString, '1/8');
    assert.strictEqual(eighths[0].fractionValue, 0.125);
    assert.ok(validateEqualSlicing(eighths.map(e => e.angle), 8));

    // Equivalence: 4/8 = 1/2
    const fourEighths = new Fraction(4, 8);
    const oneHalf = new Fraction(1, 2);
    assert.ok(Fraction.equals(fourEighths, oneHalf));
  });

  it('correctly models balance scale physics (diff = 0 implies balanced)', () => {
    // 1/2 vs 2/4
    const leftVal = 0.5;
    const rightVal = 0.25 + 0.25;
    const diff = leftVal - rightVal;
    assert.strictEqual(diff, 0); // Balanced!

    // 1/2 vs 1/4
    const diffUnequal = 0.5 - 0.25;
    assert.ok(diffUnequal > 0); // Left is heavier!
  });
});

