"use strict";
//objeto
var tlou = {
    title: 'The Last of Us',
    description: 'the best',
    genre: 'Action',
    plataform: ['PS3', 'PS4'],
    //agora podemos criar o método de fato
    //falamos que ele recebe title
    getSimilars: function (title) {
        //aqui fazemos a implementação dele
        console.log("Jogos similare to " + title + ": xxxxx");
    }
};
//chamar o método e passar o nome title
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
//podemos tbm chamar as propriedade
console.log(tlou.title);
//chamar Modifiers readonly(só para leitura)
console.log(tlou.genre);
//criar um objeto
var leftbehind = {
    //quando eu faço isso eu preciso passar as informações que o Game tem
    title: 'The Last of leftbehind',
    description: 'the best qualquer coisa',
    genre: 'Action',
    plataform: ['PS3', 'PS4'],
    originalGame: tlou,
    newContent: ['Qualquer coisa']
};
