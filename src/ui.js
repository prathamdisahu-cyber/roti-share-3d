/**
 * ui.js
 * Comprehensive HUD, Equipment, Audio, and Modal Management for Roti Share:
 * - Equipment selection (Butter Knife, Spatula, Measuring Tool, Balance Scale, Fraction Tiles)
 * - Mode Controllers (Campaign, Roti Shop, Timed Rush, Creative Kitchen)
 * - Achievements & Badges Modal
 * - Web Audio API synthesized sound effects
 * - Dynamic Fraction Callouts & Confetti Celebrations
 */

import confetti from 'canvas-confetti';
import { ACHIEVEMENTS_LIST } from './levels.js';

export class SoundManager {
  constructor() {
    this.enabled = true;
    this.audioCtx = null;
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.initAudio();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.08);
  }

  playSlice() {
    if (!this.enabled) return;
    this.initAudio();
    if (!this.audioCtx) return;

    const bufferSize = this.audioCtx.sampleRate * 0.18;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, this.audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(600, this.audioCtx.currentTime + 0.18);
    filter.Q.value = 3.0;

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.4, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.18);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);
    noise.start();
  }

  playDropPiece() {
    if (!this.enabled) return;
    this.initAudio();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, this.audioCtx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.15);
  }

  playPlateClink() {
    if (!this.enabled) return;
    this.initAudio();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1420, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(780, this.audioCtx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.22, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.12);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.initAudio();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.1);

      gain.gain.setValueAtTime(0.25, this.audioCtx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + idx * 0.1 + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(this.audioCtx.currentTime + idx * 0.1);
      osc.stop(this.audioCtx.currentTime + idx * 0.1 + 0.35);
    });
  }

  playError() {
    if (!this.enabled) return;
    this.initAudio();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(160, this.audioCtx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.2);
  }
}

export class UIManager {
  constructor(game) {
    this.game = game;
    this.sound = new SoundManager();
    this.bindDomElements();
    this.bindEvents();
  }

