let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let nbtn = document.querySelector(".start");
let turn = true;

let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let btn = nbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    msg.style.visibility = "hidden";
    box.disabled = false;
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerHTML = "x";
      turn = false;
    } else {
      box.innerHTML = "0"
      turn = true;
    }
    box.disabled = true;

    if (checkWinner()) {
      boxes.forEach((dbox) => {
        dbox.disabled = true;
      });
    }
  });
});

function checkWinner() {
  for (let patterns of winpatterns) {
    console.log(patterns[0], patterns[1], patterns[2]);

    console.log(
      boxes[patterns[0]].innerHTML,
      boxes[patterns[1]].innerHTML,
      boxes[patterns[2]].innerHTML
    );

    let val1 = boxes[patterns[0]].innerHTML;
    let val2 = boxes[patterns[1]].innerHTML;
    let val3 = boxes[patterns[2]].innerHTML;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3 && val3 === val1) {
        msg.style.visibility = "visible";
        msg.innerHTML = `Winner is Player ${val1}`;

        return true;
      }
    }
  }
}
