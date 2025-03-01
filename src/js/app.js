import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  div.className = "field-container";
  document.body.append(div);

  for (let i = 0; i < 16; i++) {
    const item = document.createElement("div");
    item.className = "field-item";
    div.append(item);
  }

  const fieldItems = Array.from(document.querySelectorAll(".field-item"));
  const img = document.createElement("img");
  img.src = image;

  function getItem() {
    let currentIndex = 0;
    let generateIndex = Math.floor(1 + Math.random() * fieldItems.length - 1);
    do {
      currentIndex = generateIndex;
      return fieldItems[currentIndex];
    } while (currentIndex != generateIndex);
  }

  function activateField() {
    const activeItem = getItem();
    activeItem.append(img);
  }
  setInterval(activateField, 1000);
});
