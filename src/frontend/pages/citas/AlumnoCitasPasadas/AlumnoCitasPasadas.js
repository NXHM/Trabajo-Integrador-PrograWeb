import "../barras/citas.css";
import React, { useEffect, useState } from 'react';
import Table from "../infoProfe";


const PaginaCitasPasadas = () => {

  const[info,setinfo]=useState([]);

  fetch(`https://pw-tidb-server-production.up.railway.app/citas/${info}`)
          .then(response=>response.json())
          .then(data=>{
            setcitas(data)
            setcant(data.length)
            
          })
          .catch(e=>console.log("ocurrio un error "+e))


  
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
  
          <div className="fechaCita-PaginaCita">info.fechaCita</div>
          <div className="cursoCita-PaginaCita" >info.cursoCita</div>
  
          <a className="enlaceZoom-PaginaCita" href="http://ulima.edu.pe" target="_blank" rel="noreferrer">Enlace a Zoom</a>
          <button className="cancelarBoton-PaginaCita" >Calificar</button>
          
        </button>

  
      </div>
    );
  };
  
  export default PaginaCitasPasadas;
  