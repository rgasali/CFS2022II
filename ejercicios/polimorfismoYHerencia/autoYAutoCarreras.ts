/* consigna
*iniciar proyecto NPM y Git
*plantear diagrama de clases para clases Auto y AutoCarreras redefiniendo metodos.
*implementar el codigo
*subir a GitHub y avisae por Slack.*/

import { stringify } from "querystring";



class Auto {
    protected marca:string;
    protected motor:string;
    protected ruedas:number;
    protected velocidad:number;

    public constructor(marca:string,motor:string,ruedas:number,velocidad:number){
        this.marca=marca;
        this.motor=motor;
        this.ruedas=ruedas;
        this.velocidad=velocidad;
    }

    
    public frenar():void{
        this.velocidad= 0;
    }

    public doblar():void{
        console.log("el auto esta doblando");
    }

    public getVelocidad(){
        return this.velocidad;
    }

    public setVelocidad(nuevaVelocidad:number){
         this.velocidad=this.velocidad+nuevaVelocidad;
    }
    
    public acelerar(): void {
        this.setVelocidad(40);
    }
}

/****clase hija****** */

class AutoCarreras extends Auto{
    public drs: boolean;
    public tipoDeRuedas: string;
    public numeroDelAuto: number;

    public constructor(marca:string,motor:string,ruedas:number,velocidad:number,drs:boolean,tipoDeRuedas:string,numeroDelAuto:number){
        super(marca,motor,ruedas,velocidad)
        this.drs=drs;
        this.tipoDeRuedas=tipoDeRuedas;
        this.numeroDelAuto=numeroDelAuto;

    }

    public activarDrs():void{
        this.drs= true;
    }

    public desactivarDrs():void{
        this.drs= false;
    }

    public getDrs(){
        return this.drs;
    }

  

    public acelerar(): void {
        this.setVelocidad(140);
    }

}



//implementacion delcodigo

let miAutito =new Auto("fiat","v8",14,80);

let miF1= new AutoCarreras("ferrari","066/7",22,160,true,"duras",1);

console.log(miAutito);
miAutito.acelerar()
console.log(`ahora mi auto va a ${miAutito.getVelocidad()} km/h`);
console.log("ahora me subo a mi auto de carreras.");
console.log(miF1);
miF1.acelerar()
console.log(`acelero y ahora mi auto de carreras va a ${miF1.getVelocidad()} km/h`);
miF1.desactivarDrs();
console.log(`desactive el drs... ahora su valor es ${miF1.drs}`)

