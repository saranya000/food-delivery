let cart = [];
let total = 0;
function addToCart(item, price) {
 cart.push({ item, price });
 total += price;
 updateCart();
}
function updateCart() {

 const cartList = document.getElementById("cart-list");
 const totalEl = document.getElementById("total");
 cartList.innerHTML = "";
 cart.forEach((entry) => {
 const li = document.createElement("li");
 li.textContent = `${entry.item} - ₹${entry.price}`;
 cartList.appendChild(li);
 });
 totalEl.textContent = total;
}
function placeOrder() {
 if (cart.length === 0) {
 alert("Your cart is empty.");
 return;
 }
 alert("✅Your order has been placed successfully!");
 cart = [];
 total = 0;
 updateCart();
}