  bindDomElements() {
    // Top Bar
    this.elLevelNum = document.getElementById('level-num');
    this.elLevelTitle = document.getElementById('level-title');
    this.elDiffTag = document.getElementById('difficulty-tag');
    this.elModeTag = document.getElementById('game-mode-tag');
    this.elScore = document.getElementById('score-val');
    this.elCoins = document.getElementById('coins-val');
    this.elTimerBadge = document.getElementById('timer-badge');
    this.elTimerVal = document.getElementById('timer-val');
    this.elStarsDisplay = document.getElementById('stars-display');
    this.btnVoice = document.getElementById('btn-voice');
    this.voiceIcon = document.getElementById('voice-icon');
    this.btnSound = document.getElementById('btn-sound');
    this.soundIcon = document.getElementById('sound-icon');
    this.btnCameraReset = document.getElementById('btn-camera-reset');
    this.btnHelp = document.getElementById('btn-help');
    this.btnMenu = document.getElementById('btn-menu');

    // Objective Banner
    this.elInstruction = document.getElementById('objective-instruction');
    this.elSubInstruction = document.getElementById('sub-instruction');
    this.btnHint = document.getElementById('btn-hint');

    // Equipment & Mode Controls
    this.toolButtons = document.querySelectorAll('.tool-btn');
    this.modeButtons = document.querySelectorAll('.mode-btn');
    this.sliceCountButtons = document.querySelectorAll('.slice-count-btn');
    this.sliceSelector = document.getElementById('slice-selector');
    this.btnExecuteCut = document.getElementById('btn-execute-cut');
    this.btnResetLevel = document.getElementById('btn-reset-level');
    this.btnCheckSolution = document.getElementById('btn-check-solution');

    // Creative Kitchen Food Picker
    this.creativeFoodSelector = document.getElementById('creative-food-selector');
    this.foodPickButtons = document.querySelectorAll('.food-pick-btn');

    // Roti Shop Order Panel
    this.rotiShopPanel = document.getElementById('roti-shop-order-panel');
    this.shopCustomerAvatar = document.getElementById('shop-customer-avatar');
    this.shopCustomerName = document.getElementById('shop-customer-name');
    this.shopOrderSpeech = document.getElementById('shop-order-speech');
    this.shopRewardCoins = document.getElementById('shop-reward-coins');
    this.btnShopServe = document.getElementById('btn-shop-serve');

    // Quiz Panel
    this.quizPanel = document.getElementById('fraction-quiz-panel');
    this.quizQuestion = document.getElementById('quiz-question');
    this.quizOptions = document.getElementById('quiz-options');

    // Floating Fraction Callout
    this.fractionCallout = document.getElementById('fraction-math-callout');
    this.mathNum = document.getElementById('math-num');
    this.mathDen = document.getElementById('math-den');
    this.mathDesc = document.getElementById('math-desc');

    // Feedback Toast
    this.toast = document.getElementById('feedback-toast');
    this.toastMessage = document.getElementById('toast-message');
    this.toastIcon = document.getElementById('toast-icon');

    // Modals
    this.hintModal = document.getElementById('hint-modal');
    this.hintText = document.getElementById('hint-text');
    this.btnSpeakHint = document.getElementById('btn-speak-hint');
    this.btnCloseHint = document.getElementById('btn-close-hint');

    this.successModal = document.getElementById('success-modal');
    this.successTitle = document.getElementById('success-title');
    this.successMessage = document.getElementById('success-message');
    this.successMathBox = document.getElementById('success-math-box');
    this.modalStars = document.getElementById('modal-stars');
    this.btnReplay = document.getElementById('btn-replay-level');
    this.btnNextLevel = document.getElementById('btn-next-level');

    this.mainMenu = document.getElementById('main-menu');
    this.btnPlay = document.getElementById('btn-play');
    this.btnModeShop = document.getElementById('btn-mode-shop');
    this.btnModeTimed = document.getElementById('btn-mode-timed');
    this.btnModeCreative = document.getElementById('btn-mode-creative');
    this.btnAchievements = document.getElementById('btn-achievements');
    this.btnLevelSelect = document.getElementById('btn-level-select');
    this.btnHowToPlay = document.getElementById('btn-how-to-play');
    this.btnVoiceMenu = document.getElementById('btn-voice-menu');
    this.btnSoundMenu = document.getElementById('btn-sound-menu');
    this.btnResetProgress = document.getElementById('btn-reset-progress');
    this.diffButtons = document.querySelectorAll('.diff-btn');

    this.achievementsModal = document.getElementById('achievements-modal');
    this.btnCloseAchievements = document.getElementById('btn-close-achievements');
    this.achievementsListContainer = document.getElementById('achievements-list-container');

    this.levelSelectModal = document.getElementById('level-select-modal');
    this.levelGridContainer = document.getElementById('level-grid-container');
    this.btnCloseLevels = document.getElementById('btn-close-levels');

    this.howToPlayModal = document.getElementById('how-to-play-modal');
    this.btnCloseHelp = document.getElementById('btn-close-help');
    this.btnHelpOk = document.getElementById('btn-help-ok');
  }

