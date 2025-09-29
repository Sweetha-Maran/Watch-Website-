const sideCart = document.getElementById("sideCart");
const cartItemsDiv = document.getElementById("cartItems");
const buyNowBtn = document.getElementById("buyNowBtn");
const buyFormContainer = document.getElementById("buyFormContainer");
let cart = {};

function toggleCart() {
  sideCart.classList.toggle("open");
}

function addToCart(brand, name) {
  const key = brand + " - " + name;
  if (!cart[key]) {
    cart[key] = { brand, name, quantity: 1 };
  } else {
    cart[key].quantity++;
  }
  updateCart();
  sideCart.classList.add("open");
}

function updateCart() {
  cartItemsDiv.innerHTML = "";
  Object.keys(cart).forEach(key => {
    const item = cart[key];
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <p><strong>${item.brand}</strong> - ${item.name}</p>
      <div class="quantity-controls">
        <button onclick="changeQty('${key}', -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQty('${key}', 1)">+</button>
      </div>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });
}

// Change quantity
function changeQty(key, change) {
  if (cart[key]) {
    cart[key].quantity += change;
    if (cart[key].quantity <= 0) delete cart[key];
    updateCart();
  }
}

// Buy now button click -> Show form
buyNowBtn.addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty!");
  } else {
    buyFormContainer.classList.add("show");
  }
});

// Close form
function closeForm() {
  buyFormContainer.classList.remove("show");
}

// Handle form submit
document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Order placed successfully!");
  closeForm();
  cart = {}; // clear cart after order
  updateCart();
  sideCart.classList.remove("open");
});




// 
// Collection.js byenow format
// Select all Buy Now buttons in the product collection
const buyNowButtons = document.querySelectorAll(".buy-now-btn");

// Add click event for each Buy Now button
buyNowButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get product details from button attributes (data-brand & data-name)
    const brand = button.getAttribute("data-brand");
    const name = button.getAttribute("data-name");

    // Add product to cart (from cart.js)
    addToCart(brand, name);

    // Directly show form (optional: skip cart)
    buyFormContainer.classList.add("show");
  });
});


