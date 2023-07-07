import React, { useState } from "react";

const PerfilD = () => {
    return(
        <div>
            <h1>Citas</h1>

            <hr></hr>
            <table className="fondo">
                <table>
                    <tr>
                        <td className="burbuja" rowSpan={2}>JS</td>
                        <td className="nombre">Profesor Juan López</td>
                    </tr>
                    <tr>
                        <td className="grado">Magister en Ingeniería de Software</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td rowSpan={2}><img className="foto" src="https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg" alt="perfil" /></td>
                        <td rowSpan={2} className="texto">Candidato a Dr. en Matemáticas e Informática de la Universidad de Barcelona, España. Magíster en Dirección de Tecnologías de Información, Universidad ESAN, Perú. Master en Gestión de las Tecnologías de la Información, Universitat Ramon Llull, Barcelona, España. Investigador en temas relacionados al desarrollo y aplicación de herramientas interactivas para la educación. Director del desarrollo del videojuego 1814: La Rebelión del Cusco. Miembro profesional del International Game Developers Association (IGDA). Consultor en proyectos de desarrollo de software, videojuegos y realidad aumentada. Excoordinador de la Especialidad de Ingeniería Informática. Excoordinador del Grupo de Investigación Avatar-PUCP y de la Diplomatura de Desarrollo de Videojuegos.</td>
                        <td className="correo">Correo Electrónico</td>
                    </tr>
                    <tr>
                        <td className="correoe">jlopez1949@ulima.edu.pe</td>
                    </tr>
                </table>
                <table className="conf">
                    <tr className="cursos">Cursos</tr>
                    <td className="opciones">Ingeniería de Software</td>
                    <td className="opciones">Programación Web</td>
                    <td className="opciones">Programación de Videojuegos</td>
                    <td className="opciones">Programación Orientada a Objetos</td> 
                </table>
            </table>
            
                <p className="subtit">Fechas y horarios disponibles</p>
            <hr></hr>
            <table className="sinfondo">
                <td><input id="fecha" className='input' type="date"></input></td>
                <td><input id="interes" className='input' type="text"></input></td>
                <p className="log1" style={{width: 120, top: -30, left: -625}}>Ingrese una Fecha</p>
                <p className="log1" style={{width: 105, top: -55, left: -305}}>Curso de Interés</p>
                <tr className="formato">DD/MM/YYYY</tr>
            </table>
            <table className="conf2">
                <td className="horas">08:00</td>
                <td className="horas">09:00</td>
                <td className="horas">10:00</td>
            </table>
            <ul>
                <li className="duracion">Las sesiones son de 30 minutos</li>
            </ul>
        </div>
    )
};

export default PerfilD;