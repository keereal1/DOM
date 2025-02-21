const fieldItems = Array.from(document.querySelectorAll(".field-item"));

function activateField() {
  const activeIndex = Math.floor(1 + Math.random() * 15);
  fieldItems[activeIndex].classList.add("field-item-active");
}

function deactivateField() {
  fieldItems.forEach((item) => {
    if (item.classList.contains("field-item-active")) {
      item.classList.remove("field-item-active");
    }
  });
}

setInterval(() => {
  deactivateField();
  activateField();
}, 1000);
