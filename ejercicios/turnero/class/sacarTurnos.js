"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Especialidad_1 = require("./Especialidad");
var GestorDeArchivos_1 = require("./GestorDeArchivos");
var Horario_1 = require("./Horario");
var Medico_1 = require("./Medico");
var Paciente_1 = require("./Paciente");
var Turno_1 = require("./Turno");
var doctores = new GestorDeArchivos_1["default"]('./archivosTxt/medicos.txt');
var listaDeDoctores = [];
var listaDeEspecialidades = [];
var numeroDeTurno = 0;
var listaDePacientes = [];
var listaDeTurnos = [];
//crear especialidad:
function crearEspecialidad(nombreEspecialidad) {
    var nombre = nombreEspecialidad; // string= readlineSync.question("Ingrese el nombre de la especialidad: ");
    var nuevaEspecialidad = new Especialidad_1["default"](nombre);
    return nuevaEspecialidad;
}
//agregar especialidad:
function agregarEspecialidad(especialidad, listaDeEspecialidades) {
    listaDeEspecialidades.push(especialidad);
}
//buscar especialidad... si no existe crea especialidad
function buscarEspecialidad(nombre_especialidad) {
    var espacialidadNuevoMedico = listaDeEspecialidades.filter(function (Especialidad) {
        return (Especialidad.getNombre() === nombre_especialidad);
    });
    if (espacialidadNuevoMedico.length > 0) {
        return espacialidadNuevoMedico[0];
    }
    else {
        agregarEspecialidad(crearEspecialidad(nombre_especialidad), listaDeEspecialidades);
        return listaDeEspecialidades[listaDeEspecialidades.length + 1];
    }
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
    var dni = Number(readlineSync.question("ingrese el numero de documento del paciente: "));
    var telefono = Number(readlineSync.question("ingrese el numero de telefono del paciente: "));
    var obra_social = readlineSync.question("ingrese la obra social del paciente: ");
    var nuevoPaciente = new Paciente_1["default"](nombre, dni, telefono, obra_social);
    listaDePacientes.push(nuevoPaciente);
    return nuevoPaciente;
}
//listado de especialidades
agregarEspecialidad(crearEspecialidad("odontologo"), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad("cardiologo"), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad("traumatologo"), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad("neurologo"), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad("ginecologo"), listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad("kinesiologo"), listaDeEspecialidades);
// crear horarios medicos
function crearHorariosMedicos(dias, horaDesde, horaHasta, listaDeHoras) {
    var diasLaborales = dias.split(',');
    var misHorariosPorDia = [];
    for (var i = 0; i < listaDeHoras.length; i++) {
        for (var j = 0; j < diasLaborales.length; j++) {
            if (listaDeHoras[i].getFecha() === diasLaborales[j]) {
                misHorariosPorDia.push(listaDeHoras[i]);
            }
        }
    }
    var misHorarios = misHorariosPorDia.filter(function (Horario) {
        return Horario.getHora() >= horaDesde &&
            Horario.getHora() <= horaHasta;
    });
    return misHorarios;
}
//sacar Turno
/*
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
    for (var i = 0; i < doctor.getHorarios().length; i++) {
        console.log("".concat(doctor.getHorarios()[i].getFecha(), " ").concat(doctor.getHorarios()[i].getHora(), " hs"));
    }
}
//crear turno
function crearTurno(numeroDeTurno, medico, paciente, horario) {
    var nuevoTurno = new Turno_1["default"](numeroDeTurno, medico, paciente, horario);
    listaDeTurnos.push(nuevoTurno);
    return nuevoTurno;
}
crearDoctores("Gimenez,4040", listaDeEspecialidades[0], horariosGimenez, listaDeDoctores);
crearDoctores("Raimundo,4018122", listaDeEspecialidades[1], horariosRaimundo, listaDeDoctores);
crearDoctores("Bilardo,1986", listaDeEspecialidades[2], horariosBilardo, listaDeDoctores);
crearDoctores("Malito,2129", listaDeEspecialidades[3], horariosMalito, listaDeDoctores);
crearDoctores("Perez,19226", listaDeEspecialidades[1], horariosPerez, listaDeDoctores);
crearDoctores("Martinez,1458", listaDeEspecialidades[4], horariosMartinez, listaDeDoctores);
crearDoctores("Oretto,99099", listaDeEspecialidades[5], horariosOretto, listaDeDoctores);
function sacarTurno() {
    console.log("con que especialista desea sacar turno?");
    for (var i = 0; i < listaDeDoctores.length; i++) {
        console.log(listaDeDoctores[i].getEspecialidad().getNombre());
    }
    var buscoEspecialista = readlineSync.question('ingrese la especialidad del medico: ');
    var listadoPorEspecialistas = listaDeDoctores.filter(function (Medico) {
        return Medico.getEspecialidad().getNombre() === buscoEspecialista;
    });
    console.log("los doctores disponibles son: ".concat(listadoPorEspecialistas[0].getNombre(), "\n    ").concat(listadoPorEspecialistas[0].getMatricula(), " \n    ").concat(listadoPorEspecialistas[0].getEspecialidad().getNombre()));
    console.log(" los horarios disponibles son:");
    for (var i = 0; i < listadoPorEspecialistas.length; i++) {
        mostrarDisponibilidad(listadoPorEspecialistas[i]);
    }
    var dia = readlineSync.question('ingrese el dia:');
    var hora = Number(readlineSync.question('ingrese la hora:'));
    var horarioSeleccionado = listadoPorEspecialistas[0].getHorarios().filter(function (Horario) {
        return Horario.getFecha() === dia &&
            Horario.getHora() === hora;
    });
    console.log("la fecha seleccionada es ".concat(horarioSeleccionado[0].getFecha(), " a las ").concat(horarioSeleccionado[0].getHora(), " hs"));
    crearTurno(numeroDeTurno + 1, listadoPorEspecialistas[0], listaDePacientes[listaDePacientes.length - 1], horarioSeleccionado[0]);
    numeroDeTurno = numeroDeTurno + 1;
    if (listaDePacientes.length === 0) {
        crearPaciente();
    }
    console.log("su turno es:\n    numero de turno: ".concat(numeroDeTurno, "\n    dia: ").concat(horarioSeleccionado[0].getFecha(), "\n    hora: ").concat(horarioSeleccionado[0].getHora(), "\n    doctor: ").concat(listadoPorEspecialistas[0].getNombre(), "\n    especialidad: ").concat(listadoPorEspecialistas[0].getEspecialidad().getNombre(), "\n    matricula: ").concat(listadoPorEspecialistas[0].getMatricula(), "\n    nombre del paciente: ").concat(listaDePacientes[listaDePacientes.length - 1].getNombre(), "\n    obra social: ").concat(listaDePacientes[listaDePacientes.length - 1].getObraSocial(), "\n    dni paciente: ").concat(listaDePacientes[listaDePacientes.length - 1].getDni(), "\n    telefono paciente: ").concat(listaDePacientes[listaDePacientes.length - 1].getTelefono(), "\n    "));
}
function seleccionarOpcion() {
    var numero = Number(readlineSync.question("seleccione una de las siguientes opciones:\n        1 para crear una nueva especialidad\n        2 para crear un nuevo medico\n        3 para crear un nuevo paciente\n        4 para sacar un turno\n        5 para salir del programa"));
    if (numero === 1) {
        agregarEspecialidad(crearEspecialidad(readlineSync.question("Ingrese el nombre de la especialidad: ")), listaDeEspecialidades);
        seleccionarOpcion();
    }
    else if (numero === 2) {
        var nombreYMatricula = readlineSync.question("ingrese el nombre del medico y la matricula separados por una coma (,)");
        var buscoEspecialidad = readlineSync.question("ingrese el nombre de la especialidad");
        var especialidadSeleccionada = buscarEspecialidad(buscoEspecialidad);
        var horarioNuevoMedico = crearHorariosMedicos(readlineSync.question("ingrese los dias que trabaja el medico separados por una coma (',')"), Number(readlineSync.question("ingrese el horario de inicio (debe ser a partir de las 8 en adelante")), Number(readlineSync.question("ingrese el horario de finalizacion (debe ser a hasta las 18 o menor")), horarios);
        crearDoctores(nombreYMatricula, especialidadSeleccionada, horarioNuevoMedico, listaDeDoctores);
        seleccionarOpcion();
    }
    else if (numero === 3) {
        crearPaciente();
        seleccionarOpcion();
    }
    else if (numero === 4) {
        sacarTurno();
        seleccionarOpcion();
    }
    else
        (console.log("muchas gracias por usar nuestro programa"));
}
seleccionarOpcion();
