import './mis_horarios.css'
import './f-input.css'

function MisHorarios() {
    return (
        <div id='mis_horarios'>
            <div className="container-3">
                <h1 className="title">Mis horarios</h1>
                <hr className="hr"></hr>
                <p className="p">Agregue sus horarios de disponibilidad durante la semana</p>

                <input type="text" id="dia" className="f-input"/>
                <label for="dia" className="f-label">Dia de semana</label>

                <input type="text" id="inicio" className="f-input"/>
                <label for="inicio" className="f-label">Hora inicio</label>

                <input type="text" id="fin" className="f-input"/>
                <label for="fin" className="f-label">Hora fin</label>

                <input type="text" id="enlace" className="f-input"/>
                <label for="enlace" className="f-label">Enlace de sesión</label>

                <button id="btn-agregar">Agregar</button>
            </div>

            <div className="container-4">
                <button className='nbtn'>1</button> Lunes de 08:00 a 10:00 am
                <button className='xbtn'>X</button>
                <br/>
                <button className='nbtn'>2</button> Martes de 04:00 pm a 06:00 pm
                <button className='xbtn'>X</button>
                <br/>
                <button className='nbtn'>3</button> Miércoles de 05:00 pm a 08:00 pm
                <button className='xbtn'>X</button>
            </div>
        </div>
    );
}

export default MisHorarios;