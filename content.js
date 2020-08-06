
 function HonestPrices(price){
    return (10 - Number(price)%10 + Number(price))
  }


  Array.from(document.getElementsByClassName('price'))
.map((element, index) => {
  element.innerText.replace(/\s|\D/g, '')
  if (!(index % 2)) {
      let price = element.textContent.replace(/\D+/g,"")
      element.textContent = HonestPrices(price)
    }
})