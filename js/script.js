// Dark mode
const darkToggle = document.getElementById("dark-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

if (!prefersDarkScheme.matches) {
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}

darkToggle.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    sunIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("hidden");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

// Menu
var burgerMenu = document.getElementById('burger');
var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

burgerMenu.addEventListener('keydown', function(evt){
  if (evt.key === 'Enter') {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  };
});

burgerMenu.addEventListener('keydown', function(evt){
  if (evt.code === 'Space') {
    evt.preventDefault();
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  };
});