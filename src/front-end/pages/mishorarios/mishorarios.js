import BarraTareas from '../citas/barras/BarraTareas';
import BarraSuperior from '../citas/barras/BarraSuperior';

import '../mishorarios/mishorarios.css'

const MisHorarios = () => {
  return (
    <div >
      <BarraSuperior />
      <BarraTareas />

      <h2>Mis horarios</h2>
      <hr/>
      <br/>
      <p>Agregue sus horarios de disponibilidad durante la semana</p>
      <br/>

      <input type='text'/>
      <label>Día de semana</label>

      <input type='text'/>
      <label>Hora inicio</label>

      <input type='text'/>
      <label>Hora fin</label>

      <input type='text'/>
      <label>Enlace de sesión</label>

      <button id="agregarBtn" >Agregar</button>
      <br/>
      <br/>
      <div id='container'>
        <div className='lines'>
          <button className='nbtn'>1</button>
          Lunes de 08:00 am a 10:00 am
          <button className='xbtn'>X</button>
        </div>

        <div className='lines'>
          <button className='nbtn'>2</button>
          Martes de 4:00 pm a 6:00 pm
          <button className='xbtn'>X</button>
        </div>
        <div className='lines'>
          <button className='nbtn'>3</button>
          Jueves de 05:00 pm a 8:00 pm
          <button className='xbtn'>X</button>
        </div>
      </div>

    </div>
  );
};
  
export default MisHorarios;