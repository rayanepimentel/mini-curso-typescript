
class UserAccount {
    public name: string
    protected age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`A jodadora é ${this.name} e tem ${this.age} anos.`)
    }
}

//crie um objeto dessa class

const ray = new UserAccount('Ray', 28)
console.log(ray)//acessar o objeto
//console.log(ray.age)//acessar propridade especifica desse objeto

//conseguimos acessar objeto e a propriedade especifica desse objeto

ray.logDetails()//metodo do nosso objeto

//class extends
//class que-ira-estender extends class que-está-estendendo
//extends além das propriedades e métodos dela, ela herda todos método e propriedade de quem está estendendo.

class CharAccount extends UserAccount {
    private nickname: string
    readonly level: number

    //no constructor ele vai receber td as propriedades, a que ele tem e as que herdou
    constructor(name: string, age: number, nickname: string, level: number) {
        //agora vamos pegar as propriedades que ele herdou
        //para isso usamos super()
        //ele vai pegar as propriedades da nossa class superior, da nossa classe acima.
        super(name, age)

        this.nickname = nickname
        this.level = level
    }

    get getLevel() {
        console.log('********GET*******')
        return this.level
    }

    logCharDetails(): void {
        console.log(`O Jagador ${this.name}, tem ${this.age} anos e tem o personagem ${this.nickname} e tá no nivel ${this.level} `)
    }
}



const gui = new CharAccount('Gui', 35, 'goura', 100)
console.log(gui)
console.log(gui.name)
//console.log(gui.nickname)
//metodo
gui.logDetails()
//gui.nickname = 'Das'
console.log(gui)
gui.logCharDetails()//não achou nennhum erro
console.log(gui.level)
//gui.level = 20 //retornou com erro


console.log(gui.getLevel)