// Javascript Notes!

// comment

/*
    block comment
*/

// Variables
/* 
    Vairable declarations
    var - function scope. allows to redeclare variables
    let - bracket scope. does not allow to redeclare variables
    const - used if value or type should not change
*/
var height = 6.1; //decimal
let myName = "Coder"; //string
let myAge = 0; //integer
let isHuman = true; //boolean
console.log(myName);

document.getElementById("h1").innerHTML = "Hello " + myName + "!";

// Accepting input
let popInput;
//popInput = window.prompt("Enter some input!");
//console.log(popInput);
//document.getElementById("h1").innerHTML = popInput;

var textInput;
let textInput2;

document.getElementById("myButton1").onclick = function () {
  textInput = document.getElementById("myInput1").value;
  console.log(textInput);
  document.getElementById("myLabel1").innerHTML = textInput;
};

document.getElementById("myButton2").onclick = function () {
  textInput2 = document.getElementById("myInput2").value;
  console.log(textInput2);
  document.getElementById("myLabel2").innerHTML = textInput2;
  if (textInput.length > 0) {
    document.getElementById("h1").innerHTML = "Hello " + textInput + "!";
  }
};
