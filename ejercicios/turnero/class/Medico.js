"use strict";
exports.__esModule = true;
var Medico = /** @class */ (function () {
    function Medico(nombre, matricula, especialidad, horarios) {
        this.nombre = nombre,
            this.matricula = matricula;
        this.especialidad = especialidad;
        this.horarios = horarios;
    }
    Medico.prototype.getMatricula = function () {
        return this.matricula;
    };
    Medico.prototype.getNombre = function () {
        return this.nombre;
    };
    Medico.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Medico.prototype.getEspecialidad = function () {
        return this.especialidad;
    };
    Medico.prototype.setEspecialidad = function (nuevaEspecialidad) {
        this.especialidad = nuevaEspecialidad;
    };
    Medico.prototype.getHorarios = function () {
        return this.horarios;
    };
    return Medico;
}());
exports["default"] = Medico;
