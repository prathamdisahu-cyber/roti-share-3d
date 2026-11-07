/**
 * voice.js
 * Multi-Character Natural Human Voice & Speech System for Roti Share:
 * - Distinct Character Personas:
 *   1. TEACHER (Shanti Ma'am): Calm, clear, encouraging adult female educator voice.
 *   2. CHINTU: Enthusiastic, friendly young boy voice (higher pitch, energetic pace).
 *   3. MEERA: Bright, observant, sweet young girl voice (melodic pitch, warm pace).
 * - Automatic High-Quality Neural / Natural Voice Selection (Web Speech API).
 * - Character 3D Lip-Sync Synchronization (signals 3D character mouths to open/close during speech).
 * - Bilingual Speech & Cultural Expressions (English with friendly Hindi words: "Namaste!", "Shabash!", "Aare waah!").
 * - Volume Controls, Mute Toggle, and Persistent Settings.
 */

export class VoiceSystem {
  constructor(characterSystem = null) {
    this.characterSystem = characterSystem;
    this.enabled = true;
    this.volume = 1.0;
    this.language = 'en'; // 'en' or 'hi'
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.availableVoices = [];
    this.activeUtterance = null;
    this.currentSpeaker = null;

    // Load saved settings
    try {
      const savedEnabled = localStorage.getItem('roti_share_voice_enabled');
      if (savedEnabled !== null) this.enabled = savedEnabled === 'true';
      const savedVol = localStorage.getItem('roti_share_voice_volume');
      if (savedVol !== null) this.volume = parseFloat(savedVol) || 1.0;
      const savedLang = localStorage.getItem('roti_share_voice_lang');
      if (savedLang) this.language = savedLang;
    } catch (e) {}

    this.initVoices();
  }

  setCharacterSystem(characterSystem) {
    this.characterSystem = characterSystem;
  }

