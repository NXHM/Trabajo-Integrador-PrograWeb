import React, { useState } from 'react';
import './login.css';

const LoginTab = () => {
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  console.log('username', username);
  console.log('password', password);
  return (
    <form action='/login'>
      <h1 className='title'>Sistema de Citas para Atención a Estudiantes</h1>
        <table className='logintable' style={{marginTop: 110}}>
          <tr>
            <input id="usua" value={username} onChange={e => setUsername(e.target.value)} className='input' /*style={{top: -20}}*/></input>
            <p className='log1' style={{width: 110}}>Usuario o Correo</p>
          </tr>
          <tr>
            <input id="contr" value={password} onChange={e => setPassword(e.target.value)} className='input' style={{top: -20}} type="password"/>
            <p className='log2' style={{width: 65, marginTop: -7, marginBottom: 0}}>Password</p>
          </tr>
          <tr>
            <p className='abajo'>Registro de nuevo usuario - Olvidé mi contraseña</p>
          </tr>
            
          </table>
          <table className='logintable'>
            <tr>
              <button className='blanco'>####</button>
              <button className='salir'>Salir</button>
              <button className='ingresar'>Ingresar</button>
            </tr>
            
          </table>
          
    </form>
  )
}

export default LoginTab;