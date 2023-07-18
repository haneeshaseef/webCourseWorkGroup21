const button = document.getElementById("check-total");
const checkout = document.getElementById("checkout");

function updateQuantity(inputId, tdId) {
  const inputField = document.getElementById(inputId);
  const td = document.getElementById(tdId);
  const value = inputField.value;
  td.textContent = value;
}

function updatePrice(itemPrice,quantityId,quantityPriceId){
    const td =document.getElementById(quantityId)
    const totalPriceId=document.getElementById(quantityPriceId)
    const quantity=td.textContent
    const price = itemPrice*quantity
    totalPriceId.textContent=price;
}

function calcTotal(){
  const boot =document.getElementById("boot-total").textContent;
  const glove =document.getElementById("glove-total").textContent;
  const ball = document.getElementById("ball-total").textContent;
  const pad =document.getElementById("pad-total").textContent;
  const bip =document.getElementById("bip-total").textContent;
  const cone =document.getElementById("cone-total").textContent;
  const jersey =document.getElementById("jersey-total").textContent;
  const bottle =document.getElementById("bottle-total").textContent;
  const totalCost = parseInt(boot) + parseInt(glove) + parseFloat(ball) + parseInt(pad) + parseInt(bip) + parseFloat(cone) + parseInt(jersey) + parseInt(bottle);
  const setTotal= document.getElementById("total-cost");
  setTotal.textContent=totalCost+" $";
}


button.addEventListener("click", function() {
  updateQuantity("boot-input", "boot-quantity");
  updatePrice(99.99,"boot-quantity","boot-total")
  updateQuantity("glove-input","glove-quantity")
  updatePrice(49.99,"glove-quantity","glove-total")
  updateQuantity("ball-input","ball-quantity")
  updatePrice(50.99,"ball-quantity","ball-total")
  updateQuantity("pad-input","pad-quantity")
  updatePrice(19.99,"pad-quantity","pad-total")
  updateQuantity("bip-input","bip-quantity")
  updatePrice(20.99,"bip-quantity","bip-total")
  updateQuantity("cone-input","cone-quantity")
  updatePrice(10.99,"cone-quantity","cone-total")
  updateQuantity("jersey-input","jersey-quantity")
  updatePrice(60.99,"jersey-quantity","jersey-total")
  updateQuantity("bottle-input","bottle-quantity")
  updatePrice(15.99,"bottle-quantity","bottle-total")
  calcTotal();

});


checkout.addEventListener("click",()=>{
  window.location.href="Checkout.html";
});




