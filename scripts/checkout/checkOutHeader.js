import { updateTotalQuantity } from "../../data/cart.js";


export function renderCheckoutHeader () {


  const checkoutHeaderHTML = `
    Checkout (<a class="return-to-home-link"
            href="amazon.html">${updateTotalQuantity()} items</a>)
  `

  document.querySelector('.js-checkout-header').innerHTML = checkoutHeaderHTML
}