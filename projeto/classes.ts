
class UserAccount {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

//crie um objeto dessa class

const ray = new UserAccount('Ray', 28)
console.log(ray)//acessar o objeto
console.log(ray.age)//acessar propridade especifica desse objeto

//conseguimos acessar objeto e a propriedade especifica desse objeto
