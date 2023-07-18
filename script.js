let display = [];

const buttons = document.querySelectorAll('.button');


// buttons
const zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
  display.push("0");
  console.log(display);
});

const one = document.querySelector("#one");
one.addEventListener('click', () => {
  display.push("1");
  console.log(display);
});

const two = document.querySelector("#two");
two.addEventListener('click', () => {
  display.push("2");
  console.log(display);
});

const three = document.querySelector("#three");
three.addEventListener('click', () => {
  display.push("3");
  console.log(display);
});

const four = document.querySelector("#four");
four.addEventListener('click', () => {
 display.push("4");
  console.log(display);
});

const five = document.querySelector("#five");
five.addEventListener('click', () => {
  display.push("5");
  console.log(display);
});

const six = document.querySelector("#six");
six.addEventListener('click', () => {
  display.push("6");
  console.log(display);
});

const seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
  display.push("7");
  console.log(display);
});

const eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
  display.push("8");
  console.log(display);
});

const nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
  display.push("9");
  console.log(display);
});

// non-numerical buttons 
const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
  display = [];
  console.log(display);
});

const point = document.querySelector("#point");
point.addEventListener('click', () => {
  display.push(".");
  console.log(display);
});

const equals = document.querySelector("#equality");
equals.addEventListener('click', () => {
  display.push("=");
  console.log(display);
});

const minus = document.querySelector("#minus");
minus.addEventListener('click', () => {
  display.push("-");
  console.log(display);
});

const plus = document.querySelector("#plus");
plus.addEventListener('click', () => {
  display.push("+");
  console.log(display);
});

const divideBy = document.querySelector("#divideBy");
divideBy.addEventListener('click', () => {
  display.push("/");
  console.log(display);
});

const multiplyBy = document.querySelector("#multiplyBy");
multiplyBy.addEventListener('click', () => {
  display.push("*");
  console.log(display);
});

const bracketLeft = document.querySelector("#bracketLeft");
bracketLeft.addEventListener('click', () => {
  display.push("(");
  console.log(display);
});

const bracketRight = document.querySelector("#bracketRight");
bracketRight.addEventListener('click', () => {
  display.push(")");
  console.log(display);
});



