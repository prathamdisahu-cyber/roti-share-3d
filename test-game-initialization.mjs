import fs from 'node:fs';
import assert from 'node:assert';

console.log("=== VERIFYING GAME INITIALIZATION & RUNTIME STABILITY ===");

// Lightweight DOM mock for node environment
class MockElement {
  constructor(tag = 'div', id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = '';
    this.classList = {
      add: (c) => {},
      remove: (c) => {},
      contains: () => false
    };
    this.style = {};
    this.children = [];
    this.dataset = {};
    this.textContent = '';
    this.innerHTML = '';
    this.listeners = {};
  }
  addEventListener(evt, fn) {
    if (!this.listeners[evt]) this.listeners[evt] = [];
    this.listeners[evt].push(fn);
  }
  removeEventListener() {}
  appendChild(child) { this.children.push(child); return child; }
  removeChild() {}
  querySelector(sel) { return new MockElement('div'); }
  querySelectorAll(sel) { return [new MockElement('button'), new MockElement('button')]; }
  getBoundingClientRect() { return { left: 0, top: 0, width: 800, height: 600 }; }
  getContext(type) {
    if (type === 'webgl' || type === 'webgl2') {
      const glMock = {
        getExtension: () => null,
        getParameter: (param) => {
          if (param === 3379) return 4096;
          if (param === 34921) return 16;
          if (param === 35661) return 16;
          return 'WebGL 2.0';
        },
        createTexture: () => ({}),
        createProgram: () => ({}),
        createShader: () => ({}),
        getProgramParameter: () => true,
        getShaderParameter: () => true,
        getShaderInfoLog: () => '',
        getProgramInfoLog: () => '',
        getShaderPrecisionFormat: () => ({ precision: 23, rangeMin: 127, rangeMax: 127 }),
        checkFramebufferStatus: () => 36053
      };
      return new Proxy(glMock, {
        get(target, prop) {
          if (prop in target) return target[prop];
          return () => {};
        }
      });
    }
    if (type === '2d') {
      return {
        fillRect: () => {},
        clearRect: () => {},
        createRadialGradient: () => ({ addColorStop: () => {} }),
        createLinearGradient: () => ({ addColorStop: () => {} }),
        getImageData: () => ({ data: new Uint8Array(4) }),
        putImageData: () => {},
        createImageData: () => ({ data: new Uint8Array(4) }),
        setTransform: () => {},
        drawImage: () => {},
        save: () => {},
        fillText: () => {},
        restore: () => {},
        beginPath: () => {},
        moveTo: () => {},
        lineTo: () => {},
        closePath: () => {},
        stroke: () => {},
        fill: () => {},
        arc: () => {},
        roundRect: () => {},
        measureText: () => ({ width: 50 })
      };
    }
    return null;
  }
}

const elementsMap = new Map();
function getOrCreate(id) {
  if (!elementsMap.has(id)) {
    elementsMap.set(id, new MockElement('div', id));
  }
  return elementsMap.get(id);
}

global.window = {
  innerWidth: 1024,
  innerHeight: 768,
  devicePixelRatio: 1,
  addEventListener: () => {},
  removeEventListener: () => {}
};
global.document = {
  getElementById: (id) => getOrCreate(id),
  querySelectorAll: (sel) => [new MockElement('button'), new MockElement('button')],
  querySelector: (sel) => new MockElement('div'),
  createElement: (tag) => new MockElement(tag),
  addEventListener: () => {},
  removeEventListener: () => {}
};
global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
global.cancelAnimationFrame = (id) => clearTimeout(id);
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};
global.performance = { now: () => Date.now() };

// Import RotiShareGame
const { RotiShareGame } = await import('./src/game.js');

console.log("1. Instantiating RotiShareGame...");
const game = new RotiShareGame();

assert.ok(game, "Game object created successfully");
console.log("✓ Game instantiated without errors");

assert.ok(game.scene, "Three.js scene exists");
assert.ok(game.camera, "PerspectiveCamera exists");
assert.ok(game.renderer, "Renderer exists");
assert.ok(game.foodItemsGroup, "foodItemsGroup exists and is initialized!");
console.log("✓ Core Three.js components and foodItemsGroup verified");

assert.ok(game.table, "Table mesh created");
assert.ok(game.cuttingBoard, "Cutting board created");
assert.ok(game.knife, "Butter Knife created");
assert.ok(game.spatula, "Serving Spatula created");
assert.ok(game.balanceScale, "Balance scale created");
assert.ok(game.characterSystem, "Character system created");
console.log("✓ 3D Environment, Equipment, and Characters verified");

assert.strictEqual(game.currentLevelIndex, 0);
assert.strictEqual(game.rotiPieces.length, 1, "Level 1 starts with 1 whole roti piece");
assert.strictEqual(game.plates.length, 2, "Level 1 has 2 plates (Chintu and Meera)");
console.log("✓ Level 1 3D scene correctly populated");

console.log("\nALL INITIALIZATION CHECKS PASSED PERFECTLY! 🚀");
process.exit(0);
