import { Tarea } from "../classes";
import { tareaLista } from "../index";

const botonAgregar = document.querySelector('.agregar');
const txtInput = document.querySelector('.nuevaTarea');
const divTareas = document.querySelector('.zonaTarjetas');
const caja = document.querySelector('.tarjetas');
const finales = document.querySelectorAll('.datosNueva');
const paneles = document.querySelectorAll('.panel');
const botonBorrar = document.querySelector('.delete');
const botonOpciones = document.querySelector('.options');
const botonCerrar = document.querySelector('.close');

export const crearTareaHTML = (tarea) => {
    const tareaHTML = `
        <div class="m-twelve s-twelve columns tarjetas" draggable="true">
            <div class="row contenidoTarjeta">
                <div class="m-twelve s-twelve columns">
                    <label class="nombreTarea">${tarea.tarea}</label>
                    <a class="options"><img src="./assets/menu-list-icon.png"></a>
                    <a class="delete"><img src="./assets/trash.png"></a>
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
    if (txtInput.value.length > 0){
        const tareaNueva = new Tarea(txtInput.value);
        tareaLista.nuevaTarea(tareaNueva);
        crearTareaHTML(tareaNueva);
        txtInput.value = '';
    }
})

divTareas.addEventListener('click', (event) => {
    if (event.target.classList.contains('.delete')) {
        for ( let i = divTareas.children.length-1; i >= 0; i--) {
            const elemento = divTareas.children[i];
            if( elemento.classList.contains('completed')){
                divTareas.removeChild(elemento);
            }
        }
    }
    else if (event.target.classList.contains('.delete')) {
        
    }
})

caja.addEventListener('dragstart', (event) => {
    console.log('start');
})

caja.addEventListener('dragend', (event) => {
    console.log('end');
})

for (const panel of paneles) {
    for (const final of finales) {
        panel.addEventListener('dragover', (event) => {
            event.preventDefault();
        })
        
        panel.addEventListener('drop', (event) => {
            (panel).insertBefore(caja, final);
        })
    }
    
}

botonOpciones.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal'),
    style = window.getComputedStyle(modal),
    display = style.getPropertyValue('display');
    modal.style.display = 'block';
})

botonCerrar.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal'),
    style = window.getComputedStyle(modal),
    display = style.getPropertyValue('display');
    modal.style.display = 'none';
})

botonBorrar.addEventListener('click', (event) => {
    caja.remove();
})