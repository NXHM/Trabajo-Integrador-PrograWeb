import React, { useState } from 'react';
import './login.css';

const LoginTab = () => {
  return (
    <div>
      <h1>Sistema de Citas para Atención a Estudiantes</h1>
        <table style={{marginTop: 110}}>
          <tr>
            <input id="usua" className='input' /*style={{top: -20}}*/></input>
            <p className='log1' style={{width: 110}}>Usuario o Correo</p>
          </tr>
          <tr>
            <input id="contr" className='input' style={{top: -20}}></input>
            <p className='log2' style={{width: 65, marginTop: -7, marginBottom: 0}}>Password</p>
          </tr>
          <tr>
            <p className='abajo'>Registro de nuevo usuario - Olvidé mi contraseña</p>
          </tr>
            
          </table>
          <table className='tbotones'>
            <tr>
              <button className='blanco'>####</button>
              <button className='salir'>Salir</button>
              <button className='ingresar'>Ingresar</button>
            </tr>
            
          </table>
          
    </div>
  )
}

export default LoginTab;