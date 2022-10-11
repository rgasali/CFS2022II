// //---------------------------------EJEMPLO DE HERENCIA

// class Televisor {
//     private volumen : number;
//     protected canal : number;
//     private estaPrendido: boolean;

//     public constructor() {
//         this.volumen = 50;
//         this.canal = 25;
//         this. estaPrendido = true;
//     }

//     public subirVolumen() : void {
//         this.volumen = this.volumen + 1;
//     }
//     public bajarVolumen() : void {
//         this.volumen  = this.volumen - 1; 
//     }
//     public apagarTele() {
//         this.estaPrendido = false;
//     }
//     public prenderTele() {
//         this.estaPrendido = true;
//     }
//     public getCanal() {
//         return "esta en el canal " + this.canal;
//     }
//     public setCanal(canal: number) {
//         this.canal = canal;
//     }
// }

// //Mi clase SmartTV va a ser heredada de mi clase Televisor

// class SmartTV extends Televisor {

//      public estaConectado : boolean;

//     public constructor(estaConectado :boolean) {
//       super();
//       /*  this.volumen = 50;
//         this.canal = 25;
//         this. estaPrendido = true;*/
//       this.estaConectado = estaConectado;
//     }

//     public mirarNetflix() {
//         console.log("mirando netflix..")
//     }

//     // public getCanalTV(): number {
//     //     return this.canal;
//     // }
// }


// let miSmart : SmartTV= new SmartTV(true);
// console.log(miSmart);
// miSmart.bajarVolumen();
// console.log(miSmart);

// console.log(miSmart.getCanal())

//-------------------------------------------------------------------------------------
//Ejemplo de composicion

import Pantalla from './clases/Pantalla';
import Boton from './clases/Boton';




class Enchufe {
    constructor(){

    }
}

class Tele {
    private pantalla : Pantalla;
    private botonVolumen: Boton;
    private enchufe : Enchufe;

    constructor(pantalla : Pantalla, botonVolumen: Boton, enchufe : Enchufe){
        this.pantalla= pantalla;
        this.botonVolumen = botonVolumen;
        this.enchufe = enchufe;
    }
}

let boton : Boton = new Boton();

let pantalla : Pantalla = new Pantalla(42);

let enchufe : Enchufe = new Enchufe();

let miTV : Tele = new Tele( pantalla,boton, enchufe);





