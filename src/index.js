import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import PaginaBaseCitas from './front-end/pages/citas/AlumnoCitas.js';
import VerCitas from './front-end/pages/citas/AlumnoCitas/AlumnoCitas.js';
import PaginaCitasPasadas from './front-end/pages/citas/AlumnoCitasPasadas/AlumnoCitasPasadas.js';
import PaginaCitasPasadasDocente from './front-end/pages/citas/DocenteCitas/DocenteCitas.js';
import BarraSuperior from './front-end/pages/citas/barras/BarraSuperior';
import BarraTareas from './front-end/pages/citas/barras/BarraTareas';
import LoginTab from './front-end/pages/login/LoginTab';
import Pagina3 from './front-end/pages/miperfil/Pagina3';
import Prcitas from './front-end/pages/procitas/Procitas';
import ReservaFecha from './front-end/pages/reserva/reservaFecha.js';
import MisHorarios from './front-end/pages/mishorarios/mishorarios.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
<VerCitas/>
<PaginaBaseCitas/>
<PaginaCitasPasadas/>
<PaginaCitasPasadasDocente/>
*/
root.render(
  <React.StrictMode>
  
    <VerCitas/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
