import React, { useState } from "react";

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
          <a href="http://ulima.edu.pe" target="_blank" rel="noreferrer">Inicio</a><br></br>
          <br></br>
          <a href="http://ulima.edu.pe" target="_blank" rel="noreferrer">Perfil</a><br></br>
          <br></br>
          <a href="http://ulima.edu.pe" target="_blank" rel="noreferrer">Citas</a><br></br>
        </div>
      )}
    </div>
  );
};

export default BarraTareas;
