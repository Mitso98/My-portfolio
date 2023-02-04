/*
    --orange-icons: #ff5c26; // orange
    --orange-icons: rgb(255, 92, 38);
    --orange-opacity: rgba(255, 92, 38, 0.6);
    --black-opacity: rgba(0, 0, 0, 0.7);
    --text-color: #fff
*/

// set day attributes
localStorage.setItem("--black-opacity-day", "white");
localStorage.setItem("--text-color-day", "black");
localStorage.setItem("bg-day", "white");

// set night attributes
localStorage.setItem("--black-opacity-dark", "rgba(0, 0, 0, 0.7)");
localStorage.setItem("--text-color-dark", "#fff");
localStorage.setItem("bg-dark", "./images/canvas-bg.jpg");
console.log("items were set");

const obj = {
  day: {
    blackOpacity: localStorage.getItem("--black-opacity-day"),
    textColor: localStorage.getItem("--text-color-day"),
    bg: localStorage.getItem("bg-day"),
  },
  night: {
    blackOpacity: localStorage.getItem("--black-opacity-night"),
    textColor: localStorage.getItem("--black-opacity-night"),
    bg: localStorage.getItem("--black-opacity-night"),
  },
};

// set mode
function toggleMode() {
  if (localStorage.getItem("mode") === "day") {
    bg.style.background = obj.day.bg;
    document.documentElement.style.setProperty(
      "--text-color",
      obj.day.textColor
    );
    document.documentElement.style.setProperty(
      "--black-opacity",
      obj.day.blackOpacity
    );
    if (solar) {
      solar.style.display = "block";
    }
    light.style.display = "none";
    moon.style.display = "block";
  } else {
    bg.style.background = obj.night.bg;
    document.documentElement.style.setProperty(
      "--text-color",
      obj.night.textColor
    );
    document.documentElement.style.setProperty(
      "--black-opacity",
      obj.night.blackOpacity
    );
    if (solar) {
      solar.style.display = "none";
    }
    body.style.overflowX = "hidden";
    light.style.display = "block";
    moon.style.display = "none";
  }
}

toggleMode();

light.addEventListener("click", () => {
  // day mode
  light.style.display = "none";
  moon.style.display = "block";
  if (solar) {
    solar.style.display = "block";
  }
  localStorage.setItem("mode", "day");
  toggleMode();
});

moon.addEventListener("click", () => {
  // dark mode
  light.style.display = "block";
  moon.style.display = "none";
  if (solar) {
    solar.style.display = "none";
  }
  body.style.overflowX = "hidden";
  localStorage.setItem("mode", "night");
  toggleMode();
});
