(function () {
  "use strict";

  var STORAGE_KEY = "promptwriter3000.savedPresets";

  var ROLE_DEFINITIONS = {
    "Community Manager":
      "Guides comments and moderation, escalates issues, and creates engagement prompts that strengthen audience trust and participation.",
    "Content Calendar Manager":
      "Plans publishing schedules, batching, repurposing pathways, and deadlines to keep content output consistent and strategic.",
    "Creative Director":
      "Shapes creative concepts, campaign themes, and brand consistency across multi-format content initiatives.",
    "Marketing strategist":
      "Designs positioning, messaging, funnels, offers, and calls to action that move a target audience from awareness to conversion.",
    "Motion Graphics Designer":
      "Designs lower thirds, transitions, and animated overlays that improve clarity, pacing, and brand expression in video content.",
    "On-camera Host Coach":
      "Improves delivery and on-camera presence, and adapts scripts for natural teleprompter-friendly performance.",
    "Short-form Video Producer":
      "Builds hooks, pacing, and retention structure for short-form video so viewers stay engaged through the end.",
    "Social Media Personality":
      "Develops a distinct on-camera voice, relatable storytelling style, and audience-first engagement approach for consistent personal-brand growth.",
    "Social Media Strategist":
      "Designs channel mix, posting cadence, and growth loops to improve reach, engagement, and conversion across social platforms.",
    "TikTok Growth Lead":
      "Adapts trends quickly, runs format tests, and reads community signals to improve performance on TikTok.",
    "Video Editor":
      "Plans cut strategy, b-roll usage, captions, and sound-design notes to improve narrative flow and viewer retention.",
    "YouTube Strategist":
      "Optimizes titles and thumbnails, plans series structures, and improves watch-time through packaging and content strategy.",
    "Brand voice copywriter":
      "Writes persuasive copy with consistent tone and brand voice across taglines, ads, landing pages, and campaign assets.",
    "SEO content strategist":
      "Plans search-intent aligned content, outlines, metadata, and internal linking structures to improve organic discoverability.",
    "Product manager":
      "Defines requirements, writes clear PRDs, prioritizes roadmaps, and explains tradeoffs across customer value, effort, and risk.",
    "UX writer / content designer":
      "Crafts microcopy, labels, error states, and onboarding content that reduces friction and improves task completion.",
    "UX researcher":
      "Designs interview guides and surveys, synthesizes evidence, and turns findings into clear user insights and recommendations.",
    "iOS Game Engineer (Swift + SpriteKit)":
      "Builds iOS game features using Swift and SpriteKit, including scene graphs, actions, physics behavior, and touch-input handling.",
    "Metal Graphics Programmer":
      "Implements Metal render pipelines, writes shader logic, and tunes GPU/CPU performance for Apple-platform games.",
    "Gameplay Programmer":
      "Builds and iterates combat and movement systems, camera behavior, and game feel with rapid tuning workflows.",
    "Game Systems Designer":
      "Designs progression loops, in-game economy structures, and tuning/balance systems for long-term player retention.",
    "Technical Game Designer":
      "Creates design-to-implementation specs and scripting logic that bridge game design goals with engineering execution.",
    "Engine/Tools Programmer":
      "Develops level editors, build pipelines, and asset-tooling workflows to improve developer productivity and content iteration.",
    "Performance & Optimization Engineer (Apple platforms)":
      "Profiles frame-time and memory usage, improves frame pacing, and removes bottlenecks across iOS and macOS game builds.",
    "Apple Platform Engineer (App Store + entitlements)":
      "Handles Apple signing, entitlements, sandboxing, distribution, and notarization requirements for shipping game apps.",
    "Audio Programmer / Sound Designer":
      "Designs and implements interactive audio systems, mixes, and spatial/3D sound behavior for gameplay contexts.",
    "QA / Compatibility Tester (iOS/macOS)":
      "Executes device-matrix regression testing, validates controller input behavior, and triages crashes on iOS/macOS builds.",
    "Frontend Engineer (React/Next.js)":
      "Designs UI architecture, builds reusable components, manages client state, and improves frontend performance in React/Next.js apps.",
    "Backend Engineer (Node/Express)":
      "Implements APIs, authentication flows, data access layers, and service integrations in Node/Express systems.",
    "Full-Stack Engineer":
      "Delivers end-to-end implementation across frontend and backend, explains tradeoffs, and supports deployment readiness.",
    "Web Architect":
      "Defines web system architecture, scalability patterns, and platform-level design decisions for long-term maintainability.",
    "UI Engineer":
      "Builds and maintains design-system components, accessibility support, and responsive layout behavior across interfaces.",
    "UX Engineer":
      "Implements interaction patterns with a usability-first approach to improve clarity, flow, and user task completion.",
    "Accessibility Specialist (WCAG)":
      "Runs accessibility audits, improves ARIA semantics, and hardens keyboard/focus behavior to meet WCAG expectations.",
    "Performance Engineer (Core Web Vitals)":
      "Optimizes Core Web Vitals, bundle strategy, and caching behavior to improve perceived and measured web performance.",
    "Security Engineer (Web/AppSec)":
      "Applies OWASP guidance, strengthens auth/session handling, and threat-models web application risks and mitigations.",
    "DevOps / Platform Engineer":
      "Owns CI/CD pipelines, hosting/platform operations, observability, and infrastructure-as-code practices for reliable delivery.",
    "Software architect":
      "Designs system architecture, APIs, and scaling approaches with secure patterns, reliability, and maintainability in mind.",
    "Senior full-stack engineer":
      "Produces implementation plans and production-ready code, debugs issues efficiently, and applies backend and frontend best practices.",
    "Data analyst":
      "Translates business questions into SQL and metrics, evaluates experiments, and communicates insights with clear assumptions.",
    "Editor / proofreader":
      "Improves clarity, structure, grammar, and style-guide consistency while preserving intent, audience fit, and factual accuracy.",
    "Cybersecurity engineer":
      "Performs threat modeling, recommends system hardening, and supports incident response planning and containment actions.",
    "DevOps / SRE":
      "Designs CI/CD workflows, observability practices, reliability goals, and runbooks for resilient service operations.",
    "QA / test engineer":
      "Creates test plans, identifies edge cases, and defines practical automation strategies to reduce regression risk.",
    "Technical writer":
      "Produces clear documentation, tutorials, API references, and release notes for technical and non-technical audiences.",
    "Compliance / privacy specialist":
      "Reviews data handling and policy alignment, flags privacy risks, and documents compliance considerations and gaps.",
    "Bookkeeper":
      "Handles day-to-day journal entries, account categorization, and reconciliations to maintain clean, reliable books.",
    "CFO / Fractional CFO":
      "Sets financial strategy, manages runway, refines pricing decisions, and enforces KPI discipline for planning and execution.",
    "Controller":
      "Oversees accounting operations, month-end close quality, and internal controls for accurate financial reporting.",
    "Corporate Finance Manager":
      "Leads capital planning, liquidity management, and funding strategy to support sustainable growth and risk balance.",
    "Cost Accountant":
      "Builds COGS models, performs margin analysis, and designs defensible cost allocation approaches.",
    "FP&A Analyst":
      "Builds budgets and forecasts, performs variance analysis, and explains business performance drivers with clear assumptions.",
    "Internal Auditor":
      "Performs risk assessment, control testing, and fraud-prevention checks to strengthen governance and compliance posture.",
    "Revenue Operations Analyst":
      "Analyzes billing workflows, renewals, and revenue reporting quality to improve predictability and reduce leakage.",
    "Tax Strategist":
      "Frames entity-choice considerations, deduction opportunities, and estimated-tax questions to raise with tax counsel.",
    "Treasury Manager":
      "Manages cash positioning, banking operations, and working-capital strategy for liquidity and operational resilience.",
    "Operations manager":
      "Designs scalable processes, SOPs, and execution checklists to improve consistency, throughput, and accountability.",
    "Project manager":
      "Plans timelines, manages dependencies, and provides clear status reporting, risks, and next-step ownership.",
    "Legal-issue spotter":
      "Identifies contract red flags and legal risk signals, then outlines focused questions to raise with qualified counsel.",
    "Negotiation coach":
      "Drafts negotiation scripts, objection handling responses, and leverage framing for practical discussion preparation."
  };

  var ROLE_DEPARTMENTS = {
    "Community Manager": "Social Team",
    "Content Calendar Manager": "Social Team",
    "Creative Director": "Social Team",
    "Motion Graphics Designer": "Social Team",
    "On-camera Host Coach": "Social Team",
    "Short-form Video Producer": "Social Team",
    "Social Media Personality": "Social Team",
    "Social Media Strategist": "Social Team",
    "TikTok Growth Lead": "Social Team",
    "Video Editor": "Social Team",
    "YouTube Strategist": "Social Team",
    "Brand voice copywriter": "Marketing & Content",
    "Editor / proofreader": "Marketing & Content",
    "Marketing strategist": "Marketing & Content",
    "SEO content strategist": "Marketing & Content",
    "Technical writer": "Marketing & Content",
    "UX writer / content designer": "Marketing & Content",
    "Apple Platform Engineer (App Store + entitlements)": "Game Development (Apple)",
    "Audio Programmer / Sound Designer": "Game Development (Apple)",
    "Engine/Tools Programmer": "Game Development (Apple)",
    "Game Systems Designer": "Game Development (Apple)",
    "Gameplay Programmer": "Game Development (Apple)",
    "iOS Game Engineer (Swift + SpriteKit)": "Game Development (Apple)",
    "Metal Graphics Programmer": "Game Development (Apple)",
    "Performance & Optimization Engineer (Apple platforms)": "Game Development (Apple)",
    "QA / Compatibility Tester (iOS/macOS)": "Game Development (Apple)",
    "Technical Game Designer": "Game Development (Apple)",
    "Accessibility Specialist (WCAG)": "Engineering & Security",
    "Backend Engineer (Node/Express)": "Engineering & Security",
    "Cybersecurity engineer": "Engineering & Security",
    "DevOps / Platform Engineer": "Engineering & Security",
    "DevOps / SRE": "Engineering & Security",
    "Frontend Engineer (React/Next.js)": "Engineering & Security",
    "Full-Stack Engineer": "Engineering & Security",
    "Performance Engineer (Core Web Vitals)": "Engineering & Security",
    "QA / test engineer": "Engineering & Security",
    "Security Engineer (Web/AppSec)": "Engineering & Security",
    "Senior full-stack engineer": "Engineering & Security",
    "Software architect": "Engineering & Security",
    "UI Engineer": "Engineering & Security",
    "UX Engineer": "Engineering & Security",
    "Web Architect": "Engineering & Security",
    "Compliance / privacy specialist": "Legal, Risk & Compliance",
    "Legal-issue spotter": "Legal, Risk & Compliance",
    "Data analyst": "Product & Research",
    "Product manager": "Product & Research",
    "UX researcher": "Product & Research",
    "Bookkeeper": "Finance & Accounting",
    "CFO / Fractional CFO": "Finance & Accounting",
    "Controller": "Finance & Accounting",
    "Corporate Finance Manager": "Finance & Accounting",
    "Cost Accountant": "Finance & Accounting",
    "FP&A Analyst": "Finance & Accounting",
    "Internal Auditor": "Finance & Accounting",
    "Revenue Operations Analyst": "Finance & Accounting",
    "Tax Strategist": "Finance & Accounting",
    "Treasury Manager": "Finance & Accounting",
    "Negotiation coach": "Business & Operations",
    "Operations manager": "Business & Operations",
    "Project manager": "Business & Operations"
  };

  var PINNED_DEPARTMENTS = ["Social Team"];

  var AUDIENCE_OPTIONS = [
    "",
    "General public",
    "Executives",
    "Engineers",
    "Kids",
    "Local community",
    "Customers",
    "Internal team"
  ];

  var PLATFORM_OPTIONS = ["No social platform", "All platforms", "Facebook", "Instagram", "Reddit", "X"];

  var AVOID_WORD_PRESET_OPTIONS = [
    {
      group: "Quick Sets",
      items: [
        { value: "none", label: "None" },
        { value: "all", label: "All" },
        { value: "cross_platform_core", label: "Cross-platform core risk categories" }
      ]
    },
    {
      group: "Platform Bundles",
      items: [
        { value: "facebook_all", label: "Facebook - All avoid categories" },
        { value: "instagram_all", label: "Instagram - All avoid categories" },
        { value: "reddit_all", label: "Reddit - All avoid categories" },
        { value: "x_all", label: "X - All avoid categories" },
        { value: "youtube_all", label: "YouTube - All avoid categories" },
        { value: "vimeo_all", label: "Vimeo - All avoid categories" }
      ]
    }
  ];

  function buildCategoryEntries(categories) {
    return uniqueWordList(categories || []);
  }

  var AVOID_WORD_PRESET_WORDS = {
    none: [],
    cross_platform_core: buildCategoryEntries([
      "Violence or threats",
      "Hate speech or slurs",
      "Sexual explicit or exploitative content",
      "Illegal goods or drug promotion",
      "Self-harm promotion",
      "Doxxing or private information exposure",
      "Spam or platform manipulation"
    ]),
    facebook_violence: buildCategoryEntries(["Violence, threats, or incitement"]),
    facebook_hate: buildCategoryEntries(["Hate speech or extremist glorification"]),
    facebook_sexual: buildCategoryEntries(["Sexual exploitation or explicit sexual content"]),
    facebook_drugs: buildCategoryEntries(["Illegal goods, weapons, or controlled substance promotion"]),
    facebook_spam: buildCategoryEntries(["Spammy promotions or engagement bait"]),
    facebook_self_harm: buildCategoryEntries(["Self-harm or suicide encouragement"]),
    instagram_all: buildCategoryEntries([
      "Violence or threats",
      "Hate speech or harassment",
      "Sexual explicit or exploitative content",
      "Drug sales or promotion",
      "Spam or engagement bait"
    ]),
    reddit_all: buildCategoryEntries([
      "Violence or threats",
      "Hate speech or harassment",
      "Sexual exploitation or minors",
      "Doxxing or personal information exposure",
      "Illegal goods or drug sales",
      "Scams or deceptive behavior"
    ]),
    x_all: buildCategoryEntries([
      "Violence or threats",
      "Hateful conduct",
      "Sexual exploitation",
      "Doxxing or private information exposure",
      "Illegal goods or drug promotion",
      "Platform manipulation or spam"
    ]),
    youtube_profanity: buildCategoryEntries(["Profanity and slurs"]),
    youtube_violence: buildCategoryEntries(["Violent or graphic content"]),
    youtube_sexual: buildCategoryEntries(["Explicit sexual content"]),
    youtube_harmful: buildCategoryEntries(["Harmful acts or dangerous behavior promotion"]),
    youtube_hate: buildCategoryEntries(["Hateful or extremist content"]),
    vimeo_violence: buildCategoryEntries(["Violent and graphic content"]),
    vimeo_hate: buildCategoryEntries(["Hateful, harassing, or discriminatory content", "Hate speech or slurs"]),
    vimeo_erotic: buildCategoryEntries(["Erotic commercial or sexually explicit content"]),
    vimeo_privacy: buildCategoryEntries(["Harassment or privacy violations"])
  };

  var AVOID_WORD_COMPOSITE_KEYS = {
    facebook_all: [
      "facebook_violence",
      "facebook_hate",
      "facebook_sexual",
      "facebook_drugs",
      "facebook_spam",
      "facebook_self_harm"
    ],
    youtube_all: ["youtube_profanity", "youtube_violence", "youtube_sexual", "youtube_harmful", "youtube_hate"],
    vimeo_all: ["vimeo_violence", "vimeo_hate", "vimeo_erotic", "vimeo_privacy"]
  };

  var PLATFORM_AUTO_AVOID_PRESET = {
    "No social platform": "none",
    "All platforms": "all",
    Facebook: "facebook_all",
    Instagram: "instagram_all",
    Reddit: "reddit_all",
    X: "x_all"
  };

  var TASK_TYPE_OPTIONS = [
    "",
    "Write",
    "Rewrite",
    "Summarize",
    "Brainstorm",
    "Plan",
    "Analyze",
    "Extract",
    "Transform",
    "Compare",
    "Critique"
  ];

  var TONE_OPTIONS = [
    "",
    "Neutral",
    "Direct",
    "Friendly",
    "Hype",
    "Formal",
    "Comedic",
    "Instructional"
  ];

  var OUTPUT_FORMAT_OPTIONS = [
    "",
    "Bullets",
    "Steps",
    "Table",
    "JSON",
    "Outline",
    "Script",
    "Checklist"
  ];

  var LENGTH_OPTIONS = [
    { value: "", label: "" },
    { value: "short", label: "Short (<=150w)" },
    { value: "medium", label: "Medium" },
    { value: "long", label: "Long" },
    { value: "custom", label: "Custom word limit" }
  ];

  var MODEL_PROFILES = {
    "": {
      label: "",
      verbosity: "",
      formatting: "",
      defaults: {}
    },
    chatgpt: {
      label: "ChatGPT",
      verbosity: "balanced",
      formatting: "medium",
      defaults: { tone: "Neutral", outputFormat: "Bullets", length: "medium" }
    },
    claude: {
      label: "Claude",
      verbosity: "high",
      formatting: "strict",
      defaults: { tone: "Formal", outputFormat: "Outline", length: "long" }
    },
    gemini: {
      label: "Gemini",
      verbosity: "medium",
      formatting: "medium",
      defaults: { tone: "Direct", outputFormat: "Steps", length: "medium" }
    },
    custom: {
      label: "Custom",
      verbosity: "",
      formatting: "",
      defaults: {}
    }
  };

  var BUILT_IN_PRESETS = {
    "YouTube short script": {
      role: "Marketing strategist",
      audience: "General public",
      taskType: "Write",
      tone: "Hype",
      outputFormat: "Script",
      length: "short",
      customWordLimit: "",
      modelProfile: "chatgpt",
      assumptionsPolicy: "proceed_with_assumptions",
      constraints: ["No fluff", "No invented facts"],
      qualityChecks: ["Return 2 variants"],
      goal: "Create a fast-paced YouTube Shorts script that hooks in 2 seconds and ends with a CTA.",
      context: "Topic: beginner productivity habits. Audience is scrolling on mobile.",
      mustInclude: "Hook line in first sentence\nOne practical tip\nClear CTA",
      mustAvoid: "Long intro\nJargon",
      referenceMaterial: "",
      successCriteria: "Easy to read aloud\nPacing feels energetic",
      negativePrompt: "No clickbait claims"
    },
    "Bug triage": {
      role: "Senior full-stack engineer",
      audience: "Engineers",
      taskType: "Analyze",
      tone: "Direct",
      outputFormat: "Checklist",
      length: "medium",
      customWordLimit: "",
      modelProfile: "claude",
      assumptionsPolicy: "ask_first",
      constraints: ["No fluff", "Ask clarifying questions if missing", "Include assumptions"],
      qualityChecks: ["Include a compliance checklist", "Self-critique then revise"],
      goal: "Triage a reported bug and provide a reproducible diagnosis plan.",
      context: "App crashes intermittently when users open notifications from cold start.",
      mustInclude: "Likely root causes\nRepro steps\nLogs to inspect",
      mustAvoid: "Speculative blame\nUnverified fixes",
      referenceMaterial: "Crash report snippets can be added here.",
      successCriteria: "Clear next actions\nOwner suggestions",
      negativePrompt: "Do not claim certainty without evidence"
    },
    "Legal summary": {
      role: "Editor / proofreader",
      audience: "Executives",
      taskType: "Summarize",
      tone: "Formal",
      outputFormat: "Bullets",
      length: "medium",
      customWordLimit: "",
      modelProfile: "chatgpt",
      assumptionsPolicy: "ask_first",
      constraints: ["No invented facts", "Cite sources"],
      qualityChecks: ["Include a compliance checklist"],
      goal: "Summarize a legal document into executive-ready risk notes.",
      context: "Need a plain-English summary before leadership review.",
      mustInclude: "Top obligations\nDeadlines\nRisk level",
      mustAvoid: "Legal advice framing\nMissing caveats",
      referenceMaterial: "Paste contract language here.",
      successCriteria: "Readable in under 3 minutes\nActionable risks clearly ranked",
      negativePrompt: "Do not use definitive legal interpretation language"
    }
  };

  var roleEl = document.getElementById("role");
  var roleDefinitionEl = document.getElementById("roleDefinition");
  var audienceEl = document.getElementById("audience");
  var platformEl = document.getElementById("platform");
  var avoidWordsPresetEl = document.getElementById("avoidWordsPreset");
  var taskTypeEl = document.getElementById("taskType");
  var toneEl = document.getElementById("tone");
  var outputFormatEl = document.getElementById("outputFormat");
  var lengthEl = document.getElementById("length");
  var customWordLimitEl = document.getElementById("customWordLimit");
  var modelProfileEl = document.getElementById("modelProfile");

  var goalEl = document.getElementById("goal");
  var contextEl = document.getElementById("context");
  var mustIncludeEl = document.getElementById("mustInclude");
  var mustAvoidEl = document.getElementById("mustAvoid");
  var avoidWordsEl = document.getElementById("avoidWords");
  var referenceMaterialEl = document.getElementById("referenceMaterial");
  var successCriteriaEl = document.getElementById("successCriteria");
  var negativePromptEl = document.getElementById("negativePrompt");

  var assembledPromptEl = document.getElementById("assembledPrompt");
  var meterEl = document.getElementById("meter");

  var builtInPresetEl = document.getElementById("builtInPreset");
  var applyBuiltInPresetEl = document.getElementById("applyBuiltInPreset");
  var presetNameEl = document.getElementById("presetName");
  var savePresetEl = document.getElementById("savePreset");
  var savedPresetEl = document.getElementById("savedPreset");
  var loadPresetEl = document.getElementById("loadPreset");
  var deletePresetEl = document.getElementById("deletePreset");

  var copyLabeledEl = document.getElementById("copyLabeled");
  var copyUnlabeledEl = document.getElementById("copyUnlabeled");

  function makeOption(value, label) {
    var option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  }

  function fillSimpleSelect(selectEl, values, placeholder) {
    selectEl.innerHTML = "";
    selectEl.appendChild(makeOption("", placeholder || "Select"));
    values.forEach(function (value) {
      if (value) {
        selectEl.appendChild(makeOption(value, value));
      }
    });
  }

  function fillRoleSelect() {
    var rolesByDepartment = {};
    var roleNames = Object.keys(ROLE_DEFINITIONS);

    roleEl.innerHTML = "";
    roleEl.appendChild(makeOption("", "Select role"));

    roleNames.forEach(function (roleName) {
      var department = ROLE_DEPARTMENTS[roleName] || "Other";
      if (!rolesByDepartment[department]) {
        rolesByDepartment[department] = [];
      }
      rolesByDepartment[department].push(roleName);
    });

    Object.keys(rolesByDepartment)
      .sort(function (a, b) {
        var aPinnedIndex = PINNED_DEPARTMENTS.indexOf(a);
        var bPinnedIndex = PINNED_DEPARTMENTS.indexOf(b);
        if (aPinnedIndex !== -1 || bPinnedIndex !== -1) {
          if (aPinnedIndex === -1) {
            return 1;
          }
          if (bPinnedIndex === -1) {
            return -1;
          }
          return aPinnedIndex - bPinnedIndex;
        }
        return a.localeCompare(b, undefined, { sensitivity: "base" });
      })
      .forEach(function (department) {
        var group = document.createElement("optgroup");
        group.label = department;
        rolesByDepartment[department]
          .sort(function (a, b) {
            return a.localeCompare(b, undefined, { sensitivity: "base" });
          })
          .forEach(function (roleName) {
            group.appendChild(makeOption(roleName, roleName));
          });
        roleEl.appendChild(group);
      });
  }

  function fillAvoidWordsPresetSelect() {
    avoidWordsPresetEl.innerHTML = "";

    AVOID_WORD_PRESET_OPTIONS.forEach(function (groupDef) {
      var group = document.createElement("optgroup");
      group.label = groupDef.group;

      groupDef.items.forEach(function (item) {
        group.appendChild(makeOption(item.value, item.label));
      });

      avoidWordsPresetEl.appendChild(group);
    });
  }

  function uniqueWordList(items) {
    var seen = {};
    var unique = [];

    (items || []).forEach(function (item) {
      var value = String(item || "").trim();
      if (!value) {
        return;
      }
      var key = value.toLowerCase();
      if (!seen[key]) {
        seen[key] = true;
        unique.push(value);
      }
    });

    return unique;
  }

  function buildCompositeAvoidWordSets() {
    Object.keys(AVOID_WORD_COMPOSITE_KEYS).forEach(function (compositeKey) {
      var combined = [];
      AVOID_WORD_COMPOSITE_KEYS[compositeKey].forEach(function (sourceKey) {
        combined = combined.concat(AVOID_WORD_PRESET_WORDS[sourceKey] || []);
      });
      AVOID_WORD_PRESET_WORDS[compositeKey] = uniqueWordList(combined);
    });
  }

  function autoPresetForPlatform(platformValue) {
    return PLATFORM_AUTO_AVOID_PRESET[platformValue] || "";
  }

  function syncAvoidPresetWithPlatform() {
    var presetValue = autoPresetForPlatform(platformEl.value);
    if (!presetValue) {
      return;
    }
    avoidWordsPresetEl.value = presetValue;
    applyAvoidWordsPreset(presetValue);
  }

  function wordsForAvoidPreset(presetValue) {
    var key = presetValue || "none";

    if (key === "none") {
      return [];
    }

    if (key === "all") {
      var combined = [];
      Object.keys(AVOID_WORD_PRESET_WORDS).forEach(function (presetKey) {
        if (presetKey !== "none") {
          combined = combined.concat(AVOID_WORD_PRESET_WORDS[presetKey] || []);
        }
      });
      return uniqueWordList(combined).sort(function (a, b) {
        return a.localeCompare(b, undefined, { sensitivity: "base" });
      });
    }

    return uniqueWordList(AVOID_WORD_PRESET_WORDS[key] || []);
  }

  function applyAvoidWordsPreset(presetValue) {
    avoidWordsEl.value = wordsForAvoidPreset(presetValue).join("\n");
  }

  function roleDefinitionFor(role) {
    if (!role) {
      return "";
    }
    return ROLE_DEFINITIONS[role] || "";
  }

  function refreshRoleDefinition() {
    if (!roleDefinitionEl) {
      return;
    }

    var definition = roleDefinitionFor(roleEl.value);
    if (definition) {
      roleDefinitionEl.textContent = definition;
      return;
    }

    roleDefinitionEl.textContent = "Select a role to view its expert definition.";
  }

  function fillLengthSelect() {
    lengthEl.innerHTML = "";
    LENGTH_OPTIONS.forEach(function (item) {
      if (item.label) {
        lengthEl.appendChild(makeOption(item.value, item.label));
      }
    });
    lengthEl.value = "medium";
  }

  function fillModelSelect() {
    modelProfileEl.innerHTML = "";
    modelProfileEl.appendChild(makeOption("", "Select model profile"));
    Object.keys(MODEL_PROFILES).forEach(function (key) {
      if (key) {
        modelProfileEl.appendChild(makeOption(key, MODEL_PROFILES[key].label));
      }
    });
  }

  function fillBuiltInPresets() {
    builtInPresetEl.innerHTML = "";
    builtInPresetEl.appendChild(makeOption("", "Select built-in preset"));
    Object.keys(BUILT_IN_PRESETS)
      .sort()
      .forEach(function (name) {
        builtInPresetEl.appendChild(makeOption(name, name));
      });
  }

  function getAssumptionsPolicyValue() {
    var checked = document.querySelector("input[name='assumptionsPolicy']:checked");
    return checked ? checked.value : "ask_first";
  }

  function setAssumptionsPolicyValue(value) {
    var el = document.querySelector("input[name='assumptionsPolicy'][value='" + value + "']");
    if (el) {
      el.checked = true;
    }
  }

  function parseList(input) {
    return input
      .split(/\r?\n/)
      .map(function (line) {
        return line.trim();
      })
      .filter(function (line) {
        return line.length > 0;
      });
  }

  function parseAvoidCategories(input) {
    var lines = parseList(input || "");
    var categories = [];

    lines.forEach(function (line) {
      if (/^category\s*:/i.test(line)) {
        categories.push(line.replace(/^category\s*:/i, "").trim());
        return;
      }

      if (/^word\s*:/i.test(line)) {
        categories.push(line.replace(/^word\s*:/i, "").trim());
        return;
      }

      categories.push(line);
    });

    return uniqueWordList(categories);
  }

  function formatBullets(items) {
    return items
      .map(function (item) {
        return "- " + item;
      })
      .join("\n");
  }

  function getCheckedValues(selector, attrName) {
    var nodes = document.querySelectorAll(selector + ":checked");
    return Array.prototype.map.call(nodes, function (node) {
      return node.getAttribute(attrName) || "";
    }).filter(Boolean);
  }

  function setCheckedValues(selector, attrName, values) {
    var valueMap = {};
    (values || []).forEach(function (value) {
      valueMap[value] = true;
    });
    var nodes = document.querySelectorAll(selector);
    Array.prototype.forEach.call(nodes, function (node) {
      var val = node.getAttribute(attrName);
      node.checked = !!valueMap[val];
    });
  }

  function resolveLengthLabel(lengthValue, customWordLimit) {
    if (!lengthValue) {
      return "";
    }
    if (lengthValue === "short") {
      return "Short (<=150 words)";
    }
    if (lengthValue === "medium") {
      return "Medium";
    }
    if (lengthValue === "long") {
      return "Long";
    }
    if (lengthValue === "custom") {
      if (customWordLimit) {
        return String(customWordLimit).trim() + " words";
      }
      return "Custom word limit";
    }
    return lengthValue;
  }

  function assumptionsLabel(value) {
    if (value === "proceed_with_assumptions") {
      return "Proceed with assumptions and label them";
    }
    return "Ask clarifying questions before proceeding if needed";
  }

  function getState() {
    return {
      role: roleEl.value,
      audience: audienceEl.value,
      platform: platformEl.value,
      avoidWordsPreset: avoidWordsPresetEl.value,
      taskType: taskTypeEl.value,
      tone: toneEl.value,
      outputFormat: outputFormatEl.value,
      length: lengthEl.value,
      customWordLimit: customWordLimitEl.value.trim(),
      modelProfile: modelProfileEl.value,
      assumptionsPolicy: getAssumptionsPolicyValue(),
      constraints: getCheckedValues("input[data-constraint]", "data-constraint"),
      qualityChecks: getCheckedValues("input[data-quality]", "data-quality"),
      goal: goalEl.value.trim(),
      context: contextEl.value.trim(),
      mustInclude: mustIncludeEl.value,
      mustAvoid: mustAvoidEl.value,
      avoidWords: avoidWordsEl.value,
      referenceMaterial: referenceMaterialEl.value.trim(),
      successCriteria: successCriteriaEl.value,
      negativePrompt: negativePromptEl.value.trim()
    };
  }

  function applyState(state) {
    roleEl.value = state.role || "";
    audienceEl.value = state.audience || "";
    platformEl.value = state.platform || "No social platform";
    if (state.avoidWordsPreset && String(state.avoidWordsPreset).trim()) {
      avoidWordsPresetEl.value = state.avoidWordsPreset;
    } else {
      avoidWordsPresetEl.value = autoPresetForPlatform(platformEl.value) || "none";
    }
    taskTypeEl.value = state.taskType || "";
    toneEl.value = state.tone || "";
    outputFormatEl.value = state.outputFormat || "";
    lengthEl.value = state.length || "medium";
    customWordLimitEl.value = state.customWordLimit || "";
    modelProfileEl.value = state.modelProfile || "";

    setAssumptionsPolicyValue(state.assumptionsPolicy || "ask_first");
    setCheckedValues("input[data-constraint]", "data-constraint", state.constraints || []);
    setCheckedValues("input[data-quality]", "data-quality", state.qualityChecks || []);

    goalEl.value = state.goal || "";
    contextEl.value = state.context || "";
    mustIncludeEl.value = state.mustInclude || "";
    mustAvoidEl.value = state.mustAvoid || "";
    if (state.avoidWords && String(state.avoidWords).trim()) {
      avoidWordsEl.value = state.avoidWords;
    } else {
      applyAvoidWordsPreset(avoidWordsPresetEl.value);
    }
    referenceMaterialEl.value = state.referenceMaterial || "";
    successCriteriaEl.value = state.successCriteria || "";
    negativePromptEl.value = state.negativePrompt || "";

    refreshRoleDefinition();
    refreshCustomWordLimitVisibility();
    refreshOutput();
  }

  function buildRoleSection(state) {
    var lines = [];
    var definition = roleDefinitionFor(state.role);

    if (state.role) {
      lines.push(state.role);
    }

    if (definition) {
      lines.push("Expert definition: " + definition);
    }

    return lines.join("\n").trim();
  }

  function buildInputsSection(state) {
    var chunks = [];
    var mustInclude = parseList(state.mustInclude || "");
    var mustAvoid = parseList(state.mustAvoid || "");
    var successCriteria = parseList(state.successCriteria || "");

    if (mustInclude.length > 0) {
      chunks.push("Must include:\n" + formatBullets(mustInclude));
    }

    if (mustAvoid.length > 0) {
      chunks.push("Must avoid:\n" + formatBullets(mustAvoid));
    }

    if (state.referenceMaterial) {
      chunks.push("Reference material:\n" + state.referenceMaterial);
    }

    if (successCriteria.length > 0) {
      chunks.push("Success criteria:\n" + formatBullets(successCriteria.slice(0, 3)));
    }

    if (state.negativePrompt) {
      chunks.push("Negative prompt:\n" + state.negativePrompt);
    }

    return chunks.join("\n\n").trim();
  }

  function buildTaskSection(state) {
    var lines = [];
    var model = MODEL_PROFILES[state.modelProfile || ""] || null;

    if (state.taskType) {
      lines.push("Type: " + state.taskType);
    }

    if (state.platform) {
      lines.push("Platform: " + state.platform);
    }

    lines.push("Assumptions policy: " + assumptionsLabel(state.assumptionsPolicy));

    if (model && model.label) {
      lines.push("Model profile: " + model.label);
      if (model.verbosity || model.formatting) {
        lines.push(
          "Defaults: verbosity=" + (model.verbosity || "custom") + ", formatting strictness=" + (model.formatting || "custom")
        );
      }
    }

    return lines.join("\n").trim();
  }

  function buildConstraintsSection(state) {
    var chunks = [];
    var constraints = state.constraints || [];
    var avoidCategories = parseAvoidCategories(state.avoidWords || "");

    if (constraints.length) {
      chunks.push(formatBullets(constraints));
    }

    if (avoidCategories.length) {
      chunks.push("Avoid these content categories:\n" + formatBullets(avoidCategories));
    }

    return chunks.join("\n\n").trim();
  }

  function buildOutputFormatSection(state) {
    var lines = [];
    var lengthLabel = resolveLengthLabel(state.length, state.customWordLimit);

    if (state.outputFormat) {
      lines.push("Format: " + state.outputFormat);
    }
    if (state.tone) {
      lines.push("Tone: " + state.tone);
    }
    if (lengthLabel) {
      lines.push("Length: " + lengthLabel);
    }

    return lines.join("\n").trim();
  }

  function buildQualityChecksSection(state) {
    var checks = state.qualityChecks || [];
    if (!checks.length) {
      return "";
    }
    return formatBullets(checks);
  }

  function buildSections(state) {
    var ordered = [
      { label: "ROLE", value: buildRoleSection(state) },
      { label: "AUDIENCE", value: state.audience },
      { label: "GOAL", value: state.goal },
      { label: "CONTEXT", value: state.context },
      { label: "INPUTS", value: buildInputsSection(state) },
      { label: "TASK", value: buildTaskSection(state) },
      { label: "CONSTRAINTS", value: buildConstraintsSection(state) },
      { label: "OUTPUT FORMAT", value: buildOutputFormatSection(state) },
      { label: "QUALITY CHECKS", value: buildQualityChecksSection(state) }
    ];

    return ordered.filter(function (section) {
      return !!(section.value && String(section.value).trim());
    });
  }

  function buildPrompt(withLabels) {
    var sections = buildSections(getState());
    return sections
      .map(function (section) {
        if (withLabels) {
          return section.label + ":\n" + section.value;
        }
        return section.value;
      })
      .join("\n\n")
      .trim();
  }

  function estimateTokens(charCount) {
    if (charCount <= 0) {
      return 0;
    }
    return Math.ceil(charCount / 4);
  }

  function refreshCustomWordLimitVisibility() {
    if (lengthEl.value === "custom") {
      customWordLimitEl.style.display = "block";
      customWordLimitEl.disabled = false;
    } else {
      customWordLimitEl.style.display = "none";
      customWordLimitEl.disabled = true;
      customWordLimitEl.value = "";
    }
  }

  function refreshOutput() {
    var prompt = buildPrompt(true);
    assembledPromptEl.value = prompt;

    var chars = prompt.length;
    var words = prompt.trim() ? prompt.trim().split(/\s+/).length : 0;
    var tokens = estimateTokens(chars);
    meterEl.textContent = chars + " chars | " + words + " words | ~" + tokens + " tokens";
  }

  function showToast(message) {
    var template = document.getElementById("toastTemplate");
    if (!template) {
      return;
    }
    var toast = template.content.firstElementChild.cloneNode(true);
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(function () {
      toast.remove();
    }, 1800);
  }

  function copyText(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(function () {
          showToast(successMessage);
        })
        .catch(function () {
          fallbackCopy(text, successMessage);
        });
      return;
    }
    fallbackCopy(text, successMessage);
  }

  function fallbackCopy(text, successMessage) {
    var temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    showToast(successMessage);
  }

  function readSavedPresets() {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }

    try {
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
    } catch (err) {
      return {};
    }

    return {};
  }

  function writeSavedPresets(presets) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
  }

  function refreshSavedPresetDropdown() {
    var presets = readSavedPresets();
    var names = Object.keys(presets).sort();

    savedPresetEl.innerHTML = "";
    savedPresetEl.appendChild(makeOption("", "Select saved preset"));

    names.forEach(function (name) {
      savedPresetEl.appendChild(makeOption(name, name));
    });
  }

  function applyModelProfileDefaults(profileKey) {
    var profile = MODEL_PROFILES[profileKey || ""];
    if (!profile || !profile.defaults) {
      return;
    }

    if (profile.defaults.tone) {
      toneEl.value = profile.defaults.tone;
    }
    if (profile.defaults.outputFormat) {
      outputFormatEl.value = profile.defaults.outputFormat;
    }
    if (profile.defaults.length) {
      lengthEl.value = profile.defaults.length;
      refreshCustomWordLimitVisibility();
    }
  }

  function initControls() {
    fillRoleSelect();
    fillSimpleSelect(audienceEl, AUDIENCE_OPTIONS, "Select target audience");
    fillSimpleSelect(platformEl, PLATFORM_OPTIONS, "Select platform");
    fillAvoidWordsPresetSelect();
    fillSimpleSelect(taskTypeEl, TASK_TYPE_OPTIONS, "Select task type");
    fillSimpleSelect(toneEl, TONE_OPTIONS, "Select tone");
    fillSimpleSelect(outputFormatEl, OUTPUT_FORMAT_OPTIONS, "Select output format");

    fillLengthSelect();
    fillModelSelect();
    fillBuiltInPresets();
    refreshSavedPresetDropdown();

    modelProfileEl.value = "chatgpt";
    platformEl.value = "No social platform";
    syncAvoidPresetWithPlatform();
    applyModelProfileDefaults("chatgpt");
    refreshRoleDefinition();
    refreshCustomWordLimitVisibility();
  }

  function bindEvents() {
    var liveSelectors = "input, select, textarea";
    var allInputs = document.querySelectorAll(liveSelectors);

    Array.prototype.forEach.call(allInputs, function (node) {
      node.addEventListener("input", refreshOutput);
      node.addEventListener("change", refreshOutput);
    });

    lengthEl.addEventListener("change", function () {
      refreshCustomWordLimitVisibility();
      refreshOutput();
    });

    roleEl.addEventListener("change", function () {
      refreshRoleDefinition();
      refreshOutput();
    });

    modelProfileEl.addEventListener("change", function () {
      applyModelProfileDefaults(modelProfileEl.value);
      refreshOutput();
    });

    platformEl.addEventListener("change", function () {
      syncAvoidPresetWithPlatform();
      refreshOutput();
    });

    avoidWordsPresetEl.addEventListener("change", function () {
      applyAvoidWordsPreset(avoidWordsPresetEl.value);
      refreshOutput();
    });

    applyBuiltInPresetEl.addEventListener("click", function () {
      var key = builtInPresetEl.value;
      if (!key || !BUILT_IN_PRESETS[key]) {
        showToast("Select a built-in preset first");
        return;
      }
      applyState(BUILT_IN_PRESETS[key]);
      showToast("Built-in preset applied");
    });

    savePresetEl.addEventListener("click", function () {
      var name = presetNameEl.value.trim();
      if (!name) {
        showToast("Enter a preset name");
        return;
      }

      var presets = readSavedPresets();
      presets[name] = getState();
      writeSavedPresets(presets);
      refreshSavedPresetDropdown();
      savedPresetEl.value = name;
      showToast("Preset saved");
    });

    loadPresetEl.addEventListener("click", function () {
      var name = savedPresetEl.value;
      var presets = readSavedPresets();
      if (!name || !presets[name]) {
        showToast("Select a saved preset first");
        return;
      }
      applyState(presets[name]);
      showToast("Saved preset loaded");
    });

    deletePresetEl.addEventListener("click", function () {
      var name = savedPresetEl.value;
      var presets = readSavedPresets();
      if (!name || !presets[name]) {
        showToast("Select a saved preset first");
        return;
      }

      delete presets[name];
      writeSavedPresets(presets);
      refreshSavedPresetDropdown();
      showToast("Preset deleted");
    });

    copyLabeledEl.addEventListener("click", function () {
      var text = buildPrompt(true);
      copyText(text, "Copied with labels");
    });

    copyUnlabeledEl.addEventListener("click", function () {
      var text = buildPrompt(false);
      copyText(text, "Copied without labels");
    });
  }

  buildCompositeAvoidWordSets();
  initControls();
  bindEvents();
  refreshOutput();
})();
