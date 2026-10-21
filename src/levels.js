/**
 * levels.js
 * Comprehensive definitions for all 10 Levels matching user specifications:
 * Level 1: Two Friends (1/2 sharing)
 * Level 2: Three Friends (1/3 sharing)
 * Level 3: Four Quarters (1/4 sharing)
 * Level 4: Identify Fractions (interactive 3D inspection & quiz)
 * Level 5: Three-Quarters (3/4 selection and remaining 1/4)
 * Level 6: Compare Fractions (side-by-side 1/2 vs 1/4, 2/3 vs 1/3)
 * Level 7: Equivalent Fractions (1/2 = 2/4)
 * Level 8: Adding Fractions (1/4 + 1/4 = 2/4, 2/4 + 1/4 = 3/4)
 * Level 9: Laddoo Sharing (discrete fraction sharing)
 * Level 10: Fraction Master (combined multi-concept grand challenge)
 */

export const LEVEL_DEFINITIONS = [
  {
    id: 1,
    title: "Two Friends",
    type: "sharing",
    foodType: "roti",
    friends: ["Chintu", "Meera"],
    targetPieces: 2,
    targetFractionPerFriend: 0.5,
    targetFractionStr: "1/2",
    instruction: "Share one whole roti equally between Chintu and Meera. Divide it into two equal halves!",
    subInstruction: "Select 2 slices (1/2 each), then click 'Cut & Share Roti' to share equally.",
    hint: "Two friends need two equal pieces.",
    explanation: "1/2 + 1/2 = 1 Whole Roti! Both friends received exactly half.",
    difficultyFactor: {
      easy: { defaultSlices: 2, showGuides: true },
      normal: { defaultSlices: 2, showGuides: false },
      medium: { defaultSlices: null, showGuides: false },
      hard: { defaultSlices: null, showGuides: false }
    }
  },
  {
    id: 2,
    title: "Three Friends",
    type: "sharing",
    foodType: "roti",
    friends: ["Chintu", "Meera", "Golu"],
    targetPieces: 3,
    targetFractionPerFriend: 1 / 3,
    targetFractionStr: "1/3",
    instruction: "Hungry Golu joined! Share one roti equally among all three friends.",
    subInstruction: "Select 3 slices (1/3 each), then click 'Cut & Share Roti' to share equally.",
    hint: "Three friends need three equal shares.",
    explanation: "1/3 + 1/3 + 1/3 = 1 Whole Roti! Each friend gets one-third.",
    difficultyFactor: {
      easy: { defaultSlices: 3, showGuides: true },
      normal: { defaultSlices: 3, showGuides: false },
      medium: { defaultSlices: null, showGuides: false },
      hard: { defaultSlices: null, showGuides: false }
    }
  },
  {
    id: 3,
    title: "Four Equal Pieces",
    type: "sharing",
    foodType: "roti",
    friends: ["Chintu", "Meera", "Golu"],
    targetPieces: 4,
    targetFractionPerFriend: 0.25, // with 1 left on board or bonus
    targetFractionStr: "1/4",
    instruction: "Divide one roti into four equal pieces. Each piece represents 1/4!",
    subInstruction: "Select 4 slices (1/4 each), then click 'Cut & Share Roti'. Each piece represents 1/4.",
    hint: "Four equal parts make 4 quarters. Each piece represents 1/4 of the whole roti!",
    explanation: "One whole roti contains four quarters (4 × 1/4 = 1). Each piece represents 1/4.",
    difficultyFactor: {
      easy: { defaultSlices: 4, showGuides: true },
      normal: { defaultSlices: 4, showGuides: false },
      medium: { defaultSlices: null, showGuides: false },
      hard: { defaultSlices: null, showGuides: false }
    }
  },
  {
    id: 4,
    title: "Fraction Finder",
    type: "identify",
    foodType: "roti",
    initialPieces: 4,
    highlightIndex: 0,
    targetFractionStr: "1/4",
    question: "The roti is divided into 4 equal slices. What fraction is the highlighted piece?",
    options: ["1/2", "1/4", "1/3", "1/8"],
    correctOption: "1/4",
    instruction: "Look closely at the highlighted 3D piece. Which fraction does it represent?",
    subInstruction: "Count total equal slices: 4 slices means each slice is 1 out of 4.",
    hint: "The bottom number (denominator) is the total pieces (4). The top number (numerator) is 1.",
    explanation: "Correct! Since the roti is divided into 4 equal pieces, each single piece is 1/4 (one quarter)."
  },
  {
    id: 5,
    title: "Three-Quarters Challenge",
    type: "serve_amount",
    foodType: "roti",
    friends: ["Golu"],
    targetPieces: 4,
    requiredFraction: 0.75,
    targetPiecesCount: 3,
    targetFractionStr: "3/4",
    instruction: "Golu requests 3/4 of a roti! Divide into 4 pieces and share 3 pieces with Golu.",
    subInstruction: "Select 4 slices and click 'Cut & Share Roti'. 3 pieces go to Golu, leaving 1/4 on the board.",
    hint: "Three-quarters means three out of four equal pieces.",
    explanation: "Terrific! Golu has 3/4 of the roti, leaving exactly 1/4 on the cutting board."
  },
  {
    id: 6,
    title: "Compare Fractions",
    type: "compare",
    foodType: "dual_roti",
    leftFraction: "1/2",
    leftVal: 0.5,
    leftPieces: 2,
    rightFraction: "1/4",
    rightVal: 0.25,
    rightPieces: 4,
    question: "Look at the two rotis. Which piece is GREATER in size: 1/2 or 1/4?",
    options: ["1/2 > 1/4 (1/2 is Greater)", "1/4 > 1/2 (1/4 is Greater)", "1/2 = 1/4 (Both are Equal)"],
    correctOption: "1/2 > 1/4 (1/2 is Greater)",
    instruction: "Compare the highlighted piece of the left roti (1/2) with the right roti (1/4). Which is bigger?",
    subInstruction: "Observe the 3D surface area and the tilt on the Balance Scale.",
    hint: "When you share a roti among fewer people (2 vs 4), each person gets a BIGGER piece! So 1/2 > 1/4.",
    explanation: "Brilliant! 1/2 > 1/4. When the denominator is smaller, each equal piece is larger!"
  },
  {
    id: 7,
    title: "Equivalent Fractions",
    type: "compare",
    foodType: "dual_roti",
    leftFraction: "1/2",
    leftVal: 0.5,
    leftPieces: 2,
    rightFraction: "2/4",
    rightVal: 0.5,
    rightPieces: 4,
    question: "Compare 1/2 of Roti A and 2/4 of Roti B. How do they compare?",
    options: ["1/2 > 2/4 (1/2 is Greater)", "2/4 > 1/2 (2/4 is Greater)", "1/2 = 2/4 (They are Equal!)"],
    correctOption: "1/2 = 2/4 (They are Equal!)",
    instruction: "Notice how two 1/4 pieces cover the exact same area as one 1/2 piece!",
    subInstruction: "Notice the Balance Scale stays level: 1/2 = 2/4 = 4/8!",
    hint: "Compare the total area of one half and two quarters.",
    explanation: "1/2 = 2/4! These are Equivalent Fractions because they represent the exact same amount of food."
  },
  {
    id: 8,
    title: "Adding Fractions",
    type: "addition",
    foodType: "roti",
    targetPieces: 4,
    friends: ["Meera"],
    stages: [
      {
        addPieces: 2,
        formula: "1/4 + 1/4 = 2/4",
        prompt: "Move two 1/4 pieces to Meera's plate to find 1/4 + 1/4."
      }
    ],
    instruction: "Meera is exploring fraction addition: 1/4 + 1/4 = ?",
    subInstruction: "Slice the roti into 4 quarters, then place 2 pieces onto Meera's plate.",
    hint: "When adding fractions with the same denominator, add the numerators: 1 + 1 = 2, so 2/4 (which is also 1/2)!",
    explanation: "Great math! 1/4 + 1/4 = 2/4 = 1/2 of the whole roti!"
  },
  {
    id: 9,
    title: "Roti Shop",
    type: "shop_level",
    foodType: "roti",
    friends: ["Chintu"],
    targetPieces: 2,
    targetFractionPerFriend: 0.5,
    targetFractionStr: "1/2",
    customer: "Chintu",
    instruction: "Welcome to the Roti Shop! Chintu requests 1/2 of a roti.",
    subInstruction: "Select 2 slices (1/2 each) and click 'Cut & Share Roti' to serve the order!",
    hint: "Prepare and serve 1/2 of a fresh roti by slicing into 2 equal parts.",
    explanation: "Delicious! You prepared and served 1/2 of a roti to customer Chintu!"
  },
  {
    id: 10,
    title: "Fraction Master",
    type: "sharing",
    foodType: "roti",
    friends: ["Chintu", "Meera", "Golu"],
    targetPieces: 6,
    targetFractionPerFriend: 2 / 6, // 1/3
    targetFractionStr: "2/6 (1/3)",
    instruction: "Grand Finale! Divide the roti into 6 equal slices. Give 2 slices (2/6 = 1/3) to each friend!",
    subInstruction: "Slice into 6 parts. Place 2 slices on Chintu's, 2 on Meera's, and 2 on Golu's plate.",
    hint: "6 pieces total. 2/6 simplifies to 1/3! Each friend gets 2 pieces.",
    explanation: "MASTER OF FRACTIONS! 2/6 + 2/6 + 2/6 = 6/6 = 1 Whole Roti! You are a Certified Fractions Hero!"
  }
];

