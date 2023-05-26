import React from "react";
import BarraTareas from "../barras/BarraTareas";
import BarraSuperior from '../barras/BarraSuperior';

//import baseDatos

import  "./AlumnoCitasEstilos.css";
function handleClick(){
    //Que habrá la pagina donde se programa citas
    window.alert("Proximamente-programar cita");
}
function MostrarCitasExistentes(){
    //verificar si hay citas guardadas-dps
    return(
        <div>
            <h1 className="Titulo">Mis citas</h1>

            <hr/>
            <div id="noCitas">Actualmente no tiene citas de Asesoría reservadas</div>
            <button id="botonProgramarCita" onClick={handleClick}>Programar una Cita</button>

            
        </div>
    );
}
function VerCitas() {
    return(
        <div>
            <BarraSuperior/>
            <BarraTareas/>
            <MostrarCitasExistentes/>
        </div>
    );
}
export default VerCitas;