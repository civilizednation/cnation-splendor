"use strict";

const COLORS = ["white", "blue", "green", "red", "black"];
const TOKEN_COLORS = [...COLORS, "gold"];
const GEM_LABEL = { white: "화이트", blue: "블루", green: "그린", red: "레드", black: "블랙", gold: "골드" };
const GEM_HEX = {
  white: "#f8f2df",
  blue: "#2273d8",
  green: "#2d9c4b",
  red: "#d44131",
  black: "#25211f",
  gold: "#d89a1f"
};

const THEMES = {
  classic: {
    id: "classic",
    name: "Classic",
    thumb: "./assets/themes/classic/classic_preview.webp",
    menu: "./assets/ui/title/classic_menu_banner.webp",
    board: "./assets/themes/classic/classic_background.webp",
    bg: "#2a1824",
    accent: "#b9852e",
    deck: [["#1e5a3d", "#0b2f24"], ["#1d4772", "#10263e"], ["#743029", "#2e1416"]],
    art: [["#5c3d24", "#b18445"], ["#335a72", "#d4b576"], ["#71404c", "#d5a84e"]],
    labels: {
      1: ["Mine", "Workshop", "Raw Gem", "Red Market", "Caravan"],
      2: ["Trade Office", "Harbor", "Guild Hall", "Gem Cutter", "Market Street"],
      3: ["Royal Gallery", "Palace", "Treasury", "Court Hall", "Vault"]
    }
  },
  snack: {
    id: "snack",
    name: "Snack",
    thumb: "./assets/themes/snack/snack_preview.webp",
    menu: "./assets/ui/title/snack_menu_banner.webp",
    board: "./assets/themes/snack/snack_background.webp",
    bg: "#f2d8ad",
    accent: "#b56d24",
    deck: [["#2f6a43", "#183c28"], ["#244e78", "#132b44"], ["#7a3428", "#321714"]],
    art: [["#c98136", "#f1d7a5"], ["#d94b36", "#ffe3a8"], ["#6d3a26", "#e7b65b"]],
    labels: {
      1: ["Cookie", "Pretzel", "Marshmallow", "Gummy Jar", "Biscuit"],
      2: ["Cream Slice", "Roll Cake", "Muffin", "Berry Tart", "Matcha Cake"],
      3: ["Celebration Cake", "Dessert Tower", "Parfait", "Glass Dessert", "Mocha"]
    }
  },
  world: {
    id: "world",
    name: "World Landmarks",
    thumb: "./assets/themes/world/world_preview.webp",
    menu: "./assets/ui/title/world_menu_banner.webp",
    board: "./assets/themes/world/world_background.webp",
    bg: "#d9c8a7",
    accent: "#39708d",
    deck: [["#2c6c4e", "#163b2b"], ["#1e5b88", "#112f4b"], ["#843b35", "#361817"]],
    art: [["#58a8c7", "#f1d98d"], ["#426e9f", "#d8d5c5"], ["#9f6a3a", "#e4cda6"]],
    labels: {
      1: ["Santorini", "Venice", "Windmill Village", "Torii Path", "Swiss Chalet"],
      2: ["Eiffel Tower", "Tower Bridge", "Colosseum", "Opera House", "Sagrada Familia"],
      3: ["Great Pyramid", "Taj Mahal", "Great Wall", "Machu Picchu", "Angkor Wat"]
    },
    showNames: true
  }
};

const THEME_CARD_IMAGES = {
  classic: {
    1: ["mine", "small_workshop", "raw_gem_shop", "red_gem_market", "mine_caravan"],
    2: ["large_workshop", "merchant_ledger", "trade_ship", "blue_gem_cutter", "long_caravan", "market_street", "luxury_jewel_shop", "merchant_and_noble", "trade_warehouse", "silk_gem_bazaar"],
    3: ["royal_gallery", "palace_interior", "royal_workshop", "banquet_hall", "estate_garden", "merchant_jewel_house", "royal_treasury", "court_display", "commercial_exchange", "palace_vault"]
  },
  snack: {
    1: ["choco_cookie", "pretzel_bowl", "marshmallow_bowl", "gummy_jar", "pistachio_biscuit"],
    2: ["vanilla_cream_slice", "cream_roll_cake", "blueberry_muffin", "blueberry_tart_slice", "matcha_cake_slice", "pistachio_tart_slice", "strawberry_tart", "berry_cupcake", "chocolate_donuts", "brownie_plate"],
    3: ["vanilla_celebration_cake", "cream_dessert_tower", "blueberry_parfait", "berry_glass_dessert", "pistachio_tart", "matcha_supreme_cake", "strawberry_celebration_cake", "berry_deluxe_tart", "black_forest_gateau", "mocha_supreme"]
  },
  world: {
    1: ["santorini", "venice", "dutch_windmill", "torii_shrine", "swiss_chalet"],
    2: ["eiffel_tower", "tower_bridge", "colosseum", "sydney_opera_house", "sagrada_familia", "big_ben", "brandenburg_gate", "louvre_pyramid", "golden_gate_bridge", "statue_of_liberty"],
    3: ["great_pyramid", "taj_mahal", "great_wall", "machu_picchu", "angkor_wat", "petra", "burj_khalifa", "chichen_itza", "christ_redeemer", "mont_saint_michel"]
  }
};

const AVATARS = [
  { id: "child_boy", label: "한국 어린이 남", src: "./assets/characters/01_child_boy.webp" },
  { id: "child_girl", label: "한국 어린이 여", src: "./assets/characters/02_child_girl.webp" },
  { id: "teen_boy", label: "한국 청소년 남", src: "./assets/characters/03_teen_boy.webp" },
  { id: "teen_girl", label: "한국 청소년 여", src: "./assets/characters/04_teen_girl.webp" },
  { id: "adult_man", label: "한국 성인 남", src: "./assets/characters/05_adult_man.webp" },
  { id: "adult_woman", label: "한국 성인 여", src: "./assets/characters/06_adult_woman.webp" },
  { id: "young_wizard", label: "젊은 마법사", src: "./assets/characters/07_young_wizard.webp" },
  { id: "young_princess", label: "젊은 공주", src: "./assets/characters/08_young_princess.webp" },
  { id: "future_human", label: "미래인간", src: "./assets/characters/09_future_human.webp" }
];
const CPU_AVATAR = { id: "cpu_robot", label: "AI 로봇", src: "./assets/characters/cpu_robot.webp" };
const NOBLE_FACES = ["👑", "🧔", "👸", "🧑‍⚖️", "🧕", "👨‍🏫", "👩‍🎨", "🧑‍💼", "👳", "🧓"];
const DIFFICULTY_META = {
  easy: { label: "쉬움", note: "느긋한 AI" },
  normal: { label: "보통", note: "추천 균형" },
  hard: { label: "어려움", note: "공격적 AI" }
};
const THEME_META = {
  classic: { label: "Classic", note: "왕실 보석상" },
  snack: { label: "Snack", note: "달콤한 디저트" },
  world: { label: "World", note: "세계 랜드마크" }
};
const BGM_TRACKS = {
  classic: [1, 2, 3, 4].map((n) => `./assets/audio/bgm/128k/classic/classic_bgm_0${n}.mp3`),
  snack: [1, 2, 3, 4].map((n) => `./assets/audio/bgm/128k/snack/snack_bgm_0${n}.mp3`),
  world: [1, 2, 3, 4].map((n) => `./assets/audio/bgm/128k/world/world_bgm_0${n}.mp3`)
};
const BGM_FADE_SECONDS = 2;
const BGM_OVERLAP_SECONDS = 3;
const SFX_OUTPUT_GAIN = 1.95;

