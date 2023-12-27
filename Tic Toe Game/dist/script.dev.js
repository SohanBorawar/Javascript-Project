"use strict";

var boxes = document.querySelectorAll(".box");
var msg = document.querySelector(".msg");
var nbtn = document.querySelector(".start");
var turn = true;
var winpatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
var btn = nbtn.addEventListener("click", function () {
  boxes.forEach(function (box) {
    box.innerHTML = "";
    msg.style.visibility = "hidden";
    box.disabled = false;
  });
});
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (turn) {
      box.innerHTML = "x";
      turn = false;
    } else {
      box.innerHTML = "0";
      turn = true;
    }

    box.disabled = true;

    if (checkWinner()) {
      boxes.forEach(function (dbox) {
        dbox.disabled = true;
      });
    }
  });
});

function checkWinner() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = winpatterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var patterns = _step.value;
      console.log(patterns[0], patterns[1], patterns[2]);
      console.log(boxes[patterns[0]].innerHTML, boxes[patterns[1]].innerHTML, boxes[patterns[2]].innerHTML);
      var val1 = boxes[patterns[0]].innerHTML;
      var val2 = boxes[patterns[1]].innerHTML;
      var val3 = boxes[patterns[2]].innerHTML;

      if (val1 !== "" && val2 !== "" && val3 !== "") {
        if (val1 === val2 && val2 === val3 && val3 === val1) {
          msg.style.visibility = "visible";
          msg.innerHTML = "Winner is Player ".concat(val1);
          return true;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}