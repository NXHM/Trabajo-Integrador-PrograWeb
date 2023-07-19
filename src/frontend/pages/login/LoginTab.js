import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useAuth } from './hooks';
import './login.css';

const LoginTab = () => {
  const [_, setUser] = useAuth();

  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [loading, setLoading]=useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
        .then(async response => {
          const r = await response.json();
          if (!response.ok) {
            return Promise.reject(r);
          }

          return r;
        })
        .then((u) => {
          console.log("u", u);
          setLoading(false);
          // Iniciar session en el app state
          setUser(u);
          redirect('/');
        }) // Corrected this line
        .catch(e => {
          console.log("Ocurrio un error ", e);
          setLoading(false);
        });
          
  }
  
  return (
    <form action='/login' method='post' onSubmit={handleSubmit}>
      <h1 className='title'>Sistema de Citas para Atención a Estudiantes</h1>
        <table className='logintable' >
          <tr className='input_wrap'>
            <input id="usua" value={username} onChange={e => setUsername(e.target.value)} className='inputLogin' disabled={loading}></input>
            <p className='log1LoginLabel'>Usuario o Correo</p>
          </tr>
          <tr><br/></tr>
          <tr className='input_wrap'>
            <input id="contr" value={password} onChange={e => setPassword(e.target.value)} className='inputLogin'  disabled={loading} type="password"/>
            <p className='log1LoginLabel' >Password</p>
          </tr>
          <tr>
            <p className='RegistroLogin'><Link to="/registro">Registro de nuevo usuario</Link> - Olvidé mi contraseña</p>
          </tr>
            
          </table>
          <table className='logintable'>
            <tr>
              <button className='blanco'>####</button>
              <button className='salir' type='button' disabled={loading}>Salir</button>
              <button className='ingresar' type='submit' disabled={loading}>Ingresar</button>
            </tr>
            
          </table>
          
    </form>
  )
}

export default LoginTab;