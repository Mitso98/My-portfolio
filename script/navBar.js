function seprateDigit(str) {
  // return arr index 0 is the digit and index 1 is the string
  let regex = new RegExp("([0-9]+)|([a-zA-Z]+)", "g");
  let arr = str.match(regex);
  let number = Number(arr[0]);
  return [number, arr[1]];
}

// ol animation
// start left 50vw
// end left 0vw
function getUL(value = "") {
  const ul = [];
  let counter = 1;
  let ol = document.getElementById(`ol-${counter}`);

  // get all availabel OL
  while (ol) {
    ol.style.left = value;
    ul.push(ol);
    counter++;
    ol = document.getElementById(`ol-${counter}`);
  }

  return ul;
}
const ul = getUL();

let counter = 0;
function animateUL(counter) {
  let arr;
  if (ul[counter].style.left) {
    arr = seprateDigit(ul[counter].style.left);
  } else {
    arr = seprateDigit("50vw");
  }

  arr[0]--;

  if (counter < ul.length) ul[counter].style.left = `${arr[0]}vw`;
  else return;

  setTimeout(() => {
    if (arr[0] == 0) {
      counter++;
    }
    animateUL(counter);
  }, 1);
}

/*
  Right & Left divs animations
// left up: start top: 100vh => top: 0vh
// right down bottom 100 to 0
*/
function showNav({ show }) {
  let leftNum = seprateDigit(left.style.top)[0];
  let rightNum = seprateDigit(right.style.bottom)[0];

  if (show) {
    leftNum -= 5;
    rightNum -= 5;
  } else {
    leftNum += 5;
    rightNum += 5;
  }

  left.style.top = leftNum + "vh";
  right.style.bottom = rightNum + "vh";

  setTimeout(() => {
    // open nav
    if (leftNum <= 0 && show) {
      animateUL(counter);
      return;
    }
    // close nav
    else if (leftNum >= 100 && !show) {
      getNavDiv.style.display = "";
      return;
    }
    getUL((value = "50vw"));
    showNav({ show });
  }, 10);
}

bars.addEventListener("click", () => {
  if (getNavDiv.style.display === "") {
    left.style.top = "100vh";
    right.style.bottom = "100vh";
    body.style.overflow = "hidden";
    getNavDiv.style.display = "flex";

    try {
      formHolder.style.zIndex = 0;
    } catch {}

    showNav({ show: true });
  }
});

bars1.addEventListener("click", () => {
  body.style.overflowY = "scroll";
  body.style.overflowX = "hidden";
  showNav({ show: false });
});
