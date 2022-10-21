import * as fs from 'fs';
import * as readlineSync from 'readline-sync'
import Especialidad from './Especialidad';
import GestorDeArchivos from './GestorDeArchivos';
import Horario from './Horario';
import Medico from './Medico';
import Paciente from './Paciente'
import Turno from './Turno'


let doctores:GestorDeArchivos= new GestorDeArchivos('/archivosTxt/medicos.txt')
let listaDeDoctores:Array<Medico>;
let medico1

//crear paciente 

function crearPaciente(){
let nombre:string= readlineSync.question("Ingrese el nombre del paciente: ");
let dni:number= readlineSync.question("ingrese el numero de documento del paciente: ");
let telefono:number= readlineSync.question("ingrese el numero de telefono del paciente: ");
let obra_social:string= readlineSync.question("ingrese la obra social del paciente: ");

let nuevoPaciente: Paciente= new Paciente(nombre,dni,telefono,obra_social);
return nuevoPaciente;

}

//sacar Turno
let numeroDeTurno:number=0;

function sacarTurno(){
    let miTurno:number=numeroDeTurno+1;
    let medico:Medico= readlineSync.question("")
    let paciente:Paciente;
    let horario:Horario;  


    //medico
    //paciente
    //horario
}



crearPaciente();


