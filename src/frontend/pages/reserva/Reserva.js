import React, { useState } from 'react';

import BarraSuperior from "../citas/barras/BarraSuperior";
import BarraTareas from "../citas/barras/BarraTareas";
import "../citas/barras/citas.css";

 //import baseDatos
import "./reserva.css";


const ReservaAlumno =()=>{
    const [activeOption, setActiveOption] = useState('opcion1');

    const handleOptionClick = (option) => {

        setActiveOption(option);
      };
    return (
        <div>
            <BarraSuperior/>
            <BarraTareas/>
            <h1>Reserva de cita</h1>
            <hr></hr>
            <table className='tabla1'>
                <tr>
                    <td>
                        <input id="usua" className='input' /*style={{top: -20}}*/></input>
                        <p className='log1' style={{width:65 }}>Búsqueda</p>
                        <p className='abajo'>Ingrese nombre de docente, universidad o curso</p>
                    </td>
                    <td> <div className="segmented-button">
                        <button
                        className={activeOption === 'opcion1' ? 'active' : ''}
                        onClick={() => handleOptionClick('opcion1')}
                        >
                        Por nombre
                        </button>
                        <button 
                        className={activeOption === 'opcion2' ? 'active' : ''}
                        onClick={() => handleOptionClick('opcion2')}
                        >
                        Por fecha
                        </button></div> </td>
                   
                </tr>
            <table className='tabla2'>
                <tr>
                    <td className='alo'>
                        <p>Felipe Lopez Jimenez</p>
                        <p>Universidad de Lima - Ingieneria de sistemas</p>
                        

                    </td>
                    <td className='alo'>
                        <p>Felipe Lopez Sánchez</p>
                        <p>Universidad de Lima - Ingieneria Industrial</p>
                    </td>
                    <td className='alo' width="100px" height="20px">
                        <p>Felipe Andrés Lopez </p>
                        <p>universidad de Tacna - Medicina</p>
                    </td>
                </tr>
                <tr>
                    <td className='alo'>
                        <p>Felipe Lopez </p>
                        <p>universidad de Ingieneria - Ciencias de la computacion</p>
                    </td>   
                </tr>
            </table>
            </table>

            
           
        </div>
            
    );
};

export default ReservaAlumno;



