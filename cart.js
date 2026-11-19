const cartContainer = document.getElementById("cartContainer");
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
  if (cart.length === 0) {
    cartContainer.innerHTML = "<h2>Your cart is empty 🥲</h2>";
    return;
  }

  let total = 0;
  cartContainer.innerHTML = `
    <table border="1" cellpadding="10">
      <tr>
        <th>Product</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
      ${cart.map(item => {
        total += item.price * item.quantity;
        return `
          <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>₹${item.price * item.quantity}</td>
            <td><button onclick="removeItem(${item.id})">Remove</button></td>
          </tr>
        `;
      }).join('')}
      <tr>
        <td colspan="2"><strong>Total</strong></td>
        <td colspan="2"><strong>₹${total}</strong></td>
      </tr>
    </table>
  `;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

displayCart();
cartContainer.innerHTML += `
  <div style="margin-top: 20px; text-align: center;">
    <a href="checkout.html">
      <button style="padding: 10px 20px; background-color: #D81B60; color: white; border: none; border-radius: 10px;">
        Proceed to Checkout
      </button>
    </a>
  </div>
`;
