import React, { useState } from "react";
import './citas.css';
import './Barras.css';
const BarraTareas = () => {
  const [desplegado, setDesplegado] = useState(false);

  const toggleDesplegado = () => {
    setDesplegado(!desplegado);
  };

  return (
    <div className={`barraTareas ${desplegado ? "desplegado" : ""}`}>
      <div className="botonDesplegar" onClick={toggleDesplegado}>
        <div class="iconoTresBarras">
            <div class="barra"></div>
            <div class="barra"></div>
            <div class="barra"></div>
        </div>

      </div>
      {desplegado && (
        <div className="contenidoDesplegable">
        <br></br>
        <button className="opciones">Principal</button>
        <br></br>
        <button className="opciones">Perfil</button>
        <br></br>
        <button className="opciones">Citas</button>
      </div>
      )}
    </div>
  );
};

export default BarraTareas;
