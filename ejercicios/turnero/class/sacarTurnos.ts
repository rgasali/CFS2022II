import * as fs from 'fs';
import * as readlineSync from 'readline-sync'
import Especialidad from './Especialidad';
import GestorDeArchivos from './GestorDeArchivos';
import Horario from './Horario';
import Medico from './Medico';
import Paciente from './Paciente'
import Turno from './Turno'


let doctores:GestorDeArchivos= new GestorDeArchivos('./archivosTxt/medicos.txt')
let listaDeDoctores:Array<Medico>=[];



//crear paciente 

function crearPaciente(){
let nombre:string= readlineSync.question("Ingrese el nombre del paciente: ");
let dni:number= readlineSync.question("ingrese el numero de documento del paciente: ");
let telefono:number= readlineSync.question("ingrese el numero de telefono del paciente: ");
let obra_social:string= readlineSync.question("ingrese la obra social del paciente: ");

let nuevoPaciente: Paciente= new Paciente(nombre,dni,telefono,obra_social);
return nuevoPaciente;

}

//crear doctores

function crearDoctores(doctores:string, listaDeDoctores:Array<Medico>){
let propiedadDoctores= doctores.split(',');
//nombre,matricula,especialidad
let nombre:string =propiedadDoctores[0];
let matricula:number= Number(propiedadDoctores[1]);
let especialidad:Especialidad= new Especialidad(propiedadDoctores[2]);
let doctor:Medico= new Medico(nombre,matricula,especialidad);
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
let datosMedicos:GestorDeArchivos= new GestorDeArchivos('medicos.txt');
for (let i: number = 0; i < datosMedicos.getArregloString().length; i++) {
    crearDoctores(datosMedicos.getArregloString()[i], listaDeDoctores)
}

console.log (listaDeDoctores);
crearPaciente();


