interface Game {
    title: string;
    description: string;
    readonly genre: string;
    plataform: string[];
    //assinatura do método que vai receber title e vai retorna um void
    getSimilars: (title: string) => void// o retorno (void) poderia ser number, array, qualquer coisa
}

const tlou: Game = {
    title: 'The Last of Us',
    description: 'the best',
    genre: 'Action',
    plataform: ['PS3', 'PS4'],
    //agora podemos criar o método de fato
    //falamos que ele recebe title
    getSimilars: (title: string) => {
        //aqui fazemos a implementação dele
        console.log(`Jogos similare to ${title}: xxxxx`)
    }
}

//chamar o método e passar o nome title
tlou.getSimilars(tlou.title)
//podemos tbm chamar as propriedade
console.log(tlou.title)
//chamar Modifiers readonly(só para leitura)
console.log(tlou.genre)
//Posso modificar? Não
//tlou.genre = 'New'