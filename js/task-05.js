const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", inputEditSpan);
function inputEditSpan(element) {
  spanEl.textContent = element.target.value || "Anonymous";
}
