
export let cart = JSON.parse(localStorage.getItem('cart'))

if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1, 
    deliveryOptionId: '2'
  }]
}


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart (productId, quantityValue) {
  if(cart.some(obj => obj.productId === productId)) {
    const product = cart.find((obj) => obj.productId === productId)
    product['quantity'] += Number(quantityValue.value)
    
  } else {
    cart.push({
      productId :productId,
      quantity: Number(quantityValue.value),
      deliveryOptionId: '1 '
    })
    
  }

  saveToStorage()
}

export function removeFromCart (productId) {
  cart.forEach((cartItem, index) => {
    if (cartItem.productId === productId) {
      cart.splice(index, 1)
      return
    }
  })

  

  saveToStorage()
}


export function updateFromCart (productId, newQuantity) {
  
  const product = cart.find((obj) => obj.productId === productId)
  //product['quantity'] = Number(newQuantity.value)

  for (let item of cart) {
    if (item.productId == productId) {
      item['quantity'] = Number(newQuantity.value)
    }
  }

  saveToStorage()
}


export function updateDeliveryOptionFromCart (productId, deliveryOptionId) {
  const item = cart.find(obj => obj.productId === productId)
  item['deliveryOptionId'] = deliveryOptionId
  /*cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.deliveryOptionId = deliveryOptionId
    }
  })*/

  saveToStorage()
}