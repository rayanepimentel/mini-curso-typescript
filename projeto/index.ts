
//Precisamos dizer que o nosso input é tipo HTMLElement;
const input1 = document.getElementById("num1") as HTMLElement;
const input2 = document.getElementById("num2") as HTMLElement;
const button = document.getElementById("button");

//passando o type
function sum(a: number, b: number) {
    return a + b;
}

button.addEventListener("click", function() {
    console.log(sum(input1.value, input2.value));
});