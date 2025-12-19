function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("site-theme", theme);
}

window.onload = () => {
  const saved = localStorage.getItem("site-theme") || "theme-dark";
  document.body.className = saved;
};
