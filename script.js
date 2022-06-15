var maiuscula = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]
var numeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
]
var alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

var qLetra = 6
var capitalLetter = false
var lowerCase = true
var numbers = false

var capitalLetterInput = document.getElementById("capitalLetter")
var lowerCaseInput = document.getElementById("lowerCase")
var numbersInput = document.getElementById("numbers")
var passwordInput = document.getElementById("password")
var slideInput = document.getElementById("slide")
var numberInput = document.getElementById("inputNumber")

capitalLetterInput.checked = capitalLetter
lowerCaseInput.checked = lowerCase
numbersInput.checked = numbers

capitalLetterInput.addEventListener("change", handler)
lowerCaseInput.addEventListener("change", handler)
numbersInput.addEventListener("change", handler)
slideInput.addEventListener("input", handler)
numberInput.addEventListener("input", handler)


function handler(event){
    console.log("nome do input: ",event.target.name)
    console.log("valor: " ,event.target.checked)
    
    if(event.target.name=="numbers"){
        numbers = event.target.checked                   
    }
    if(event.target.name=="capitalLetter"){
        capitalLetter = event.target.checked
    }
    if(event.target.name=="lowerCase"){
        lowerCase = event.target.checked
    }
    if(event.target.name=="slider"){
        numberInput.value = slideInput.value
        qLetra = slideInput.value
    }
    if (event.target.name=="char"){
        slideInput.value = numberInput.value
        qLetra = numberInput.value
    }


    gpassword()
   
          
}
function gpassword(){
    console.log("criando senha...")
    var nArray = []
    if(numbers==true){
        nArray = nArray.concat(numeros)
    }
    if(lowerCase==true){
        nArray = nArray.concat(alfabeto)
    }
    if(capitalLetter){
        nArray = nArray.concat(maiuscula)
    }
    var senha = ""
    if(nArray.length > 1){
        for(var i = 0; i < qLetra; i++){
            var indexAleatorio = Math.floor(Math.random() * nArray.length)
            console.log(nArray[indexAleatorio])
            senha = senha+nArray[indexAleatorio]
        }
    }
    
    passwordInput.value = senha

    
}
gpassword()