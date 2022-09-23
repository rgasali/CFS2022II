var Pez = /** @class */ (function () {
    function Pez(peso, velocidadDeNado, modoDeDesplazamiento, tamaño, esDeAguaDulce, edad) {
        this.peso = peso;
        this.velocidadDeNado = velocidadDeNado;
        this.modoDeDesplazamiento = modoDeDesplazamiento;
        this.tamaño = tamaño;
        this.esDeAguaDulce = esDeAguaDulce;
        this.edad = edad;
    }
    Pez.prototype.comer = function () {
        this.peso = this.peso + 0.1;
        return "ahora el peso es " + this.peso;
    };
    Pez.prototype.setVelocidadDeNado = function (velocidadDeNado) {
        this.velocidadDeNado = velocidadDeNado;
    };
    Pez.prototype.getVelocidadDeNado = function () {
        return this.velocidadDeNado;
    };
    Pez.prototype.nadar = function () {
        return console.log("esta nadando a " + this.velocidadDeNado + " Kilometros por hora ");
    };
    return Pez;
}());
var tiburon = new Pez(150, 20, "profundo", 1600, false, 10);
tiburon.comer();
tiburon.nadar();
tiburon.edad;
tiburon.peso;
var pezPayaso = new Pez(0.3, 3, "semiprofundo", 35, false, 3);
pezPayaso.comer();
pezPayaso.nadar();
console.log(pezPayaso.edad);
console.log(pezPayaso.esDeAguaDulce);
