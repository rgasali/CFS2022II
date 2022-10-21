"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Paciente_1 = require("./Paciente");
//crear paciente 
function crearPaciente() {
    var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
    var dni = readlineSync.question("ingrese el numero de documento del paciente: ");
    var telefono = readlineSync.question("ingrese el numero de telefono del paciente: ");
    var obra_social = readlineSync.question("ingrese la obra social del paciente: ");
    var nuevoPaciente = new Paciente_1["default"](nombre, dni, telefono, obra_social);
    console.log("se ha creado un nuevo paciente... ".concat(nuevoPaciente.getNombre()));
    return nuevoPaciente;
}
crearPaciente();
