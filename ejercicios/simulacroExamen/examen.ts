/*Ejercicio 1:
Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).
class Dog {
 public name: string;
 constructor(name: string) {
   this.name = name;
 }
 public makeSound(): void {
   console.log ('wuff wuff\n');
 }
}
class Cat {
 public name: string;
 constructor(name: string) {
   this.name = name;
 }
  public makeSound(): void {
   console.log('meow meow\n');
 }
}
let minino: Cat = new Cat('Pocky');
pocky.makeSound(); // -> meow meow
let firulais: Dog = new Dog('Pocky');
toshii.makeSound(); // -> wuff wuff   

******************* RESOLUCION DEL EJERCICIO ********************/

class Animal {
 public name: string;
  constructor(name: string) {
   this.name = name;
 }
 public makeSound(): void {
   
 }
}

class Cat extends Animal {
    public constructor(name:string){
        super(name);
    }
    public makeSound(): void {
        console.log('meow meow\n');
    }
}

class Dog extends Animal {
    public constructor(name:string){
        super(name);
    }
    public makeSound(): void {
        console.log ('wuff wuff\n');
    }
}

let minino: Cat = new Cat('Pocky');
minino.makeSound(); // -> meow meow

let firulais: Dog = new Dog('Pocky');
firulais.makeSound(); // -> wuff wuff 


/*************************************************************
 * Ejercicio 2:
Responder las siguientes preguntas
Que es un objeto?

 Un objeto es la instancia de una clase, el cual posee metodos y atributos.

Que es una clase?

 Una clase es un molde del cual se genera un objeto

A que se llama metodo constructor?

 Metodo constructor es una funcion por mdio de la cual una clase puede construir objetos.

Que son los modificadores de acceso?

 Los modificadores de acceso son la capacidad que permite a una clase que sus metodos y atributos puedan ser acedidos.
 Estos pueden ser Privados(solo pueden modificarse desde la propia clase)
                  Protegido(solo puede modificarse por su propia clase o por la clases que lo hereden)
                  Public(puede modificarse desde cualquier clase)
                  Readonly(fuera de la propia clase, puede ser leida pero no modificada)

Que diferencia hay entre uno privado y uno protegido?
    Privados(solo pueden modificarse desde la propia clase)
                  Protegido(solo puede modificarse por su propia clase o por la clases que lo hereden)

Cuando se usa el this?
    cuando se quiere hacer referencia a determinado atributo definido en una clase vinculandolo con
    el valor pasado por parametro dentro del constructor ya que sino el alcance de la misma no podria ser utilizada fuera de la clase

Cuando se usa el super?
    cuando se extiende de una clase padre a una clase hija, nos permite traer los atributos y metodos de la clase padre.
    para no volver a definirlos.
A que se llama sub-clase, o clase hija?
    clase Hija es aqueya que hereda los metodos y atributos de otra clase. 
 
 *************************************************************************************************
 
 
 Ejercicio 3:
Utilizar lo aprendido y crear una Clase, la cual tenga metedos y 
atributos, una instancia de dicha clase, y por ultimo aplicar
 lo aprendido de Herencia y crear una clase que la herede.*/


 class Humano {
    public nombre:string;
    public arma:string;
    public edad:number;

    public constructor(nombre:string,arma:string,edad:number){
        this.nombre=nombre;
        this.arma=arma;
        this.edad=edad;
    }

    public atacar():void{
        console.log("ataco con mis arma")
    }
    
 }

class Soldado extends Humano{
    public constructor(nombre,arma,edad){
        super(nombre,arma,edad)
    }

    public atacar ():void{
        console.log("ataco con mi arma y mis puños");
    }
}

class Mago extends Humano{
    public hechizo:string;
    public constructor(nombre,arma,edad,hechizo:string){
        super(nombre,arma,edad)
    }

    public atacar ():void{
        console.log("ataco con un conjuro");
    }

    public defender():void{
        console.log(`me defiendo con mi ${this.hechizo}`);
    }
}

let nortenio:Humano =new Humano("pepito","espada",33);

nortenio.atacar();