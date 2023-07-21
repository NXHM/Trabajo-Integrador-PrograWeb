import "../barras/citas.css";
import React, { useEffect, useState } from 'react';
import Table from "../infoProfe";


const PaginaCitasPasadas = () => {

    const[fecha, setFecha] = useState([]);
    const[Curso, setCurso] = useState([]);


  
    return (
      <div >

        <button className="crearCita-PaginaCita">Programar una cita</button>
        <h1 className="Titulo-PaginaCita">Mis citas</h1>
  
        
        <button className="citasPasadas-PaginaCita">Ver Citas Pasadas</button>
        <p className="subtitulo-PaginaCita">Citas de asesoría reservadas:</p>
  
        <button className="citaX-PaginaCita">
  
          <Table />
  
          <div className="contenerdorImagen-PaginaCita">
            <img className="fotoProfesor-PaginaCita" src="https://qespacio.com/blog/wp-content/uploads/2019/10/profesor-particular-ingles.jpg" alt="Descripción de la imagen" />
          </div>
  
          <div className="fechaCita-PaginaCita">Lunes, 24 de abril de 2023 - 08:00 am</div>
          <div className="cursoCita-PaginaCita" >Curso: Programacion Web</div>
  
          <a className="enlaceZoom-PaginaCita" href="http://ulima.edu.pe" target="_blank" rel="noreferrer">Enlace a Zoom</a>
          <button className="cancelarBoton-PaginaCita" >Calificar</button>
          
        </button>

  
      </div>
    );
  };
  
  export default PaginaCitasPasadas;
  