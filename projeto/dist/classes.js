"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("A jodadora \u00E9 " + this.name + " e tem " + this.age + " anos.");
    };
    return UserAccount;
}());
//crie um objeto dessa class
var ray = new UserAccount('Ray', 28);
console.log(ray); //acessar o objeto
//console.log(ray.age)//acessar propridade especifica desse objeto
//conseguimos acessar objeto e a propriedade especifica desse objeto
ray.logDetails(); //metodo do nosso objeto
//class extends
//class que-ira-estender extends class que-está-estendendo
//extends além das propriedades e métodos dela, ela herda todos método e propriedade de quem está estendendo.
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    //no constructor ele vai receber td as propriedades, a que ele tem e as que herdou
    function CharAccount(name, age, nickname, level) {
        var _this = 
        //agora vamos pegar as propriedades que ele herdou
        //para isso usamos super()
        //ele vai pegar as propriedades da nossa class superior, da nossa classe acima.
        _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log('********GET*******');
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("O Jagador " + this.name + ", tem " + this.age + " anos e tem o personagem " + this.nickname + " e t\u00E1 no nivel " + this.level + " ");
    };
    return CharAccount;
}(UserAccount));
var gui = new CharAccount('Gui', 35, 'goura', 100);
console.log(gui);
console.log(gui.name);
//console.log(gui.nickname)
//metodo
gui.logDetails();
//gui.nickname = 'Das'
console.log(gui);
gui.logCharDetails(); //não achou nennhum erro
console.log(gui.level);
//gui.level = 20 //retornou com erro
gui.setLevel = 20; //mudou
console.log(gui.getLevel);
