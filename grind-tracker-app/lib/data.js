export const TRACKS = {
  dsa: { label: "DSA", color: "#f2a93b" },
  qc: { label: "Qualcomm", color: "#45d6c4" },
  gre: { label: "GRE", color: "#8b9ef5" },
};

export const TIERS = [
  "Beginner app",
  "Intermediate app",
  "Advanced app",
  "Complex system",
];

export const TIER_COLORS = ["#f2a93b", "#45d6c4", "#8b9ef5", "#e8604c"];

export const WEEKS = [
  {
    title: "Week 1 — Step 1: Basics",
    days: [
      ["Day 1", "C++/Py basics recap + Patterns"],
      ["Day 2", "Basic Maths + Recursion basics"],
      ["Day 3", "Hashing (frequency counting, precomputed hashing)"],
      ["Day 4", "Finish Step 1 problems + review weak spots"],
      ["Day 5", "Step 2: Sorting techniques (selection, bubble, insertion, merge, quick)"],
    ],
  },
  {
    title: "Week 2 — Step 3: Arrays",
    days: [
      ["Day 6", "Arrays Easy I (largest/second-largest, check sorted, remove dupes, left rotate, move zeros)"],
      ["Day 7", "Arrays Easy II (two sum, sort 0-1-2, majority element, Kadane, buy/sell stock, next permutation)"],
      ["Day 8", "Arrays Medium I (set matrix zero, rotate matrix, spiral traversal, subarray sum = K)"],
      ["Day 9", "Arrays Medium II (Pascal triangle, majority element II, 3-Sum, 4-Sum, merge intervals)"],
      ["Day 10", "Arrays Hard (merge sort, count inversions, reverse pairs, max product subarray)"],
    ],
  },
  {
    title: "Week 3 — Step 4: Binary Search",
    days: [
      ["Day 11", "BS on 1D arrays (basics, floor/ceil, first/last occurrence)"],
      ["Day 12", "BS on 1D continued (rotated array search/min, find peak element)"],
      ["Day 13", "BS on Answers (sqrt, Nth root, Koko bananas, bouquets, ship capacity)"],
      ["Day 14", "BS on 2D arrays (row with max 1s, search 2D matrix, peak in 2D matrix)"],
      ["Day 15", "Catch-up + review Steps 1–4 weak spots"],
    ],
  },
  {
    title: "Week 4 — Step 5 Strings + Step 6 LL (start)",
    days: [
      ["Day 16", "Strings Basic (remove outer parens, reverse words, LCP, isomorphic strings)"],
      ["Day 17", "Strings Medium (check anagram, sort by frequency, Roman↔Integer, atoi)"],
      ["Day 18", "Linked List basics (intro, insertion, deletion, traversal)"],
      ["Day 19", "LL core (reverse LL, find middle, detect cycle, remove Nth from end)"],
      ["Day 20", "Doubly LL + LL Medium (merge two sorted LL, add two numbers as LL)"],
    ],
  },
  {
    title: "Week 5 — Step 6 cont. + Step 7 Recursion",
    days: [
      ["Day 21", "LL Hard (reverse in groups of k, palindrome LL, intersection point, LRU cache)"],
      ["Day 22", "Recursion basics (subsets, subsequences, print all subsets)"],
      ["Day 23", "Recursion Medium (combination sum, subset sum II, palindrome partitioning, k-th permutation)"],
      ["Day 24", "Recursion Hard (N-Queens, Sudoku solver, rat in a maze, word break)"],
      ["Day 25", "Catch-up + review Steps 5–7"],
    ],
  },
  {
    title: "Week 6 — Step 8 Bit Manip + Step 9 Stacks/Queues",
    days: [
      ["Day 26", "Bit Manipulation basics (check ith bit, single-number problems)"],
      ["Day 27", "Bit Manipulation medium (power set via bits, XOR problems, count set bits)"],
      ["Day 28", "Stack & Queue implementation (array-based, LL-based, two-stack)"],
      ["Day 29", "Prefix-Infix-Postfix conversions + evaluation"],
      ["Day 30", "Monotonic stack (next greater/smaller, trapping rainwater, largest rectangle) — hand off to NeetCode"],
    ],
  },
];

