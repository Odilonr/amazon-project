import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', () => {
  it('adds existing product in the cart', () => {
    spyOn(localStorage, 'setItem')

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: '4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }])
    })
    
    loadFromStorage()

    addToCart('4b85-b27f-e1d07eb678c6','1')
    expect(cart.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(cart[0].productId).toEqual('4b85-b27f-e1d07eb678c6')
    expect(cart[0].quantity).toEqual(3)
  })

  it('adds new product to the cart', () => {
    spyOn(localStorage, 'setItem')

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([])
    })
    
    loadFromStorage()
    

    addToCart('4b85-b27f-e1d07eb678c6','2')
    expect(cart.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(cart[0].productId).toEqual('4b85-b27f-e1d07eb678c6')
    expect(cart[0].quantity).toEqual(2)
  })
})