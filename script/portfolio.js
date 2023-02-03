const liArr = document.querySelectorAll("li");
const cards = document.querySelectorAll(".card");

// console.log(cards[0].classList[1]); => c

/*
  add event listner to each li
  then check li ID and dispay cards accordingly
*/
for (let i = 0; i < liArr.length; i++) {
  liArr[i].addEventListener("click", () => {
    if (liArr[i].id === "all") {
      for (let j = 0; j < cards.length; j++) {
        cards[j].style.width = "20%";
        cards[j].style.display = "flex";
      }
    } else {
      for (let j = 0; j < cards.length; j++) {
        if (liArr[i].id === cards[j].classList[1]) {
          cards[j].style.width = "300px";
          cards[j].style.display = "flex";
        } else {
          cards[j].style.display = "none";
        }
      }
    }
  });
}
