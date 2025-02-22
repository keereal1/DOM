// const fieldItems = Array.from(document.querySelectorAll(".field-item"));

// function activateField() {
//   const activeIndex = Math.floor(1 + Math.random() * 15);
//   fieldItems[activeIndex].classList.add("field-item-active");
// }

// function deactivateField() {
//   fieldItems.forEach((item) => {
//     if (item.classList.contains("field-item-active")) {
//       item.classList.remove("field-item-active");
//     }
//   });
// }

// setInterval(() => {
//   deactivateField();
//   activateField();
// }, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const fieldItems = Array.from(document.querySelectorAll(".field-item"));
  const img = document.createElement("img");
  img.src = "img/goblin.png";

  function getItem() {
    const startIndex = Math.floor(1 + Math.random() * fieldItems.length - 1);
    return fieldItems[startIndex];
  }

  function activateField() {
    const startItem = getItem();
    startItem.append(img);
  }
  setInterval(activateField, 1000);
});
