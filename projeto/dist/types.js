"use strict";
//type boolean (true//false)
var isOpen;
isOpen = true; //true é um booleano
//isOpen = "true"
//O tipo '"true"' não pode ser atribuído ao tipo 'boolean'. "true" é uma string
//type string ('foo', "foo", `foo`)
var message;
//message = 'foo'
//passe o boolena dentro da string` ... ` 
message = "foo " + isOpen;
// no ` ` podemos passar a var booleana que ele continua funcionando normal
//pq? pq ele considera tudo dentro ` `é uma string, por mais que tenha dentro um booleano, não importa
//no final é uma string
//type number (int, float, hexadecimal, binario)
var total;
//total = 20
//total = 20.3
total = 0xff0;
//Type array (type[])
//digo o que é array[], mas preciso passar antes o que tem dentro dele
//eu estou dizendo que é um array, dentro desse array eu tenho vários números
var items;
//eu posso criar meu array com vários numeros
items = [1, 2, 3, 4, 5];
//se você mudar para string, ele vai informar O tipo 'number' não pode ser atribuído ao tipo 'string'
var item;
//item = [1, 2, 3, 4, 5]
//Pq estamos dizendo que o array tem várias strigs e não números.
//agora passe strigs dentro do array
item = ['foo', 'bar'];
//existe outra forma ex:
var itemA;
itemA = [1, 2, 3];
//type tupla 
//tupla:  um array, onde eu sei a quantidade items e o que é.
//por ex, o primeiro elemento é um numero e o segundo é uma string
var title;
title = [1, 'foo'];
//tenta passar um 3 valor
//vai retorna com erro:  O tipo '3' não pode ser atribuído, afinal só temos 2 variaveis na nossa tupla title
//outro exemplo de tupla
var form;
form = [1, 'bar', true, 2];
//enum
//É um enumeration que server para criamos um conjunto de chave e valor.
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//any (qualquer coisa)
var coisa;
//eu posso atribuir coisa, qualquer coisa
//Pode ser boolean, string, number, array
coisa = true;
//void (vazio)
//não tem retorno
/*function logger() {
    console.log('foo')
}*/
//o console.log não retorna nada, ele joga no console, mas não retorna
function logger() {
    console.log('foo');
}
//estamos dizendo que esse tipo novo que criamos (não é um tipo primitivo), pode ser
//uma string ou indefinido
//mas não é a conselhado usar com tipo primitivo
//never
function error() {
    throw new Error("error");
}
//Estamos dizendo que essa função nunca irá retornar, ela só vai jogar o erro na tela
//object
//É tudo aquilo que não é string, array, number e nem boolean
var cart;
//cart = true
cart = {
    key: 123
};
//Type Inference
//infere que se foi passado uma string, então essa variável é uma string
var message2 = "mensagem definida";
//passado o valor para number ele reconhece ou mostra erro?
//message2 = 1
//passando uma nova string
message2 = "Um novo valor";
//Poderia ter feito assim?
var message3 = "mensagem definida";
window.addEventListener("click", function (e) {
    console.log(e.target);
    //da mesma forma que ele consegue informar o que existe, ele consegue informar alguma coisa que não existe. Ex:
    //console.log(e.foo)//ele informa que não tem foo: A propriedade 'foo' não existe no tipo 'MouseEvent'(e)
});
//não falamos o que era esse (e), mas com o typescript sabe que esse EventListener vai criar um evento e ele vai ter esse
//paramentro () como MouseEvent, ele já sabe disso você não precisa fazer isso é um MouseEvent (e: MouseEvent)
