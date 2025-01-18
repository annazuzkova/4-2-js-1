const body = document.querySelector(".body");
const input = document.querySelector(".slider__input");
input.addEventListener(
  "scroll",
  _.debounce(() => {
    body.style.backgroundColor = "red";
  }, 3000)
);