export const PHASES = [
  {
    title: "Phase 1 — Weeks 1–2: Foundations",
    items: [
      "Striver Steps 1–3 in Python (basics, arrays, recursion, sorting)",
      "Qualcomm: spaced-repetition refresh (CMOS, FSMs, number systems)",
      "GRE diagnostic test taken",
      "Daily vocab routine started (20 words/day)",
      "Coaching class schedule decided and slotted in",
    ],
  },
  {
    title: "Phase 2 — Weeks 3–4: Core Structures + GRE Quant Basics",
    items: [
      "Striver Steps 4–6 + NeetCode two-pointer/sliding window intro",
      "Qualcomm: Verilog FSM + complex design practice",
      "Company research (Qualcomm/AMD/Nvidia) ongoing",
      "GRE quant fundamentals (arithmetic, algebra, geometry)",
    ],
  },
  {
    title: "Phase 3 — Weeks 5–6: Trees/Graphs + GRE Verbal",
    items: [
      "Striver Steps 7–9, primary driver shifts to NeetCode",
      "Qualcomm: SQL/OS/DBMS revision pass",
      "Mock interview #1 completed",
      "GRE verbal: reading comp + text completion",
    ],
  },
  {
    title: "Phase 4 — Weeks 7–8: Dynamic Programming + GRE Advanced Quant",
    items: [
      "NeetCode DP playlist (1D → knapsack → interval/state-machine)",
      "Qualcomm domain deep-dive (mobile/ASIC/data-center)",
      "Resume + behavioral story prep",
      "GRE advanced quant (data interpretation, word problems)",
      "AWA essay practice started (1/week)",
    ],
  },
  {
    title: "Phase 5 — Weeks 9–10: Hard Problems + GRE Full-Length",
    items: [
      "Targeted Hard-problem practice by pattern",
      "Mock interview #2 completed",
      "Applications + cold outreach pushed actively",
      "First GRE full-length practice test + review by category",
    ],
  },
  {
    title: "Phase 6 — Weeks 11–12: Consolidation",
    items: [
      "Weak DSA patterns revisited, timed practice",
      "Final mock round completed",
      "Follow-up on pending applications/outreach",
      "2 GRE full-length tests + AWA polishing",
      "Weakest quant/verbal category drilled hard",
    ],
  },
  {
    title: "Phase 7 — Weeks 13–14: Final Push",
    items: [
      "DSA/Qualcomm maintenance mode (light, no new material)",
      "GRE full-length test (week 13)",
      "Final review + light practice (week 14)",
      "GRE exam day",
    ],
  },
];

export const LEVELS = [
  ["foundations", "Foundations"],
  ["intermediate", "Intermediate"],
  ["advanced", "Advanced"],
  ["mastery", "Mastery"],
];

export const DOMAINS = [
  { key: "design", icon: "🎨", label: "UI/UX & Product Design" },
  { key: "finance", icon: "📈", label: "Finance & Stock Trading" },
  { key: "electrical", icon: "⚡", label: "Electrical & Core Engineering" },
  { key: "creative", icon: "🎬", label: "3D & Creative" },
  { key: "software", icon: "💻", label: "Software & AI" },
  { key: "custom", icon: "🌐", label: "Custom / General Skill" },
];

export function domainMeta(key) {
  return DOMAINS.find((d) => d.key === key) || DOMAINS[DOMAINS.length - 1];
}