const state = {
  setup: { difficulty: "normal", theme: "classic", avatar: 3 },
  game: null,
  selectedTokens: emptyTokens(),
  selectedCard: null,
  selectedReserved: null,
  pending: null,
  settings: { sfxVolume: 0.7, sfxEnabled: true, bgmVolume: 0.7, bgmEnabled: true }
};

const sfx = {
  context: null,
  master: null
};
const bgm = {
  themeId: null,
  tracks: [],
  audios: [],
  currentIndex: 0,
  currentAudio: null,
  nextTimer: null,
  timeouts: new Set(),
  fadeTimers: new Set(),
  playing: false,
  remainderPreloaded: false
};
let setupEventsBound = false;

function emptyTokens() {
  return { white: 0, blue: 0, green: 0, red: 0, black: 0, gold: 0 };
}

function cloneTokens(tokens) {
  return Object.fromEntries(TOKEN_COLORS.map((c) => [c, tokens[c] || 0]));
}

function sumTokens(tokens) {
  return TOKEN_COLORS.reduce((sum, c) => sum + (tokens[c] || 0), 0);
}

function ensureAudio() {
  if (!sfx.context) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    sfx.context = new AudioContext();
    sfx.master = sfx.context.createGain();
    sfx.master.gain.value = sfxMasterVolume();
    sfx.master.connect(sfx.context.destination);
  }
  if (sfx.context.state === "suspended") sfx.context.resume();
  if (sfx.master) sfx.master.gain.value = sfxMasterVolume();
  return sfx.context;
}

