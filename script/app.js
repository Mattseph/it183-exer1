function displaySum() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);
  
  let total = firstNum + secondNum;
  let sum = document.getElementById("sum");
  document.getElementById("res1").style.display = "block";
  sum.innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}`;
}

function displayProduct() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);

  let total = firstNum * secondNum;
  let product = document.getElementById("product");
  document.getElementById("res2").style.display = "block";
  product.innerHTML = ` ${firstNum} x ${secondNum}, equals to ${total}`;
}
