import React from "react";
import BarraTareas from "./barras/BarraTareas";
import BarraSuperior from './barras/BarraSuperior';
import Table from "./infoProfe";
import "./barras/citas.css";
const PaginaBaseCita = () => {
  return (
    <div >
      
      <button className="crearCita">Programar una cita</button>
      <h1 className="Titulo">Mis citas</h1>

      <hr></hr>

      <button className="citasPasadas">Ver Citas Pasadas</button>
      <p className="subtitulo">Citas de asesoría reservadas:</p>

      <button className="citaX">

        <Table />

        <div className="contenerdorImagen">
          <img className="fotoProfesor" src="https://qespacio.com/blog/wp-content/uploads/2019/10/profesor-particular-ingles.jpg" alt="Descripción de la imagen" />
        </div>

        <div className="fechaCita">Lunes, 24 de abril de 2023 - 08:00 am</div>
        <div className="cursoCita" >Curso: Programacion Web</div>

        <a className="enlaceZoom" href="http://ulima.edu.pe" target="_blank" rel="noreferrer">Enlace a Zoom</a>

        <button className="cancelarBoton" >Cancelar</button>
        
      </button>



      


    </div>
  );
};

export default PaginaBaseCita;
