let list = document.querySelector(".list");
let input = document.querySelector("#add-input");

function addItem() {
  if (input.value == "") {
    alert("Error 'Empty' ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;

    console.log("l");
    list.appendChild(li);
    let i = document.createElement("i");
    li.appendChild(i).classList = "fa-solid fa-xmark";
  }

  input.value = "";
  saveData();
}

list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "I") {
    e.target.parentNode.remove();
    saveData();
  } else {
  }
},false);

function saveData(){
  localStorage.setItem("data",list.innerHTML);
  console.log("hlo")
}
function getData(){
  list.innerHTML = localStorage.getItem("data")
}

getData();