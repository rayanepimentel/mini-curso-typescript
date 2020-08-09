"use strict";
//aula 12
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//criar um obj
var todo = {
    title: 'Assistir Dark de novo',
    description: 'Relembrar os detalhes',
    completed: false
};
console.log(todo);
//atualizar o todo para completo
//poderiamos fazer assim:
//todo.completed = true
console.log(todo);
//quando fazemos dessa forma estamos alterando diretamente o obj todo
//o podemos fazer para não alterar diretamente o nosso obj?
//o que podemos fazermos uma função que cria um novo objeto a partir do obj todo
//e usarmos um type utilities
//como não queremos alterar diretamente no obj, usamos o Readonly
//e ao fazermos isso todo.completed = true dará erro
//Não é possível atribuir a 'completed' porque é uma propriedade de somente leitura
//uma forma de fazemos a edição desse obj sem retornar esse erro
//é criando uma função que retorne um obj novo
function atualizarTodo(todo, camposAtualizar) {
    //o retorno será um nobo obj
    //... é onde estamos pegando as propriedades do obj
    //separando elas uma a uma
    //é como se estivessimos criando obj passando propriedade um por um
    return __assign(__assign({}, todo), camposAtualizar);
}
var todo2 = atualizarTodo(todo, { completed: true });
//o Partial deixa opcional os campos do Todo
console.log(todo2);
console.log(todo);
var todo3 = {
    title: 'alguma coisa',
    completed: false
};
var todo4 = {
    title: 'alguma coisa',
    completed: false
};
//quando eu devo utilizar o Pink ou Omit?
//vc deve pensar:
//eu quero pegar mais ou anular mais?
//se eu quiser anular mais: Pick
//se eu quiser pegar mais: Omit
//exemplo, se eu tivesse 5 propriedades
//e eu quer  4 delas, isso significa que eu quero pegar mais
//então eu uso o Omit
//agora se eu quiser pegar só 01, eu uso o Pick
