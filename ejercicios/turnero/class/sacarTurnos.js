"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Especialidad_1 = require("./Especialidad");
var GestorDeArchivos_1 = require("./GestorDeArchivos");
var Horario_1 = require("./Horario");
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
    var horariosDeTrabajo = new Array();
    var doctor = new Medico_1["default"](nombre, matricula, especialidad, horariosDeTrabajo);
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
/*
//convierte el archivo txt de medicos en objetos Medico.
let datosMedicos:GestorDeArchivos= new GestorDeArchivos('medicos.txt');
for (let i: number = 0; i < datosMedicos.getArregloString().length; i++) {
    crearDoctores(datosMedicos.getArregloString()[i], listaDeDoctores)
}
*/
//horarios de trabajo
//toma un arreglo de Horarios de la clienica y establece que dias y horas trabaja cada medico
var horarios = [
    new Horario_1["default"]('lunes', 8),
    new Horario_1["default"]('lunes', 9),
    new Horario_1["default"]('lunes', 10),
    new Horario_1["default"]('lunes', 11),
    new Horario_1["default"]('lunes', 12),
    new Horario_1["default"]('lunes', 13),
    new Horario_1["default"]('lunes', 14),
    new Horario_1["default"]('lunes', 15),
    new Horario_1["default"]('lunes', 16),
    new Horario_1["default"]('lunes', 17),
    new Horario_1["default"]('lunes', 18),
    new Horario_1["default"]('martes', 8),
    new Horario_1["default"]('martes', 9),
    new Horario_1["default"]('martes', 10),
    new Horario_1["default"]('martes', 11),
    new Horario_1["default"]('martes', 12),
    new Horario_1["default"]('martes', 13),
    new Horario_1["default"]('martes', 14),
    new Horario_1["default"]('martes', 15),
    new Horario_1["default"]('martes', 16),
    new Horario_1["default"]('martes', 17),
    new Horario_1["default"]('martes', 18),
    new Horario_1["default"]('miercoles', 8),
    new Horario_1["default"]('miercoles', 9),
    new Horario_1["default"]('miercoles', 10),
    new Horario_1["default"]('miercoles', 11),
    new Horario_1["default"]('miercoles', 12),
    new Horario_1["default"]('miercoles', 13),
    new Horario_1["default"]('miercoles', 14),
    new Horario_1["default"]('miercoles', 15),
    new Horario_1["default"]('miercoles', 16),
    new Horario_1["default"]('miercoles', 17),
    new Horario_1["default"]('miercoles', 18),
    new Horario_1["default"]('jueves', 8),
    new Horario_1["default"]('jueves', 9),
    new Horario_1["default"]('jueves', 10),
    new Horario_1["default"]('jueves', 11),
    new Horario_1["default"]('jueves', 12),
    new Horario_1["default"]('jueves', 13),
    new Horario_1["default"]('jueves', 14),
    new Horario_1["default"]('jueves', 15),
    new Horario_1["default"]('jueves', 16),
    new Horario_1["default"]('jueves', 17),
    new Horario_1["default"]('jueves', 18),
    new Horario_1["default"]('viernes', 8),
    new Horario_1["default"]('viernes', 9),
    new Horario_1["default"]('viernes', 10),
    new Horario_1["default"]('viernes', 11),
    new Horario_1["default"]('viernes', 12),
    new Horario_1["default"]('viernes', 13),
    new Horario_1["default"]('viernes', 14),
    new Horario_1["default"]('viernes', 15),
    new Horario_1["default"]('viernes', 16),
    new Horario_1["default"]('viernes', 17),
    new Horario_1["default"]('viernes', 18),
];
var horariosGimenez = horarios.filter(function (Horario) {
    return Horario.getFecha() === 'lunes' ||
        Horario.getFecha() === 'miercoles' ||
        Horario.getFecha() === 'viernes';
});
var horariosRaimundo = horarios.filter(function (Horario) {
    return Horario.getHora() < 13;
});
var horariosBilardo = horarios.filter(function (Horario) {
    return Horario.getHora() < 14;
});
var horariosMalito = horarios.filter(function (Horario) {
    return Horario.getHora() > 12;
});
var horariosPerez = horarios.filter(function (Horario) {
    return Horario.getFecha() === 'martes' ||
        Horario.getFecha() === 'jueves';
});
var horariosMartinez = horarios.filter(function (Horario) {
    return Horario.getFecha() === 'martes' &&
        Horario.getHora() > 12 ||
        Horario.getFecha() === 'viernes' &&
            Horario.getHora() < 14;
});
var horariosOretto = horarios.filter(function (Horario) {
    return Horario.getFecha() === 'lunes' ||
        Horario.getFecha() === 'martes' ||
        Horario.getFecha() === 'jueves' ||
        Horario.getFecha() === 'viernes';
});
crearDoctores("Gimenez,4040,kinesiologo,".concat(horariosGimenez), listaDeDoctores);
crearDoctores("Raimundo,4018122,clinico,".concat(horariosRaimundo), listaDeDoctores);
crearDoctores("Bilardo,1986,ginecologo,".concat(horariosBilardo), listaDeDoctores);
crearDoctores("Malito,2129,gastronterologo,".concat(horariosMalito), listaDeDoctores);
crearDoctores("Perez,19226,clinico,".concat(horariosPerez), listaDeDoctores);
crearDoctores("Martinez,14586,obstetra,".concat(horariosMartinez), listaDeDoctores);
crearDoctores("Oretto,99099,neurologo,".concat(horariosOretto), listaDeDoctores);
console.log(listaDeDoctores);
//crearPaciente();
console.log("con que especialista desea sacar turno?");
var buscoEspecialista = readlineSync.question('ingrese la especialidad del medico: ');
var listadoPorEspecialistas = listaDeDoctores.filter(function (Medico) {
    return Medico.getEspecialidad().getNombre() === buscoEspecialista;
});
console.log(listadoPorEspecialistas);
console.log(listadoPorEspecialistas[0].getHorarios()[0].getFecha());
console.log(listadoPorEspecialistas[0].getHorarios()[0].getHora());
