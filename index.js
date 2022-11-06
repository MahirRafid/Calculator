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
let temp = [];
let sign = [];
let ansFlag = 0;

function pushValue(val) {
  temp.push(val);
  flag = 1;
  if (ansFlag) {
    display.textContent = "";
    ansFlag = 0;
  }
  display.textContent += temp[temp.length - 1];
}

let ans = 0;

function updateLastValue(temp) {
  temp = +temp.join("");
  values.push(temp);
  // console.log(values);
}

function operate(sign) {
  let a = values[0];
  let b = values[1];
  if (sign == "+") ans = a + b;
  else if (sign == "-") ans = a - b;
  else if (sign == "*") ans = a * b;
  else ans = a / b;
  values.splice(0, 2);
  values.unshift(ans);
}

function updateSign(val) {
  temp = +temp.join("");
  values.push(temp);
  flag = 0;
  temp = [];
  sign.push(val);
  display.textContent += ` ${sign[sign.length - 1]} `;
}

function clearAll() {
  values = [];
  sign = [];
  ans = 0;
}

let flag = -1;

function deleteElement() {
  if (flag == -1) return;
  if (flag) temp.pop();
  sign.pop();
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
pointBtn.addEventListener("click", (e) => pushValue("."));
adBtn.addEventListener("click", (e) => updateSign("+"));
subBtn.addEventListener("click", (e) => updateSign("-"));
multiplyBtn.addEventListener("click", (e) => updateSign("*"));
divideBtn.addEventListener("click", (e) => updateSign("/"));
clearBtn.addEventListener("click", (e) => clearAll());
deleteBtn.addEventListener("click", (e) => deleteElement());

equalBtn.addEventListener("click", (e) => {
  updateLastValue(temp);
  temp = [];
  console.log(values);
  console.log(sign);
  let len = sign.length;
  for (let i = 0; i < len; i++) {
    console.log("before : " + values);
    operate(sign[i]);
    console.log("after : " + values);
  }

  display.textContent += ` = ${values[0]}`;
  ansFlag = 1;
  values = [];
  sign = [];
});

let copyRight = document.querySelector(".copyright");
let currentYear = new Date().getFullYear();
console.log(currentYear);
copyRight.innerHTML = `<p>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;Mahir Mosleh&nbsp;&nbsp;${currentYear}</p>`;
