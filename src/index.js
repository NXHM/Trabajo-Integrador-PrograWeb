import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import PaginaBaseCitas from './frontend/pages/citas/AlumnoCitas.js';
import VerCitas from './frontend/pages/citas/AlumnoCitas/AlumnoCitas.js';
import PaginaCitasPasadas from './frontend/pages/citas/AlumnoCitasPasadas/AlumnoCitasPasadas.js';
import PaginaCitasPasadasDocente from './frontend/pages/citas/DocenteCitas/DocenteCitas.js';
import BarraSuperior from './frontend/pages/citas/barras/BarraSuperior';
import BarraTareas from './frontend/pages/citas/barras/BarraTareas';
import LoginTab from './frontend/pages/login/LoginTab';
import Pagina3 from './frontend/pages/miperfil/Pagina3';
import Prcitas from './frontend/pages/procitas/Procitas';
import ReservaFecha from './frontend/pages/reserva/reservaFecha.js';
import MisHorarios from './frontend/pages/mis_horarios/mis_horarios.js';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
<VerCitas/>
<PaginaBaseCitas/>
<PaginaCitasPasadas/>
<PaginaCitasPasadasDocente/>
*/
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();