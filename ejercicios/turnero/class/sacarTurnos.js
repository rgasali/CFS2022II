"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Especialidad_1 = require("./Especialidad");
var GestorDeArchivos_1 = require("./GestorDeArchivos");
var Medico_1 = require("./Medico");
var Paciente_1 = require("./Paciente");
var doctores = new GestorDeArchivos_1["default"]('./archivosTxt/medicos.txt');
var listaDeDoctores = [];
//crear paciente 
function crearPaciente() {
    var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
    var dni = readlineSync.question("ingrese el numero de documento del paciente: ");
    var telefono = readlineSync.question("ingrese el numero de telefono del paciente: ");
    var obra_social = readlineSync.question("ingrese la obra social del paciente: ");
    var nuevoPaciente = new Paciente_1["default"](nombre, dni, telefono, obra_social);
    return nuevoPaciente;
}
//crear doctores
function crearDoctores(doctores, listaDeDoctores) {
    var propiedadDoctores = doctores.split(',');
    //nombre,matricula,especialidad
    var nombre = propiedadDoctores[0];
    var matricula = Number(propiedadDoctores[1]);
    var especialidad = new Especialidad_1["default"](propiedadDoctores[2]);
    var doctor = new Medico_1["default"](nombre, matricula, especialidad);
    listaDeDoctores.push(doctor);
}
//sacar Turno
/*let numeroDeTurno:number=0;


function sacarTurno(){
    let miTurno:number=numeroDeTurno+1;
        
    let medico:Medico= readlineSync.question("")
    let paciente:Paciente;
    let horario:Horario;

    //medico
    //paciente
    //horario
}*/
//convierte el archivo txt de medicos en objetos Medico.
var datosMedicos = new GestorDeArchivos_1["default"]('medicos.txt');
for (var i = 0; i < datosMedicos.getArregloString().length; i++) {
    crearDoctores(datosMedicos.getArregloString()[i], listaDeDoctores);
}
console.log(listaDeDoctores);
crearPaciente();
