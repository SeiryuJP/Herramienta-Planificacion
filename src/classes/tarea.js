export class Tarea {
    static fromJSON({id, tarea}) {
        const tempTarea = new tarea(tarea);
        tempTarea.id = id;
        tempTarea.creado = creado;
        
        return tempTarea;
    }

    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.creado = new Date();
    }
}