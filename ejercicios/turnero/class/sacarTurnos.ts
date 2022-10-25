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
let listaDeEspecialidades:Array<Especialidad>=[];


//crear especialidad:

function crearEspecialidad(){
    let nombre:string= readlineSync.question("Ingrese el nombre de la especialidad: ");
    let nuevaEspecialidad: Especialidad= new Especialidad(nombre);
    return nuevaEspecialidad;
}

//agregar especialidad:

function agregarEspecialidad(especialidad:Especialidad, listaDeEspecialidades:Array<Especialidad>){
listaDeEspecialidades.push(especialidad);
}


//crear doctores

function crearDoctores(doctores:string,especialidadMedica:Especialidad, horarioLaboral:Array<Horario>, listaDeDoctores:Array<Medico>){
let propiedadDoctores= doctores.split(',');
//nombre,matricula,especialidad
let nombre:string =propiedadDoctores[0];
let matricula:number= Number(propiedadDoctores[1]);
let doctor:Medico= new Medico(nombre,matricula,especialidadMedica,horarioLaboral);
listaDeDoctores.push(doctor);
}

//crear paciente 

function crearPaciente(){
    let nombre:string= readlineSync.question("Ingrese el nombre del paciente: ");
    let dni:number= readlineSync.question("ingrese el numero de documento del paciente: ");
    let telefono:number= readlineSync.question("ingrese el numero de telefono del paciente: ");
    let obra_social:string= readlineSync.question("ingrese la obra social del paciente: ");
    
    let nuevoPaciente: Paciente= new Paciente(nombre,dni,telefono,obra_social);
    return nuevoPaciente;
    
    }


//listado de especialidades

agregarEspecialidad(crearEspecialidad(),listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(),listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(),listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(),listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(),listaDeEspecialidades);
agregarEspecialidad(crearEspecialidad(),listaDeEspecialidades);

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
let horarios:Array<Horario>=[
    new Horario('lunes',8),
    new Horario('lunes',9),
    new Horario('lunes',10),
    new Horario('lunes',11),
    new Horario('lunes',12),
    new Horario('lunes',13),
    new Horario('lunes',14),
    new Horario('lunes',15),
    new Horario('lunes',16),
    new Horario('lunes',17),
    new Horario('lunes',18),
    new Horario('martes',8),
    new Horario('martes',9),
    new Horario('martes',10),
    new Horario('martes',11),
    new Horario('martes',12),
    new Horario('martes',13),
    new Horario('martes',14),
    new Horario('martes',15),
    new Horario('martes',16),
    new Horario('martes',17),
    new Horario('martes',18),
    new Horario('miercoles',8),
    new Horario('miercoles',9),
    new Horario('miercoles',10),
    new Horario('miercoles',11),
    new Horario('miercoles',12),
    new Horario('miercoles',13),
    new Horario('miercoles',14),
    new Horario('miercoles',15),
    new Horario('miercoles',16),
    new Horario('miercoles',17),
    new Horario('miercoles',18),
    new Horario('jueves',8),
    new Horario('jueves',9),
    new Horario('jueves',10),
    new Horario('jueves',11),
    new Horario('jueves',12),
    new Horario('jueves',13),
    new Horario('jueves',14),
    new Horario('jueves',15),
    new Horario('jueves',16),
    new Horario('jueves',17),
    new Horario('jueves',18),
    new Horario('viernes',8),
    new Horario('viernes',9),
    new Horario('viernes',10),
    new Horario('viernes',11),
    new Horario('viernes',12),
    new Horario('viernes',13),
    new Horario('viernes',14),
    new Horario('viernes',15),
    new Horario('viernes',16),
    new Horario('viernes',17),
    new Horario('viernes',18),
];

let horariosGimenez: Array<Horario>=horarios.filter(function(Horario){
    
    return Horario.getFecha()=== 'lunes' ||
           Horario.getFecha()=== 'miercoles' ||
           Horario.getFecha()=== 'viernes'
    }) 

let horariosRaimundo:Array<Horario>=horarios.filter(function(Horario){
    
    return Horario.getHora()<13     
    }) 

let horariosBilardo:Array<Horario>=horarios.filter(function(Horario){
    
    return Horario.getHora()<14     
    })

let horariosMalito:Array<Horario>=horarios.filter(function(Horario){
    
    return Horario.getHora()>12     
    })

let horariosPerez: Array<Horario>=horarios.filter(function(Horario){
    
    return Horario.getFecha()=== 'martes' ||
           Horario.getFecha()=== 'jueves'
    }) 

let horariosMartinez: Array<Horario>=horarios.filter(function(Horario){
    
    return Horario.getFecha()=== 'martes' &&
           Horario.getHora()>12 ||
           Horario.getFecha()=== 'viernes' &&
           Horario.getHora()<14
    })

let horariosOretto: Array<Horario>=horarios.filter(function(Horario){
    
    return Horario.getFecha()=== 'lunes' ||
           Horario.getFecha()=== 'martes' ||
           Horario.getFecha()=== 'jueves' ||
           Horario.getFecha()=== 'viernes'

    })

    
//mostrar horarios disponibles

function mostrarDisponibilidad(doctor:Medico){
    for (let i=0; i>doctor.getHorarios.length;i++){
   return console.log(`${doctor.getHorarios()[i].getFecha()} ${doctor.getHorarios()[i].getHora()}` )
}}


//seleccionar horario
function seleccionarHorario(listaDeHorarios:Array<Horario>,dia:string, hora:number){
    let horarioSeleccionado:Array<Horario>=listaDeHorarios.filter(function(Horario){
       
        return Horario.getFecha()=== dia &&
               Horario.getHora()=== hora
    })
}
   

crearDoctores("Gimenez,4040",listaDeEspecialidades[0],horariosGimenez,listaDeDoctores);
crearDoctores("Raimundo,4018122",listaDeEspecialidades[1],horariosRaimundo,listaDeDoctores);
crearDoctores("Bilardo,1986",listaDeEspecialidades[2],horariosBilardo,listaDeDoctores);
crearDoctores("Malito,2129",listaDeEspecialidades[3],horariosMalito,listaDeDoctores);
crearDoctores("Perez,19226",listaDeEspecialidades[1],horariosPerez,listaDeDoctores);
crearDoctores("Martinez,1458",listaDeEspecialidades[4],horariosMartinez,listaDeDoctores);
crearDoctores("Oretto,99099",listaDeEspecialidades[5],horariosOretto,listaDeDoctores);





console.log (listaDeDoctores);

//crearPaciente();

function sacarTurno(){


    console.log("con que especialista desea sacar turno?")

    let buscoEspecialista:string=readlineSync.question('ingrese la especialidad del medico: ')

    let listadoPorEspecialistas: Array<Medico>=listaDeDoctores.filter(function(Medico){
    
        return Medico.getEspecialidad().getNombre()=== buscoEspecialista;
    }) 

    console.log(`los doctores disponibles son: ${listadoPorEspecialistas[0].getNombre()}
    ${listadoPorEspecialistas[0].getMatricula()} 
    ${listadoPorEspecialistas[0].getEspecialidad().getNombre()}` );

    console.log(" los horarios disponibles son:");

    for(let i= 0; i>listadoPorEspecialistas.length; i++){
       mostrarDisponibilidad(listadoPorEspecialistas[0])
    }

    let dia: string= readlineSync.question('ingrese el dia:');
    let hora: number= readlineSync.question('ingrese la hora:');

    console.log(`la fecha seleccionada es ${seleccionarHorario(listadoPorEspecialistas[0].getHorarios(),dia,hora)}`)

}


sacarTurno();










