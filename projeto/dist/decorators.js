"use strict";
//aula 14
//@decorators
//declaração iniciada @nome, que pode ser
//@nome sem nda param
//@nome('comParam')
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//é uma declaração que pode anexada em:
//class
//propriedade
//método
//paramentro
//acesso
//class decorators :
//decorators sem param
function log(target) {
    console.log(target);
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo = __decorate([
        log
    ], Foo);
    return Foo;
}());
//decorators com para
function Logger(prefix) {
    return function (xuxu) {
        console.log(prefix + " - " + xuxu);
    };
}
var bar = /** @class */ (function () {
    function bar() {
    }
    bar = __decorate([
        Logger('ok')
    ], bar);
    return bar;
}());
//@ que vai anotar a versão da API
function versaoAPI(apiVersao) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersao;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var API = /** @class */ (function () {
    function API() {
    }
    API = __decorate([
        versaoAPI('1')
    ], API);
    return API;
}());
console.log(new API());
//propriedade
//quero fazer uma validação que o titulo precisa se maior que 5
function minLength(length) {
    return function (target, key) {
        // console.log(target)
        // console.log(key)
        var val = target[key];
        var getter = function () { return val; };
        var setter = function (value) {
            if (value.length < length) {
                console.log("Error: voc\u00EA n\u00E3o pode criar " + key + " menor que " + length);
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
var Filme = /** @class */ (function () {
    function Filme(t) {
        this.titulo = t;
    }
    __decorate([
        minLength(5)
    ], Filme.prototype, "titulo", void 0);
    return Filme;
}());
var movie = new Filme('ok');
console.log(movie.titulo);
//Error: você não pode criar titulo menor que 5
//Método
function esperar(ms) {
    return function (target, key, descriptor) {
        // console.log(target)
        // console.log(key)
        // console.log(descriptor)
        var originalMetodo = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMetodo.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    //vai esperar um tempo e vai rodar o método
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.greeting);
    };
    __decorate([
        esperar(3000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var oi = new Greeter('Ray');
oi.greet();
