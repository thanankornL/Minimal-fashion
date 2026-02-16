let cart = [];

function addToCart(name, price) {
  const found = cart.find(item => item.name === name);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
}

function increase(index) {
  cart[index].qty++;
  renderCart();
}

function decrease(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
  }
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-items");
  const totalText = document.getElementById("total");

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} — ${item.price} บาท
      <br>
      จำนวน: 
      <button onclick="decrease(${index})">-</button>
      ${item.qty}
      <button onclick="increase(${index})">+</button>
      <button onclick="removeItem(${index})">ลบ</button>
    `;
    list.appendChild(li);
  });

  totalText.textContent = "รวม: " + total + " บาท";
}
