const _theme = { dark: ["Light", "dark"], light: ["Dark", "light"] }

const set = (dark: boolean): void => {
  const [content, theme] = dark ? _theme.dark : _theme.light
  const btn = document.getElementById("dark-mode")

  if (btn != null) {
    btn.textContent = `${content} mode`
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }
}

export default {
  set,
}
