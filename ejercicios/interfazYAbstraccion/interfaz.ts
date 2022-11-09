//Ejercicio 1


//• Definir la interfaz Auto
interface Auto {
    acelerar():void;
    frenar():void;
    getVelocidadActual():number;
}


//• Implementar la clase AutoCarrera

class AutoCarrera implements Auto {
    
    private velocidadActual:number=0;
    private drs:boolean=false;
   
    public constructor(velocidadActual:number,drs:boolean){
        this.velocidadActual=velocidadActual;
        this.drs=drs;
    }
   
    public getVelocidadActual():number{
        return this.velocidadActual
    };
    
    public acelerar():void{
        this.velocidadActual=this.velocidadActual+100;
        this.drs=true;
        console.log("el auto ha acelerado y ahora va a una velocidad de "+this.velocidadActual)
        console.log("el drs esta activado..."+ this.drs)
    };
    public frenar():void{
        this.velocidadActual=0;
        this.drs=false;
        console.log("el vehiculo ha frenado.. su velocidad actual paso a ser "+ this.velocidadActual)
        console.log("el drs esta desactivado..."+ this.drs)
    };
}


//• Implementar la clase AutoFamiliar  */

class AutoFamiliar implements Auto{
    
    private velocidadActual:number=0;
    private aireAcondicionado: boolean= true;
    
    public constructor(velocidadActual:number, aireAcondicionado:boolean){
        this.velocidadActual=velocidadActual;
        this.aireAcondicionado=aireAcondicionado;
    }

    
    acelerar():void{
        this.velocidadActual= this.velocidadActual+60;
    };

    frenar():void{
        this.velocidadActual=0;
    };

    getVelocidadActual():number{
        return this.velocidadActual;
    };

    calefaccionar():void{
        console.log("se ha activado la calefaccion en el auto");
    };
}





