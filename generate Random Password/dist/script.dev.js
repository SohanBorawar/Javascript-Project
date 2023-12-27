"use strict";

var lengthinput = document.getElementById("lengthinput");
var lengthvalue = document.getElementById("length");
var generatebtn = document.getElementById("generate");
var Passwordinput = document.getElementById("Password");
lengthvalue.innerHTML = "<p>value: 8</p>";
lengthinput.addEventListener("input", function () {
  lengthvalue.innerHTML = "<p>value: ".concat(lengthinput.value, "</p>");
});

function randomNumber(string) {
  var random = Math.floor(Math.random() * string.length);
  return random;
}

generatebtn.addEventListener("click", function () {
  var password = "";
  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst0123456789@&*$";

  for (var i = 0; i <= lengthinput.value; i++) {
    password += string[randomNumber(string)];
  }

  Passwordinput.value = password;
  console.log(password);
});