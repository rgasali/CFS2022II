/*Ejercicio 2
• Iniciar proyecto NPM
• Implementar las siguientes clases con las
variables y métodos que crea necesarios:• AutoCiudad
• AutoDeportivo
• Camioneta
• Abstraer elementos en común entre dichas
clases → pasarlos a una clase abstracta, y
que las tres clases extiendan de ella*/
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
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
    }
    return Vehiculo;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.traccion = "trasera";
        _this.cierre = "centralizado";
        _this.velocidad = 0;
        return _this;
    }
    AutoCiudad.prototype.aceleracion = function () {
        this.velocidad = this.velocidad + 60;
    };
    AutoCiudad.prototype.calefaccionar = function () {
        console.log("el auto se esta calefaccionando por el calor del motor");
    };
    return AutoCiudad;
}(Vehiculo));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.traccion = "delantera";
        _this.cierre = "automatico a distancia";
        _this.velocidad = 0;
        return _this;
    }
    AutoDeportivo.prototype.aceleracion = function () {
        this.velocidad = this.velocidad + 120;
    };
    AutoDeportivo.prototype.calefaccionar = function () {
        console.log("el auto se esta calefaccionando por aire acondicionado");
    };
    AutoDeportivo.prototype.modoCrucero = function () {
        this.velocidad = 100;
    };
    return AutoDeportivo;
}(Vehiculo));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.traccion = "4x4";
        _this.cierre = "manual";
        _this.velocidad = 0;
        return _this;
    }
    Camioneta.prototype.aceleracion = function () {
        this.velocidad = this.velocidad + 80;
    };
    Camioneta.prototype.calefaccionar = function () {
        console.log("la camioneta posee la capacidad de calefaccionar por aire acondicionado o por temperatuda de motor");
    };
    Camioneta.prototype.remolcar = function () {
        console.log("se ha activado el metodo remolcar... se activa traccion 4x4");
    };
    return Camioneta;
}(Vehiculo));
var miautito = new AutoCiudad;
miautito.aceleracion();
console.log("mi autito de ciudad ha acelerado y va a una velocidad de " + miautito.velocidad);
miautito.calefaccionar();
var miautitoDeportivo = new AutoDeportivo;
console.log(miautitoDeportivo.cierre);
miautitoDeportivo.modoCrucero();
console.log("el auto ahora que esta en modo crucero va a una velocidad de " + miautitoDeportivo.velocidad);
var miCamionetita = new Camioneta;
miCamionetita.aceleracion();
miCamionetita.remolcar();
console.log("la camioneta esta andando a una velocidad de " + miCamionetita.velocidad);
