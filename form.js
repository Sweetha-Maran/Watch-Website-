const buyNowBtn = document.getElementById("buyNowBtn");
const buyFormContainer = document.getElementById("buyFormContainer");
const checkoutForm = document.getElementById("checkoutForm");

// Show form when Buy Now clicked
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


checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Order placed successfully!");

  // Clear cart
  cart = {};
  updateCart();
  sideCart.classList.remove("open");
  
  // Close form
  closeForm();
});


window.closeForm = closeForm;
