// consigna: Realizar 3 clases “padres” distintas, y aplicar herencia en cada una.

import { runInThisContext } from "vm";


//clase padre

class Deportista {
    protected nombre:string;
    protected edad:number;
    protected fuerza:number;
    protected velocidad:number;
    protected resistencia:number;

    public constructor(nombre:string,edad:number,fuerza:number,velocidad:number,resistencia:number){
        this.nombre= nombre;
        this.edad= edad;
        this.fuerza= fuerza;
        this.velocidad= velocidad;
        this.resistencia=resistencia;
    }

    public correr():void{
        console.log(`esta corriendo a ${this.velocidad} km/h.`);
    }

    public saltar():void{
        console.log(`esta saltando con ${this.fuerza} de fuerza.`);
    }

    public resistir():void{
        console.log(`puede soportar este ritmo durante ${this.resistencia} minutos`);
    }
}


//clase hija

class Velocista extends Deportista {
    private reaccion:number;

    public constructor(nombre:string,edad:number,fuerza:number,velocidad:number,resistencia:number,reaccion:number){
        super(nombre,edad,fuerza,velocidad,resistencia);
        this.reaccion=reaccion;
        
    }

    public comenzarPartida():void{
        console.log(`realizo la partida en ${1000-this.reaccion} milisegundos.`);
    }    
}


//****************************************************************/

//clase padre

class Vacaciones {
    protected dias:number;
    protected lugar:string;
    protected gastos:number;
    protected gastoPorDia:number;

    public constructor(dias:number,lugar:string,gastos:number,gastoPorDia:number){
        this.dias=dias;
        this.lugar=lugar;
        this.gastos=gastos;
        this.gastoPorDia=gastoPorDia;
    }

   
    public comer():void{
       this.gastos= this.gastos+500
    }

    public pernoctar():void{
        this.dias=this.dias-1
    }

    public aumentarDias(cantidadDeDias:number):void{
        this.dias=this.dias+cantidadDeDias;
        this.gastos=this.gastos+(this.gastoPorDia*cantidadDeDias);
    }
}


//clase hija

class VacacionesEnHotel extends Vacaciones{
    private wifi:boolean;

    public constructor(dias:number,lugar:string,gastos:number,gastoPorDia:number,wifi:boolean){
        super(dias,lugar,gastos,gastoPorDia)
        this.wifi=wifi;
    }

    public tomarMasaje():void{
        this.gastos= this.gastos + 500;
    }

    public usarMinibar():void{
        this.gastos=this.gastos+350;
    }

    public conectarseAInternet(){
        if(this.wifi){
            console.log("esta conectado a internet")
        }
    }
}

// clase padre

class Ropa {
    protected nombre:string;
    protected material:string;
    protected marca:string;
    protected uso:boolean;

    public constructor(nombre:string,material:string,marca:string,uso:boolean){
        this.nombre=nombre;
        this.material=material;
        this.marca=marca;
        this.uso=uso;
    }

    public mostrarMarca():void{
        console.log(`esta es una prenda de ${this.marca}`)
    }

    public usarPrenda():void {
        if(this.uso){
            console.log(`la prenda ${this.nombre} esta siendo usado`)
        }
    }
}

//clase hija

class Pantalon extends Ropa{
    protected cantidadBolsillos:number;
    protected cierre:boolean;

    public constructor(nombre:string,material:string,marca:string,uso:boolean,cantidadBolsillos:number,cierre:boolean){
        super(nombre,material,marca,uso)
        this.cantidadBolsillos=cantidadBolsillos;
        this.cierre=cierre;
    }

    public abrirCierre():void{
        if(this.cierre){
            console.log("el cierre esta abierto")
        }
    }

    public cerrarCierre():void{
        if(this.cierre){
            console.log("el cierre esta cerrado")
        }
    }
}

