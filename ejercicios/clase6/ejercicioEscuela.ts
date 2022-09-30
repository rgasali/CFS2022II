import * as fs from 'fs';
// import * as readFileSync from 'readline-sync'


class Alumno {
    private nombre: string;
    private nota: number;
    private DNI: number;
    public constructor(nombre: string, nota: number, DNI: number) {
        this.nombre = nombre;
        this.nota = nota;
        this.DNI = DNI;
    }
    public getNota() {
        return this.nota;
    }
    public estaAprobado() {
        if (this.nota < 7) {
            console.log("El alumno esta desaprobado")
        } else {
            console.log("El alumno esta aprobado")
        }
    }
}
class Profesor {
    private nombre: string;
    private DNI: number;
    private listaAlumnos: Array<Alumno>;
    public constructor(nombre: string, DNI: number, listaAlumnos: Array<Alumno>) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.listaAlumnos = listaAlumnos;
    }
    public getListaAlumnos() {
        return this.listaAlumnos;
    }
}
class Escuela {
    private nombre: string;
    private direccion: string;
    private listaAlumnos: Array<Alumno>;
    private listaProfes: Array<Profesor>;
    public constructor(nombre: string, direccion: string, listaAlumnos: Array<Alumno>, listaProfes: Array<Profesor>) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }
    public getListaAlumnos() {
        return this.listaAlumnos;
    }
    public getListaProfes() {
        return this.listaProfes;
    }
    
}


class GestorDeArchivos {
    private arregloString: string[];
    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
    }
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
    public getArregloString(): string[] {
        return this.arregloString;
    }
}

function crearProfesor(profesor: string, arrayProfesor: Array<Profesor>, arrayAlumnos: Array<Alumno>): void {
    //transformo el elemento de tipo string en un objeto de tipo Profesor
    let propiedadProfe = profesor.split(','); //[Juan Perez, 333333333, Karen Simari, 22222222]
    let nombre: string = propiedadProfe[0];
    let DNI: number = Number(propiedadProfe[1]);
    let listaAlumnos: Array<Alumno> = arrayAlumnos;
    let nuevoProfe : Profesor = new Profesor(nombre,DNI,listaAlumnos);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoProfe);
}

//Eliminar profesor en una posicion y agregar uno nuevo
//instalamos readline-sync -- npm install readline-sync
function borrarrProfe(arregloProfe: Array<Profesor>,  position: number, arregloAlumnos?: Array<Alumno>): void {
    //editar un profesor en el arreglo
    // let nombre: string = readlineSync.question("Ingrese el nombre: ")
    // let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
    // let listaAlumnos: Array<Alumno> = arregloAlumnos;
   
    // let nuevoProfe: Profesor = new Profesor(nombre,DNI,listaAlumnos);
    delete arregloProfe[position];
    // arregloProfe[position] = nuevoProfe;
 
}

function crearAlumno(alumno:string, arrayAlumnos: Array<Alumno>): void{
    let propiedadAlumno= alumno.split(',');
    let nombre: string= propiedadAlumno[0];
    let nota: number= Number(propiedadAlumno[1]);
    let DNI: number= Number(propiedadAlumno[2]);
    let nuevoAlumno: Alumno = new Alumno(nombre,nota,DNI);
    arrayAlumnos.push(nuevoAlumno);
}



//Inicio programa
let datosAlumnos: GestorDeArchivos= new GestorDeArchivos('alumnos.txt');
let datos: GestorDeArchivos = new GestorDeArchivos('profes.txt');
let arrayProfe: Array<Profesor> = [];
let alumno1 : Alumno = new Alumno('Gloria Dominguez', 8, 252546346);
let alumno2 : Alumno = new Alumno('Juan Dominguez', 5, 25254255);
alumno1.estaAprobado();
alumno2.estaAprobado();
let arrayAlumnos : Array<Alumno> = [alumno1,alumno2];

for (let i: number = 0; i < datosAlumnos.getArregloString().length; i++) {
    crearAlumno(datosAlumnos.getArregloString()[i], arrayAlumnos)
}
//creo array de objetos
for (let i: number = 0; i < datos.getArregloString().length; i++) {
    //Creo Profe uno por uno leyendo el txt
    
    crearProfesor(datos.getArregloString()[i], arrayProfe, arrayAlumnos);
}
console.log(arrayProfe);
console.log(arrayAlumnos);














