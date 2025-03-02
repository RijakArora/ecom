function addToCart(name, price) {
  const item = cart.find(product => product.name === name);
  if (item) {
    // If item already in cart, increase its quantity
    item.quantity++;
  } else {
    // If not, add as new item
    cart.push({ name: name, price: price, quantity: 1 });
  }
  updateCart();
}
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = "";  // clear current list
    let total = 0;
    cart.forEach(product => {
      // Create list item for each product
      const li = document.createElement('li');
      li.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
      // Remove button for each item
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.onclick = () => removeFromCart(product.name);
      li.appendChild(removeBtn);
      cartList.appendChild(li);
      total += product.price * product.quantity;
    });
    cartTotal.textContent = total;
  }
  