let oneBtn = document.querySelector(".one");
let twoBtn = document.querySelector(".two");
let threeBtn = document.querySelector(".three");
let fourBtn = document.querySelector(".four");
let fiveBtn = document.querySelector(".five");
let sixBtn = document.querySelector(".six");
let sevenBtn = document.querySelector(".seven");
let eightBtn = document.querySelector(".eight");
let nineBtn = document.querySelector(".nine");
let zeroBtn = document.querySelector(".zero");
let pointBtn = document.querySelector(".point");
let equalBtn = document.querySelector(".equal");
let adBtn = document.querySelector(".plus");
let subBtn = document.querySelector(".sub");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
let display = document.querySelector(".display");

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(func, a, b) {
  return func(a, b);
}

let values = [];
let sign = "";

function pushValue(val) {
  if (values.length == 2) values.shift();
  values.push(val);
}

let ans = 0;

function operate(sign, a, b) {
  if (sign == "+") ans = a + b;
  else if (sign == "-") ans = a - b;
  else if (sign == "*") ans = a * b;
  else ans = a / b;
  console.log(ans);
}

function updateSign(val) {
  sign = val;
}

oneBtn.addEventListener("click", (e) => pushValue(1));
twoBtn.addEventListener("click", (e) => pushValue(2));
threeBtn.addEventListener("click", (e) => pushValue(3));
fourBtn.addEventListener("click", (e) => pushValue(4));
fiveBtn.addEventListener("click", (e) => pushValue(5));
sixBtn.addEventListener("click", (e) => pushValue(6));
sevenBtn.addEventListener("click", (e) => pushValue(7));
eightBtn.addEventListener("click", (e) => pushValue(8));
nineBtn.addEventListener("click", (e) => pushValue(9));
zeroBtn.addEventListener("click", (e) => pushValue(0));

adBtn.addEventListener("click", (e) => updateSign("+"));
subBtn.addEventListener("click", (e) => updateSign("-"));
multiplyBtn.addEventListener("click", (e) => updateSign("*"));
divideBtn.addEventListener("click", (e) => updateSign("/"));

equalBtn.addEventListener("click", (e) => operate(sign, values[0], values[1]));
