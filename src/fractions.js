/**
 * fractions.js
 * Mathematical engine for fractions, area validation, sector geometry, and equivalences.
 * Targets Class 3-4 curriculum:
 * - Unit fractions: 1/2, 1/3, 1/4, 1/6, 1/8
 * - Proper fractions: 2/3, 3/4, 2/4, 4/4
 * - Equivalent fractions: 1/2 = 2/4 = 3/6 = 4/8
 * - Fraction comparison: 1/2 > 1/4, 2/3 > 1/3
 * - Fraction addition: 1/4 + 1/4 = 2/4
 */

export class Fraction {
  constructor(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    this.numerator = Math.round(numerator);
    this.denominator = Math.round(denominator);
    this.simplify();
  }

  simplify() {
    const gcd = Fraction.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
    this.numerator = this.numerator / gcd;
    this.denominator = this.denominator / gcd;
    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
    return this;
  }

  valueOf() {
    return this.numerator / this.denominator;
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }

  toWords() {
    const numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];
    const denWordsSingular = {
      1: "whole",
      2: "half",
      3: "third",
      4: "quarter",
      5: "fifth",
      6: "sixth",
      8: "eighth"
    };
    const denWordsPlural = {
      1: "wholes",
      2: "halves",
      3: "thirds",
      4: "quarters",
      5: "fifths",
      6: "sixths",
      8: "eighths"
    };

    if (this.numerator === 1) {
      return `One ${denWordsSingular[this.denominator] || 'part'}`;
    }
    const num = numWords[this.numerator] || this.numerator;
    const den = denWordsPlural[this.denominator] || `${this.denominator}ths`;
    return `${num.charAt(0).toUpperCase() + num.slice(1)} ${den}`;
  }

  static gcd(a, b) {
    return b === 0 ? a : Fraction.gcd(b, a % b);
  }

  static fromString(str) {
    const parts = str.split('/');
    if (parts.length === 1) return new Fraction(parseInt(parts[0], 10), 1);
    return new Fraction(parseInt(parts[0], 10), parseInt(parts[1], 10));
  }

  static equals(f1, f2) {
    return Math.abs(f1.valueOf() - f2.valueOf()) < 1e-6;
  }

  static isGreater(f1, f2) {
    return f1.valueOf() > f2.valueOf() + 1e-6;
  }

  static add(f1, f2) {
    const commonDen = f1.denominator * f2.denominator;
    const newNum = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    return new Fraction(newNum, commonDen);
  }
}

/**
 * Calculates sector geometric area based on radius and angle.
 * Area = (theta / 2) * r^2
 * Total Circle Area = PI * r^2
 */
export function getSectorArea(radius, thetaRadians) {
  return 0.5 * radius * radius * thetaRadians;
}

export function getTotalCircleArea(radius) {
  return Math.PI * radius * radius;
}

/**
 * Validates whether an array of sector angles represents a fair equal division.
 * For N pieces: each piece must have angle ~ (2 * PI / N)
 * Tolerance is within 1% (0.01 radians).
 */
export function validateEqualSlicing(sectorAngles, targetPieces, tolerance = 0.05) {
  if (sectorAngles.length !== targetPieces) return false;
  const expectedAngle = (2 * Math.PI) / targetPieces;
  for (const angle of sectorAngles) {
    if (Math.abs(angle - expectedAngle) > tolerance) {
      return false;
    }
  }
  return true;
}

/**
 * Validates whether distribution of pieces across plates is mathematically fair.
 * plates: Array of arrays containing sector fractions or weights
 * targetFractionPerPerson: e.g. 1/2 or 1/3 or 1/4
 */
export function validateFairDistribution(plateAllocations, targetFractionVal, tolerance = 0.01) {
  for (const alloc of plateAllocations) {
    const totalVal = alloc.reduce((sum, item) => sum + (item.fractionValue || item), 0);
    if (Math.abs(totalVal - targetFractionVal) > tolerance) {
      return false;
    }
  }
  return true;
}

/**
 * Generate sector definition metadata for N equal parts
 */
export function generateEqualSectors(numPieces, totalAngle = 2 * Math.PI, startOffset = 0) {
  const anglePerPiece = totalAngle / numPieces;
  const sectors = [];

  for (let i = 0; i < numPieces; i++) {
    const startAngle = startOffset + i * anglePerPiece;
    const endAngle = startAngle + anglePerPiece;
    sectors.push({
      index: i,
      startAngle,
      endAngle,
      angle: anglePerPiece,
      fractionNumerator: 1,
      fractionDenominator: numPieces,
      fractionString: `1/${numPieces}`,
      fractionValue: 1 / numPieces,
      centerAngle: startAngle + anglePerPiece / 2
    });
  }

  return sectors;
}
