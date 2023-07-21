import {useState, useEffect} from 'react';
import './mi_perfil.css';
import './f-input.css';
import './tabs.css';

function MiPerfil() {
  var id = 1;

  const [usuario, setUsuario] = useState({});
  const [universidades, setUniversidades] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [cursos, setCursos] = useState([]);

  const [universidadState, setUniversidadState] = useState(false);
  const [carreraState, setCarreraState] = useState(false);

  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error en la solicitud: " + response.statusText);
    }
    return response;
  }

  function handleError(err) {
    alert("Error en la solicitud: " + err);
  }

  // Cargar datos del usuario
  function cargarUsuario(data) {
    document.getElementById("nombres").value = data.nombres;
    document.getElementById("apellidos").value = data.apellidos;
    document.getElementById("tipo").value = data.tipo_doc;
    document.getElementById("numero").value = data.numero_doc;
    document.getElementById("rol1").value = data.rol;
    document.getElementById("usuario").value = data.username;
    document.getElementById("titulo").value  = data.titulo;
    document.getElementById("presentacion").value = data.presentacion;
    document.getElementById("carrera").value = data.idCarrera;
    document.getElementById("universidad").value = data.idUniversidad;
    document.getElementById("foto-usuario").src = data.foto;

    data.idUniversidad ? setUniversidadState(true) : setUniversidadState(false)
    data.idCarrera ? setCarreraState(true) : setCarreraState(false)

    setUsuario(data)
  }

  useEffect(() => {
    fetch(`http://pw-tidb-server-production.up.railway.app/mi-perfil/cargar/usuario/${id}`)
      .then(checkStatus)
      .then(response => response.json())
      .then(cargarUsuario)
      .catch(handleError)

    fetch("http://pw-tidb-server-production.up.railway.app/mi-perfil/cargar/universidades")
      .then(checkStatus)  
      .then(response => response.json())
      .then(data => setUniversidades(data))
      .catch(handleError)

    fetch(`http://pw-tidb-server-production.up.railway.app/mi-perfil/cargar/carreras/1`)
      .then(checkStatus)  
      .then(response => response.json())
      .then(data => setCarreras(data))
      .catch(handleError)
    
    fetch("http://pw-tidb-server-production.up.railway.app/mi-perfil/cargar/cursos/1")
      .then(checkStatus)  
      .then(response => response.json())
      .then(data => setCursos(data.Cursos))
      .catch(handleError)
  }, []);
  //

  // Guardar datos del usuario
  var password = usuario.password;

  function postGuardar(password) {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var tipo = document.getElementById("tipo").value;
    var numero = document.getElementById("numero").value;
    var rol = document.getElementById("rol1").value;
    var titulo = document.getElementById("titulo").value;
    var presentacion = document.getElementById("presentacion").value;
    var carrera = document.getElementById("carrera").value;
    var universidad = document.getElementById("universidad").value;

    fetch(`http://pw-tidb-server-production.up.railway.app/mi-perfil/guardar/${id}/${password}/${nombres}/${apellidos}/${tipo}/${numero}/${rol}/${titulo}/${presentacion}/${carrera}/${universidad}`)
      .then(checkStatus)
      .then(response => response.text())
      .then(data => alert(data))
      .catch(handleError)
  }

  function guardar() {
    var actual = document.getElementById("actual").value; 
    var nueva = document.getElementById("nueva").value;
    var repetir = document.getElementById("repetir").value;
    
    if(actual !== "" || nueva !== "" || repetir !== "") {
      if(actual === password) {
        if(nueva !== "") {
          if(nueva === repetir) {
            postGuardar(nueva);
          }
          else {
            alert("Las dos contraseñas no coinciden.")
          }
        }
        else {
          alert("La nueva contraseña no puede estar vacía.")
        }
      }
      else {
        alert("La contraseña actual ingresada es incorrecta.")
      }
    }
    else {
      postGuardar(password);
    }
  }
  //

  function guardarFoto() {
    var link = document.getElementById("link").value

    fetch(`http://pw-tidb-server-production.up.railway.app/mi-perfil/guardar/foto/${id}/${link}`)
      .then(checkStatus)  
      .then(response => response.text())
      .then(data => alert(data))
      .catch(handleError)
  }

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="mi_perfil">
      <div className="container-1">
        <p className="p-title">Mi perfil</p>
        <button id="btn-guardar" onClick={guardar}>Guardar</button>
        <hr className="hr"></hr>
        <p className="p">Información personal</p>       
        <table>
          <tbody>
            <tr>
              <td>
                <input type="text" id="nombres" className="f-input"/>
                <label for="nombres" className="f-label">Nombres</label>
                <br/>
                <select id="rol1" className="f-input">
                  <option value="false">Estudiante</option>
                  <option value="true">Profesor</option>
                </select>
                <label for="rol1" className="f-label">Rol</label>
              </td>

              <td className="second-column">
                <input type="text" id="apellidos" className="f-input"/>
                <label for="apellidos" className="f-label">Apellidos</label>
              </td>

              <td>
                <select id="tipo" className="f-input">
                  <option value="false">DNI</option>
                  <option value="true">Carnet de extranjería</option>
                </select>
                <label for="tipo" className="f-label">Tipo de documento</label>
                <br />
                <input type="text" id="numero" className="f-input"/>
                <label for="numero" className="f-label">Número</label>
              </td>

              <td className="fourth-column">
                <img id="foto-usuario" src={usuario.foto} alt="foto" />
                <br />
                <p id="adjuntar-foto" onClick={guardarFoto}>Adjuntar foto</p>
                <input type="text" id="link" className="f-input"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container-2">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Datos de usuario
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Universidad
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Presentación
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <input type="text" id="usuario" className="f-input" readOnly/>
            <label for="usuario" className="f-label">Usuario</label>

            <br/>

            <input type="text" id="actual" className="f-input"/>
            <label for="actual" className="f-label">Contraseña actual</label>
            
            <input type="text" id="nueva" className="f-input"/>
            <label for="nueva" className="f-label">Nueva contraseña</label>

            <input type="text" id="repetir" className="f-input"/>
            <label for="repetir" className="f-label">Repetir contraseña</label>
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <table>
            <tbody>
            <tr>
              <td>
                <select id="universidad" className="f-input f-input-search" disabled={universidadState}>
                  <option selected value='null'>-- Seleccione una universidad --</option>
                  {universidades.map(universidad => (
                    <option value={universidad.id}>{universidad.nombre}</option>
                  ))}
                </select>
                <label for="universidad" className="f-label f-label-search">Universidad</label>
                <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill="black"/> </svg>

                <br/>

                <select id="carrera" className="f-input f-input-search" disabled={carreraState}>
                  <option selected value='null'>-- Seleccione una carrera --</option>
                  {carreras.map(carrera => (
                    <option value={carrera.id}>{carrera.nombre}</option>
                  ))}
                </select>
                <label for="carrera" className="f-label  f-label-search">Carrera</label>
                <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill="black"/> </svg>
              </td>

              <td className="second-column">
                <select id="cursos" className="f-input f-input-search">
                  <option selected value='null'>-- Seleccione un curso --</option>
                  {cursos.map(curso => (
                    <option value={curso.id}>{curso.nombre}</option>
                  ))}
                </select>
                <label for="cursos" className="f-label  f-label-search">Agregar cursos</label>
                <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill="black"/> </svg>
              </td>
            </tr>
            </tbody>
            </table>
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <input type="text" id="titulo" className="f-input-pres"/>
            <label for="titulo" className="f-label-pres">Título</label>
            <br/>
            <input type="text" id="presentacion" className="f-input-pres"/>
            <label for="presentacion" className="f-label-pres">Presentación</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiPerfil;
