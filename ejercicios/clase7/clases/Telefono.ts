export default class Telefono{
    private estaPrendido:boolean;
    private bateriaActual:number;

    public constructor(estaPrendido:boolean,bateriaActual:number){
        this.estaPrendido=estaPrendido;
        this.bateriaActual=bateriaActual;
    }
    
    public mandarMensaje(){
        console.log("mandando mensaje");
    }

    public hacerLlamada(){
        console.log("haciendo llamada");
    }

    public prenderApagar(){
        console.log("prendiendo/apagando");
    }
    
}