"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaDeAutos) {
        this.listaDeAutos = listaDeAutos;
    }
    RegistroAutomotor.prototype.getListaDeAutos = function () {
        return this.listaDeAutos;
    };
    RegistroAutomotor.prototype.mostarRegistro = function () {
        console.log(this.listaDeAutos);
    };
    RegistroAutomotor.prototype.setListaDeAutos = function (listaDeAutos) {
        this.listaDeAutos = listaDeAutos;
    };
    RegistroAutomotor.prototype.agregarNuevoAuto = function (listaDeAutos, automovil) {
        listaDeAutos.push(automovil);
    };
    RegistroAutomotor.prototype.eliminarAutomovil = function (listaDeAutos, posicion) {
        listaDeAutos.splice(Number(posicion), 1);
    };
    RegistroAutomotor.prototype.modificarAutomovil = function (listaDeAutos, posicion, automovil) {
        listaDeAutos[Number(posicion)] = automovil;
    };
    return RegistroAutomotor;
}());
var Automovil = /** @class */ (function () {
    function Automovil(marca, modelo, anio, kilometraje, traccion, color, transmisionAutomatica) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.kilometraje = kilometraje;
        this.traccion = traccion;
        this.color = color;
        this.transmisionAutomatica = transmisionAutomatica;
    }
    return Automovil;
}());
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
function esTransmicionAutomatica(respuesta) {
    if (respuesta === "si") {
        return respuesta;
    }
}
function crearAutomovilDesdeTexto(automovil, listaDeAutos) {
    var propiedadesAutomovil = automovil.split(',');
    var marca = propiedadesAutomovil[0];
    var modelo = propiedadesAutomovil[1];
    var anio = Number(propiedadesAutomovil[2]);
    var kilometraje = Number(propiedadesAutomovil[3]);
    var traccion = propiedadesAutomovil[4];
    var color = propiedadesAutomovil[5];
    var transmisionAutomatica = Boolean(propiedadesAutomovil[6]);
    var nuevoAuto = new Automovil(marca, modelo, anio, kilometraje, traccion, color, transmisionAutomatica);
    listaDeAutos.push(nuevoAuto);
}
function crearNuevoAutomovil() {
    var marca = readlineSync.question("ingrese la marca del automovil ");
    var modelo = readlineSync.question("ingrese el modelo del automovil ");
    var anio = Number(readlineSync.question("ingrese el año del automovil "));
    var kilometraje = Number(readlineSync.question("ingrese los Kilometros "));
    var traccion = readlineSync.question("ingrese el tipo de traccion del automovil ");
    var color = readlineSync.question("ingrese el color del automovil ");
    var transmisionAutomatica = Boolean(esTransmicionAutomatica(readlineSync.question("es de transmision automatica? contestar si o no")));
    var nuevoAuto = new Automovil(marca, modelo, anio, kilometraje, traccion, color, transmisionAutomatica);
    return nuevoAuto;
}
/***************************inicio del programa********************************/
var datosAutomoviles = new GestorDeArchivos('registroAutomotor.txt');
var listaDeAutos = [];
//toma un archivo de texto y con los datos ahi guardados crea 
//un arreglo de automoviles
for (var i = 0; i < datosAutomoviles.getArregloString().length; i++) {
    crearAutomovilDesdeTexto(datosAutomoviles.getArregloString()[i], listaDeAutos);
}
var ListaDeAutos = new RegistroAutomotor(listaDeAutos);
//muestra el arreglo de automoviles
ListaDeAutos.mostarRegistro();
//agregar manualmente un vehiculo y mostrarlo
ListaDeAutos.agregarNuevoAuto(listaDeAutos, crearNuevoAutomovil());
ListaDeAutos.mostarRegistro();
//eliminar un vehiculo y mostrar el registro actualiado
ListaDeAutos.eliminarAutomovil(listaDeAutos, Number(readlineSync.question("ingrese la posicion a eliminar")));
ListaDeAutos.mostarRegistro();
//modificar un auto del registro (sacar un auto y poner uno nuevo) y mostrar el registro actualizado
ListaDeAutos.modificarAutomovil(listaDeAutos, Number(readlineSync.question("ingrese la posicion a modificar")), crearNuevoAutomovil());
ListaDeAutos.mostarRegistro();