function tone({ frequency, start = 0, duration = 0.08, type = "sine", volume = 0.18, endFrequency = null }) {
  const context = ensureAudio();
  if (!context || !state.settings.sfxEnabled || state.settings.sfxVolume <= 0) return;
  const now = context.currentTime + start;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, now + duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(sfx.master);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function noise({ start = 0, duration = 0.08, volume = 0.08, filter = 1200 }) {
  const context = ensureAudio();
  if (!context || !state.settings.sfxEnabled || state.settings.sfxVolume <= 0) return;
  const now = context.currentTime + start;
  const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const source = context.createBufferSource();
  const gain = context.createGain();
  const biquad = context.createBiquadFilter();
  biquad.type = "bandpass";
  biquad.frequency.value = filter;
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  source.buffer = buffer;
  source.connect(biquad);
  biquad.connect(gain);
  gain.connect(sfx.master);
  source.start(now);
}

function playSfx(kind) {
  if (!state.settings.sfxEnabled) return;
  const patterns = {
    ui: () => tone({ frequency: 560, duration: 0.045, type: "triangle", volume: 0.08 }),
    token: () => {
      tone({ frequency: 740, duration: 0.05, type: "sine", volume: 0.12, endFrequency: 960 });
      tone({ frequency: 1180, start: 0.035, duration: 0.045, type: "triangle", volume: 0.08 });
    },
    card: () => {
      noise({ duration: 0.07, volume: 0.055, filter: 900 });
      tone({ frequency: 330, start: 0.025, duration: 0.055, type: "triangle", volume: 0.08 });
    },
    buy: () => {
      tone({ frequency: 523, duration: 0.07, type: "triangle", volume: 0.13 });
      tone({ frequency: 659, start: 0.07, duration: 0.08, type: "triangle", volume: 0.12 });
      tone({ frequency: 880, start: 0.145, duration: 0.12, type: "sine", volume: 0.1 });
    },
    reserve: () => {
      noise({ duration: 0.09, volume: 0.045, filter: 700 });
      tone({ frequency: 392, start: 0.035, duration: 0.09, type: "triangle", volume: 0.1 });
    },
    noble: () => {
      tone({ frequency: 659, duration: 0.1, type: "triangle", volume: 0.12 });
      tone({ frequency: 784, start: 0.08, duration: 0.12, type: "triangle", volume: 0.12 });
      tone({ frequency: 1046, start: 0.18, duration: 0.18, type: "sine", volume: 0.11 });
    },
    turn: () => {
      tone({ frequency: 294, duration: 0.08, type: "triangle", volume: 0.09 });
      tone({ frequency: 392, start: 0.07, duration: 0.08, type: "triangle", volume: 0.09 });
    },
    error: () => {
      tone({ frequency: 180, duration: 0.09, type: "sawtooth", volume: 0.07 });
      tone({ frequency: 140, start: 0.07, duration: 0.1, type: "sawtooth", volume: 0.055 });
    },
    win: () => {
      tone({ frequency: 523, duration: 0.09, type: "triangle", volume: 0.11 });
      tone({ frequency: 659, start: 0.08, duration: 0.09, type: "triangle", volume: 0.11 });
      tone({ frequency: 784, start: 0.16, duration: 0.12, type: "triangle", volume: 0.11 });
      tone({ frequency: 1046, start: 0.27, duration: 0.2, type: "sine", volume: 0.1 });
    },
    lose: () => {
      tone({ frequency: 330, duration: 0.11, type: "triangle", volume: 0.09 });
      tone({ frequency: 247, start: 0.11, duration: 0.16, type: "triangle", volume: 0.08 });
    }
  };
  patterns[kind]?.();
}

function sfxMasterVolume() {
  return state.settings.sfxEnabled ? state.settings.sfxVolume * SFX_OUTPUT_GAIN : 0;
}

function bgmTargetVolume() {
  return state.settings.bgmEnabled ? state.settings.bgmVolume : 0;
}

function createBgmAudio(src, index) {
  const audio = new Audio(src);
  audio.preload = index === 0 ? "auto" : "metadata";
  audio.volume = 0;
  audio.dataset.index = String(index);
  return audio;
}

function prepareBgm(themeId) {
  if (bgm.themeId === themeId && bgm.audios.length) return;
  stopBgm();
  bgm.themeId = themeId;
  bgm.tracks = BGM_TRACKS[themeId] || [];
  bgm.audios = bgm.tracks.map(createBgmAudio);
  bgm.currentIndex = 0;
  bgm.remainderPreloaded = false;
}

function startBgmForTheme(themeId) {
  if (!state.settings.bgmEnabled) return;
  prepareBgm(themeId);
  if (!bgm.audios.length || bgm.playing) return;
  bgm.playing = true;
  playBgmIndex(0);
}

function preloadBgmRemainder() {
  if (!bgm.audios.length || bgm.remainderPreloaded) return;
  bgm.remainderPreloaded = true;
  bgm.audios.slice(1).forEach((audio) => {
    audio.preload = "auto";
    audio.load();
  });
}

function playBgmIndex(index) {
  if (!bgm.audios.length || !state.settings.bgmEnabled) return;
  clearBgmTimeout(bgm.nextTimer);
  const audio = bgm.audios[index];
  bgm.currentIndex = index;
  bgm.currentAudio = audio;
  audio.currentTime = 0;
  audio.volume = 0;
  audio.play().then(() => {
    fadeAudio(audio, 0, bgmTargetVolume(), BGM_FADE_SECONDS);
    scheduleNextBgm(audio, index);
  }).catch(() => {
    bgm.playing = false;
  });
}

function scheduleNextBgm(audio, index) {
  const arm = () => {
    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    if (duration <= BGM_OVERLAP_SECONDS + 1) {
      audio.onended = () => playBgmIndex((index + 1) % bgm.audios.length);
      return;
    }
    bgm.nextTimer = setBgmTimeout(() => {
      const nextIndex = (index + 1) % bgm.audios.length;
      if (state.settings.bgmEnabled) playBgmIndex(nextIndex);
    }, Math.max(0, (duration - BGM_OVERLAP_SECONDS) * 1000));
    setBgmTimeout(() => fadeAudio(audio, audio.volume, 0, BGM_FADE_SECONDS, true), Math.max(0, (duration - BGM_FADE_SECONDS) * 1000));
  };
  if (Number.isFinite(audio.duration) && audio.duration > 0) arm();
  else audio.addEventListener("loadedmetadata", arm, { once: true });
}

function setBgmTimeout(callback, delay) {
  const timer = setTimeout(() => {
    bgm.timeouts.delete(timer);
    callback();
  }, delay);
  bgm.timeouts.add(timer);
  return timer;
}

function clearBgmTimeout(timer) {
  if (!timer) return;
  clearTimeout(timer);
  bgm.timeouts.delete(timer);
  if (bgm.nextTimer === timer) bgm.nextTimer = null;
}

function clearBgmTimeouts() {
  bgm.timeouts.forEach((timer) => clearTimeout(timer));
  bgm.timeouts.clear();
  bgm.nextTimer = null;
}

function fadeAudio(audio, from, to, seconds, pauseWhenDone = false) {
  const started = performance.now();
  const startVolume = Math.max(0, Math.min(1, from));
  const endVolume = Math.max(0, Math.min(1, to));
  const timer = setInterval(() => {
    const t = Math.min(1, (performance.now() - started) / (seconds * 1000));
    const eased = t * t * (3 - 2 * t);
    audio.volume = startVolume + (endVolume - startVolume) * eased;
    if (t >= 1) {
      clearInterval(timer);
      bgm.fadeTimers.delete(timer);
      audio.volume = endVolume;
      if (pauseWhenDone) audio.pause();
    }
  }, 50);
  bgm.fadeTimers.add(timer);
}

function updateBgmVolume() {
  if (!state.settings.bgmEnabled) {
    pauseBgm();
    return;
  }
  if (!bgm.playing && state.game) {
    startBgmForTheme(state.game.theme.id);
    preloadBgmRemainder();
    return;
  }
  bgm.audios.forEach((audio) => {
    if (!audio.paused) audio.volume = bgmTargetVolume();
  });
}

function pauseBgm() {
  clearBgmTimeouts();
  bgm.audios.forEach((audio) => {
    audio.pause();
    audio.volume = 0;
  });
  bgm.playing = false;
}

function stopBgm() {
  clearBgmTimeouts();
  bgm.fadeTimers.forEach((timer) => clearInterval(timer));
  bgm.fadeTimers.clear();
  bgm.audios.forEach((audio) => {
    audio.pause();
    audio.src = "";
  });
  bgm.themeId = null;
  bgm.tracks = [];
  bgm.audios = [];
  bgm.currentIndex = 0;
  bgm.currentAudio = null;
  bgm.playing = false;
  bgm.remainderPreloaded = false;
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function makeCardData() {
  const cards = [];
  let id = 1;
  const tierTemplates = {
    1: [
      { points: 0, cost: [1, 1, 1] },
      { points: 0, cost: [2, 1, 1] },
      { points: 0, cost: [2, 2] },
      { points: 0, cost: [3] },
      { points: 0, cost: [2, 1, 1, 1] },
      { points: 0, cost: [3, 1] },
      { points: 0, cost: [2, 2, 1] },
      { points: 1, cost: [4] },
      { points: 0, cost: [1, 1, 1] },
      { points: 0, cost: [2, 1, 1] },
      { points: 0, cost: [2, 2] },
      { points: 0, cost: [3, 1] },
      { points: 0, cost: [2, 2, 1] },
      { points: 0, cost: [3, 1, 1] },
      { points: 0, cost: [2, 1, 1, 1] },
      { points: 1, cost: [3, 2] },
      { points: 0, cost: [1, 1, 1] },
      { points: 0, cost: [2, 1, 1] },
      { points: 0, cost: [2, 2] },
      { points: 0, cost: [3] },
      { points: 0, cost: [2, 1, 1, 1] },
      { points: 0, cost: [3, 1] },
      { points: 0, cost: [2, 2, 1] },
      { points: 1, cost: [4] },
      { points: 0, cost: [1, 1, 1, 1] },
      { points: 0, cost: [2, 1, 1] },
      { points: 0, cost: [2, 2] },
      { points: 0, cost: [3, 1] },
      { points: 0, cost: [2, 2, 1] },
      { points: 0, cost: [3, 1, 1] },
      { points: 0, cost: [2, 1, 1, 1] },
      { points: 1, cost: [3, 2] },
      { points: 0, cost: [1, 1, 1] },
      { points: 0, cost: [2, 1, 1] },
      { points: 0, cost: [2, 2] },
      { points: 0, cost: [3] },
      { points: 0, cost: [2, 2, 1] },
      { points: 0, cost: [3, 1, 1] },
      { points: 1, cost: [4] },
      { points: 1, cost: [3, 2] }
    ],
    2: [
      { points: 1, cost: [3, 2] },
      { points: 1, cost: [3, 2, 1] },
      { points: 1, cost: [2, 2, 2] },
      { points: 2, cost: [5] },
      { points: 2, cost: [4, 2] },
      { points: 2, cost: [3, 3, 1] },
      { points: 3, cost: [6] },
      { points: 1, cost: [2, 2, 1, 1] },
      { points: 1, cost: [4, 1, 1] },
      { points: 2, cost: [3, 2, 2] },
      { points: 1, cost: [3, 2] },
      { points: 1, cost: [3, 2, 1] },
      { points: 1, cost: [2, 2, 2] },
      { points: 2, cost: [5] },
      { points: 2, cost: [4, 2] },
      { points: 2, cost: [3, 3, 1] },
      { points: 3, cost: [6] },
      { points: 1, cost: [2, 2, 1, 1] },
      { points: 1, cost: [4, 1, 1] },
      { points: 2, cost: [3, 2, 2] },
      { points: 1, cost: [3, 2] },
      { points: 1, cost: [3, 2, 1] },
      { points: 1, cost: [2, 2, 2] },
      { points: 2, cost: [5] },
      { points: 2, cost: [4, 2] },
      { points: 2, cost: [3, 3, 1] },
      { points: 3, cost: [6] },
      { points: 1, cost: [2, 2, 1, 1] },
      { points: 2, cost: [4, 2, 1] },
      { points: 3, cost: [5, 3] }
    ],
    3: [
      { points: 3, cost: [3, 3, 3] },
      { points: 3, cost: [4, 3, 2] },
      { points: 3, cost: [5, 3, 1] },
      { points: 4, cost: [6, 3] },
      { points: 4, cost: [5, 3, 3] },
      { points: 5, cost: [7, 3] },
      { points: 3, cost: [3, 3, 2, 2] },
      { points: 4, cost: [6, 2, 2] },
      { points: 3, cost: [4, 4, 2] },
      { points: 5, cost: [7, 2, 1] },
      { points: 3, cost: [3, 3, 3] },
      { points: 3, cost: [4, 3, 2] },
      { points: 3, cost: [5, 3, 1] },
      { points: 4, cost: [6, 3] },
      { points: 4, cost: [5, 3, 3] },
      { points: 5, cost: [7, 3] },
      { points: 3, cost: [3, 3, 2, 2] },
      { points: 4, cost: [6, 2, 2] },
      { points: 4, cost: [5, 4, 1] },
      { points: 5, cost: [7, 2, 1] }
    ]
  };
  for (const tier of [1, 2, 3]) {
    const templates = tierTemplates[tier];
    for (let i = 0; i < templates.length; i++) {
      const bonus = COLORS[i % COLORS.length];
      const template = templates[i];
      const cost = costFromTemplate(template.cost, bonus, i);
      cards.push({
        id: `c${String(id++).padStart(3, "0")}`,
        tier,
        bonus,
        points: template.points,
        cost,
        artSlot: `${tier}-${bonus}-${(i % 5) + 1}`,
        artIndex: i % (tier === 1 ? 5 : 10)
      });
    }
  }
  return cards;
}

function costFromTemplate(values, bonus, offset = 0) {
  const cost = {};
  const colors = COLORS.filter((color) => color !== bonus);
  values.forEach((value, index) => {
    const color = colors[(offset + index) % colors.length];
    cost[color] = (cost[color] || 0) + value;
  });
  return cost;
}

function makeNobles() {
  return [
    { id: "n1", points: 3, req: { white: 4, blue: 4 } },
    { id: "n2", points: 3, req: { blue: 4, green: 4 } },
    { id: "n3", points: 3, req: { green: 4, red: 4 } },
    { id: "n4", points: 3, req: { red: 4, black: 4 } },
    { id: "n5", points: 3, req: { black: 4, white: 4 } },
    { id: "n6", points: 3, req: { white: 3, blue: 3, green: 3 } },
    { id: "n7", points: 3, req: { blue: 3, green: 3, red: 3 } },
    { id: "n8", points: 3, req: { green: 3, red: 3, black: 3 } },
    { id: "n9", points: 3, req: { red: 3, black: 3, white: 3 } },
    { id: "n10", points: 3, req: { black: 3, white: 3, blue: 3 } }
  ];
}

function setupUI() {
  const difficultyChoices = document.querySelector("#difficultyChoices");
  difficultyChoices.innerHTML = Object.entries(DIFFICULTY_META).map(([id, meta]) => `
    <button class="choice difficulty-choice ${id === state.setup.difficulty ? "selected" : ""}" data-difficulty="${id}">
      <strong>${meta.label}</strong>
      <span>${meta.note}</span>
    </button>
  `).join("");

  const themeChoices = document.querySelector("#themeChoices");
  themeChoices.innerHTML = Object.entries(THEMES).map(([id, theme]) => `
    <button class="choice theme-choice ${id === state.setup.theme ? "selected" : ""}" data-theme="${id}">
      <span class="theme-thumb" style="--thumb:url('${theme.menu || theme.thumb}')"></span>
      <span class="theme-copy">
        <strong>${THEME_META[id]?.label || theme.name}</strong>
        <small>${THEME_META[id]?.note || theme.name}</small>
      </span>
    </button>
  `).join("");

  const avatarChoices = document.querySelector("#avatarChoices");
  avatarChoices.innerHTML = AVATARS.map((avatar, index) => `
    <button class="choice avatar-choice ${index === state.setup.avatar ? "selected" : ""}" data-avatar="${index}" aria-label="${avatar.label}">
      <span class="avatar-frame">${renderAvatar(avatar)}</span>
    </button>
  `).join("");

  bindSetupEvents();
}

function bindSetupEvents() {
  if (setupEventsBound) return;
  setupEventsBound = true;
  document.querySelector("#difficultyChoices").addEventListener("click", (event) => {
    const button = event.target.closest("[data-difficulty]");
    if (!button || button.dataset.difficulty === state.setup.difficulty) return;
    playSfx("ui");
    state.setup.difficulty = button.dataset.difficulty;
    setupUI();
  });
  document.querySelector("#themeChoices").addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme]");
    if (!button || button.dataset.theme === state.setup.theme) return;
    playSfx("ui");
    state.setup.theme = button.dataset.theme;
    setupUI();
  });
  document.querySelector("#avatarChoices").addEventListener("click", (event) => {
    const button = event.target.closest("[data-avatar]");
    if (!button || Number(button.dataset.avatar) === state.setup.avatar) return;
    playSfx("ui");
    state.setup.avatar = Number(button.dataset.avatar);
    setupUI();
  });
  document.querySelector("#startButton").addEventListener("click", startLoading);
}

