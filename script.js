let display = [];
let screenValue = "";
let screenNew = "";

const screen = document.querySelector("#screen");
/*
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('onmousedown', () => {
    button.style.backgroundColor = "yellow";

});
*/

// buttons
const zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
  displayScreenValue("0"); 
  display.push("0");
  console.log(display);
});

const one = document.querySelector("#one");
one.addEventListener('click', () => {
  displayScreenValue("1"); 
  display.push("1");
  console.log(display);
});

const two = document.querySelector("#two");
two.addEventListener('click', () => {
  displayScreenValue("2"); 
  display.push("2");
  console.log(display);
});

const three = document.querySelector("#three");
three.addEventListener('click', () => {
  displayScreenValue("3"); 
  display.push("3");
  console.log(display);
});

const four = document.querySelector("#four");
four.addEventListener('click', () => {
  displayScreenValue("4"); 
  display.push("4");
  console.log(display);
});

const five = document.querySelector("#five");
five.addEventListener('click', () => {
  displayScreenValue("5"); 
  display.push("5");
  console.log(display);
});

const six = document.querySelector("#six");
six.addEventListener('click', () => {
  displayScreenValue("6"); 
  display.push("6");
  console.log(display);
});

const seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
  displayScreenValue("7"); 
  display.push("7");
  console.log(display);
});

const eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
  displayScreenValue("8"); 
  display.push("8");
  console.log(display);
});

const nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
  displayScreenValue("9"); 
  display.push("9");
  console.log(display);
});

// non-numerical buttons 
const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
  screen.textContent = "";
  display = [];
  console.log(display);
});

const point = document.querySelector("#point");
point.addEventListener('click', () => {
  displayScreenValue("0"); 
  display.push(".");
  console.log(display);
});

const equals = document.querySelector("#equality");
equals.addEventListener('click', () => {
  screen.textContent = calculate(display);
  screenValue = "";
  console.log(display);
});

const minus = document.querySelector("#minus");
minus.addEventListener('click', () => {
  screen.textContent = "-"; 
  screenValue = "";
  display.push("-");
  console.log(display);
});

const plus = document.querySelector("#plus");
plus.addEventListener('click', () => {
  screen.textContent = "+"; 
  screenValue = "";
  display.push("+");
  console.log(display);
});

const divideBy = document.querySelector("#divideBy");
divideBy.addEventListener('click', () => {
  screen.textContent = "÷";
  screenValue = "";
  display.push("/");
  console.log(display);
});

const multiplyBy = document.querySelector("#multiplyBy");
multiplyBy.addEventListener('click', () => {
  screen.textContent = "x"; 
  screenValue = "";
  display.push("*");
  console.log(display);
});

const bracketLeft = document.querySelector("#bracketLeft");
bracketLeft.addEventListener('click', () => {
  displayScreenValue("("); 
  display.push("(");
  console.log(display);
});

const bracketRight = document.querySelector("#bracketRight");
bracketRight.addEventListener('click', () => {
  displayScreenValue(")");
  display.push(")");
  console.log(display);
});


// the screen 
function displayScreenValue(screenNew) {
  screenValue = screenValue.concat(screenNew);
  screen.textContent = screenValue;
}

// the actual calculator
function calculate(display) {
  let displayStr = display.join('');
  console.log(typeof(displayStr));
  let displayComponents = displayStr.slice(/[\*|-|+|\/]/);
  try {
    eval(displayStr);
  } catch(err) {
    window.alert("Please enter a valid mathematical expression");
  } finally {
    return eval(displayStr);
  }
}
