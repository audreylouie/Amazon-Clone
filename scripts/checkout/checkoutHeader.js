import { cart } from "../../data/cart-class.js";

export function renderCheckoutHeader(){
  let cartQuantity = 0;

  cart.cartItems.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const headerHTML = `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="index.html">
          <img class="amazon-logo" src="images/amazon-logo.png">
          <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
        </a>
      </div>

      <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link js-checkout-quantity"
          href="amazon.html"></a>)
      </div>

      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png">
      </div>
    </div>
  `;
  
  document.querySelector('.js-checkout-header').innerHTML = headerHTML;
  
}

export function updateCartQuantity(){
  const cartQuantity = cart.calculateCartQuantity();
  document.querySelector('.js-checkout-quantity').innerHTML = `${cartQuantity} items`;
}

