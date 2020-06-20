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