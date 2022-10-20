"use strict";
/* consigna
*iniciar proyecto NPM y Git
*plantear diagrama de clases para clases Auto y AutoCarreras redefiniendo metodos.
*implementar el codigo
*subir a GitHub y avisae por Slack.*/
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
var Auto = /** @class */ (function () {
    function Auto(marca, motor, ruedas, velocidad) {
        this.marca = marca;
        this.motor = motor;
        this.ruedas = ruedas;
        this.velocidad = velocidad;
    }
    Auto.prototype.frenar = function () {
        this.velocidad = 0;
    };
    Auto.prototype.doblar = function () {
        console.log("el auto esta doblando");
    };
    Auto.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Auto.prototype.setVelocidad = function (nuevaVelocidad) {
        this.velocidad = this.velocidad + nuevaVelocidad;
    };
    Auto.prototype.acelerar = function () {
        this.setVelocidad(40);
    };
    return Auto;
}());
/****clase hija****** */
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(marca, motor, ruedas, velocidad, drs, tipoDeRuedas, numeroDelAuto) {
        var _this = _super.call(this, marca, motor, ruedas, velocidad) || this;
        _this.drs = drs;
        _this.tipoDeRuedas = tipoDeRuedas;
        _this.numeroDelAuto = numeroDelAuto;
        return _this;
    }
    AutoCarreras.prototype.activarDrs = function () {
        this.drs = true;
    };
    AutoCarreras.prototype.desactivarDrs = function () {
        this.drs = false;
    };
    AutoCarreras.prototype.getDrs = function () {
        return this.drs;
    };
    AutoCarreras.prototype.acelerar = function () {
        this.setVelocidad(140);
    };
    return AutoCarreras;
}(Auto));
//implementacion delcodigo
var miAutito = new Auto("fiat", "v8", 14, 80);
var miF1 = new AutoCarreras("ferrari", "066/7", 22, 160, true, "duras", 1);
console.log(miAutito);
miAutito.acelerar();
console.log("ahora mi auto va a ".concat(miAutito.getVelocidad(), " km/h"));
console.log("ahora me subo a mi auto de carreras.");
console.log(miF1);
miF1.acelerar();
console.log("acelero y ahora mi auto de carreras va a ".concat(miF1.getVelocidad(), " km/h"));
miF1.desactivarDrs();
console.log("desactive el drs... ahora su valor es ".concat(miF1.drs));
