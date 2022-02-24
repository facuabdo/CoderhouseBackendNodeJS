"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var calculo_1 = require("./calculo");
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(argumento1, argumento2) {
        return _super.call(this, argumento1, argumento2) || this;
    }
    Suma.prototype.resultado = function () {
        if (isNaN(this.argumento1) || isNaN(this.argumento2))
            throw "Los argumentos son inválidos";
        return this.argumento1 + this.argumento2;
    };
    return Suma;
}(calculo_1.Calculo));
exports["default"] = Suma;