  initVoices() {
    if (!this.synth) return;

    const populate = () => {
      this.availableVoices = this.synth.getVoices() || [];
    };

    populate();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = populate;
    }
  }

  getBestVoice(character = 'teacher') {
    if (!this.availableVoices.length && this.synth) {
      this.availableVoices = this.synth.getVoices() || [];
    }

    const voices = this.availableVoices;
    if (!voices.length) return null;

    // Filter by preferred language
    const langPrefix = this.language === 'hi' ? 'hi' : 'en';
    const langVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith(langPrefix));
    const pool = langVoices.length ? langVoices : voices;

    if (character === 'teacher') {
      // Prefer high-quality adult female voice
      return (
        pool.find(v => /(natural|neural|online)/i.test(v.name) && /(female|zira|aria|jenny|samantha|kavya|swara)/i.test(v.name)) ||
        pool.find(v => /(female|woman|zira|samantha|kavya|victoria)/i.test(v.name)) ||
        pool.find(v => /female/i.test(v.gender || '')) ||
        pool[0]
      );
    } else if (character === 'meera') {
      // Prefer high-pitch young female voice
      return (
        pool.find(v => /(natural|neural)/i.test(v.name) && /(girl|child|young|samantha|aria|kavya)/i.test(v.name)) ||
        pool.find(v => /(female|woman|samantha|kavya)/i.test(v.name)) ||
        pool[0]
      );
    } else {
      // Chintu: young boy voice
      return (
        pool.find(v => /(natural|neural)/i.test(v.name) && /(boy|guy|david|george|ravi|guy)/i.test(v.name)) ||
        pool.find(v => /(male|boy|david|ravi)/i.test(v.name)) ||
        pool[0]
      );
    }
  }

  speak(text, character = 'teacher', onComplete = null) {
    if (!this.enabled || !this.synth || !text) {
      if (onComplete) onComplete();
      return;
    }

    this.stop(); // Stop any active speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = Math.max(0, Math.min(1, this.volume));

    const selectedVoice = this.getBestVoice(character);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Persona pitch and speed calibration
    if (character === 'teacher') {
      utterance.pitch = 0.95; // Calm, clear, warm adult educator
      utterance.rate = 0.92;
    } else if (character === 'meera') {
      utterance.pitch = 1.45; // Bright, sweet, enthusiastic young girl
      utterance.rate = 1.0;
    } else if (character === 'chintu') {
      utterance.pitch = 1.35; // Energetic, eager young boy
      utterance.rate = 1.05;
    }

    // 3D Lip-Sync Callbacks
    utterance.onstart = () => {
      this.currentSpeaker = character;
      if (this.characterSystem && typeof this.characterSystem.startSpeaking === 'function') {
        this.characterSystem.startSpeaking(character);
      }
    };

    const cleanup = () => {
      if (this.characterSystem && typeof this.characterSystem.stopSpeaking === 'function') {
        this.characterSystem.stopSpeaking(character);
      }
      this.activeUtterance = null;
      this.currentSpeaker = null;
      if (onComplete) onComplete();
    };

    utterance.onend = cleanup;
    utterance.onerror = (e) => {
      console.warn('Speech error:', e);
      cleanup();
    };

    this.activeUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    if (this.currentSpeaker && this.characterSystem && typeof this.characterSystem.stopSpeaking === 'function') {
      this.characterSystem.stopSpeaking(this.currentSpeaker);
    }
    this.activeUtterance = null;
    this.currentSpeaker = null;
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('roti_share_voice_enabled', this.enabled.toString());
    } catch (e) {}
    if (!this.enabled) this.stop();
    return this.enabled;
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    try {
      localStorage.setItem('roti_share_voice_volume', this.volume.toString());
    } catch (e) {}
  }

  setLanguage(lang) {
    this.language = lang === 'hi' ? 'hi' : 'en';
    try {
      localStorage.setItem('roti_share_voice_lang', this.language);
    } catch (e) {}
  }

  // Pre-crafted educational speech announcements
  speakLevelIntro(level) {
    const teacherGreetings = [
      `Namaste class! In Level ${level.id}, let's learn how to share fairly. ${level.instruction}`,
      `Welcome to Level ${level.id}! Today's challenge is: ${level.instruction}`,
      `Hello children! Look at the fresh warm roti on the table. ${level.instruction}`
    ];
    const text = teacherGreetings[(level.id - 1) % teacherGreetings.length];
    this.speak(text, 'teacher');
  }

  speakCorrectShare(fractionStr, friendsCount) {
    const praiseTeacher = [
      `Shabash! Excellent work! Everyone received an equal share of ${fractionStr}!`,
      `Perfect sharing! That's mathematically fair. Each friend got exactly ${fractionStr}!`,
      `Wonderful! You divided the roti with precision. Great job!`
    ];
    const chintuReactions = [
      `Yay! Thank you! 1/${friendsCount} roti each is completely fair!`,
      `Aare waah! My plate has delicious roti! Thank you!`,
      `Awesome! Now we all have the exact same amount!`
    ];
    const meeraReactions = [
      `Thank you! Fair sharing makes everyone happy!`,
      `Yummy! Exactly ${fractionStr} on my plate too!`,
      `That was so clever! Equal portions for everyone!`
    ];

    // Teacher praises, then children celebrate
    const tText = praiseTeacher[Math.floor(Math.random() * praiseTeacher.length)];
    this.speak(tText, 'teacher', () => {
      const kid = Math.random() > 0.5 ? 'chintu' : 'meera';
      const kText = kid === 'chintu'
        ? chintuReactions[Math.floor(Math.random() * chintuReactions.length)]
        : meeraReactions[Math.floor(Math.random() * meeraReactions.length)];
      setTimeout(() => this.speak(kText, kid), 250);
    });
  }

  speakIncorrectShare(message) {
    const teacherFeedback = [
      `Hmm, not quite fair yet. ${message}`,
      `Let's check carefully. ${message}`,
      `Don't worry, keep learning! ${message}`
    ];
    const text = teacherFeedback[Math.floor(Math.random() * teacherFeedback.length)];
    this.speak(text, 'teacher');
  }

  speakTeacherHint(hintText) {
    this.speak(`Here's a helpful hint: ${hintText}`, 'teacher');
  }
}
