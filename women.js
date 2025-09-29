 let cart = {};

    function addToCart(name, price, image) {
      if (cart[name]) {
        cart[name].qty++;
      } else {
        cart[name] = { price, qty: 1, image };
      }
      renderCart();
      document.getElementById('cartOverlay').style.display = 'flex';
      document.getElementById('productSection').classList.add('blur');
    }

    function changeQty(name, delta) {
      cart[name].qty += delta;
      if (cart[name].qty <= 0) {
        delete cart[name];
      }
      renderCart();
    }

    function removeItem(name) {
      delete cart[name];
      renderCart();
    }

    function closeCart() {
      document.getElementById('cartOverlay').style.display = 'none';
      document.getElementById('productSection').classList.remove('blur');
    }

    function renderCart() {
      const container = document.getElementById('cartItemsContainer');
      container.innerHTML = '';
      for (let name in cart) {
        const item = cart[name];
        container.innerHTML += `
          <div class="cart-item">
            <img src="${item.image}" alt="${name}">
            <div class="cart-item-details">
              <div class="cart-item-title">${name}</div>
              <div class="cart-item-price">Rs. ${item.price.toFixed(2)}</div>
              <div class="qty-control">
                <button onclick="changeQty('${name}', -1)">−</button>
                <input type="text" value="${item.qty}" readonly>
                <button onclick="changeQty('${name}', 1)">+</button>
              </div>
            </div>
            <div class="item-total">Rs. ${(item.price * item.qty).toFixed(2)}</div>
            <div class="remove-btn" onclick="removeItem('${name}')">&times;</div>
          </div>
        `;
      }
    }