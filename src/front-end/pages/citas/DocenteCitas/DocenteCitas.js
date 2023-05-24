import React from "react";
import BarraTareas from "../barras/BarraTareas";
import BarraSuperior from '../barras/BarraSuperior';
import "../barras/citas.css";

import Table from "./infoAlumno.js";

const PaginaCitasPasadasDocente = () => {
    return (
      <div >
        <BarraSuperior />
        <BarraTareas />
        <button className="crearCita">Programar una cita</button>
        <h1 className="Titulo">Mis citas</h1>
  
        <hr></hr>
  
        <button className="citasPasadas">Ver Citas Pasadas</button>
        <p className="subtitulo">Citas de asesoría reservadas:</p>
  
        <button className="citaX">
  
          <Table />
  
          <div className="contenerdorImagen">
            <img className="fotoProfesor" src="https://b7q5h9f5.rocketcdn.me/wp-content/uploads/2023/03/img_c_641ab2fcef1a8-NDLaLn-1024x683.jpeg"></img>
          </div>
  
          <div className="fechaCita">Lunes, 24 de abril de 2023 - 08:00 am</div>
          <div className="cursoCita" >Curso: Programacion Web</div>
  
          <a className="enlaceZoom" href="http://ulima.edu.pe" target="_blank" rel="noreferrer">Enlace a Zoom</a>
           
          <button className="cancelarBoton" >Calificar</button>
          
        </button>
  
  
  
        
  
  
      </div>
    );
  };
  
  export default PaginaCitasPasadasDocente;
  