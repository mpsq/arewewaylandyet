const btn = document.getElementById("dark-mode")

function switchTheme() {
  const themes = { d: ["Light", "dark"], l: ["Dark", "light"] }
  const setTheme = (content, theme) => {
    document.getElementById("dark-mode").textContent = `${content} mode`
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }

  if (btn.textContent.indexOf("Dark") !== -1) {
    setTheme(...themes.d)
  } else {
    setTheme(...themes.l)
  }
}

btn.addEventListener("click", switchTheme)
