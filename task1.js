const body = document.querySelector(".body");
const input = document.querySelector(".slider__input");
input.addEventListener(
  "change",
  _.debounce(() => {
    const red = Math.random() * (250 - 1) + 1;
    const green = Math.random() * (250 - 1) + 1;
    const blue = Math.random() * (250 - 1) + 1;
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }, 3000)
);