  bindEvents() {
    // Voice Toggle
    const handleVoiceToggle = () => {
      if (!this.game.voice) return;
      const active = this.game.voice.toggle();
      if (this.voiceIcon) this.voiceIcon.textContent = active ? '🗣️' : '🔇';
      if (this.btnVoiceMenu) this.btnVoiceMenu.textContent = active ? 'Voice: ON 🗣️' : 'Voice: OFF 🔇';
      this.showToast(active ? "Voice Pack Enabled 🗣️" : "Voice Pack Muted 🔇", "🎙️");
      if (active) {
        this.sound.playClick();
        this.game.voice.speak("Voice pack enabled. Let's learn fractions together!", "teacher");
      }
    };
    if (this.btnVoice) this.btnVoice.addEventListener('click', handleVoiceToggle);
    if (this.btnVoiceMenu) this.btnVoiceMenu.addEventListener('click', handleVoiceToggle);

    // Sound Toggle
    const handleSoundToggle = () => {
      const active = this.sound.toggle();
      this.soundIcon.textContent = active ? '🔊' : '🔇';
      if (this.btnSoundMenu) this.btnSoundMenu.textContent = active ? 'Sound: ON 🔊' : 'Sound: OFF 🔇';
      if (active) this.sound.playClick();
    };
    this.btnSound.addEventListener('click', handleSoundToggle);
    if (this.btnSoundMenu) this.btnSoundMenu.addEventListener('click', handleSoundToggle);

    // Camera Reset
    this.btnCameraReset.addEventListener('click', () => {
      this.sound.playClick();
      this.game.resetCamera();
    });

    // Menu Button
    this.btnMenu.addEventListener('click', () => {
      this.sound.playClick();
      this.showMainMenu();
    });

    // Play Campaign from Main Menu
    this.btnPlay.addEventListener('click', () => {
      this.sound.playClick();
      this.hideMainMenu();
      this.game.startLevel(this.game.currentLevelIndex);
    });

    // Roti Shop Mode from Menu
    if (this.btnModeShop) {
      this.btnModeShop.addEventListener('click', () => {
        this.sound.playClick();
        this.hideMainMenu();
        this.game.startRotiShopMode();
      });
    }

    // Timed Mode from Menu
    if (this.btnModeTimed) {
      this.btnModeTimed.addEventListener('click', () => {
        this.sound.playClick();
        this.hideMainMenu();
        this.game.startTimedChallenge();
      });
    }

    // Creative Kitchen from Menu
    if (this.btnModeCreative) {
      this.btnModeCreative.addEventListener('click', () => {
        this.sound.playClick();
        this.hideMainMenu();
        this.game.startCreativeKitchen();
      });
    }

    // Achievements Modal
    if (this.btnAchievements) {
      this.btnAchievements.addEventListener('click', () => {
        this.sound.playClick();
        this.showAchievements();
      });
    }
    if (this.btnCloseAchievements) {
      this.btnCloseAchievements.addEventListener('click', () => {
        this.sound.playClick();
        this.hideAchievements();
      });
    }

    // How to Play Modal
    this.btnHowToPlay.addEventListener('click', () => {
      this.sound.playClick();
      this.showHowToPlay();
    });
    if (this.btnHelp) {
      this.btnHelp.addEventListener('click', () => {
        this.sound.playClick();
        this.showHowToPlay();
      });
    }
    this.btnCloseHelp.addEventListener('click', () => {
      this.sound.playClick();
      this.hideHowToPlay();
    });
    this.btnHelpOk.addEventListener('click', () => {
      this.sound.playClick();
      this.hideHowToPlay();
    });

    // Level Select Modal
    this.btnLevelSelect.addEventListener('click', () => {
      this.sound.playClick();
      this.showLevelSelect();
    });
    this.btnCloseLevels.addEventListener('click', () => {
      this.sound.playClick();
      this.hideLevelSelect();
    });

    // Equipment Selector Buttons
    this.toolButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.toolButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tool = btn.dataset.tool;
        this.game.setEquipment(tool);
        this.sound.playClick();
      });
    });

    // Mode Toggle Buttons
    this.modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        this.setMode(mode);
        this.sound.playClick();
      });
    });

    // Slice Count Selection Buttons
    this.sliceCountButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.sliceCountButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const count = parseInt(btn.dataset.pieces, 10);
        this.game.setPreviewSliceCount(count);
        this.sound.playClick();
      });
    });

    // Creative Kitchen Food Picker Buttons
    this.foodPickButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.foodPickButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const food = btn.dataset.food;
        this.game.setCreativeFood(food);
        this.sound.playClick();
      });
    });

    // Execute Slice Action
    this.btnExecuteCut.addEventListener('click', () => {
      this.game.executeSlicing();
    });

    // Reset Level Roti
    this.btnResetLevel.addEventListener('click', () => {
      this.sound.playClick();
      this.game.resetCurrentLevel();
    });

    // Check Solution
    this.btnCheckSolution.addEventListener('click', () => {
      this.sound.playClick();
      this.game.validateCurrentLevelSolution();
    });

    // Serve Shop Order Button
    if (this.btnShopServe) {
      this.btnShopServe.addEventListener('click', () => {
        this.game.validateCurrentLevelSolution();
      });
    }

    // Hint Modal
    this.btnHint.addEventListener('click', () => {
      this.sound.playClick();
      this.showHint();
    });
    if (this.btnSpeakHint) {
      this.btnSpeakHint.addEventListener('click', () => {
        this.sound.playClick();
        const lvl = this.game.getCurrentLevel();
        if (this.game.voice && lvl && lvl.hint) {
          this.game.voice.speakTeacherHint(lvl.hint);
        }
      });
    }
    this.btnCloseHint.addEventListener('click', () => {
      this.sound.playClick();
      this.hintModal.classList.add('hidden');
      if (this.game.voice) this.game.voice.stop();
    });

    // Success Modal Controls
    this.btnReplay.addEventListener('click', () => {
      this.sound.playClick();
      this.successModal.classList.add('hidden');
      this.game.resetCurrentLevel();
    });
    this.btnNextLevel.addEventListener('click', () => {
      this.sound.playClick();
      this.successModal.classList.add('hidden');
      this.game.nextLevel();
    });

    // Difficulty Settings
    this.diffButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.sound.playClick();
        this.diffButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const diff = btn.dataset.diff;
        this.game.setDifficulty(diff);
        this.elDiffTag.textContent = diff.toUpperCase();
      });
    });

    // Reset Progress
    this.btnResetProgress.addEventListener('click', () => {
      this.sound.playClick();
      if (confirm("Are you sure you want to reset all stars, coins, and unlocked levels?")) {
        this.game.resetAllProgress();
        this.showToast("All progress has been reset.");
        this.populateLevelSelectGrid();
      }
    });
  }

  setControlsDisabled(disabled) {
    if (this.btnExecuteCut) {
      this.btnExecuteCut.disabled = disabled;
      this.btnExecuteCut.style.opacity = disabled ? '0.6' : '1.0';
      this.btnExecuteCut.style.pointerEvents = disabled ? 'none' : 'auto';
    }
    if (this.btnResetLevel) {
      this.btnResetLevel.disabled = disabled;
      this.btnResetLevel.style.opacity = disabled ? '0.6' : '1.0';
      this.btnResetLevel.style.pointerEvents = disabled ? 'none' : 'auto';
    }
    if (this.btnCheckSolution) {
      this.btnCheckSolution.disabled = disabled;
      this.btnCheckSolution.style.opacity = disabled ? '0.6' : '1.0';
      this.btnCheckSolution.style.pointerEvents = disabled ? 'none' : 'auto';
    }
    this.sliceCountButtons.forEach(b => {
      b.disabled = disabled;
      b.style.opacity = disabled ? '0.6' : '1.0';
      b.style.pointerEvents = disabled ? 'none' : 'auto';
    });
  }

  setMode(mode) {
    this.modeButtons.forEach(b => {
      if (b.dataset.mode === mode) b.classList.add('active');
      else b.classList.remove('active');
    });
    this.game.setInteractionMode(mode);
  }

  setGameMode(modeName) {
    if (this.elModeTag) this.elModeTag.textContent = modeName;
    if (modeName === 'CREATIVE') {
      this.creativeFoodSelector.classList.remove('hidden');
      this.rotiShopPanel.classList.add('hidden');
      this.elTimerBadge.classList.add('hidden');
    } else if (modeName === 'ROTI SHOP') {
      this.rotiShopPanel.classList.remove('hidden');
      this.creativeFoodSelector.classList.add('hidden');
      this.elTimerBadge.classList.add('hidden');
    } else if (modeName === 'TIMED RUSH') {
      this.elTimerBadge.classList.remove('hidden');
      this.creativeFoodSelector.classList.add('hidden');
      this.rotiShopPanel.classList.add('hidden');
    } else {
      this.creativeFoodSelector.classList.add('hidden');
      this.rotiShopPanel.classList.add('hidden');
      this.elTimerBadge.classList.add('hidden');
    }
  }

  showShopOrder(order) {
    this.rotiShopPanel.classList.remove('hidden');
    this.shopCustomerName.textContent = order.customer;
    this.shopOrderSpeech.textContent = order.message;
    this.shopRewardCoins.textContent = order.coinsReward;
    const avatars = { 'Chintu': '👦', 'Meera': '👧', 'Golu': '🧒' };
    this.shopCustomerAvatar.textContent = avatars[order.customer] || '🧑';
  }

  showCreativeFoodPicker() {
    this.creativeFoodSelector.classList.remove('hidden');
  }

  showTimer(seconds) {
    this.elTimerBadge.classList.remove('hidden');
    this.updateTimer(seconds);
  }

  updateTimer(seconds) {
    if (this.elTimerVal) this.elTimerVal.textContent = `${seconds}s`;
  }

  updateCoins(coins) {
    if (this.elCoins) this.elCoins.textContent = coins;
  }

  showMainMenu() {
    this.mainMenu.classList.remove('hidden');
    this.game.isMenuOpen = true;
    if (this.game.characterSystem) {
      this.game.characterSystem.setEmotion('chintu', 'greeting');
      this.game.characterSystem.setEmotion('meera', 'greeting');
    }
  }

  hideMainMenu() {
    this.mainMenu.classList.add('hidden');
    this.game.isMenuOpen = false;
    if (this.game.characterSystem) {
      this.game.characterSystem.setEmotion('chintu', 'idle');
      this.game.characterSystem.setEmotion('meera', 'idle');
    }
  }

  showHowToPlay(fromMenu = false) {
    this.modalOpenedFromMenu = fromMenu || !this.mainMenu.classList.contains('hidden');
    if (this.modalOpenedFromMenu) {
      this.mainMenu.classList.add('hidden');
    }
    this.howToPlayModal.classList.remove('hidden');
  }

  hideHowToPlay() {
    this.howToPlayModal.classList.add('hidden');
    if (this.modalOpenedFromMenu) {
      this.showMainMenu();
      this.modalOpenedFromMenu = false;
    }
  }

  showLevelSelect(fromMenu = false) {
    this.modalOpenedFromMenu = fromMenu || !this.mainMenu.classList.contains('hidden');
    if (this.modalOpenedFromMenu) {
      this.mainMenu.classList.add('hidden');
    }
    this.populateLevelSelectGrid();
    this.levelSelectModal.classList.remove('hidden');
  }

  hideLevelSelect() {
    this.levelSelectModal.classList.add('hidden');
    if (this.modalOpenedFromMenu) {
      this.showMainMenu();
      this.modalOpenedFromMenu = false;
    }
  }

  showAchievements(fromMenu = false) {
    this.modalOpenedFromMenu = fromMenu || !this.mainMenu.classList.contains('hidden');
    if (this.modalOpenedFromMenu) {
      this.mainMenu.classList.add('hidden');
    }
    this.populateAchievements();
    this.achievementsModal.classList.remove('hidden');
  }

  hideAchievements() {
    this.achievementsModal.classList.add('hidden');
    if (this.modalOpenedFromMenu) {
      this.showMainMenu();
      this.modalOpenedFromMenu = false;
    }
  }

  populateAchievements() {
    if (!this.achievementsListContainer) return;
    this.achievementsListContainer.innerHTML = '';
    const progress = this.game.getProgress();

    ACHIEVEMENTS_LIST.forEach(ach => {
      const isUnlocked = !!progress.achievements[ach.id];
      const card = document.createElement('div');
      card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;

      card.innerHTML = `
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-info">
          <h4>${ach.title}</h4>
          <p>${ach.description}</p>
        </div>
        <div class="ach-badge-status">${isUnlocked ? '✅ UNLOCKED' : '🔒 IN PROGRESS'}</div>
      `;
      this.achievementsListContainer.appendChild(card);
    });
  }

  populateLevelSelectGrid() {
    this.levelGridContainer.innerHTML = '';
    const progress = this.game.getProgress();

    this.game.levels.forEach((lvl, idx) => {
      const card = document.createElement('div');
      card.className = 'level-card';
      const isUnlocked = idx <= progress.unlockedLevelIndex;
      if (!isUnlocked) {
        card.classList.add('locked');
      }

      const starsEarned = progress.stars[lvl.id] || 0;
      let starsText = '';
      for (let s = 1; s <= 3; s++) {
        starsText += s <= starsEarned ? '★' : '☆';
      }

      card.innerHTML = `
        <div class="card-num">${lvl.id}</div>
        <div class="card-title">${lvl.title}</div>
        <div class="card-stars">${isUnlocked ? starsText : '🔒'}</div>
      `;

      if (isUnlocked) {
        card.addEventListener('click', () => {
          this.sound.playClick();
          this.hideLevelSelect();
          this.hideMainMenu();
          this.game.startLevel(idx);
        });
      }

      this.levelGridContainer.appendChild(card);
    });
  }

  updateHUD(levelData, score, starsCount, coins = 0) {
    this.elLevelNum.textContent = levelData.id;
    this.elLevelTitle.textContent = levelData.title;
    this.elScore.textContent = score;
    if (this.elCoins) this.elCoins.textContent = coins;

    const starsSpans = this.elStarsDisplay.querySelectorAll('.star');
    starsSpans.forEach((s, idx) => {
      if (idx < starsCount) s.classList.add('active');
      else s.classList.remove('active');
    });

    this.elInstruction.textContent = levelData.instruction;
    this.elSubInstruction.textContent = levelData.subInstruction || '';

    if (levelData.type === 'identify' || levelData.type === 'compare') {
      this.sliceSelector.style.display = 'none';
      this.btnCheckSolution.style.display = 'none';
      this.renderQuizPanel(levelData);
    } else {
      this.sliceSelector.style.display = 'flex';
      this.btnCheckSolution.style.display = 'inline-block';
      this.quizPanel.classList.add('hidden');
    }
  }

  renderQuizPanel(levelData) {
    this.quizPanel.classList.remove('hidden');
    this.quizQuestion.textContent = levelData.question;
    this.quizOptions.innerHTML = '';

    levelData.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-card';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        this.game.handleQuizAnswer(opt, levelData.correctOption);
      });
      this.quizOptions.appendChild(btn);
    });
  }

  showFractionCallout(num, den, desc = '') {
    this.mathNum.textContent = num;
    this.mathDen.textContent = den;
    this.mathDesc.textContent = desc || `${num}/${den} Portion`;
    this.fractionCallout.classList.remove('hidden');
  }

  hideFractionCallout() {
    this.fractionCallout.classList.add('hidden');
  }

  showHint() {
    const lvl = this.game.getCurrentLevel();
    this.hintText.textContent = lvl.hint;
    this.hintModal.classList.remove('hidden');
    if (this.game.voice && lvl && lvl.hint) {
      this.game.voice.speakTeacherHint(lvl.hint);
    }
  }

  showSuccessModal(stars = 3, explanation = "", title = "Level Complete! 🎉") {
    this.sound.playSuccess();
    this.successModal.classList.remove('hidden');

    if (this.successTitle) {
      this.successTitle.textContent = title || "Level Complete! 🎉";
    }

    let starsStr = '';
    for (let i = 0; i < stars; i++) starsStr += '★ ';
    this.modalStars.textContent = starsStr.trim();

    const lvl = this.game.getCurrentLevel();
    this.successMessage.textContent = explanation || lvl.explanation;
    this.successMathBox.innerHTML = `<span class="math-formula">${explanation || lvl.explanation || "Well Done!"}</span>`;

    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 }
    });
  }

  showToast(message, icon = "✨") {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }
    this.toastMessage.textContent = message;
    this.toastIcon.textContent = icon;
    this.toast.classList.remove('hidden');
    this.toastTimer = setTimeout(() => {
      this.toast.classList.add('hidden');
      this.toastTimer = null;
    }, 3200);
  }

  hideToast() {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }
    if (this.toast) {
      this.toast.classList.add('hidden');
    }
  }
}
