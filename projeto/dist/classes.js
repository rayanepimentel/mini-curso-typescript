"use strict";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
//crie um objeto dessa class
var ray = new UserAccount('Ray', 28);
console.log(ray); //acessar o objeto
console.log(ray.age); //acessar propridade especifica desse objeto
//conseguimos acessar objeto e a propriedade especifica desse objeto
