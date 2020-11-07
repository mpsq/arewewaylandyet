import themeUtils from "./theme-utils"

document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme")

  if (
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    (theme == null || theme === "dark")
  ) {
    themeUtils.set(true)
    return
  }

  if (theme != null) {
    themeUtils.set(/dark/gi.test(theme))
  }
})
