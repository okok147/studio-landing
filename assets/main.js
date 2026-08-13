const root = document.documentElement;
const toggle = document.querySelector("#theme-toggle");
const savedTheme = window.localStorage.getItem("kelvin-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  const dark = theme === "dark";
  root.dataset.theme = dark ? "dark" : "light";
  if (toggle) {
    toggle.textContent = dark ? "☀" : "◐";
    toggle.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
    toggle.setAttribute("title", dark ? "Use light theme" : "Use dark theme");
  }
}

applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  window.localStorage.setItem("kelvin-theme", nextTheme);
  applyTheme(nextTheme);
});
