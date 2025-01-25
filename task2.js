const box = document.querySelector("#box");
let width = 100;
box.addEventListener(
  "mousemove",
  _.debounce(() => {
    box.style.width = `${width}px`;
    width += 100;
  }, 1000)
);
