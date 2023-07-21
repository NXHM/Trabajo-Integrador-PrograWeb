import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import GridCardCitas from "../gridCardCitas";
import "../barras/citas.css";
import Table from "../infoProfe";
const PaginaCitasPasadas = () => {
    return (
      <div id="pagCitaPasada" >
        <button className="crearCita">Programar una cita</button>
        <h1 className="Titulo">Mis citas</h1>
  
        
  
        <button className="citasPasadas">Ver Citas Pasadas</button>
        
        <GridCardCitas/>

  
      </div>
    );
  };
  
  export default PaginaCitasPasadas;
  