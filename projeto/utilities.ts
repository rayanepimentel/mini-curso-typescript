//aula 12

//criar um tipo

type Todo = {
    title: string
    description: string
    completed: boolean
}

//criar um obj

const todo: Readonly<Todo> = {
    title: 'Assistir Dark de novo',
    description: 'Relembrar os detalhes',
    completed: false
}

console.log(todo)

//atualizar o todo para completo
//poderiamos fazer assim:

//todo.completed = true

console.log(todo)
//quando fazemos dessa forma estamos alterando diretamente o obj todo
//o podemos fazer para não alterar diretamente o nosso obj?
//o que podemos fazermos uma função que cria um novo objeto a partir do obj todo
//e usarmos um type utilities
//como não queremos alterar diretamente no obj, usamos o Readonly
//e ao fazermos isso todo.completed = true dará erro
//Não é possível atribuir a 'completed' porque é uma propriedade de somente leitura
//uma forma de fazemos a edição desse obj sem retornar esse erro
//é criando uma função que retorne um obj novo

function atualizarTodo(todo: Todo, camposAtualizar: Partial<Todo>) {
    //o retorno será um nobo obj
    //... é onde estamos pegando as propriedades do obj
    //separando elas uma a uma
    //é como se estivessimos criando obj passando propriedade um por um
    return {...todo, ...camposAtualizar}
}

const todo2: Todo = atualizarTodo(todo, { completed: true })

//o Partial deixa opcional os campos do Todo

console.log(todo2)
console.log(todo)



//pick
//digamos que eu só quero passar o title e o completed - lista

type TodoLista = Pick<Todo, 'title' | 'completed'>

const todo3: TodoLista = {
    title: 'alguma coisa',
    completed: false
}

//outra forma é utilizando o omit
//Omit, ele vai omitir o que vc não quer

type TodoLista2 = Omit<Todo, 'description'>

const todo4: TodoLista = {
    title: 'alguma coisa',
    completed: false
}

//quando eu devo utilizar o Pink ou Omit?
//vc deve pensar:
//eu quero pegar mais ou anular mais?
//se eu quiser anular mais: Pick
//se eu quiser pegar mais: Omit

//exemplo, se eu tivesse 5 propriedades
//e eu quer  4 delas, isso significa que eu quero pegar mais
//então eu uso o Omit
//agora se eu quiser pegar só 01, eu uso o Pick