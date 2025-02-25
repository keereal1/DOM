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
