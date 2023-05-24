import React from "react";
import BarraTareas from "../barras/BarraTareas";
import BarraSuperior from '../barras/BarraSuperior';

//import baseDatos

import  "./AlumnoCitasEstilos.css";
function MostrarCitasExistentes(){
    //verificar si hay citas guardadas-dps
    return(
        <div>
            <div id="noCitas">Actualmente no tiene citas de Asesoría reservadas</div>
            <button id="botonProgramarCita">Programar una Cita</button>

            
        </div>
    );
}
function VerCitas() {
    return(
        <div>
            <BarraSuperior />
            <BarraTareas />
            <MostrarCitasExistentes/>
        </div>
    );
}
export default VerCitas;