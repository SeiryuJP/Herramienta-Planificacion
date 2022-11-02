import {Tarea} from "./tarea";

export class TareaLista {

    constructor() {
        this.cargarLocalStorage();
    }

    nuevaTarea(tarea) {
        this.tarea.push(tarea);
        this.guardarLocalStorage();
    }

    eliminarTarea(id) {
        this.tarea = this.tarea.filter( tarea => tarea.id != id);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('tarea', JSON.stringify(this.tarea));
    }

    cargarLocalStorage() {
        this.tarea = (localStorage.getItem('tarea'))
                        ? JSON.parse(localStorage.getItem('tarea'))
                        :[];
        this.tarea = this.tarea.map(Tarea.fromJSON);
    }
}