//type boolean (true//false)
let isOpen: boolean
isOpen = true //true é um booleano
//isOpen = "true"
//O tipo '"true"' não pode ser atribuído ao tipo 'boolean'. "true" é uma string

//type string ('foo', "foo", `foo`)
let message: string
//message = 'foo'
//passe o boolena dentro da string` ... ` 
message = `foo ${isOpen}`
// no ` ` podemos passar a var booleana que ele continua funcionando normal
//pq? pq ele considera tudo dentro ` `é uma string, por mais que tenha dentro um booleano, não importa
//no final é uma string

//type number (int, float, hexadecimal, binario)
let total: number
//total = 20
//total = 20.3
total = 0xff0

//Type array (type[])
//digo o que é array[], mas preciso passar antes o que tem dentro dele
//eu estou dizendo que é um array, dentro desse array eu tenho vários números
let items: number[]
//eu posso criar meu array com vários numeros
items = [1, 2, 3, 4, 5]
//se você mudar para string, ele vai informar O tipo 'number' não pode ser atribuído ao tipo 'string'
let item: string[]
//item = [1, 2, 3, 4, 5]
//Pq estamos dizendo que o array tem várias strigs e não números.
//agora passe strigs dentro do array
item = ['foo', 'bar']

//existe outra forma ex:
let itemA: Array<number>
itemA = [1, 2, 3]

//type tupla 
//tupla:  um array, onde eu sei a quantidade items e o que é.
//por ex, o primeiro elemento é um numero e o segundo é uma string
let title: [number, string]
title = [1, 'foo']
//tenta passar um 3 valor
//vai retorna com erro:  O tipo '3' não pode ser atribuído, afinal só temos 2 variaveis na nossa tupla title

//outro exemplo de tupla
let form: [number, string, boolean, number]
form = [1, 'bar', true, 2]

//enum
//É um enumeration que server para criamos um conjunto de chave e valor.
enum Colors {
    white = '#fff',
    black = '#000'
}

//any (qualquer coisa)
let coisa: any
//eu posso atribuir coisa, qualquer coisa
//Pode ser boolean, string, number, array
coisa = true

//void (vazio)
//não tem retorno

/*function logger() {
    console.log('foo')
}*/

//o console.log não retorna nada, ele joga no console, mas não retorna

function logger() :void {
    console.log('foo')
}