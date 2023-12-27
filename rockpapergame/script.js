let img = document.querySelectorAll(".img div");
let msg = document.querySelector(".msg p");
let your = document.querySelector(".your h2");
let comp = document.querySelector(".comp h2");

let yourScore = 0;
let compScore = 0;

img.forEach((item) => {
  item.addEventListener("click", () => {
    let userChoice = item.getAttribute("class");

    playGame(userChoice);
  });
});

function playGame(userChoice) {
  let userWin = true;
  if (userChoice !== compSelection()) {
    let compChoice = compSelection();
    if (userChoice === "scissor") {
      userWin = compChoice === "paper" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "scissor" ? true : false;
    }
  } else {
    msg.innerHTML = "Draw";
    msg.style.visibility = "visible";
  }

  showMsg(userWin);
}

function showMsg(userWin) {
  if (userWin) {
    yourScore += 1;
    your.innerHTML = yourScore;
    if (yourScore > compScore) {
      msg.innerHTML = "You Win";
    } else {
      msg.innerHTML = "Comp Win";
    }
  } else {
    compScore += 1;
    comp.innerHTML = compScore;
    if (yourScore < compScore) {
      msg.innerHTML = "Comp Win";
    } else {
      msg.innerHTML = "You Win";
    }
  }

  msg.style.visibility = "visible";
}

function compSelection() {
  let selection = ["scissor", "paper", "rock"];

  let randnum = Math.floor(Math.random() * 3);

  return selection[randnum];
}
