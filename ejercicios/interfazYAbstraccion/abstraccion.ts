/*Ejercicio 2
• Iniciar proyecto NPM
• Implementar las siguientes clases con las 
variables y métodos que crea necesarios:• AutoCiudad
• AutoDeportivo
• Camioneta
• Abstraer elementos en común entre dichas 
clases → pasarlos a una clase abstracta, y 
que las tres clases extiendan de ella*/



abstract class Vehiculo {
    
 abstract traccion:string;   
 abstract cierre:string;
 abstract velocidad:number;

 abstract aceleracion():void;
 abstract calefaccionar():void;
}


class AutoCiudad extends Vehiculo{
    traccion= "trasera";
    cierre= "centralizado";
    velocidad=0;

    aceleracion():void{
        this.velocidad=this.velocidad+60
    }
    calefaccionar(): void {
        console.log("el auto se esta calefaccionando por el calor del motor")
    }
    
}


class AutoDeportivo extends Vehiculo{
    traccion= "delantera";
    cierre="automatico a distancia";
    velocidad=0;

    aceleracion():void{
        this.velocidad=this.velocidad+120
    }
    calefaccionar(): void {
        console.log("el auto se esta calefaccionando por aire acondicionado")
    }
    modoCrucero():void{
        this.velocidad=100
    }
}

class Camioneta extends Vehiculo{
    traccion="4x4";
    cierre="manual";
    velocidad=0;

    aceleracion():void{
        this.velocidad=this.velocidad+80
    }

    calefaccionar():void{
        console.log("la camioneta posee la capacidad de calefaccionar por aire acondicionado o por temperatuda de motor");
    }

    remolcar():void{
        console.log("se ha activado el metodo remolcar... se activa traccion 4x4")
    }
}

let miautito= new AutoCiudad;
let miautitoDeportivo= new AutoDeportivo;
let miCamionetita= new Camioneta;


console.log("uso mi autito de ciudad")
miautito.aceleracion();
console.log("mi autito de ciudad ha acelerado y va a una velocidad de " + miautito.velocidad);
miautito.calefaccionar();

console.log("uso mi autito deportivo")
console.log(miautitoDeportivo.cierre);
miautitoDeportivo.modoCrucero();
console.log("el auto ahora que esta en modo crucero va a una velocidad de "+ miautitoDeportivo.velocidad);

console.log("uso mi camionetita")
miCamionetita.aceleracion();
miCamionetita.remolcar();
console.log("la camioneta esta andando a una velocidad de "+miCamionetita.velocidad);