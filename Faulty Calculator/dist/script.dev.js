"use strict";

var display = document.getElementById("display");
var one = document.getElementById("one").addEventListener("click", function () {
  display.value += 1;
});
var two = document.getElementById("two").addEventListener("click", function () {
  display.value += 2;
});
var three = document.getElementById("three").addEventListener("click", function () {
  display.value += 3;
});
var four = document.getElementById("four").addEventListener("click", function () {
  display.value += 4;
});
var five = document.getElementById("five").addEventListener("click", function () {
  display.value += 5;
});
var six = document.getElementById("six").addEventListener("click", function () {
  display.value += 6;
});
var seven = document.getElementById("seven").addEventListener("click", function () {
  display.value += 7;
});
var eight = document.getElementById("eight").addEventListener("click", function () {
  display.value += 8;
});
var nine = document.getElementById("nine").addEventListener("click", function () {
  display.value += 9;
});
var zero = document.getElementById("zero").addEventListener("click", function () {
  display.value += 0;
});
var dot = document.getElementById("dot").addEventListener("click", function () {
  display.value += ".";
});
var Ac = document.getElementById("Ac").addEventListener("click", function () {
  display.value = "";
});
var plus = document.getElementById("plus").addEventListener("click", function () {
  display.value += " " + "+" + " ";
});
var minus = document.getElementById("minus").addEventListener("click", function () {
  display.value += " " + "-" + " ";
});
var multi = document.getElementById("multi").addEventListener("click", function () {
  display.value += " " + "*" + " ";
});
var divide = document.getElementById("divide").addEventListener("click", function () {
  display.value += " " + "/" + " ";
});
var mod = document.getElementById("mod").addEventListener("click", function () {
  display.value += " " + "%" + " ";
});
var root = document.getElementById("root").addEventListener("click", function () {
  display.value += " " + "/^" + " ";
});
var answer = document.getElementById("answer").addEventListener("click", Answer);
var n;

function randomnumber() {
  n = Math.random();
}

function swapOperators(expression) {
  return expression.replace(/[+\-*\/%^]/g, function (match) {
    var swap = {
      "+": "-",
      "-": "+",
      "*": "/",
      "/": "*",
      "%": "/%",
      "^": "/^"
    };
    return swap[match] || match;
  });
}

function Answer() {
  if (n < 0.5) {
    display.value = eval(swapOperators(display.value));
  } else {
    var result = eval(display.value);

    if (isFinite(result)) {
      display.value = result;
    } else {
      display.value = "Error"; // Handle division by zero or other errors
    }
  }
} // Call randomnumber to initialize n


randomnumber();