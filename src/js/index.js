const btnMenu = document.querySelector("#btn-menu");
const nav = document.querySelector("#menu");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active-menu");
});

const carrosel = document.querySelector(".carrosel");
const cards = document.querySelectorAll(".card-depoiment");
const button = document.querySelectorAll(".arrow");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(cards.length - 1);

const gotoNext = () => (current < 4 ? gotoNum(current + 1) : gotoNum(0));

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("card-select");
    cards[i].classList.remove("card-left");
    cards[i].classList.remove("card-right");
  }

  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  cards[current].classList.add("card-select");
  cards[prev].classList.add("card-left");
  cards[next].classList.add("card-right");
};
