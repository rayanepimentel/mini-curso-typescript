//aula 14
//@decorators
//declaração iniciada @nome, que pode ser
//@nome sem nda param
//@nome('comParam')

//é uma declaração que pode anexada em:

//class
//propriedade
//método
//paramentro
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