function startLoading() {
  playSfx("turn");
  startBgmForTheme(state.setup.theme);
  document.querySelector("#titleScreen").classList.add("hidden");
  document.querySelector("#loadingScreen").classList.remove("hidden");
  let progress = 0;
  const bar = document.querySelector("#loadingBar");
  const text = document.querySelector("#loadingText");
  const steps = ["카드 데이터를 섞는 중...", "테마 색상을 적용하는 중...", "AI 전략을 준비하는 중...", "게임판을 펼치는 중..."];
  const timer = setInterval(() => {
    progress += 22 + Math.random() * 10;
    bar.style.width = `${Math.min(progress, 100)}%`;
    text.textContent = steps[Math.min(steps.length - 1, Math.floor(progress / 28))];
    if (progress >= 100) {
      clearInterval(timer);
      startGame();
    }
  }, 130);
}

function startGame() {
  preloadBgmRemainder();
  const allCards = makeCardData();
  const decks = {
    1: shuffle(allCards.filter((card) => card.tier === 1)),
    2: shuffle(allCards.filter((card) => card.tier === 2)),
    3: shuffle(allCards.filter((card) => card.tier === 3))
  };
  const market = { 1: [], 2: [], 3: [] };
  for (const tier of [1, 2, 3]) {
    for (let i = 0; i < 4; i++) market[tier].push(decks[tier].pop());
  }
  state.game = {
    theme: THEMES[state.setup.theme],
    difficulty: state.setup.difficulty,
    bank: { white: 4, blue: 4, green: 4, red: 4, black: 4, gold: 5 },
    decks,
    market,
    nobles: shuffle(makeNobles()).slice(0, 3),
    current: "player",
    first: "player",
    endTriggered: false,
    gameOver: false,
    players: {
      player: makePlayer("You", AVATARS[state.setup.avatar]),
      cpu: makePlayer("CPU", cpuAvatar())
    },
    log: "당신의 턴입니다. 토큰, 카드, 덱 중 하나를 선택하세요."
  };
  applyTheme();
  document.querySelector("#loadingScreen").classList.add("hidden");
  document.querySelector("#gameScreen").classList.remove("hidden");
  render();
}

function makePlayer(name, avatar) {
  return {
    name,
    avatar,
    tokens: emptyTokens(),
    bonuses: { white: 0, blue: 0, green: 0, red: 0, black: 0 },
    developments: [],
    reserved: [],
    nobles: [],
    turnsTaken: 0
  };
}

function cpuAvatar() {
  return CPU_AVATAR;
}

function applyTheme() {
  const theme = state.game.theme;
  document.documentElement.style.setProperty("--bg", theme.bg);
  document.documentElement.style.setProperty("--accent", theme.accent);
  document.documentElement.style.setProperty("--game-image", `url('${theme.board}')`);
}

function asset(path) {
  return `./assets/themes/${path}`;
}

function cardImage(theme, card) {
  const themeId = theme.id;
  const names = THEME_CARD_IMAGES[themeId][card.tier];
  const imageIndex = card.artIndex % names.length;
  const serial = String(imageIndex + 1).padStart(2, "0");
  return asset(`${themeId}/cards/l${card.tier}/${themeId}_l${card.tier}_${serial}_${names[imageIndex]}.webp`);
}

function deckImage(theme, tier) {
  return asset(`${theme.id}/backs/${theme.id}_back_l${tier}.webp`);
}

function tokenImage(theme, color) {
  return asset(`${theme.id}/tokens/${theme.id}_token_${color}.webp`);
}

