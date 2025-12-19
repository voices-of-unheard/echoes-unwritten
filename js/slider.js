// THEME SWITCH (FIXED)
function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
  }
};

// SLIDER ARROWS
const track = document.querySelector(".slider-track");

function slideLeft() {
  track.scrollBy({ left: -300, behavior: "smooth" });
}

function slideRight() {
  track.scrollBy({ left: 300, behavior: "smooth" });
}

