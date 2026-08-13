const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const languageToggle = document.querySelector("#language-toggle");

const translations = {
  en: {
    description:
      "Kelvin Lau builds inspectable ML systems, reproducible LLM experiments, and focused products including Project Crucible and Asympta.",
    skip: "Skip to content",
    "nav.projects": "Projects",
    "nav.research": "Research",
    "nav.contact": "Contact",
    availability: "Building in public · Hong Kong",
    "hero.line": "I build small, inspectable ML systems.",
    "hero.copy":
      "Obsessed with credit assignment, model behavior, and turning unclear questions into reproducible experiments.",
    "hero.current":
      'Currently running <a href="#projects">Project Crucible</a> with Qwen3-0.6B—and building <a href="#asympta">Asympta</a> for iPad.',
    "links.email": "Email",
    "links.systems": "Systems portfolio",
    "signals.model": "Primary model",
    "signals.induction": "Induction signal",
    "signals.patch": "Patch recovery",
    "projects.selected": "Selected work",
    "projects.intro":
      "Products and experiments selected for inspectable evidence—not decorative breadth.",
    "actions.progress": "In progress",
    "actions.live": "Live",
    "actions.source": "Source",
    "projects.all": "View all public work on GitHub",
    "project.crucible.type": "Independent ML research",
    "project.crucible.description":
      "A daily research system for turning unclear LLM questions into controlled experiments, quantitative measurements, failure analysis, and reproducible records.",
    "project.crucible.parameters": "596M parameters",
    "project.crucible.active": "Active",
    "project.crucible.detail": "Research environment first; public repository next.",
    "project.asympta.type": "iPad product",
    "project.asympta.description":
      "A living handwriting canvas built around spatial memory: infinite navigation, Apple Pencil input, automatic persistence, and gesture-driven page creation.",
    "project.asympta.prototype": "On-device prototype",
    "project.asympta.detail": "Private product build · public case study in preparation.",
    "project.codex.type": "Systems & UI portfolio",
    "project.codex.description":
      "An interactive evidence portfolio showing how fragmented messages become traceable decisions, accountable actions, and recoverable workflows.",
    "project.codex.detail": "Live public build",
    "research.notes": "Working notes",
    "research.intro":
      "Current questions, stated before the answer is known. Results are separated from interpretation.",
    "note.1.title": "Delayed credit assignment",
    "note.1.summary":
      "How can a model identify the earlier action that caused a reward arriving many steps later?",
    "note.1.status": "Environment running · LLM integration next",
    "note.2.title": "Eligibility traces as fading evidence",
    "note.2.summary":
      "A decaying record keeps recent causal candidates alive long enough for delayed surprise to update them.",
    "note.2.status": "Concept → controlled test",
    "note.3.title": "Local-model causal tracing",
    "note.3.summary":
      "Clean/corrupt comparisons and activation patching separate correlated attention patterns from causally useful components.",
    "note.3.status": "Head-level results measured",
    "note.4.title": "Efficient long-context inference",
    "note.4.summary":
      "KV-cache arithmetic reveals when local attention turns a seemingly large context into a practical local-memory workload.",
    "note.4.status": "Analysis notebook",
    "method.kicker": "Operating system",
    "method.title": "One loop. Every day.",
    "method.question": "Question",
    "method.hypothesis": "Hypothesis",
    "method.experiment": "Experiment",
    "method.measurement": "Measurement",
    "method.explanation": "Explanation",
    "method.record": "Record",
    "method.rule":
      "If another person cannot inspect, rerun, or challenge the result, it is not finished.",
    "contact.title": "Let’s build evidence.",
    "contact.copy":
      "Interested in Research Engineer, ML/LLM Engineer, RL, Evals, and experimental product roles.",
    footer: "Build · Measure · Explain · Repeat",
  },
  zh: {
    description:
      "Kelvin Lau 建立可檢驗的 ML 系統、可重現 LLM 實驗，以及 Project Crucible 與 Asympta 等聚焦產品。",
    skip: "跳至主要內容",
    "nav.projects": "專案",
    "nav.research": "研究",
    "nav.contact": "聯絡",
    availability: "公開建設中 · 香港",
    "hero.line": "我建立小型、可檢驗的 ML 系統。",
    "hero.copy":
      "專注於 credit assignment [信用分配]、模型行為，以及把未明確問題轉化為可重現實驗。",
    "hero.current":
      '目前正在進行 <a href="#projects">Project Crucible</a>（Qwen3-0.6B），並為 iPad 開發 <a href="#asympta">Asympta</a>。',
    "links.email": "電郵",
    "links.systems": "系統作品集",
    "signals.model": "主要模型",
    "signals.induction": "Induction [歸納] 訊號",
    "signals.patch": "Patching [修補] 恢復",
    "projects.selected": "精選作品",
    "projects.intro": "只保留能提供可檢驗證據的產品與實驗，而非裝飾性的數量。",
    "actions.progress": "進行中",
    "actions.live": "線上",
    "actions.source": "原始碼",
    "projects.all": "在 GitHub 查看全部公開作品",
    "project.crucible.type": "獨立 ML 研究",
    "project.crucible.description":
      "每日研究系統：把未明確的 LLM 問題轉化為受控實驗、量化測量、失敗分析與可重現紀錄。",
    "project.crucible.parameters": "596M 參數",
    "project.crucible.active": "進行中",
    "project.crucible.detail": "先完成研究環境；下一步公開儲存庫。",
    "project.asympta.type": "iPad 產品",
    "project.asympta.description":
      "以空間記憶為核心的手寫畫布：無限導航、Apple Pencil 輸入、自動保存，以及手勢建立頁面。",
    "project.asympta.prototype": "裝置端原型",
    "project.asympta.detail": "私人產品版本 · 公開案例研究準備中。",
    "project.codex.type": "系統與 UI 作品集",
    "project.codex.description":
      "互動式證據作品集：展示如何把零散訊息轉化為可追蹤決策、可問責行動與可復原流程。",
    "project.codex.detail": "公開版本已上線",
    "research.notes": "研究筆記",
    "research.intro": "在知道答案之前先寫下問題；結果與詮釋分開記錄。",
    "note.1.title": "Delayed credit assignment [延遲信用分配]",
    "note.1.summary":
      "模型如何找出：多步之後才到達的 reward [獎勵]，是由哪個較早行動造成？",
    "note.1.status": "環境運行中 · 下一步整合 LLM",
    "note.2.title": "Eligibility trace [資格跡] 作為衰減證據",
    "note.2.summary":
      "衰減紀錄讓近期因果候選保留足夠時間，使延遲出現的 surprise [意外訊號] 能回頭更新它們。",
    "note.2.status": "概念 → 受控測試",
    "note.3.title": "Causal tracing [因果追蹤]：本地模型",
    "note.3.summary":
      "Clean/corrupt comparison [乾淨／干擾比較] 與 activation patching [激活修補]，把相關注意力模式與真正有因果作用的組件分開。",
    "note.3.status": "已量測 attention head [注意力頭] 結果",
    "note.4.title": "Long-context inference [長上下文推理] 效率",
    "note.4.summary":
      "KV cache [鍵值快取] 計算顯示：local attention [局部注意力] 何時能把看似龐大的上下文，轉化為實際可行的記憶體負載。",
    "note.4.status": "分析筆記",
    "method.kicker": "研究系統",
    "method.title": "每天，完成一個循環。",
    "method.question": "Question [問題]",
    "method.hypothesis": "Hypothesis [假說]",
    "method.experiment": "Experiment [實驗]",
    "method.measurement": "Measurement [測量]",
    "method.explanation": "Explanation [解釋]",
    "method.record": "Record [紀錄]",
    "method.rule": "若別人無法檢驗、重跑或挑戰結果，它就尚未完成。",
    "contact.title": "一起建立證據。",
    "contact.copy":
      "尋找 Research Engineer [研究工程師]、ML/LLM Engineer [機器學習／大型語言模型工程師]、RL [強化學習]、Evals [評估] 與實驗型產品職位。",
    footer: "建立 · 測量 · 解釋 · 重複",
  },
};

