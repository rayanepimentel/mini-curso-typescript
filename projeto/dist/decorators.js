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
