import Telefono from "./Telefono";

class TelefonoConRadio extends Telefono{
    private frecuenciaActual:number;
    private volumenActual:number;

    public constructor(frecuenciaActual:number,volumenActual:number){
        super(true, 100);
        this.frecuenciaActual=frecuenciaActual;
        this.volumenActual=volumenActual;
    }

    public verFrecuenciaActual(){
        console.log("viendo la frecuencia actual");
    }

    public subirVolumen(){
        console.log("aumentando volumen");
    }
}