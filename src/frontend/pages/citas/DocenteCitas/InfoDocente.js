import React, { useState } from "react";
import "./infoDocente.css";

const PerfilD = () => {
    return(
        <div className="divInfoDocente">
            <h1 className="titInfoDocente">Citas</h1>

            <table className="fondoInfoDocente">
                <table>
                    <tr>
                        <td className="burbujaInfoDocente" rowSpan={2}>JS</td>
                        <td className="nombreInfoDocente">Profesor Juan López</td>
                    </tr>
                    <tr>
                        <td className="grado">Magister en Ingeniería de Software</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td rowSpan={2}><img className="fotoInfoDocente" src="https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg" alt="perfil" /></td>
                        <td rowSpan={2} className="textoInfoDocente">Candidato a Dr. en Matemáticas e Informática de la Universidad de Barcelona, España. Magíster en Dirección de Tecnologías de Información, Universidad ESAN, Perú. Master en Gestión de las Tecnologías de la Información, Universitat Ramon Llull, Barcelona, España. Investigador en temas relacionados al desarrollo y aplicación de herramientas interactivas para la educación. Director del desarrollo del videojuego 1814: La Rebelión del Cusco. Miembro profesional del International Game Developers Association (IGDA). Consultor en proyectos de desarrollo de software, videojuegos y realidad aumentada. Excoordinador de la Especialidad de Ingeniería Informática. Excoordinador del Grupo de Investigación Avatar-PUCP y de la Diplomatura de Desarrollo de Videojuegos.</td>
                        <td className="correoInfoDocente">Correo Electrónico</td>
                    </tr>
                    <tr>
                        <td className="correoe">jlopez1949@ulima.edu.pe</td>
                    </tr>
                </table>
                <table className="confInfoDocente">
                    <tr className="cursosInfoDocente">Cursos</tr>
                    <td className="opcionesInfoDocente">Ingeniería de Software</td>
                    <td className="opcionesInfoDocente">Programación Web</td>
                    <td className="opcionesInfoDocente">Programación de Videojuegos</td>
                    <td className="opcionesInfoDocente">Programación Orientada a Objetos</td> 
                </table>
            </table>
            
            <table className="sinfondoInfoDocente">
                <tr><p className="subtitInfoDocente">Fechas y horarios disponibles</p></tr>
                <td><input id="fecha" className='inputInfoDocente' type="date"></input></td>
                <td><input id="interes" className='inputInfoDocente' type="text"></input></td>
                <p className="log1InfoDocente" style={{width: 108, top: -30, left: -643}}>Ingrese una Fecha</p>
                <p className="log1InfoDocente" style={{width: 96, top: -60, left: -324}}>Curso de Interés</p>
                <tr className="formatoInfoDocente">DD/MM/YYYY</tr>
            </table>
            <table className="conf2InfoDocente">
                <td className="horasInfoDocente">08:00</td>
                <td className="horasInfoDocente">09:00</td>
                <td className="horasInfoDocente">10:00</td>
            </table>
            <ul>
                <li className="duracionInfoDocente">Las sesiones son de 30 minutos</li>
            </ul>
        </div>
    )
};

export default PerfilD;