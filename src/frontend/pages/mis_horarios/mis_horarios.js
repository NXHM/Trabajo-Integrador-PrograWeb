import './mis_horarios.css'
import './f-input.css'
import {useState, useEffect} from 'react';

    function MisHorarios() {
    var id = 1;
    
    const [horarios, setHorarios] = useState([]);

    function checkStatus(response) {
        if (!response.ok) {
            throw Error("Error en la solicitud: " + response.statusText);
        }
        return response;
        }
    
    function handleError(err) {
        alert("Error en la solicitud: " + err);
    }

    function actualizarFin() {
        const boxInicio = document.getElementById("inicio");
        const boxFin = document.getElementById("fin");
        const value = parseInt(boxInicio.value);
    
        if (!isNaN(value)) {
            boxFin.value = (value + 1).toString();
        }
        else {
            boxFin.value = "";
        }
    }

    useEffect(() => {
        try {
            fetch(`http://localhost:3001/mis-horarios/cargar/horarios/${id}`)
                .then(checkStatus)  
                .then(response => response.json())
                .then(data => setHorarios(data))
                .catch(handleError)
        }
        catch(error) {
        }
    }, []);

    function guardarHorarios() {
        var fecha = document.getElementById("dia").value;
        var horaInicio = document.getElementById("inicio").value;
        alert(horaInicio)

        fetch(`http://localhost:3001/mis-horarios/guardar/${fecha}/${id}/${horaInicio}`)
            .then(checkStatus)
            .then(response => response.text())
            .then(data => alert(data))
            .catch(handleError)
    }

    function borrarRegistro(idHorario) {
        fetch(`http://localhost:3001/mis-horarios/borrar/horario/${idHorario}`)
            .then(checkStatus)
            .then(response => response.text())
            .then(data => alert(data))
            .catch(handleError)
        }   

    function formataerFecha(fecha) {
        const dateString = fecha;
        const dateObject = new Date(dateString);

        const year = dateObject.getUTCFullYear();
        const month = dateObject.getUTCMonth() + 1;
        const day = dateObject.getUTCDate();

const formattedDate = `${day}/${month}/${year}`;

        return formattedDate
    }

    return (
        <div id='mis_horarios'>
            <div className="container-3">
                <p className="p-title">Mi horarios</p>
                <hr className="hr"></hr>
                <p className="p">Agregue sus horarios de disponibilidad durante la semana</p>  

                <input type="date" id="dia" className="f-input"/>
                <label for="dia" className="f-label">Dia de semana</label>

                <input type="number" id="inicio" className="f-input" onInput={actualizarFin} min={7} max={21}/>
                <label for="inicio" className="f-label">Hora inicio</label>

                <input type="text" id="fin" className="f-input" readOnly/>
                <label for="fin" className="f-label">Hora fin</label>

                <input type="text" id="enlace" className="f-input"/>
                <label for="enlace" className="f-label">Enlace de sesión</label>

                <button id="btn-agregar" onClick={guardarHorarios}>Agregar</button>
            </div>

            <div className="container-4">
            {horarios.map((horario, index) => (
                <span>
                    <button className='nbtn'>{index + 1}</button>
                    <span>
                        {formataerFecha(horario.fecha)}
                    </span>
                    {horario.Rangos.map(rango => (
                        <span key={rango.id}>
                            {" de "}
                            {rango.hora_inicio}:00 a {rango.hora_fin}:00
                        </span>
                    ))}
                    <button className='xbtn' onClick={() => borrarRegistro(horario.id)}>X</button>
                    <br/>
                </span> 
            ))}
            </div>
        </div>
    );
}

export default MisHorarios;