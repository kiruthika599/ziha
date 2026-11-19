// Dummy products
const products = [
  {
    id: 1,
    name: "Matte Red Lipstick",
    price: 299,
    category: "lipstick",
    img: "lip.jpg"
  },
  {
    id: 2,
    name: "Waterproof Eyeliner",
    price: 199,
    category: "eyeliner",
    img: "ma.jpg"
  },
  {
    id: 3,
    name: "Silky Foundation",
    price: 499,
    category: "foundation",
    img: "rr.jpg"
  },
  {
    id: 4,
    name: "Glossy Pink Lipstick",
    price: 249,
    category: "lipstick",
    img: "mae.jpg"
  }
];

// Display products in the shop
function displayProducts(filteredProducts = products) {
  const list = document.getElementById('productList');
  list.innerHTML = '';

  filteredProducts.forEach(product => {
    list.innerHTML += `
      <div class="product">
        <img src="${product.img}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Filter by category
function filterProducts(category) {
  if (category === 'all') {
    displayProducts(products);
  } else {
    const filtered = products.filter(item => item.category === category);
    displayProducts(filtered);
  }
}

// Add to cart (basic alert for now)
function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  // Get cart from localStorage or initialize empty array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if product already exists in cart
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  // Save back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}


// Load all products on page load
displayProducts();
