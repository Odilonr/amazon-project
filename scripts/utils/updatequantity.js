export function updateTotalQuantity (cart) {
  let totalQuantity = 0

  cart.forEach( (product) => {
    totalQuantity += product.quantity
  })

  return totalQuantity
}