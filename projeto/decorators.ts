//aula 14
//@decorators
//declaração iniciada @nome, que pode ser
//@nome sem nda param
//@nome('comParam')

//é uma declaração que pode anexada em:

//class
//propriedade
//método
//parametro
//acesso


//class decorators :

//decorators sem param
function log(target: any) {
    console.log(target)
}

@log
class Foo {}

//decorators com para
function Logger(prefix: string) {
    return (xuxu: any) => {
        console.log(`${prefix} - ${xuxu}`)
    }
}

@Logger('ok')
class bar {}

//@ que vai anotar a versão da API

function versaoAPI(apiVersao: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersao
        }
    }
}

@versaoAPI('1')
class API {}

console.log(new API())



//propriedade
//quero fazer uma validação que o titulo precisa se maior que 5

function minLength(length: number) {
    return (target: any, key: string ) => {
        // console.log(target)
        // console.log(key)
        let val = target[key]

        const getter = () => val

        const setter = (value: string) => {
            if(value.length < length) {
                console.log(`Error: você não pode criar ${key} menor que ${length}`)
            } else {
                val = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        }) 
    };
}




class Filme {
    //validação
    @minLength(5)
    titulo: string

    constructor(t: string) {
        this.titulo = t
    }
}

const movie = new Filme('ok')
console.log(movie.titulo)
//Error: você não pode criar titulo menor que 5




//Método

function esperar(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log(target)
        // console.log(key)
        // console.log(descriptor)
        const originalMetodo = descriptor.value

        descriptor.value = function (...args: any) {
            console.log(`Esperando ${ms}...`)
            setTimeout(() => {
                originalMetodo.apply(this, args)
            }, ms)

            return descriptor
            
        }
    }
}


class Greeter {
    greeting: string

    constructor(g: string) {
        this.greeting = g
    }
    //vai esperar um tempo e vai rodar o método

    @esperar(3000)
    greet() {
        console.log(`Hello, ${this.greeting}`)
    }
}

const oi = new Greeter('Ray')
oi.greet()