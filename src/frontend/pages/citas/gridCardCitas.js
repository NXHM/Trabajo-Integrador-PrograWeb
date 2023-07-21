import CardCitas from "./CardCitas";

import { useEffect, useState } from 'react';
function transformarCitaFormato(fechaCita) {
    const date = new Date(fechaCita);
    const dateFormated = date.toLocaleString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return dateFormated;
}
function cargarTodasCitasFuturasProfesor(id = 1, setCitas) {
    var url = `http://localhost:3001/ver-citas-futuras-profesor/${id}`
    fetch(url)
        .then(response => {
            // Verificar que el código de estado sea 200
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error al obtener datos: ${response.status} ${response.statusText}`);
            }
        })
        .then(data => {
            
            setCitas(data);
        })
        .catch(error => {
            console.error(error);
            // Manejar el error de manera apropiada
        });

}
function cargarTodasCitasFuturasAlumno(id = 1, setCitas) {
    var url = `http://localhost:3001/ver-citas-futuras-alumno/${id}`
    fetch(url)
        .then(response => {
            // Verificar que el código de estado sea 200
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error al obtener datos: ${response.status} ${response.statusText}`);
            }
        })
        .then(data => {
            
            setCitas(data);
        })
        .catch(error => {
            console.error(error);
            // Manejar el error de manera apropiada
        });
}
function cargarTodasCitasPasadasAlumno(id = 1, setCitas) {
    var url = `http://localhost:3001/ver-citas-pasadas-alumno/${id}`
    fetch(url)
        .then(response => {
            // Verificar que el código de estado sea 200
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error al obtener datos: ${response.status} ${response.statusText}`);
            }
        })
        .then(data => {
            // Agregar un console.log para mostrar los datos recibidos
            //console.log('Datos recibidos:', data);
            setCitas(data);
        })
        .catch(error => {
            console.error(error);
            // Manejar el error de manera apropiada
        });
}

function GridCardCitas() {
    const [citas, setCitas] = useState([]);//

    useEffect(() => {
        cargarTodasCitasFuturasAlumno(1, setCitas);// id del alumno
    }, []);
    if (
        citas.length === 0
    ) { // No hay citas par el usuario
        return (
            <div>
                <div id="noCitas">Actualmente no tiene citas de Asesoría reservadas</div>
                <button id="botonProgramarCita" onClick={cargarTodasCitasPasadasAlumno}>Programar una Cita</button>
            </div>
        );

    } else {
        // Cada fila tiene 3 citas
        const filas = [];
        for (let i = 0; i < citas.length; i += 3) {
            const fila = citas.slice(i, i + 3);
            filas.push(fila);
        }
        //console.log('Renderizando GridCardCitas');
        return (
            <div className='citas-container'>
                {filas.map((fila, index) => (
                    <div key={index} className='cita-container'>
                        {fila.map((cita, idx) => (
                            <div key={idx} className='cita-item'>
                                <CardCitas
                                    nombre={cita.Horario.Usuario.nombres + " " + cita.Horario.Usuario.apellidos}
                                    carrera={cita.Horario.Usuario.nombres}
                                    linkCita={cita.link}
                                    titulo={cita.Horario.Usuario.titulo}
                                    curso={cita.nombreCarrera}
                                    fechaCita={transformarCitaFormato(cita.fecha)}

                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
export default GridCardCitas;
