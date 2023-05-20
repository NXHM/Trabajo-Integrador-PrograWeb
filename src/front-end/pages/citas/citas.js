import React from "react";
import BarraTareas from "./BarraTareas";
import BarraSuperior from './BarraSuperior';

const App = () => {
  return (
    <div >
      <BarraSuperior />
      <BarraTareas />
      <button className="crearCita">Programar una cita</button>
      <h1 className="Titulo">Mis citas</h1>

      <hr></hr>

      <button className="citasPasadas">Ver Citas Pasadas</button>
      <p>Citas de asesoría reservadas:</p>
    </div>
  );
};

export default App;
