const buttonEl = document.querySelector("button.change-color");
const colorEl = document.querySelector("span.color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
