"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var rutaBaseModuloCalculo = "./calculos/";
var operacion = function (num1, num2, tipoOperacion) {
    var promise = new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var operacionesPermitidas, tipoCalculo, delegate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    operacionesPermitidas = ["suma", "resta"];
                    if (!operacionesPermitidas.includes(tipoOperacion)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return require(rutaBaseModuloCalculo + tipoOperacion); })];
                case 1:
                    tipoCalculo = _a.sent();
                    delegate = new tipoCalculo["default"](num1, num2);
                    resolve(delegate.resultado());
                    _a.label = 2;
                case 2:
                    reject("La operación no está permitida");
                    return [2 /*return*/];
            }
        });
    }); });
    return promise;
};
var operaciones = function () { return __awaiter(void 0, void 0, void 0, function () {
    var resultado1, e_1, resultado2, e_2, resultado3, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, operacion(1, 2, "suma")];
            case 1:
                resultado1 = _a.sent();
                console.log("El resultado de la operaci\u00F3n 1 es ".concat(resultado1));
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 3];
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, operacion(2, 1, "resta")];
            case 4:
                resultado2 = _a.sent();
                console.log("El resultado de la operaci\u00F3n 2 es ".concat(resultado2));
                return [3 /*break*/, 6];
            case 5:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 6];
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, operacion(2, 1, "multiplicacion")];
            case 7:
                resultado3 = _a.sent();
                console.log("El resultado de la operaci\u00F3n 3 es ".concat(resultado3));
                return [3 /*break*/, 9];
            case 8:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
operaciones();