function gemImage(color) {
  return `./assets/gems/gem_${color}.webp`;
}

function nobleImage(theme, noble) {
  const index = Number(noble.id.replace("n", "")) || 1;
  return asset(`${theme.id}/nobles/${theme.id}_noble_${String(index).padStart(2, "0")}.webp`);
}

function renderAvatar(avatar) {
  return `<img src="${avatar.src}" alt="${avatar.label}" loading="lazy">`;
}

function score(player) {
  return player.developments.reduce((sum, card) => sum + card.points, 0) + player.nobles.reduce((sum, noble) => sum + noble.points, 0);
}

function canBuy(card, player) {
  let shortage = 0;
  for (const color of COLORS) {
    const need = Math.max(0, (card.cost[color] || 0) - player.bonuses[color]);
    shortage += Math.max(0, need - player.tokens[color]);
  }
  return shortage <= player.tokens.gold;
}

function payFor(card, player, bank) {
  let goldNeeded = 0;
  for (const color of COLORS) {
    const need = Math.max(0, (card.cost[color] || 0) - player.bonuses[color]);
    const paid = Math.min(need, player.tokens[color]);
    player.tokens[color] -= paid;
    bank[color] += paid;
    goldNeeded += need - paid;
  }
  player.tokens.gold -= goldNeeded;
  bank.gold += goldNeeded;
}

function render() {
  if (!state.game) return;
  renderTopbar();
  renderPlayerPanel("cpu", document.querySelector("#cpuPanel"));
  renderDecks();
  renderMarket();
  renderBank();
  renderNobles();
  renderBottomPanel();
}

function renderTopbar() {
  const game = state.game;
  document.querySelector("#turnBanner").textContent = game.gameOver ? "게임 종료" : game.current === "player" ? "당신의 턴" : "CPU 생각 중";
  document.querySelector("#messageLog").textContent = game.log;
}

function renderPlayerPanel(key, root) {
  const player = state.game.players[key];
  root.innerHTML = `
    <div class="identity">
      <div class="portrait">${renderAvatar(player.avatar)}</div>
      <div class="identity-copy"><div class="name">${player.name}</div><div class="score">${score(player)}</div></div>
    </div>
    ${renderScoreShield(player)}
    <div class="panel-block resource-block"><div class="panel-title">보석 현황</div>${resourceGrid(player, true)}</div>
    <div class="stat-line"><span>예약</span><strong>${player.reserved.length}/3</strong></div>
    <div class="stat-line"><span>개발 카드</span><strong>${player.developments.length}</strong></div>
  `;
}

function renderDecks() {
  const theme = state.game.theme;
  document.querySelector("#deckColumn").innerHTML = [3, 2, 1].map((tier) => {
    const deck = theme.deck[tier - 1];
    return `<button class="deck-card" data-reserve-deck="${tier}" style="--deck-a:${deck[0]};--deck-b:${deck[1]};--deck-image:url('${deckImage(theme, tier)}')"><span class="deck-level">레벨 ${tier}</span><small>${state.game.decks[tier].length}장</small></button>`;
  }).join("");
}

function renderMarket() {
  document.querySelector("#market").innerHTML = [3, 2, 1].map((tier) => `
    <div class="market-row">
      ${state.game.market[tier].map((card, index) => card ? renderCard(card, { source: "market", tier, index }) : `<div></div>`).join("")}
    </div>
  `).join("");
}

function renderCard(card, meta = {}) {
  const theme = state.game.theme;
  const art = theme.art[card.tier - 1];
  const selected = state.selectedCard && state.selectedCard.card.id === card.id;
  const buyable = canBuy(card, state.game.players.player);
  const attrs = meta.source === "market"
    ? `data-card-tier="${meta.tier}" data-card-index="${meta.index}"`
    : `data-reserved-index="${meta.index}"`;
  return `
    <button class="dev-card ${selected ? "selected" : ""} ${buyable ? "buyable" : ""}" ${attrs} style="--art-a:${art[0]};--art-b:${art[1]};--card-image:url('${cardImage(theme, card)}');--bonus-image:url('${gemImage(card.bonus)}')">
      <div class="card-band"></div>
      <div class="points">${card.points || ""}</div>
      <div class="bonus-dot" style="--gem:${GEM_HEX[card.bonus]};--gem-image:url('${gemImage(card.bonus)}')"></div>
      <div class="cost-grid">${renderCost(card.cost, theme)}</div>
    </button>
  `;
}

function renderCost(cost, theme = state.game?.theme) {
  return COLORS.filter((color) => cost[color] > 0).slice(0, 4).map((color) => `
    <span class="cost-chip" style="--gem:${GEM_HEX[color]}">${cost[color]}</span>
  `).join("");
}

function renderBank() {
  document.querySelector("#bank").innerHTML = TOKEN_COLORS.map((color) => {
    const count = state.game.bank[color];
    const picked = state.selectedTokens[color] || 0;
    const disabled = color === "gold" || count <= 0 || state.game.current !== "player";
    const visible = Math.max(1, Math.min(count, 5));
    const coins = Array.from({ length: visible }, (_, i) => `<span class="coin" style="--gem:${GEM_HEX[color]};--token-image:url('${tokenImage(state.game.theme, color)}');--stack-y:${i * 3}px;--stack-z:${visible - i}"></span>`).join("");
    return `
      <button class="token-stack ${disabled ? "disabled" : ""} ${picked ? "selected" : ""}" data-token="${color}">
        <span class="coins">
          ${coins}
          ${picked === 2 ? `<span class="picked-badge">2개</span>` : ""}
        </span>
        <span><strong>${GEM_LABEL[color]}</strong> <span class="token-count">${count}</span></span>
      </button>
    `;
  }).join("");
}

function renderNobles() {
  document.querySelector("#nobles").innerHTML = state.game.nobles.map((noble, index) => `
    <div class="noble-card" style="--noble-image:url('${nobleImage(state.game.theme, noble)}')">
      <div class="points">${noble.points}</div>
      <div class="noble-reqs">${renderCost(noble.req, state.game.theme)}</div>
    </div>
  `).join("");
}

function renderBottomPanel() {
  const player = state.game.players.player;
  document.querySelector("#playerPanel").innerHTML = `
    <div class="identity">
      <div class="portrait">${renderAvatar(player.avatar)}</div>
      <div class="identity-copy"><div class="name">You</div>${renderScoreShield(player)}</div>
    </div>
    <div class="panel-block resource-block resource-block-wide"><div class="panel-title">보석 현황</div>${resourceGrid(player)}</div>
    <div class="panel-block">
      <div class="panel-title">예약 카드 ${player.reserved.length}/3</div>
      <div class="reserved-list">${renderReservedSlots(player)}</div>
    </div>
    <div class="actions">
      <button id="cancelSelection" class="ghost cancel-button" ${hasSelection() && !state.pending ? "" : "disabled"}>토큰취소</button>
      <button id="confirmAction" class="primary action-button" ${actionLabel().disabled ? "disabled" : ""}>${actionLabel().label}</button>
      <button id="endTurn" class="primary turn-button" ${state.pending || state.game.current !== "player" ? "disabled" : ""}>턴 종료</button>
      <button id="settingsButton" class="ghost settings-button" aria-label="설정">⚙</button>
    </div>
  `;
}

function renderReservedSlots(player) {
  return [0, 1, 2].map((slot) => {
    const card = player.reserved[slot];
    if (!card) return `<span class="reserved-slot"></span>`;
    return `<button class="reserved-mini" data-reserved-index="${slot}" style="--art-a:${state.game.theme.art[card.tier - 1][0]};--art-b:${state.game.theme.art[card.tier - 1][1]};--card-image:url('${cardImage(state.game.theme, card)}')" title="예약 카드"></button>`;
  }).join("");
}

