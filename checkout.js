const summary = document.getElementById("orderSummary");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  summary.innerHTML = "<p>Your cart is empty 😔</p>";
} else {
  let total = 0;
  summary.innerHTML = "<ul>";
  cart.forEach(item => {
    total += item.price * item.quantity;
    summary.innerHTML += `<li>${item.name} x ${item.quantity} = ₹${item.price * item.quantity}</li>`;
  });
  summary.innerHTML += `</ul><h3>Total: ₹${total}</h3>`;
}

document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate order placed
  alert("Order placed successfully! 🥳");
  localStorage.removeItem("cart");
  window.location.href = "thankyou.html";
});
