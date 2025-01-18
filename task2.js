const box = document.querySelector("#box");
box.addEventListener(
  "mousemove",
  _.debounce(() => {
    box.style.width = "100px";
  }, 1000)
);