const savedTheme = window.localStorage.getItem("kelvin-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedLanguage = window.localStorage.getItem("kelvin-lang");
const preferredLanguage = window.navigator.language.toLowerCase().startsWith("zh")
  ? "zh"
  : "en";

function applyTheme(theme) {
  const dark = theme === "dark";
  const language = root.dataset.lang === "zh" ? "zh" : "en";
  root.dataset.theme = dark ? "dark" : "light";
  if (themeToggle) {
    const label = dark
      ? language === "zh" ? "使用淺色模式" : "Use light theme"
      : language === "zh" ? "使用深色模式" : "Use dark theme";
    themeToggle.textContent = dark ? "☀" : "◐";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }
}

function applyLanguage(language) {
  const nextLanguage = language === "zh" ? "zh" : "en";
  const copy = translations[nextLanguage];
  root.dataset.lang = nextLanguage;
  root.lang = nextLanguage === "zh" ? "zh-Hant" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });

  document.querySelector("nav")?.setAttribute(
    "aria-label",
    nextLanguage === "zh" ? "主要導覽" : "Primary navigation",
  );
  document.querySelector(".social-links")?.setAttribute(
    "aria-label",
    nextLanguage === "zh" ? "個人連結" : "Profile links",
  );
  document.querySelector(".signal-row")?.setAttribute(
    "aria-label",
    nextLanguage === "zh" ? "目前研究訊號" : "Current research signals",
  );
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    copy.description,
  );

  if (languageToggle) {
    const label = nextLanguage === "en" ? "切換至繁體中文" : "Switch to English";
    languageToggle.textContent = nextLanguage === "en" ? "繁中" : "EN";
    languageToggle.setAttribute("aria-label", label);
    languageToggle.setAttribute("title", label);
  }

  applyTheme(root.dataset.theme || (prefersDark ? "dark" : "light"));
}

applyTheme(savedTheme || (prefersDark ? "dark" : "light"));
applyLanguage(savedLanguage === "en" || savedLanguage === "zh" ? savedLanguage : preferredLanguage);

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  window.localStorage.setItem("kelvin-theme", nextTheme);
  applyTheme(nextTheme);
});

languageToggle?.addEventListener("click", () => {
  const nextLanguage = root.dataset.lang === "zh" ? "en" : "zh";
  window.localStorage.setItem("kelvin-lang", nextLanguage);
  applyLanguage(nextLanguage);
});
