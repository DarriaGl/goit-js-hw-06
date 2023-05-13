const inputFontEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputFontEl.addEventListener("input", () => {
  textEl.style.fontSize = inputFontEl.value + "px";
});
