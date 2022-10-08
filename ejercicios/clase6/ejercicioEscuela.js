"use strict";
exports.__esModule = true;
var fs = require("fs");
// import * as readFileSync from 'readline-sync'
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota, DNI) {
        this.nombre = nombre;
        this.nota = nota;
        this.DNI = DNI;
    }
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.estaAprobado = function () {
        if (this.nota < 7) {
            console.log("El alumno esta desaprobado");
        }
        else {
            console.log("El alumno esta aprobado");
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(nombre, DNI, listaAlumnos) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.listaAlumnos = listaAlumnos;
    }
    Profesor.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(nombre, direccion, listaAlumnos, listaProfes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }
    Escuela.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    Escuela.prototype.getListaProfes = function () {
        return this.listaProfes;
    };
    return Escuela;
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
function crearProfesor(profesor, arrayProfesor, arrayAlumnos) {
    //transformo el elemento de tipo string en un objeto de tipo Profesor
    var propiedadProfe = profesor.split(','); //[Juan Perez, 333333333, Karen Simari, 22222222]
    var nombre = propiedadProfe[0];
    var DNI = Number(propiedadProfe[1]);
    var listaAlumnos = arrayAlumnos;
    var nuevoProfe = new Profesor(nombre, DNI, listaAlumnos);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoProfe);
}
//Eliminar profesor en una posicion y agregar uno nuevo
//instalamos readline-sync -- npm install readline-sync
function borrarrProfe(arregloProfe, position, arregloAlumnos) {
    //editar un profesor en el arreglo
    // let nombre: string = readlineSync.question("Ingrese el nombre: ")
    // let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
    // let listaAlumnos: Array<Alumno> = arregloAlumnos;
    // let nuevoProfe: Profesor = new Profesor(nombre,DNI,listaAlumnos);
    delete arregloProfe[position];
    // arregloProfe[position] = nuevoProfe;
}
function crearAlumno(alumno, arrayAlumnos) {
    var propiedadAlumno = alumno.split(',');
    var nombre = propiedadAlumno[0];
    var nota = Number(propiedadAlumno[1]);
    var DNI = Number(propiedadAlumno[2]);
    var nuevoAlumno = new Alumno(nombre, nota, DNI);
    arrayAlumnos.push(nuevoAlumno);
}
//Inicio programa
var datosAlumnos = new GestorDeArchivos('alumnos.txt');
var datos = new GestorDeArchivos('profes.txt');
var arrayProfe = [];
var alumno1 = new Alumno('Gloria Dominguez', 8, 252546346);
var alumno2 = new Alumno('Juan Dominguez', 5, 25254255);
alumno1.estaAprobado();
alumno2.estaAprobado();
var arrayAlumnos = [alumno1, alumno2];
for (var i = 0; i < datosAlumnos.getArregloString().length; i++) {
    crearAlumno(datosAlumnos.getArregloString()[i], arrayAlumnos);
}
//creo array de objetos
for (var i = 0; i < datos.getArregloString().length; i++) {
    //Creo Profe uno por uno leyendo el txt
    crearProfesor(datos.getArregloString()[i], arrayProfe, arrayAlumnos);
}
console.log(arrayProfe);
console.log(arrayAlumnos);
