var Auto = /** @class */ (function () {
    function Auto(velocidad, color, estaEncendido) {
        this.velocidad = velocidad;
        this.color = color;
        this.estaEncendido = estaEncendido;
    }
    Auto.prototype.aumentarVelocidad = function () {
        this.velocidad = this.velocidad + 10;
    };
    Auto.prototype.reducirVelocidad = function () {
        this.velocidad = this.velocidad - 10;
    };
    Auto.prototype.frenar = function () {
        this.velocidad = 0;
    };
    Auto.prototype.encenderAuto = function () {
        this.estaEncendido = true;
    };
    Auto.prototype.apagarAuto = function () {
        this.estaEncendido = false;
    };
    return Auto;
}());
var fiat600 = new Auto(70, "blanco", true);
fiat600.aumentarVelocidad();
console.log(fiat600);
fiat600.frenar();
console.log(fiat600);
