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
var listaDeEspecialidades = [];
//crear especialidad:
function crearEspecialidad() {
    var nombre = readlineSync.question("Ingrese el nombre de la especialidad: ");
    var nuevaEspecialidad = new Especialidad_1["default"](nombre);
    return nuevaEspecialidad;
}
//agregar especialidad:
function agregarEspecialidad(especialidad, listaDeEspecialidades) {
    listaDeEspecialidades.push(especialidad);
}
//crear doctores
function crearDoctores(doctores, especialidadMedica, horarioLaboral, listaDeDoctores) {
    var propiedadDoctores = doctores.split(',');
    //nombre,matricula,especialidad
    var nombre = propiedadDoctores[0];
    var matricula = Number(propiedadDoctores[1]);
    var doctor = new Medico_1["default"](nombre, matricula, especialidadMedica, horarioLaboral);
    listaDeDoctores.push(doctor);
}
//crear paciente 
function crearPaciente() {
    var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
    var dni = readlineSync.question("ingrese el numero de documento del paciente: ");
    var telefono = readlineSync.question("ingrese el numero de telefono del paciente: ");
    var obra_social = readlineSync.question("ingrese la obra social del paciente: ");
    var nuevoPaciente = new Paciente_1["default"](nombre, dni, telefono, obra_social);
    return nuevoPaciente;
}
//listado de especialidades
agregarEspecialidad(crearEspecialidad(), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(), listaDeEspecialidades);
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
//mostrar horarios disponibles
function mostrarDisponibilidad(doctor) {
    for (var i = 0; i > doctor.getHorarios.length; i++) {
        return console.log("".concat(doctor.getHorarios()[i].getFecha(), " ").concat(doctor.getHorarios()[i].getHora()));
    }
}
//seleccionar horario
function seleccionarHorario(listaDeHorarios, dia, hora) {
    var horarioSeleccionado = listaDeHorarios.filter(function (Horario) {
        return Horario.getFecha() === dia &&
            Horario.getHora() === hora;
    });
}
crearDoctores("Gimenez,4040", listaDeEspecialidades[0], horariosGimenez, listaDeDoctores);
crearDoctores("Raimundo,4018122", listaDeEspecialidades[1], horariosRaimundo, listaDeDoctores);
crearDoctores("Bilardo,1986", listaDeEspecialidades[2], horariosBilardo, listaDeDoctores);
crearDoctores("Malito,2129", listaDeEspecialidades[3], horariosMalito, listaDeDoctores);
crearDoctores("Perez,19226", listaDeEspecialidades[1], horariosPerez, listaDeDoctores);
crearDoctores("Martinez,1458", listaDeEspecialidades[4], horariosMartinez, listaDeDoctores);
crearDoctores("Oretto,99099", listaDeEspecialidades[5], horariosOretto, listaDeDoctores);
console.log(listaDeDoctores);
//crearPaciente();
function sacarTurno() {
    console.log("con que especialista desea sacar turno?");
    var buscoEspecialista = readlineSync.question('ingrese la especialidad del medico: ');
    var listadoPorEspecialistas = listaDeDoctores.filter(function (Medico) {
        return Medico.getEspecialidad().getNombre() === buscoEspecialista;
    });
    console.log("los doctores disponibles son: ".concat(listadoPorEspecialistas[0].getNombre(), "\n    ").concat(listadoPorEspecialistas[0].getMatricula(), " \n    ").concat(listadoPorEspecialistas[0].getEspecialidad().getNombre()));
    console.log(" los horarios disponibles son:");
    for (var i = 0; i > listadoPorEspecialistas.length; i++) {
        mostrarDisponibilidad(listadoPorEspecialistas[0]);
    }
    var dia = readlineSync.question('ingrese el dia:');
    var hora = readlineSync.question('ingrese la hora:');
    console.log("la fecha seleccionada es ".concat(seleccionarHorario(listadoPorEspecialistas[0].getHorarios(), dia, hora)));
}
sacarTurno();
