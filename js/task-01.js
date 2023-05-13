const listItemsEl = document.querySelector("#categories");
const itemsOfList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${itemsOfList.length}`);
itemsOfList.forEach((item) => {
  const nameOfList = item.querySelector("h2").textContent;
  const elementsOfList = item.querySelectorAll("li").length;
  console.log(`Category: ${nameOfList}\nElements: ${elementsOfList}`);
});
