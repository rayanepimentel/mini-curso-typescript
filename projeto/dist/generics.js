"use strict";
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState(123); //passando numero
console.log(newState.getState()); //123
//e se eu passasse uma string?
newState.setState('foo'); //derro
//O argumento do tipo '"foo"' não é atribuível ao parâmetro do tipo 'number'.
console.log(newState.getState()); //mas iria imprimir
newState.setState('bla');
console.log(newState.getState());
newState.setState(456);
console.log(newState.getState());
function useState1() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
//o 'T', aceita qualquer coisa, mas quando chamamos ele na função e definimos 
//ele passa aceitar somente aquele tipo
var newState1 = useState1(); //quando fizemos isso, estamos dizendo
//que ele só aceita number e dará erro na string, oi em qualquer outro tipo
//mas tem um problema, como ele aceita tudo, se eu passar boolean, ele vai aceitar
//mas eu queria que ele só aceitasse number ou string.
//é bem simples
//basta ir em T e passar extends e os tipos que queremos
//se tentarmos booleano, ele dará erro
//e se colocamos string, ele passa aceitar só string
//ou seja o generics é flexivel, aceito string ou number
//mas se vc passar number, eu passo a aceitar somente number
//e vice-versa
// newState1.setState(1)
// console.log(newState1.getState())
newState1.setState('teste');
console.log(newState1.getState());
// newState1.setState(false)
// console.log(newState1.getState())
