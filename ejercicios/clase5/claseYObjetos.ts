class Pez{
  public peso: number;
  public velocidadDeNado: number;
  readonly modoDeDesplazamiento: string;
  public tamaño: number;
  readonly esDeAguaDulce: boolean;
  public edad: number;

  public constructor(peso: number, velocidadDeNado: number, modoDeDesplazamiento: string, tamaño:number, esDeAguaDulce:boolean, edad:number){
    this.peso= peso;
    this.velocidadDeNado= velocidadDeNado;
    this.modoDeDesplazamiento= modoDeDesplazamiento;
    this.tamaño= tamaño;
    this.esDeAguaDulce= esDeAguaDulce;
    this.edad= edad;
  }
  public comer():string {
     this.peso= this.peso + 0.1;
     return "ahora el peso es "+ this.peso;
  }

  setVelocidadDeNado(velocidadDeNado:number){
    this.velocidadDeNado= velocidadDeNado;
  }

  getVelocidadDeNado(){   
    return this.velocidadDeNado;
   
  }

  public nadar() {
    return console.log("esta nadando a "+ this.velocidadDeNado +" Kilometros por hora ");
    
  }

}


 let tiburon= new Pez(150,20,"profundo",1600,false,10);
   tiburon.comer();
   tiburon.nadar();
   tiburon.edad;
   tiburon.peso;

 let pezPayaso= new Pez(0.3, 3, "semiprofundo", 35, false, 3);
   pezPayaso.comer();
   pezPayaso.nadar();
   console.log(pezPayaso.edad);
   console.log(pezPayaso.esDeAguaDulce);