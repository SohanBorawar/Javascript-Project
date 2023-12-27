let display = document.getElementById("display");

let one = document.getElementById("one").addEventListener("click", () => {
  display.value += 1;
});
let two = document.getElementById("two").addEventListener("click", () => {
  display.value += 2;
});
let three = document.getElementById("three").addEventListener("click", () => {
  display.value += 3;
});
let four = document.getElementById("four").addEventListener("click", () => {
  display.value += 4;
});
let five = document.getElementById("five").addEventListener("click", () => {
  display.value += 5;
});
let six = document.getElementById("six").addEventListener("click", () => {
  display.value += 6;
});
let seven = document.getElementById("seven").addEventListener("click", () => {
  display.value += 7;
});
let eight = document.getElementById("eight").addEventListener("click", () => {
  display.value += 8;
});
let nine = document.getElementById("nine").addEventListener("click", () => {
  display.value += 9;
});
let zero = document.getElementById("zero").addEventListener("click", () => {
  display.value += 0;
});
let dot = document.getElementById("dot").addEventListener("click", () => {
  display.value += ".";
});
let Ac = document.getElementById("Ac").addEventListener("click", () => {
  display.value = "";
});
let plus = document.getElementById("plus").addEventListener("click", () => {
  display.value += " " + "+" + " ";
});
let minus = document.getElementById("minus").addEventListener("click", () => {
  display.value += " " + "-" + " ";
});
let multi = document.getElementById("multi").addEventListener("click", () => {
  display.value += " " + "*" + " ";
});
let divide = document.getElementById("divide").addEventListener("click", () => {
  display.value += " " + "/" + " ";
});
let mod = document.getElementById("mod").addEventListener("click", () => {
  display.value += " " + "%" + " ";
});
let root = document.getElementById("root").addEventListener("click", () => {
  display.value += " " + "/^" + " ";
});
let answer = document
  .getElementById("answer")
  .addEventListener("click", Answer);

let n;

function randomnumber() {
  n = Math.random();
}

function swapOperators(expression) {
  return expression.replace(/[+\-*\/%^]/g, (match) => {
    const swap = {
      "+": "-",
      "-": "+",
      "*": "/",
      "/": "*",
      "%": "/%",
      "^": "/^",
    };
    return swap[match] || match;
  });
}

function Answer() {
  if (n < 0.5) {
    display.value = eval(swapOperators(display.value));
  } else {
    const result = eval(display.value);
    if (isFinite(result)) {
      display.value = result;
    } else {
      display.value = "Error"; // Handle division by zero or other errors
    }
  }
}

// Call randomnumber to initialize n
randomnumber();
