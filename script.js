const front = "cardFront";
const back = "cardBack";
const cardC = "card";
const icoN = "icon";

start();
function start() {
  init(game.createcard());
}
function init(card) {
  let board = document.getElementById("board");
  board.innerHTML = "";
  game.card0.forEach((i) => {
    let create = document.createElement("div");
    create.id = i.id;
    create.classList.add(cardC);
    create.dataset.icon = i.icon;
    create.addEventListener("click", flip);
    createCont(i, create);
    board.appendChild(create);
  });
}

function createCont(i, create) {
  createFace(front, i, create);
  createFace(back, i, create);
}
function createFace(face, card, element) {
  let cardEle = document.createElement("div");
  cardEle.classList.add(face);
  if (face === front) {
    let iconEle = document.createElement("img");
    iconEle.classList.add(icoN);
    iconEle.src = "./images/" + card.icon + ".png";
    cardEle.appendChild(iconEle);
  } else {
    cardEle.innerHTML = "&lt/&gt";
  }
  element.appendChild(cardEle);
}

function flip() {
  if (game.setCard(this.id)) {
    this.classList.add("flip");
    if (game.second) {
      if (game.check()) {
        game.clear();
        if (game.over()) {
          let game = document.getElementById("gameOver");
          game.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          let firstC = document.getElementById(game.first.id);
          let secondC = document.getElementById(game.second.id);

          firstC.classList.remove("flip");
          secondC.classList.remove("flip");
          game.unflip();
        }, 700);
      }
    }
  }
}
function restart() {
  start();
  let game = document.getElementById("gameOver");
  game.style.display = "none";
}