// Each domain template is a function of the skill name, returning
// { foundations: { tasks:[2-3], resources:[1-2], milestone: '' }, intermediate: {...}, advanced: {...}, mastery: {...} }
const DOMAIN_TEMPLATES = {
  design: (name) => ({
    foundations: {
      tasks: [
        "Learn core UI/UX principles: hierarchy, spacing, contrast, and typography",
        `Set up ${name} / your design tool and explore the interface`,
        "Recreate 2–3 existing screens pixel-for-pixel to build muscle memory",
      ],
      resources: ["Figma's official 'Getting Started' docs & YouTube channel", "Refactoring UI (Adam Wathan & Steve Schoger)"],
      milestone: "Recreate a polished login + dashboard screen from a reference design",
    },
    intermediate: {
      tasks: [
        `Build a small component library in ${name} (buttons, inputs, cards)`,
        "Learn auto-layout / responsive constraints and design tokens",
        "Design a 3-screen flow for a small app end-to-end",
      ],
      resources: ["Figma's Auto Layout & Smart Animate documentation", "DesignBetter.co — Design Systems Handbook"],
      milestone: "Ship a component library with at least 5 variants (states, sizes)",
    },
    advanced: {
      tasks: [
        "Design a full design system: color scales, spacing scale, type scale",
        "Prototype a multi-step interactive flow with transitions/micro-interactions",
        "Run a lightweight usability test with 3–5 people and iterate",
      ],
      resources: ["Framer's interactive prototyping docs", "Laws of UX (lawsofux.com)"],
      milestone: "Ship an interactive prototype a stranger can complete a task in, unaided",
    },
    mastery: {
      tasks: [
        "Take a real product from brief to shipped UI under real constraints",
        "Write a case study documenting your design decisions",
        "Critique and improve someone else's design system",
      ],
      resources: ["Case studies on Bestfolios / Behance", "A senior designer's portfolio breakdown video"],
      milestone: "Publish a case study of a shipped project with before/after and rationale",
    },
  }),

  finance: (name) => ({
    foundations: {
      tasks: [
        "Learn market basics: order types, bid/ask, candlesticks, index vs. stock",
        "Open a paper trading account and place your first simulated trades",
        "Learn to read a price chart and identify support/resistance",
      ],
      resources: ["Zerodha Varsity (free markets-basics modules)", "TradingView — paper trading + charting"],
      milestone: "Correctly mark support/resistance on 5 different stock charts",
    },
    intermediate: {
      tasks: [
        `Learn ${name} fundamentals: trends, ranges, and key candlestick patterns`,
        "Build a trading journal template and log every paper trade",
        "Learn risk management: position sizing and stop-loss placement",
      ],
      resources: ["Zerodha Varsity — Technical Analysis module", "TradingView community scripts on price action"],
      milestone: "Execute 10 paper trades with a strict 1:2 risk-to-reward ratio, logged in your journal",
    },
    advanced: {
      tasks: [
        "Develop and backtest a rule-based strategy on historical data",
        "Learn intraday-specific mechanics: liquidity, volume profile, gap plays",
        "Track win rate, R-multiple, and drawdown across 20+ trades",
      ],
      resources: ["TradingView Pine Script docs (for backtesting)", "Zerodha Varsity — Risk Management module"],
      milestone: "Backtest a strategy over 3+ months of data and document win rate and max drawdown",
    },
    mastery: {
      tasks: [
        "Trade a defined strategy consistently for a full month (paper or small size)",
        "Refine your edge through a full trade-review cycle",
        "Explain your strategy's edge and risk rules clearly to someone else",
      ],
      resources: ["A trading journal review with a mentor or community (TradingView Ideas)", "SEBI investor-education resources"],
      milestone: "Produce a month-end report of your trades: win rate, R:R, and lessons learned",
    },
  }),

  electrical: (name) => ({
    foundations: {
      tasks: [
        "Review core theory: circuit laws, semiconductors, basic FSM concepts",
        "Set up your simulation environment (e.g. ModelSim, LTspice, Vivado)",
        "Implement a basic combinational circuit and verify it in simulation",
      ],
      resources: ["NPTEL / Coursera core electronics fundamentals", "Your simulator's official documentation"],
      milestone: "Simulate and verify a basic logic circuit (e.g. a 4-bit adder) end-to-end",
    },
    intermediate: {
      tasks: [
        `Design and simulate a synchronous FSM using ${name}`,
        "Learn timing analysis basics: setup/hold time, clock domains",
        "Debug a design using waveform traces, not just code review",
      ],
      resources: ["Samir Palnitkar — Verilog HDL (FSM design chapters)", "Vendor app notes (Xilinx/Intel) on FSM coding styles"],
      milestone: "Synthesize a 4-state Mealy FSM and verify its waveform against a spec",
    },
    advanced: {
      tasks: [
        "Design a subsystem combining multiple modules with defined interfaces",
        "Optimize a design for timing, area, or power",
        "Write a testbench that covers edge cases, not just the happy path",
      ],
      resources: ["Vendor docs on timing closure / power optimization", "A relevant IEEE paper or app note in your sub-domain"],
      milestone: "Close timing on a multi-module design at your target clock frequency",
    },
    mastery: {
      tasks: [
        "Take a design from spec to a verified implementation independently",
        "Document your design decisions and trade-offs in a short design doc",
        "Review and improve someone else's design or code",
      ],
      resources: ["A real datasheet/spec for a device in your target domain", "EDAboard or r/FPGA / r/ECE for peer review"],
      milestone: "Deliver a fully verified design with a written spec and test report",
    },
  }),

  creative: (name) => ({
    foundations: {
      tasks: [
        `Learn ${name} / your tool's interface: navigation and basic modeling`,
        "Model 2–3 simple objects from reference images",
        "Learn basic lighting and camera setup for a clean render",
      ],
      resources: ["Blender Guru — 'Blender Beginner Donut' tutorial", "Grant Abbitt — beginner modeling series"],
      milestone: "Render a simple scene (2–3 objects) with clean lighting and composition",
    },
    intermediate: {
      tasks: [
        "Learn topology basics and retopologize a rough model",
        "Rig or animate a simple object/character with basic motion",
        "Learn material/texture basics (PBR workflow)",
      ],
      resources: ["Blender Guru — intermediate texturing series", "CG Cookie / Grant Abbitt — rigging fundamentals"],
      milestone: "Produce a 10–15 second animated clip of a rigged, textured object",
    },
    advanced: {
      tasks: [
        "Model and rig a more complex character with clean topology",
        "Learn advanced lighting/rendering (global illumination, HDRI)",
        "Composite a render with post-processing (color grade, effects)",
      ],
      resources: ["Blender Guru — advanced lighting tutorials", "CG Cookie — character rigging deep dive"],
      milestone: "Ship a fully rigged character capable of a walk cycle",
    },
    mastery: {
      tasks: [
        "Complete an original short piece from concept to final render",
        "Get feedback from a creative community and iterate",
        "Break down your process in a short write-up or breakdown video",
      ],
      resources: ["ArtStation / Blender Artists for critique", "A working 3D artist's portfolio breakdown"],
      milestone: "Publish a finished, original piece with a process breakdown",
    },
  }),

  software: (name) => ({
    foundations: {
      tasks: [
        `Learn ${name} core syntax/concepts and set up your dev environment`,
        `Build a minimal "hello world" project`,
        "Work through a beginner tutorial end-to-end without skipping steps",
      ],
      resources: ["Official docs for the language/framework", "freeCodeCamp (or an equivalent structured course)"],
      milestone: "Build and run a working minimal project from scratch, unaided",
    },
    intermediate: {
      tasks: [
        "Rebuild a simple existing app/feature without copying a tutorial 1:1",
        "Learn 2–3 common patterns/libraries used in real projects",
        "Handle a real error or edge case and debug it yourself",
      ],
      resources: ["A well-regarded open-source project in the same stack", "The official docs' guides/cookbook section"],
      milestone: "Ship a small working app with one non-trivial feature (auth, data fetching, etc.)",
    },
    advanced: {
      tasks: [
        "Build an original project that stretches the tool beyond tutorials",
        "Optimize for performance, structure, or scale",
        "Write tests or documentation for what you built",
      ],
      resources: ["Official performance/best-practices guide", "A conference talk or deep-dive blog post on advanced usage"],
      milestone: "Ship a project with tests and docs that someone else could contribute to",
    },
    mastery: {
      tasks: [
        "Ship something real — deployed, used, or shared publicly",
        "Contribute to or review someone else's project in the same stack",
        "Teach or explain the concept to someone else (write-up, talk, mentoring)",
      ],
      resources: ["An open-source project accepting contributions in your stack", "Your own blog/write-up platform"],
      milestone: "Have a real user (not you) use something you built, and get their feedback",
    },
  }),

  custom: (name) => ({
    foundations: {
      tasks: [
        `Learn what ${name} is for and where it fits`,
        "Set up whatever tools/environment the skill requires",
        `Skim a beginner tutorial or intro course on ${name} end-to-end`,
      ],
      resources: ["A well-reviewed beginner course or book on the topic", "A community (subreddit/Discord/forum) for the skill"],
      milestone: "Produce a small, tangible first output and get feedback on it",
    },
    intermediate: {
      tasks: [
        `Recreate something existing in ${name} without a step-by-step guide`,
        "Learn 2–3 common techniques or tools used by practitioners",
        "Handle a real problem or edge case without help",
      ],
      resources: ["An intermediate-level course or structured curriculum", "Someone experienced in the skill you can ask questions"],
      milestone: "Complete an intermediate project and have someone experienced review it",
    },
    advanced: {
      tasks: [
        `Build/attempt an original ${name} project beyond what tutorials cover`,
        "Refine your technique based on outside feedback",
        "Document your process or reasoning as you go",
      ],
      resources: ["Advanced-level resources or a mentor in the field", "A community showcase/critique thread"],
      milestone: "Ship an original piece of work you're proud to show someone experienced",
    },
    mastery: {
      tasks: [
        "Produce a public, real-world output — used, shared, or judged by others",
        "Teach or explain the skill to someone else",
        "Take on something you'd have called too hard a month ago",
      ],
      resources: ["A community or platform to share your work publicly", "Someone to mentor or teach as a way of testing your mastery"],
      milestone: "Have your work evaluated by someone outside your own judgment, and act on the feedback",
    },
  }),
};

export function buildDomainRoadmap(domainKey, name) {
  const fn = DOMAIN_TEMPLATES[domainKey] || DOMAIN_TEMPLATES.custom;
  return fn(name);
}

export function todayStr(d) {
  const date = d || new Date();
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
}

export const DEFAULT_DATA = {
  startDate: null,
  sessions: [],
  checklist: {},
  vocab: {},
  skills: [],
  skillChecklist: {},
  timer: {
    track: "dsa",
    mode: "stopwatch",
    customMinutes: 60,
    soundOn: true,
    running: false,
    accumulatedMs: 0,
    startTs: null,
  },
};

export const STORAGE_KEY = "grind-control-data-v1";