function gemRow(tokens, colors) {
  return `<div class="gem-row">${colors.map((color) => `<span class="gem-pill"><span class="gem-dot" style="--gem:${GEM_HEX[color]}"></span>${tokens[color] || 0}</span>`).join("")}</div>`;
}

function renderScoreShield(player) {
  return `<div class="score-shield"><span>점수</span><strong>${score(player)}</strong></div>`;
}

function resourceGrid(player, compact = false) {
  if (compact) {
    return `<div class="resource-grid compact">${TOKEN_COLORS.map((color) => `
      <div class="resource-compact-row" title="${GEM_LABEL[color]}">
        <span class="resource-token" style="--gem:${GEM_HEX[color]};--token-image:url('${tokenImage(state.game.theme, color)}')"></span>
        ${resourceCounts(player, color)}
      </div>
    `).join("")}</div>`;
  }
  return `
    <div class="resource-split resource-split-combined">
      <div class="token-track token-track-combined">${TOKEN_COLORS.map((color) => `
        <span class="resource-token-stack" title="${GEM_LABEL[color]} 영구 보너스 + 보유 토큰">
          <span class="resource-token" style="--gem:${GEM_HEX[color]};--token-image:url('${tokenImage(state.game.theme, color)}')"></span>
          ${resourceCounts(player, color)}
        </span>
      `).join("")}</div>
    </div>
  `;
}

function resourceCounts(player, color) {
  return `<strong class="resource-compact-counts">
    <span class="resource-bonus-count">${color === "gold" ? 0 : player.bonuses[color] || 0}</span>
    <span class="resource-plus">+</span>
    <span class="resource-token-count">${player.tokens[color] || 0}</span>
  </strong>`;
}

function actionLabel() {
  if (!state.game || state.game.current !== "player" || state.pending) return { label: "확인", disabled: true };
  if (sumTokens(state.selectedTokens) > 0) return { label: "가져오기", disabled: !validTokenSelection(state.selectedTokens) };
  if (state.selectedReserved !== null) {
    const card = state.game.players.player.reserved[state.selectedReserved];
    return { label: "구매하기", disabled: !card || !canBuy(card, state.game.players.player) };
  }
  if (state.selectedCard) {
    const canPurchase = canBuy(state.selectedCard.card, state.game.players.player);
    return { label: canPurchase ? "구매하기" : "예약하기", disabled: false };
  }
  return { label: "확인", disabled: true };
}

function hasSelection() {
  return sumTokens(state.selectedTokens) > 0 || state.selectedCard || state.selectedReserved !== null;
}

function validTokenSelection(tokens, bankSnapshot = state.game.bank) {
  const entries = COLORS.filter((color) => tokens[color] > 0);
  const total = entries.reduce((sum, color) => sum + tokens[color], 0);
  if (tokens.gold > 0 || total === 0 || total > 3) return false;
  if (entries.length === total) return true;
  if (entries.length === 1 && total === 2) return bankSnapshot[entries[0]] >= 4;
  return false;
}

function validTokenSelectionStep(tokens, bankSnapshot = state.game.bank) {
  const entries = COLORS.filter((color) => tokens[color] > 0);
  const total = entries.reduce((sum, color) => sum + tokens[color], 0);
  if (tokens.gold > 0 || total > 3) return false;
  if (total === 0) return true;
  if (entries.some((color) => tokens[color] > bankSnapshot[color])) return false;
  if (entries.some((color) => tokens[color] > 2)) return false;
  if (entries.length === 1 && total <= 2) return total === 1 || bankSnapshot[entries[0]] >= 4;
  return entries.every((color) => tokens[color] === 1);
}

document.addEventListener("click", (event) => {
  if (!state.game || state.game.gameOver) return;
  const token = event.target.closest("[data-token]");
  const marketCard = event.target.closest("[data-card-tier]");
  const reserved = event.target.closest("[data-reserved-index]");
  const deck = event.target.closest("[data-reserve-deck]");
  if (token) selectToken(token.dataset.token);
  if (marketCard) selectMarketCard(Number(marketCard.dataset.cardTier), Number(marketCard.dataset.cardIndex));
  if (reserved && !marketCard) selectReservedCard(Number(reserved.dataset.reservedIndex));
  if (deck) reserveBlind(Number(deck.dataset.reserveDeck));
  if (event.target.closest("#cancelSelection")) cancelSelection();
  if (event.target.closest("#confirmAction")) confirmAction();
  if (event.target.closest("#endTurn")) finishTurn();
  if (event.target.closest("#settingsButton")) {
    playSfx("ui");
    showSettings();
  }
});

function clearSelection() {
  state.selectedTokens = emptyTokens();
  state.selectedCard = null;
  state.selectedReserved = null;
}

function cancelSelection() {
  if (!hasSelection() || state.pending) return;
  playSfx("ui");
  clearSelection();
  state.game.log = "선택을 취소했습니다.";
  render();
}

function selectToken(color) {
  if (state.game.current !== "player" || color === "gold" || state.game.bank[color] <= 0 || state.pending) {
    playSfx("error");
    return;
  }
  state.selectedCard = null;
  state.selectedReserved = null;
  const next = cloneTokens(state.selectedTokens);
  if (next[color] === 0) {
    next[color] = 1;
  } else if (next[color] === 1 && sumTokens(next) === 1 && state.game.bank[color] >= 4) {
    next[color] = 2;
  }
  if (!validTokenSelectionStep(next)) {
    playSfx("error");
    state.game.log = "같은 색 토큰 2개는 은행에 4개 이상 있고, 다른 색과 함께 고를 수 없습니다.";
    render();
    return;
  }
  playSfx("token");
  state.selectedTokens = next;
  render();
}

function selectMarketCard(tier, index) {
  if (state.game.current !== "player" || state.pending) {
    playSfx("error");
    return;
  }
  clearSelection();
  state.selectedCard = { tier, index, card: state.game.market[tier][index] };
  playSfx("card");
  state.game.log = canBuy(state.selectedCard.card, state.game.players.player) ? "구매 가능한 카드입니다." : "지금은 살 수 없습니다. 확인을 누르면 예약합니다.";
  render();
}

function selectReservedCard(index) {
  if (state.game.current !== "player" || state.pending) {
    playSfx("error");
    return;
  }
  clearSelection();
  state.selectedReserved = index;
  playSfx("card");
  state.game.log = "예약 카드를 선택했습니다.";
  render();
}

function confirmAction() {
  const label = actionLabel();
  if (label.disabled) {
    playSfx("error");
    return;
  }
  if (sumTokens(state.selectedTokens) > 0) takeTokens();
  else if (state.selectedReserved !== null) buyReserved();
  else if (state.selectedCard) {
    if (canBuy(state.selectedCard.card, state.game.players.player)) buyMarket();
    else reserveMarket();
  }
}

function takeTokens() {
  if (!validTokenSelection(state.selectedTokens)) {
    playSfx("error");
    return;
  }
  playSfx("token");
  const player = state.game.players.player;
  for (const color of COLORS) {
    player.tokens[color] += state.selectedTokens[color];
    state.game.bank[color] -= state.selectedTokens[color];
  }
  state.game.log = "토큰을 가져왔습니다.";
  clearSelection();
  afterMainAction("player");
}

