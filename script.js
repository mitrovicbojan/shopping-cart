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
    cartItems.innerHTML += `<div class="cart-single-item"><h3>${name}</h3><p>$${price} x ${quantity} = $${total}</p><button>Ukloni</button></div>`;

    document.querySelector(".total").innerText = `Total: ${allTotal}`;
    element.innerText = "Dodato";
    element.setAttribute("disabled", "true");
  } else {
    alert("Odaberite kolicinu.");
  }
}
