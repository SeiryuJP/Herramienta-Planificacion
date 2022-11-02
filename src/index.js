import './css/normalize.css';
import './css/skeleton.css';
import './css/styles.scss';
import './js/acordeon';
import './js/cambioTema';

import {Tarea, TareaLista} from './classes';
import { crearTareaHTML } from './js/componentes';

export const tareaLista = new TareaLista();
tareaLista.tarea.forEach(crearTareaHTML);