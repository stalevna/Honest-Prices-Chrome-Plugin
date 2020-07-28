 Array.from(document.querySelectorAll('.price span')).forEach((elem,index) => {
    elem.textContent.replace(/\D+/g,"")
    if (!(index % 2)) {
      let price = elem.textContent.replace(/\D+/g,"")
      elem.textContent = HonestPrices(price)
    }
  })



 function HonestPrices(price){
    return (10 - Number(price)%10 + Number(price))
  }

