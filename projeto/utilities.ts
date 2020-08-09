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


