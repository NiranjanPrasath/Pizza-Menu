function calculateTotal(){

  let total = 0;
  let receiptText = "<h2>Order Summary</h2>";

  const sizes = document.getElementsByName("size");
  let sizeSelected = "";

  for(let i=0;i<sizes.length;i++){
    if(sizes[i].checked){
      total += parseInt(sizes[i].value);
      sizeSelected = sizes[i].parentElement.innerText;
    }
  }

  receiptText += "<p><strong>Size:</strong> " + sizeSelected + "</p>";

  const toppings = document.querySelectorAll("input[type='checkbox']:checked");

  let toppingList = [];

  toppings.forEach(t => {
    total += 1;
    toppingList.push(t.value);
  });

  receiptText += "<p><strong>Toppings:</strong> " + toppingList.join(", ") + "</p>";
  receiptText += "<h3>Total: $" + total + "</h3>";

  document.getElementById("receipt").innerHTML = receiptText;
}