let allTotal = 0;

function addToCart(element) {
  let mainEl = element.closest(".single-item");
  let price = mainEl.querySelector(".price").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let quantity = mainEl.querySelector("input").value;
  let cartItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {
    price = price.substring(1);
    let total = parseInt(price) * Number(quantity);
    allTotal += total;
    cartItems.innerHTML += `<div class="cart-single-item"><h3>${name}</h3><p>$${price} x ${quantity} = $<span>${total}</span></p><button class="remove-item" onclick="removeFromCart(this)">Ukloni</button></div>`;

    document.querySelector(".total").innerText = `Total: $${allTotal}`;
    element.innerText = "Dodato";
    element.setAttribute("disabled", "true");
  } else {
    alert("Odaberite kolicinu.");
  }
}

function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  let price = mainEl.querySelector("p span").innerText;
  allTotal -= parseInt(price);
  document.querySelector(".total").innerText = `Total: $${allTotal}`;
  mainEl.remove();
}
