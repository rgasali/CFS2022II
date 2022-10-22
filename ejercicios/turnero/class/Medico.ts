import Especialidad from "./Especialidad";
import Horario from "./Horario";

export default class Medico {
    private nombre : string;
    private matricula: number;
    private especialidad : Especialidad;
    private horarios:Array<Horario>

    public constructor(nombre : string, matricula: number, especialidad: Especialidad, horarios:Array<Horario>) {
        this.nombre = nombre,
        this.matricula = matricula;
        this.especialidad = especialidad;
        this.horarios=horarios;
    }

    public getMatricula() : number {
        return this.matricula;
    }

    public getNombre() : string {
        return this.nombre;
    }

    public setNombre(nuevoNombre: string ) : void {
        this.nombre = nuevoNombre;
    }

    
    public getEspecialidad() : Especialidad {
        return this.especialidad;
    }

    public setEspecialidad(nuevaEspecialidad: Especialidad ) : void {
        this.especialidad = nuevaEspecialidad;
    }

    public getHorarios():Array<Horario>{
        return this.horarios;
    }

}