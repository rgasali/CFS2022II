import Telefono from "./Telefono";

class TelefonoConCamara extends Telefono{

    public constructor(){
        super(false, 100)
    }

    public sacarFoto(){
        console.log("sacando foto");
    }
}