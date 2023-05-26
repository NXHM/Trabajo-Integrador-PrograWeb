import React, { useState } from "react";
import './citas.css';
import './Barras.css';


const BarraTareas = (props) => {
  
  return (
    <div className={`barraTareas ${props.desplegado ? "desplegado" : ""}`}>
      
      {props.desplegado && (
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
const BarraSuperior = (props) => {
  const toggleDesplegado = () => {
    props.setDesplegado(!props.desplegado);
  };
  return (

    <div>
      <div className="barra-superior">
        Atencion de Citas
        <div className="botonDesplegar" onClick={toggleDesplegado}>
          <div class="iconoTresBarras">
            <div class="barra"></div>
            <div class="barra"></div>
            <div class="barra"></div>
          </div>
        </div>
      </div>
      
      <hr className={`lineaSeparadora ${props.desplegado ? "desplegado" : ""}`}/>
    </div>

  );
};

function Barras(){
  const [desplegado, setDesplegado] = useState(false);
  return(
    
    <div>
      <BarraSuperior desplegado={desplegado} setDesplegado={setDesplegado} />
      <BarraTareas desplegado={desplegado} />
    </div>  
  );
}
export default Barras;