function buyMarket() {
  const { tier, index, card } = state.selectedCard;
  playSfx("buy");
  buyCard(card, state.game.players.player);
  state.game.market[tier][index] = state.game.decks[tier].pop() || null;
  state.game.log = `레벨 ${tier} 카드를 구매했습니다.`;
  clearSelection();
  afterMainAction("player");
}

function buyReserved() {
  const player = state.game.players.player;
  const card = player.reserved[state.selectedReserved];
  playSfx("buy");
  buyCard(card, player);
  player.reserved.splice(state.selectedReserved, 1);
  state.game.log = "예약 카드를 구매했습니다.";
  clearSelection();
  afterMainAction("player");
}

function buyCard(card, player) {
  payFor(card, player, state.game.bank);
  player.developments.push(card);
  player.bonuses[card.bonus] += 1;
}

function reserveMarket() {
  const player = state.game.players.player;
  if (player.reserved.length >= 3) {
    playSfx("error");
    state.game.log = "예약 카드는 최대 3장입니다.";
    render();
    return;
  }
  const { tier, index, card } = state.selectedCard;
  playSfx("reserve");
  player.reserved.push(card);
  state.game.market[tier][index] = state.game.decks[tier].pop() || null;
  takeGoldIfAvailable(player);
  state.game.log = "공개 카드를 예약했습니다.";
  clearSelection();
  afterMainAction("player");
}

function reserveBlind(tier) {
  if (state.game.current !== "player" || state.pending) {
    playSfx("error");
    return;
  }
  const player = state.game.players.player;
  if (player.reserved.length >= 3 || state.game.decks[tier].length === 0) {
    playSfx("error");
    return;
  }
  playSfx("reserve");
  player.reserved.push(state.game.decks[tier].pop());
  takeGoldIfAvailable(player);
  state.game.log = `레벨 ${tier} 덱에서 비공개 예약했습니다.`;
  clearSelection();
  afterMainAction("player");
}

function takeGoldIfAvailable(player) {
  if (state.game.bank.gold > 0) {
    state.game.bank.gold -= 1;
    player.tokens.gold += 1;
  }
}

function afterMainAction(playerKey) {
  const player = state.game.players[playerKey];
  if (sumTokens(player.tokens) > 10) {
    state.pending = { type: "discard", player: playerKey };
    if (playerKey === "player") showDiscardModal();
    else cpuDiscard();
    render();
    return;
  }
  checkNobles(playerKey);
}

function showDiscardModal() {
  const player = state.game.players.player;
  const over = sumTokens(player.tokens) - 10;
  const modal = document.querySelector("#modalLayer");
  modal.classList.remove("hidden");
  modal.innerHTML = `
    <div class="modal">
      <h2>토큰 ${over}개 반환</h2>
      <p>보유 토큰은 금색 포함 10개까지입니다.</p>
      <div class="discard-grid">
        ${TOKEN_COLORS.map((color) => `<button class="discard-choice" data-discard="${color}" ${player.tokens[color] <= 0 ? "disabled" : ""}><span class="gem-pill"><span class="gem-dot" style="--gem:${GEM_HEX[color]}"></span>${GEM_LABEL[color]} ${player.tokens[color]}</span></button>`).join("")}
      </div>
    </div>
  `;
  modal.onclick = (event) => {
    const button = event.target.closest("[data-discard]");
    if (!button) return;
    const color = button.dataset.discard;
    if (player.tokens[color] <= 0) return;
    playSfx("token");
    player.tokens[color] -= 1;
    state.game.bank[color] += 1;
    if (sumTokens(player.tokens) <= 10) {
      modal.classList.add("hidden");
      state.pending = null;
      checkNobles("player");
    } else {
      showDiscardModal();
    }
    render();
  };
}

function cpuDiscard() {
  const cpu = state.game.players.cpu;
  while (sumTokens(cpu.tokens) > 10) {
    const color = TOKEN_COLORS.slice().sort((a, b) => cpu.tokens[b] - cpu.tokens[a])[0];
    cpu.tokens[color] -= 1;
    state.game.bank[color] += 1;
  }
  state.pending = null;
  checkNobles("cpu");
}

function eligibleNobles(player) {
  return state.game.nobles.filter((noble) => Object.entries(noble.req).every(([color, need]) => player.bonuses[color] >= need));
}

function checkNobles(playerKey) {
  const player = state.game.players[playerKey];
  const eligible = eligibleNobles(player);
  if (eligible.length === 0) return completeAction(playerKey);
  if (eligible.length === 1 || playerKey === "cpu") {
    if (playerKey === "player") playSfx("noble");
    gainNoble(playerKey, eligible[0]);
    return completeAction(playerKey);
  }
  showNobleChoice(eligible);
}

function showNobleChoice(eligible) {
  state.pending = { type: "noble", player: "player" };
  const modal = document.querySelector("#modalLayer");
  modal.classList.remove("hidden");
  modal.innerHTML = `
    <div class="modal">
      <h2>귀족 선택</h2>
      <p>한 턴에는 귀족 한 명만 방문합니다.</p>
      <div class="noble-grid">
        ${eligible.map((noble) => `<button class="noble-card" data-noble="${noble.id}" style="--noble-image:url('${nobleImage(state.game.theme, noble)}')"><div class="points">${noble.points}</div><div class="noble-reqs">${renderCost(noble.req)}</div></button>`).join("")}
      </div>
    </div>
  `;
  modal.onclick = (event) => {
    const button = event.target.closest("[data-noble]");
    if (!button) return;
    playSfx("noble");
    gainNoble("player", eligible.find((noble) => noble.id === button.dataset.noble));
    modal.classList.add("hidden");
    state.pending = null;
    completeAction("player");
    render();
  };
}

function gainNoble(playerKey, noble) {
  const player = state.game.players[playerKey];
  if (playerKey === "cpu") playSfx("noble");
  player.nobles.push(noble);
  state.game.nobles = state.game.nobles.filter((item) => item.id !== noble.id);
  state.game.log = `${player.name}에게 귀족이 방문했습니다.`;
}

function completeAction(playerKey) {
  const game = state.game;
  game.players[playerKey].turnsTaken += 1;
  if (score(game.players[playerKey]) >= 15) game.endTriggered = true;
  if (game.endTriggered && game.players.player.turnsTaken === game.players.cpu.turnsTaken) {
    endGame();
    return;
  }
  game.current = playerKey === "player" ? "cpu" : "player";
  if (game.current === "player") game.log = "당신의 턴입니다.";
  if (playerKey === "cpu") playSfx("turn");
  render();
  if (game.current === "cpu") setTimeout(cpuTurn, 650);
}

function finishTurn() {
  if (state.game.current !== "player" || state.pending) {
    playSfx("error");
    return;
  }
  playSfx("turn");
  state.game.log = "행동 없이 턴을 넘겼습니다.";
  clearSelection();
  completeAction("player");
}

