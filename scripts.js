let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = '';
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function orderNow() {
  alert('Order placed for: ' + cart.join(', '));
  cart = [];
  updateCart();
}

function talkToChef() {
  const input = document.getElementById('chefInput').value.toLowerCase();
  const response = document.getElementById('chefResponse');
  if (input.includes('spicy')) {
    response.textContent = "Try our Chicken Fry with extra chili!";
  } else if (input.includes('light')) {
    response.textContent = "Fried Rice is a great light option.";
  } else {
    response.textContent = "Burger is always a good choice!";
  }
}