export const ROTI_SHOP_ORDERS = [
  {
    id: 'order-1',
    customer: 'Chintu',
    requestedFractionStr: '1/2',
    requestedFractionVal: 0.5,
    coinsReward: 30,
    message: "Namaste! I'd like 1/2 of a roti please!"
  },
  {
    id: 'order-2',
    customer: 'Meera',
    requestedFractionStr: '3/4',
    requestedFractionVal: 0.75,
    coinsReward: 50,
    message: "Hello chef! Can I have 3/4 of a roti?"
  },
  {
    id: 'order-3',
    customer: 'Golu',
    requestedFractionStr: '2/4 (or 1/2)',
    requestedFractionVal: 0.5,
    coinsReward: 40,
    message: "I am hungry! Serve me 2/4 of a roti please!"
  },
  {
    id: 'order-4',
    customer: 'Meera',
    requestedFractionStr: '2/3',
    requestedFractionVal: 2 / 3,
    coinsReward: 60,
    message: "Can you slice into 3 and serve me 2/3?"
  },
  {
    id: 'order-5',
    customer: 'Golu',
    requestedFractionStr: '4/8 (or 1/2)',
    requestedFractionVal: 0.5,
    coinsReward: 60,
    message: "Give me 4 eighths (4/8) of a roti!"
  }
];

export const CREATIVE_KITCHEN_FOODS = [
  { id: 'roti', name: 'Golden Roti', icon: '🫓' },
  { id: 'pizza', name: 'Cheesy Pizza', icon: '🍕' },
  { id: 'pancake', name: 'Fluffy Pancake', icon: '🥞' },
  { id: 'laddoo', name: 'Sweet Laddoo', icon: '🟡' }
];

export const ACHIEVEMENTS_LIST = [
  {
    id: 'fair_share',
    title: 'Fair Share Champion',
    description: 'Complete 5 fair-sharing challenges with equal fractions.',
    icon: '🤝',
    target: 5
  },
  {
    id: 'fraction_finder',
    title: 'Fraction Finder',
    description: 'Identify 10 fractions correctly.',
    icon: '🔍',
    target: 10
  },
  {
    id: 'equivalent_expert',
    title: 'Equivalent Expert',
    description: 'Master equivalent fractions: 1/2 = 2/4 on the Balance Scale.',
    icon: '⚖️',
    target: 1
  },
  {
    id: 'roti_master',
    title: 'Roti Master',
    description: 'Complete all 10 beginner and advanced levels.',
    icon: '👑',
    target: 10
  }
];

