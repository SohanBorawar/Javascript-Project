let lengthinput = document.getElementById("lengthinput");
let lengthvalue = document.getElementById("length");
let generatebtn = document.getElementById("generate");
let Passwordinput = document.getElementById("Password");
let uppercheck = document.getElementById("uppercheck");

lengthvalue.innerHTML = "<p>value: 8</p>"

lengthinput.addEventListener("input",()=>{
    lengthvalue.innerHTML = `<p>value: ${lengthinput.value}</p>`
})

function randomNumber(string){
    let random = Math.floor(Math.random()*string.length)
    return random
}

generatebtn.addEventListener("click",() =>{
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst0123456789@&*$"
    for(let i=0;i<=lengthinput.value;i++){
        password += string[randomNumber(string)]
    }
    Passwordinput.value = password
    console.log(password)
})

let copy = document.getElementById("copy")
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(Passwordinput.value) 
})
