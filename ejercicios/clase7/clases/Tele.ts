import Boton from "./Boton";
import Enchufe from "./Enchufe";
import Pantalla from "./Pantalla";

export default class Tele {
    private pantalla : Pantalla;
    private botonVolumen: Boton;
    private enchufe : Enchufe;

    constructor(pantalla : Pantalla, botonVolumen: Boton, enchufe : Enchufe){
        this.pantalla= pantalla;
        this.botonVolumen = botonVolumen;
        this.enchufe = enchufe;
    }
}