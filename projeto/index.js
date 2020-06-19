//Precisamos dizer que o nosso input é tipo HTMLElement;
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("button");
//passando o type
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(input1.value, input2.value));
});
