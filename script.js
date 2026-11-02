// Lab 4: Interactive Logic
let drink = "Latte";
let size = "Medium";
let milk = "Regular milk";
let total = 0;

function updateOrder() {
  if (drink === "Latte") total = 4.50;
  else if (drink === "Cappuccino") total = 4.00;
  else if (drink === "Espresso") total = 3.00;
  else total = 4.25;

  if (size === "Small") total -= 0.50;
  else if (size === "Large") total += 0.75;

  if (milk !== "Regular milk") total += 0.75;

  document.getElementById("order-description").textContent = size + " " + drink + " · " + milk;
  document.getElementById("total").textContent = "$" + total.toFixed(2);
  document.getElementById("confirmation").hidden = true;
}

// Handle both drink and size buttons.
function setupButtons(type, selectedClass) {
  let buttons = document.querySelectorAll("[data-" + type + "]");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (type === "drink") drink = button.dataset.drink;
      else size = button.dataset.size;

      buttons.forEach(function (item) {
        item.classList.remove(selectedClass);
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add(selectedClass);
      button.setAttribute("aria-pressed", "true");
      updateOrder();
    });
  });
}

setupButtons("drink", "selected");
setupButtons("size", "active");

document.getElementById("milk").addEventListener("change", function () {
  milk = this.value;
  updateOrder();
});

document.getElementById("place-order").addEventListener("click", function () {
  let message = document.getElementById("confirmation");
  message.textContent = "✓ Order placed! Your " + size.toLowerCase() + " " + drink.toLowerCase() + " with " + milk.toLowerCase() + " is being prepared. Total: $" + total.toFixed(2) + ".";
  message.hidden = false;
});

updateOrder();
