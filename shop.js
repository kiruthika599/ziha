// 🛍️ Product List with Subcategories
const products = [
  
  {
    id: 1,
    name: "Mac Lipstick ",
    price: 420,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co1.jpg"
  },
  {
    id: 2,
    name: "Mamaearth Combo Kit",
    price: 249,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "mae.jpg"
  },
  {
    id: 3,
    name: "N'5 CHANEL",
    price: 4999,
    category: "Beauty & Personal Care",
    subcategory: "fragrance",
    img: "p3.jpg"
  },
  {
    id: 4,
    name: "Makeup kit",
    price: 199,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "ma.jpg"
  },
  {
    id: 5,
    name: "Nailpaint",
    price: 299,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co10.jpg"
  },
  {
    id: 6,
    name: "Mac CTM Combo",
    price: 899,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be6.jpg"
  },
  {
    id: 7,
    name: "Tom Ford",
    price: 9290,
    category: "Beauty & Personal Care",
    subcategory: "fragrance",
    img: "p1.jpg"
  },
  {
    id: 8,
    name: "Children's Story Book",
    price: 150,
    category: "Books",
    subcategory: "kids",
    img: "bo.jpg"
  },
  {
    id: 9,
    name: "Lip scrub",
    price: 199,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be4.jpg"
  },
  {
    id: 10,
    name: "Foundation",
    price: 740,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co8.jpg"
  },
  {
    id: 11,
    name: "HudaBeauty orangestick ",
    price: 540,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co2.jpg"
  },
  {
    id: 12,
    name: "Mositurizer",
    price: 299,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be1.jpg"
  },
  {
    id: 13,
    name: "Kajal",
    price: 160,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co5.jpg"
  },
  {
    id: 14,
    name: "Toner",
    price: 399,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be3.jpg"
  },
  {
    id: 15,
    name: "Facial kit",
    price: 389,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be7.jpg"
  },
  {
    id: 16,
    name: "Rose Perfume Spray",
    price: 399,
    category: "Beauty & Personal Care",
    subcategory: "fragrance",
    img: "p6.jpg"
  },
  {
    id: 17,
    name: "luxury skin serum",
    price: 1280,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be8.jpg"
  },
  {
    id: 18,
    name: "sheet Mask",
    price: 340,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be10.jpg"
  },
  {
    id: 19,
    name: "Matte Red Lipstick",
    price: 299,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "lip.jpg"
  },
  {
    id: 20,
    name: "Himalaya facepack",
    price: 180,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be9.jpg"
  },
  {
    id: 21,
    name: "Gel liner",
    price: 149,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co4.jpg"
  },
  {
    id: 22,
    name: "Body Mist",
    price: 390,
    category: "Beauty & Personal Care",
    subcategory: "fragrance",
    img: "p4.jpg"
  },
  {
    id: 23,
    name: "Lipbalm",
    price: 99,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be5.jpg"
  },
  {
    id: 24,
    name: "BLEU de CHANEL",
    price: 15290,
    category: "Beauty & Personal Care",
    subcategory: "fragrance",
    img: "p2.jpg"
  },
  {
    id: 25,
    name: "Stickliner",
    price: 199,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co6.jpg"
  },
  {
    id: 26,
    name: "Colorful paellet",
    price: 499,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co7.jpg"
  },
  {
    id: 27,
    name: "COMBO COCO BLAST",
    price: 9290,
    category: "Beauty & Personal Care",
    subcategory: "fragrance",
    img: "p5.jpg"
  },
  {
    id: 28,
    name: "Liqued lipstick",
    price: 399,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co3.jpg"
  },
  {
    id: 29,
    name: "Cleanser",
    price: 280,
    category: "Beauty & Personal Care",
    subcategory: "Skin&haircare",
    img: "be2.jpg"
  },
  {
    id: 30,
    name: "Countour",
    price: 299,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "co9.jpg"
  },
  {
    id: 31,
    name: "Mars Foundation",
    price: 499,
    category: "Beauty & Personal Care",
    subcategory: "cosmetics",
    img: "f.jpg"
  },
  
  {
    id: 32,
    name: "Bridal set",
    price: 2499,
    category: "fashion",
    subcategory: "accessories",
    img: "a3.jpg"
  },
  {
    id: 33,
    name: "women's footware",
    price: 899,
    category: "fashion",
    subcategory: "Footware",
    img: "s2.jpg"
  },
  {
    id: 34,
    name: "Gaming Gadget",
    price: 50000,
    category: "Electronics",
    subcategory: "Gadgets",
    img: "m11.jpg"
  },
  {
    id: 35,
    name: "shirt",
    price: 899,
    category: "fashion",
    subcategory: "Dresses",
    img: "sh.jpg"
  },
  {
    id: 36,
    name: "footware",
    price: 899,
    category: "fashion",
    subcategory: "Footware",
    img: "s4.jpg"
  },
  {
    id: 37,
    name: "Combo set",
    price: 999,
    category: "fashion",
    subcategory: "accessories",
    img: "a2.jpg"
  },
  {
    id: 38,
    name: "Ankelet",
    price: 499,
    category: "fashion",
    subcategory: "accessories",
    img: "a11.jpg"
  },
  {
    id: 39,
    name: "Powerbank",
    price: 899,
    category: "Electronics",
    subcategory: "Gadgets",
    img: "m14.jpg"
  },
  {
    id: 40,
    name: "kids suit boys",
    price: 2999,
    category: "fashion",
    subcategory: "Dresses",
    img: "d15.jpg"
  },
  {
    id: 41,
    name: "watch",
    price: 559,
    category: "fashion",
    subcategory: "accessories",
    img: "whatch1.jpg"
  },
  {
    id: 42,
    name: "girls kid outfit",
    price: 1439,
    category: "fashion",
    subcategory: "Dresses",
    img: "d11.jpg"
  },
  {
    id: 43,
    name: "Apple MOblie",
    price: 200000,
    category: "Electroincs",
    subcategory: "Mobiles",
    img: "m4.jpg"
  },
  {
    id: 44,
    name: "women footware",
    price: 5000,
    category: "fashion",
    subcategory: "Footware",
    img: "s1.jpg"
  },
  {
    id: 45,
    name: "sneakers",
    price: 899,
    category: "fashion",
    subcategory: "Footware",
    img: "s6.jpg"
  },
  {
    id: 46,
    name: "Ring",
    price: 899,
    category: "fashion",
    subcategory: "accessories",
    img: "a12.jpg"
  },
  {
    id: 47,
    name: "Neck Chain",
    price: 299,
    category: "fashion",
    subcategory: "accessories",
    img: "a7.jpg"
  },
  {
    id: 48,
    name: "Asus vivobook",
    price: 80000,
    category: "Electronics",
    subcategory: "Laptops",
    img: "m7.jpg"
  },
  {
    id: 49,
    name: "Earring",
    price: 299,
    category: "fashion",
    subcategory: "accessories",
    img: "a1.jpg"
  },
  {
    id: 50,
    name: "Aplle Phone",
    price: 299999,
    category: "Electronics",
    subcategory: "Mobiles",
    img: "m1.jpg"
  },
  {
    id: 51,
    name: "Saree",
    price: 999,
    category: "fashion",
    subcategory: "Dresses",
    img: "d2.jpg"
  },
  {
    id: 52,
    name: "Moblie Phone",
    price: 58000,
    category: "Electronics",
    subcategory: "Mobiles",
    img: "m3.jpg"
  },
  {
    id: 53,
    name: "holiday outfit",
    price: 355,
    category: "fashion",
    subcategory: "Dresses",
    img: "d6.jpg"
  },
  {
    id: 54,
    name: "kids chudi",
    price: 879,
    category: "fashion",
    subcategory: "Dresses",
    img: "d12.jpg"
  },
  {
    id: 55,
    name: "oppa notebook",
    price: 90000,
    category: "Electronics",
    subcategory: "Laptops",
    img: "m8.jpg"
  },
  {
    id: 56,
    name: "Men's outfit",
    price: 879,
    category: "fashion",
    subcategory: "Dresses",
    img: "d9.jpg"
  },
  {
    id: 57,
    name: "Silk Saree",
    price: 719,
    category: "fashion",
    subcategory: "Dresses",
    img: "d1.jpg"
  },
  {
    id: 58,
    name: "Nose pin",
    price: 299,
    category: "fashion",
    subcategory: "accessories",
    img: "a13.jpg"
  },
  {
    id: 59,
    name: "Slipper",
    price: 749,
    category: "fashion",
    subcategory: "Footware",
    img: "s3.jpg"
  },
  {
    id: 60,
    name: "watch",
    price: 559,
    category: "fashion",
    subcategory: "accessories",
    img: "whatch1.jpg"
  },
  {
    id: 61,
    name: "Samsung moblie",
    price: 99999,
    category: "Electronics",
    subcategory: "Mobiles",
    img: "m5.jpg"
  },
  {
    id: 62,
    name: "headphone",
    price: 5559,
    category: "Electronics",
    subcategory: "Gadgets",
    img: "m15.jpg"
  },
  {
    id: 63,
    name: "Lenovo",
    price: 96000,
    category: "Electronics",
    subcategory: "Laptops",
    img: "m10.jpg"
  },
  {
    id: 64,
    name: "Charger",
    price: 559,
    category: "Electronics",
    subcategory: "Gadgets",
    img: "m13.jpg"
  },
  {
    id: 65,
    name: "Bracelet",
    price: 499,
    category: "fashion",
    subcategory: "accessories",
    img: "a8.jpg"
  },
  {
    id: 66,
    name: "BangelSet",
    price: 533,
    category: "fashion",
    subcategory: "accessories",
    img: "a5.jpg"
  },
  {
    id: 67,
    name: "Earring",
    price: 367,
    category: "fashion",
    subcategory: "accessories",
    img: "a9.jpg"
  },
  {
    id: 68,
    name: "kids shirt(boys)",
    price: 420,
    category: "fashion",
    subcategory: "Dresses",
    img: "d13.jpg"
  },
  {
    id: 69,
    name: "men's formal",
    price: 735,
    category: "fashion",
    subcategory: "Dresses",
    img: "d7.jpg"
  },
  {
    id: 70,
    name: "jumukha",
    price: 499,
    category: "fashion",
    subcategory: "accessories",
    img: "a4.jpg"
  },
  {
    id: 71,
    name: "Samsung Phone",
    price: 89000,
    category: "Electronics",
    subcategory: "Mobiles",
    img: "m2.jpg"
  },
  {
    id: 72,
    name: "Laptop",
    price: 75000,
    category: "Electronics",
    subcategory: "Laptops",
    img: "m6.jpg"
  },
  {
    id: 73,
    name: "Laptop",
    price: 89000,
    category: "Electronics",
    subcategory: "Laptops",
    img: "m9.jpg"
  },
  {
    id: 74,
    name: "kids outfit",
    price: 1299,
    category: "fashion",
    subcategory: "Dresses",
    img: "d10.jpg"
  },
  {
    id: 75,
    name: "women fashion",
    price: 599,
    category: "fashion",
    subcategory: "Dresses",
    img: "d.jpg"
  },
  {
    id: 76,
    name: "Crop-top",
    price: 499,
    category: "fashion",
    subcategory: "Dresses",
    img: "d3.jpg"
  },
  {
    id: 77,
    name: "jumukha",
    price: 355,
    category: "fashion",
    subcategory: "accessories",
    img: "a10.jpg"
  },
  {
    id: 78,
    name: "Wedding set",
    price: 2999,
    category: "fashion",
    subcategory: "accessories",
    img: "a6.jpg"
  },
  {
    id: 79,
    name: "men's baggie",
    price: 530,
    category: "fashion",
    subcategory: "Dresses",
    img: "d8.jpg"
  },
  {
    id: 80,
    name: "boys holiday outfit kids",
    price: 499,
    category: "fashion",
    subcategory: "Dresses",
    img: "d14.jpg"
  },
  {
    id: 81,
    name: "jumukha",
    price: 559,
    category: "fashion",
    subcategory: "accessories",
    img: "ju.jpg"
  },
  {
    id: 82,
    name: "Earbuds",
    price: 1999,
    category: "Electronics",
    subcategory: "Gadgets",
    img: "m12.jpg"
  },
  {
    id: 83,
    name: "women top",
    price: 699,
    category: "fashion",
    subcategory: "Dresses",
    img: "d4.jpg"
  },
  {
    id: 84,
    name: "Silk Saree",
    price: 719,
    category: "fashion",
    subcategory: "Dresses",
    img: "d1.jpg"
  }


  
];



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


function filterProducts(subcategory) {
  if (subcategory === 'all') {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.subcategory === subcategory);
    displayProducts(filtered);
  }
}



function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}


function toggleSub(id) {
  const section = document.getElementById(id);
  if (section) {
    section.style.display = (section.style.display === "block") ? "none" : "block";
  }
}


displayProducts();
