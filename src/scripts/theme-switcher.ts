import themeUtils from "./theme-utils"

const btn = document.getElementById("dark-mode")

function switchTheme(): void {
  if (btn != null) {
    themeUtils.set(/dark/gi.test(btn.textContent ?? ""))
  }
}

if (btn != null) {
  btn.addEventListener("click", switchTheme)
}
