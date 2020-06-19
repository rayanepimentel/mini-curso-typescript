"use strict";
//Precisamos dizer que o nosso input é tipo HTMLElement;
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("button");
//passando o type
function sum(a, b) {
    return a + b;
}
//erro em button Possivelmente, o objeto é 'nulo'. 
button.addEventListener("click", function () {
    //precisamos informar que o input precisa ser um Number
    console.log(sum(Number(input1.value), Number(input2.value)));
});
