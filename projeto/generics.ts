
function useState() {
    let state: number | string

    function getState() {
        return state
    }

    function setState(newState: number | string) {
        state = newState
    }

    return { getState, setState}
}

const newState = useState()

newState.setState(123)//passando numero
console.log(newState.getState())//123
//e se eu passasse uma string?

newState.setState('foo')//derro
//O argumento do tipo '"foo"' não é atribuível ao parâmetro do tipo 'number'.
console.log(newState.getState())//mas iria imprimir

newState.setState('bla')
console.log(newState.getState())

newState.setState(456)
console.log(newState.getState())

//mas podemos passar que ele pode ser number | string
//não irá acontecer o erro
//pq ele pode ser um ou outro

//mas se após eu definir que
//seja string, ele não aceite mas number e sim só string, 
//ou definir number e ele não aceitar mais entradas com string, só number
//para fazer isso, entra o caso do generics

//antes do param. passamos o tipo entre < e >
//dentro de <> vc pode passar qualquer letra
//e a letra será o tipo e precisamos definir
//e feita diretamente quando chamamos essa função

function useState1<T>() {
    let state: T
    
    function getState() {
        return state
    }

    function setState(newState: T ) {
        state = newState
    }

    return { getState, setState}
}

//o 'T', aceita qualquer coisa, mas quando chamamos ele na função e definimos 
//ele passa aceitar somente aquele tipo

const newState1 = useState1<number>()//quando fizemos isso, estamos dizendo
//que ele só aceita number e dará erro na string, oi em qualquer outro tipo
//mas tem um problema, como ele aceita tudo, se eu passar boolean, ele vai aceitar
//mas eu queria que ele só aceitasse number ou string.

newState1.setState(1)
console.log(newState1.getState())

newState1.setState('teste')
console.log(newState1.getState())