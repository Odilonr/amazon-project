export const cart = []

export function addToCart (productId, quantityValue) {
  if(cart.some(obj => obj.productId === productId)) {
    const product = cart.find((obj) => obj.productId === productId)
    product['quantity'] += Number(quantityValue.value)
  } else {
    cart.push({
      productId :productId,
      quantity: Number(quantityValue.value)
    })
  }
}