function cpuTurn() {
  const game = state.game;
  if (!game || game.current !== "cpu" || game.gameOver) return;
  const cpu = game.players.cpu;
  const allMarket = [3, 2, 1].flatMap((tier) => game.market[tier].map((card, index) => ({ tier, index, card })).filter((x) => x.card));
  const buyableReserved = cpu.reserved.map((card, index) => ({ card, index })).filter((x) => canBuy(x.card, cpu));
  const buyable = allMarket.filter((x) => canBuy(x.card, cpu)).sort((a, b) => cardValue(b.card, cpu) - cardValue(a.card, cpu));

  if (buyableReserved.length && (game.difficulty !== "easy" || buyableReserved[0].card.points > 0)) {
    const pick = buyableReserved.sort((a, b) => cardValue(b.card, cpu) - cardValue(a.card, cpu))[0];
    buyCard(pick.card, cpu);
    cpu.reserved.splice(pick.index, 1);
    game.log = "CPU가 예약 카드를 구매했습니다.";
    return afterMainAction("cpu");
  }
  if (buyable.length) {
    const pick = buyable[0];
    buyCard(pick.card, cpu);
    game.market[pick.tier][pick.index] = game.decks[pick.tier].pop() || null;
    game.log = "CPU가 공개 카드를 구매했습니다.";
    return afterMainAction("cpu");
  }
  if (game.difficulty === "hard" && cpu.reserved.length < 3) {
    const threat = allMarket.filter((x) => canBuy(x.card, game.players.player)).sort((a, b) => cardValue(b.card, game.players.player) - cardValue(a.card, game.players.player))[0];
    if (threat && threat.card.points >= 2) {
      cpu.reserved.push(threat.card);
      game.market[threat.tier][threat.index] = game.decks[threat.tier].pop() || null;
      takeGoldIfAvailable(cpu);
      game.log = "CPU가 위협적인 카드를 예약했습니다.";
      return afterMainAction("cpu");
    }
  }
  const target = allMarket.sort((a, b) => cardValue(b.card, cpu) - cardValue(a.card, cpu))[0]?.card;
  const selected = chooseTokensFor(cpu, target);
  if (validTokenSelection(selected, game.bank)) {
    for (const color of COLORS) {
      cpu.tokens[color] += selected[color];
      game.bank[color] -= selected[color];
    }
    game.log = "CPU가 토큰을 가져갔습니다.";
    return afterMainAction("cpu");
  }
  if (cpu.reserved.length < 3 && game.decks[1].length) {
    cpu.reserved.push(game.decks[1].pop());
    takeGoldIfAvailable(cpu);
    game.log = "CPU가 비공개 카드를 예약했습니다.";
    return afterMainAction("cpu");
  }
  completeAction("cpu");
}

function cardValue(card, player) {
  const noblePressure = state.game.nobles.reduce((sum, noble) => sum + (noble.req[card.bonus] || 0), 0);
  const affordability = Object.entries(card.cost).reduce((sum, [color, value]) => sum + Math.max(0, value - player.bonuses[color] - player.tokens[color]), 0);
  const difficultyBoost = state.game.difficulty === "hard" ? noblePressure * .25 : 0;
  return card.points * 3 + difficultyBoost + (5 - affordability) + player.bonuses[card.bonus] * .25;
}

function chooseTokensFor(player, target) {
  const selected = emptyTokens();
  if (!target) return selected;
  const needs = COLORS.map((color) => ({
    color,
    need: Math.max(0, (target.cost[color] || 0) - player.bonuses[color] - player.tokens[color])
  })).filter((x) => x.need > 0 && state.game.bank[x.color] > 0).sort((a, b) => b.need - a.need);
  if (needs[0] && needs[0].need >= 2 && state.game.bank[needs[0].color] >= 4 && state.game.difficulty !== "easy") {
    selected[needs[0].color] = 2;
    return selected;
  }
  for (const item of needs.slice(0, 3)) selected[item.color] = 1;
  if (sumTokens(selected) === 0) {
    for (const color of COLORS.filter((c) => state.game.bank[c] > 0).slice(0, 3)) selected[color] = 1;
  }
  return selected;
}

function endGame() {
  const game = state.game;
  game.gameOver = true;
  const playerScore = score(game.players.player);
  const cpuScore = score(game.players.cpu);
  const playerCards = game.players.player.developments.length;
  const cpuCards = game.players.cpu.developments.length;
  let result = "무승부입니다.";
  if (playerScore > cpuScore || (playerScore === cpuScore && playerCards < cpuCards)) result = "당신의 승리입니다!";
  if (cpuScore > playerScore || (playerScore === cpuScore && cpuCards < playerCards)) result = "CPU의 승리입니다.";
  playSfx(result.includes("승리") && result.startsWith("당신") ? "win" : result.includes("CPU") ? "lose" : "turn");
  game.log = result;
  render();
  const modal = document.querySelector("#modalLayer");
  modal.classList.remove("hidden");
  modal.innerHTML = `
    <div class="modal">
      <h2>${result}</h2>
      <p>최종 점수: You ${playerScore}점 / CPU ${cpuScore}점</p>
      <p>동점 타이브레이커는 구매한 개발 카드 수가 적은 쪽입니다.</p>
      <div class="modal-actions">
        <button class="ghost" id="closeResult">닫기</button>
        <button class="primary" id="restartGame">새 게임</button>
      </div>
    </div>
  `;
  modal.onclick = (event) => {
    if (event.target.closest("#restartGame")) location.reload();
    if (event.target.closest("#closeResult")) modal.classList.add("hidden");
  };
}

function showSettings() {
  const modal = document.querySelector("#modalLayer");
  modal.classList.remove("hidden");
  modal.innerHTML = `
    <div class="modal">
      <h2>설정</h2>
      <p>Version 1.0.0 프로토타입입니다.</p>
      <label class="stat-line settings-line"><span>배경음악</span><input id="bgmEnabled" type="checkbox" ${state.settings.bgmEnabled ? "checked" : ""}></label>
      <label class="stat-line settings-line"><span>BGM 볼륨</span><input id="bgmVolume" type="range" min="0" max="100" value="${Math.round(state.settings.bgmVolume * 100)}" ${state.settings.bgmEnabled ? "" : "disabled"}></label>
      <label class="stat-line settings-line"><span>효과음</span><input id="sfxEnabled" type="checkbox" ${state.settings.sfxEnabled ? "checked" : ""}></label>
      <label class="stat-line settings-line"><span>효과음 볼륨</span><input id="sfxVolume" type="range" min="0" max="100" value="${Math.round(state.settings.sfxVolume * 100)}" ${state.settings.sfxEnabled ? "" : "disabled"}></label>
      <div class="modal-actions">
        <button class="ghost" id="quitGame">게임 종료</button>
        <button class="primary" id="continueGame">계속하기</button>
      </div>
    </div>
  `;
  modal.querySelector("#bgmEnabled")?.addEventListener("change", (event) => {
    state.settings.bgmEnabled = event.target.checked;
    const slider = modal.querySelector("#bgmVolume");
    if (slider) slider.disabled = !state.settings.bgmEnabled;
    updateBgmVolume();
    playSfx("ui");
  });
  modal.querySelector("#bgmVolume")?.addEventListener("input", (event) => {
    state.settings.bgmVolume = Number(event.target.value) / 100;
    updateBgmVolume();
  });
  modal.querySelector("#bgmVolume")?.addEventListener("change", () => playSfx("ui"));
  modal.querySelector("#sfxEnabled")?.addEventListener("change", (event) => {
    state.settings.sfxEnabled = event.target.checked;
    const slider = modal.querySelector("#sfxVolume");
    if (slider) slider.disabled = !state.settings.sfxEnabled;
    if (sfx.master) sfx.master.gain.value = sfxMasterVolume();
    playSfx("ui");
  });
  modal.querySelector("#sfxVolume")?.addEventListener("input", (event) => {
    state.settings.sfxVolume = Number(event.target.value) / 100;
    if (sfx.master) sfx.master.gain.value = sfxMasterVolume();
  });
  modal.querySelector("#sfxVolume")?.addEventListener("change", () => playSfx("ui"));
  modal.onclick = (event) => {
    if (event.target.closest("#continueGame")) {
      playSfx("ui");
      modal.classList.add("hidden");
    }
    if (event.target.closest("#quitGame")) location.reload();
  };
}

setupUI();
