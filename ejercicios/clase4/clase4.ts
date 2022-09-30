class Auto {
    private velocidad:number;
    private color:string;
    private estaEncendido: boolean;

   public constructor(velocidad:number, color:string, estaEncendido: boolean){
        this.velocidad= velocidad;
        this.color= color;
        this.estaEncendido= estaEncendido;
    }

    public aumentarVelocidad():void{
        this.velocidad= this.velocidad +10;
    }

    public reducirVelocidad(): void{
        this.velocidad= this.velocidad -10; 
    }

    public frenar(): void{
        this.velocidad= 0;
        console.log("el auto se ha frenado");
    }

    public encenderAuto(): void{
        this.estaEncendido= true;
    }

    public apagarAuto(): void{
        this.estaEncendido= false;
    }

    
}

let fiat600= new Auto(70, "blanco", true );


fiat600.aumentarVelocidad();
console.log(fiat600);
fiat600.frenar();
console.log(fiat600);
