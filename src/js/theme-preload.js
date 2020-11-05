document.addEventListener("DOMContentLoaded", function (event) {
  const themes = { d: ["Light", "dark"], l: ["Dark", "light"] }
  const setTheme = (content, theme) => {
    document.getElementById("dark-mode").textContent = `${content} mode`
    document.documentElement.setAttribute("data-theme", theme)
  }
  const theme = localStorage.getItem("theme")

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    (!theme || theme === "dark")
  ) {
    setTheme(...themes.d)
    return
  }

  if (theme === "dark") {
    setTheme(...themes.d)
  } else {
    setTheme(...themes.l)
  }
})
