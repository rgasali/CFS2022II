import { clear } from 'console';
import * as fs from 'fs';
import * as readFileSync from 'readline-sync';
let readlineSync=require("readline-sync");

class RegistroAutomotor{
    private listaDeAutos:Array<Automovil>;

    public constructor(listaDeAutos:Array<Automovil>) {
        this.listaDeAutos= listaDeAutos;
    }
    public getListaDeAutos(){
        return this.listaDeAutos;
    }

    public mostarRegistro(){
      console.log(this.listaDeAutos); 
    }

    public setListaDeAutos(listaDeAutos:Array<Automovil>){
        this.listaDeAutos= listaDeAutos;
    }

    public agregarNuevoAuto(listaDeAutos:Array<Automovil>, automovil:Automovil){
        listaDeAutos.push(automovil);
    }

    public eliminarAutomovil(listaDeAutos:Array<Automovil>, posicion:Number){
        listaDeAutos.splice(Number(posicion),1);
    }

    public modificarAutomovil(listaDeAutos:Array<Automovil>, posicion:Number, automovil:Automovil){
        listaDeAutos[Number(posicion)]= automovil;
    }
}



class Automovil {
    private marca:string;
    private modelo:string;
    private anio:number;
    private kilometraje:number;
    private traccion: string;
    public color:string;
    private transmisionAutomatica: boolean;

    public constructor(marca:string, modelo:string, anio:number, kilometraje:number, traccion:string, color:string, transmisionAutomatica:boolean)
    {
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        this.kilometraje=kilometraje;
        this.traccion=traccion;
        this.color=color;
        this.transmisionAutomatica=transmisionAutomatica;
    }

}

class GestorDeArchivos {
    private arregloString: string[];
    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
    }
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
    public getArregloString(): string[] {
        return this.arregloString;
    }
}

function esTransmicionAutomatica(respuesta:string){
    if(respuesta ==="si"){
        return respuesta;
    }
}

function crearAutomovilDesdeTexto(automovil:string, listaDeAutos:Array<Automovil>):void{
    let propiedadesAutomovil=automovil.split(',');
    let marca:string=propiedadesAutomovil[0];
    let modelo:string=propiedadesAutomovil[1];
    let anio:number=Number(propiedadesAutomovil[2]);
    let kilometraje:number=Number(propiedadesAutomovil[3]);
    let traccion:string=propiedadesAutomovil[4];
    let color:string=propiedadesAutomovil[5];
    let transmisionAutomatica:boolean=Boolean(propiedadesAutomovil[6]);
    let nuevoAuto= new Automovil(marca,modelo,anio,kilometraje,traccion,color,transmisionAutomatica); 
    listaDeAutos.push(nuevoAuto);
}

function crearNuevoAutomovil(){
    let marca:string = readlineSync.question("ingrese la marca del automovil ");
    let modelo:string= readlineSync.question("ingrese el modelo del automovil ");
    let anio:number= Number(readlineSync.question("ingrese el año del automovil "));
    let kilometraje:number=Number(readlineSync.question("ingrese los Kilometros "));
    let traccion:string= readlineSync.question("ingrese el tipo de traccion del automovil ");
    let color:string= readlineSync.question("ingrese el color del automovil ");
    let transmisionAutomatica:boolean= Boolean(esTransmicionAutomatica(readlineSync.question("es de transmision automatica? contestar si o no")));
    let nuevoAuto= new Automovil(marca,modelo,anio,kilometraje,traccion,color,transmisionAutomatica);
    return nuevoAuto;
}



/***************************inicio del programa********************************/



let datosAutomoviles:GestorDeArchivos = new GestorDeArchivos('registroAutomotor.txt');
let listaDeAutos:Array<Automovil>=[];


//toma un archivo de texto y con los datos ahi guardados crea 
//un arreglo de automoviles


for(let i: number = 0; i < datosAutomoviles.getArregloString().length; i++){
    crearAutomovilDesdeTexto(datosAutomoviles.getArregloString()[i], listaDeAutos);
}

let ListaDeAutos = new RegistroAutomotor(listaDeAutos)

//muestra el arreglo de automoviles

ListaDeAutos.mostarRegistro();

//agregar manualmente un vehiculo y mostrarlo

ListaDeAutos.agregarNuevoAuto(listaDeAutos,crearNuevoAutomovil());
ListaDeAutos.mostarRegistro();

//eliminar un vehiculo y mostrar el registro actualiado

ListaDeAutos.eliminarAutomovil(listaDeAutos,Number(readlineSync.question("ingrese la posicion a eliminar")));
ListaDeAutos.mostarRegistro();


//modificar un auto del registro (sacar un auto y poner uno nuevo) y mostrar el registro actualizado

ListaDeAutos.modificarAutomovil(listaDeAutos,Number(readlineSync.question("ingrese la posicion a modificar")),crearNuevoAutomovil());
ListaDeAutos.mostarRegistro();