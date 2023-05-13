const inputEl = document.querySelector("input");
inputEl.addEventListener("blur", () => {
    const inputValueLength = inputEl.value.length;
    const requiredLength = Number(inputEl.getAttribute('data-length'));
  
    if (inputValueLength === requiredLength) {
      inputEl.classList.add('valid');
      inputEl.classList.remove('invalid');
    } else {
      inputEl.classList.add('invalid');
      inputEl.classList.remove('valid');
    }
  });
