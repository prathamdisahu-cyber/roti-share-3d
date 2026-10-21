import './style.css';
import { RotiShareGame } from './game.js';

function initGame() {
  if (window.rotiGame) return; // Prevent double initialization
  try {
    const game = new RotiShareGame();
    window.rotiGame = game;
  } catch (err) {
    console.error('Failed to initialize RotiShareGame:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}
