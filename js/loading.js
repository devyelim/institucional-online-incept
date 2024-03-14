const log = console.log.bind(console);

const pixelsUsed = 160; // same as css

const body = qs("body");
const scene = qs(".scene");
const figure = qs(".figure");
const pixels = qsa(".figure > *");

// bottom up
for (let i = 0; i < pixelsUsed/4; i++) {
  let size = getSize(i * 2);
  setElement({ el:pixels[i], size });
}
for (let i = pixelsUsed/4; i < pixelsUsed/2; i++) {
  let j = i - pixelsUsed/4;
  let size;
  if (j > pixelsUsed/4 - 10) {
    size = getSize(24);
  } else {
    size = getSize(2 + (pixelsUsed - i * 2));
  }
  setElement({ el:pixels[i], size });
}
for (let i = pixelsUsed/2; i < pixelsUsed; i++) {
  let j = i - pixelsUsed/2;
  let size = getSize(Math.sqrt(pixelsUsed/2-j)*2.5);
  //let size = getSize(0 + (100 - j) / 4);
  setElement({ el:pixels[i], size });
}

scene.addEventListener("touchstart", onToggle);
scene.addEventListener("click", onToggle);
body.addEventListener("click", () => body.classList.toggle("is-toggled"));

function getSize(size) {
  let rsize = Math.round(size);
  const offset = `${Math.round((pixelsUsed - size) / 2)}px`;
  return {
    width: `${rsize}px`,
    height: `${rsize}px`,
    left: offset,
    top: offset
  };
}

function setElement({ el, size }) {
  el.style.width = size.width;
  el.style.height = size.height;
  el.style.top = size.top;
  el.style.left = size.left;
}

function onToggle(event) {
  event.stopPropagation();
  event.preventDefault();
  figure.classList.toggle("is-toggled");
  return false;
}

function qs(expr, context) {
  return (context || document).querySelector(expr);
}
function qsa(expr, context) {
  return [].slice.call((context || document).querySelectorAll(expr), 0);
}
function byId(id) {
  return document.getElementById(id);
}

