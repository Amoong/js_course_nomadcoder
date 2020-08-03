const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.classList.add("bgImage");
  image.src = `./images/${imgNumber}.jpg`;
  body.prepend(image);
}

function genRandom() {
  return Math.ceil(Math.random() * IMG_NUMBER);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
