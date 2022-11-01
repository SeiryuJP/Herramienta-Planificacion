import { Tarea } from "../classes";
import { tareaLista } from "../index";

const botonAgregar = document.querySelector('.agregar');
const txtInput = document.querySelector('.nuevaTarea');
const divTareas = document.querySelector('.zonaTarjetas');

export const crearTareaHTML = (tarea) => {
    const tareaHTML = `
        <div class="m-twelve s-twelve columns tarjetas">
            <div class="row">
                <div class="m-twelve s-twelve columns">
                    ${tarea.tarea}
                </div>
            </div>
            <div class="row contenidoTarjeta">
                <div class="m-twelve s-twelve columns">
                    <a class="options"><img src="./assets/menu-list-icon.png"></a>
                </div>
            </div>  
        </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = tareaHTML;

    divTareas.append(div.firstElementChild);
    
    return div;
}

botonAgregar.addEventListener('click', (event) => {
    const nuevaTarea = new Tarea(txtInput.value);
    tareaLista.nuevaTarea(nuevaTarea);
    crearTareaHTML(nuevaTarea);
    txtInput.value = '';
})