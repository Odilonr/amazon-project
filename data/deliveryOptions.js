import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"

export function getDeliveryOption (deliveryOptionId) {
  const deliveryOption = deliveryOptions.find(
        option => option.id == deliveryOptionId)
  return deliveryOption || deliveryOptions[0]
}

export function calculateDeliveryDate (deliveryOption) {
  let deliveryDate = dayjs().add(2,'days')
  let timer = deliveryOption.deliveryDays
  

  while(timer > 0) {
    let dayofWeek = deliveryDate.format('dddd')

    if (!isWeekend(dayofWeek)) {
      timer --
    }

    if (timer > 0) {
      deliveryDate = deliveryDate.add(1,'days')
    }
  } 

  const finalDayWeek = deliveryDate.day()

  if(finalDayWeek === 6) {
    deliveryDate = deliveryDate.add(2, 'days')
  } else if (finalDayWeek === 0) {
    deliveryDate = deliveryDate.add(1, 'days')
  }


  return deliveryDate.format('dddd, MMMM D')

 
}

export function isWeekend (day) {
  return day === 'Saturday' || day === 'Sunday'
}


export const deliveryOptions = [{
  id:'1',
  deliveryDays: 7,
  priceCents: 0
},{
  id:'2',
  deliveryDays: 3,
  priceCents: 499
},{
  id:'3', 
  deliveryDays:1,
  priceCents: 999
}
]
