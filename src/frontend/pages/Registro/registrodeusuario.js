import React, { useEffect, useState } from 'react';
import "./estilos.css";

function Registro() {
  const[info,setinfo]=useState([]);
  function handleClick(){
    let correo = document.getElementById("correo");
    let password = document.getElementById("password");
    let nombres = document.getElementById("nombres");
    let tipo_documento = document.getElementById("tipo_documento");
    let rol = document.getElementById("rol");
    let apellidos = document.getElementById("apellidos");
    let numero_documento = document.getElementById("numero_documento");
    fetch(`https://pw-tidb-server-production.up.railway.app/registrar-usuario/${correo}/${password}/${nombres}/${tipo_documento}/
    ${rol}/${apellidos}/${numero_documento}`)
    .then(response=>response.json())
    .then(data=>setinfo(data))
    .catch(e=>console.log("Ocurrio un error "+e ))
  }
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [rol, setRol] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar las acciones necesarias con los datos ingresados

    setSubmitted(true);
  };

  const renderWelcomePage = () => {
    return (
      <div >

        <h1 className='h1'>Bienvenido {nombres}</h1>
        <h3 className='h3'>Datos personales</h3>
        <p><strong>Nombres:</strong> {nombres}</p>
        <p><strong>Apellidos:</strong> {apellidos}</p>
        <p><strong>Tipo de Documento:</strong> {tipoDocumento}</p>
        <p><strong>Número de Documento:</strong> {numeroDocumento}</p>
        <p><strong>Correo :</strong> {correo}</p>
        <p><strong>Contraseña:</strong> {password}</p>
        <p><strong>Confirmar Contraseña:</strong> {confirmarPassword}</p>
        <p><strong>Rol:</strong> {rol}</p>
      </div>
    );
  };

  if (submitted) {
    return renderWelcomePage ();
  } 




  return (
    <div className='todo'>
      <h1 className='Titulo'>Sistema de Citas para Atención a Estudiantes</h1>
      <h2 className="Sub1">Página de Registro</h2>

      <form onSubmit={handleSubmit}>
        <div className='correo'>

        <label className='correo12' htmlFor="correo">Correo Electrónico:</label>
        <input  type="email" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required/><br/>
        </div>
        <div className='Pass'>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>

        <label  htmlFor="confirm_password">Confirmar Contraseña:</label>
        <input type="password" id="confirm_password" name="confirm_password" value={confirmarPassword} onChange={(e) => setConfirmarPassword(e.target.value)} required/><br/>
        </div>
        <h3 className='dat'> Datos personales</h3>
        <div className="datosxd">
        <label htmlFor="nombres">Nombres:</label>
        <input type="text" id="nombres" name="nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} required/><br/>

        <label htmlFor="tipo_documento">Tipo de Documento:</label>
        <input type="text" id="tipo_documento" name="tipo_documento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)} required/><br/>

        <label htmlFor="rol">Rol:</label>
        <select id="rol" name="rol" value={rol} onChange={(e) => setRol(e.target.value)} required>
          <option value="docente">Docente</option>
          <option value="estudiante">Estudiante</option>
        </select><br/>
        </div>
        <div className='Apexd'>
        <label htmlFor="apellidos">Apellidos:</label>
        <input type="text" id="apellidos" name="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required/><br/>


        <label htmlFor="numero_documento">Número de Documento:</label>
        <input type="text" id="numero_documento" name="numero_documento" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} required/><br/>
        </div>


        <button onClick={handleClick}>Guardar</button> 
      </form>
    </div>
  );
}

export default Registro;