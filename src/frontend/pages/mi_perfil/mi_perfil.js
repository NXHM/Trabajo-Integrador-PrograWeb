import {useState} from 'react';
import './mi_perfil.css';
import './tabs.css';
import './f-input.css';

function MiPerfil() {
  const [toggleState, setToggleState] = useState(1);

  function procesardatos(data){
    document.getElementById('nombres').value = data.nombres;
    document.getElementById('rol').value = data.rol;
    document.getElementById('apellidos').value = data.apellidos;
    document.getElementById('tipo').value = data.tipo_doc;
    document.getElementById('numero').value = data.numero_doc;
  }
  

  
  useEffect(() => {
    
      const id = 1;
      fetch(`https://pw-tidb-server-production.up.railway.app/mostrar-usuarios/${id}`)
        .then(response => response.json())
        .then(procesardatos) // Corrected this line
        .catch(e => console.log("Ocurrio un error " + e));
    

  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="mi_perfil">
      <div className="container-1">
        <p className="p-title">Mi perfil</p>
        <button id="btn-guardar" onClick={handleSubmit}>Guardar</button>
        <hr className="hr"></hr>
        <p className="p">Información personal</p>


        
  <table>
    <tbody>
      <tr>
        <td>
          <input type="text" id="nombres" name="nombres" className="f-input" />
          <label htmlFor="nombres" className="f-label">
            Nombres
          </label>
          <br />
          <input type="text" id="rol" name="rol" className="f-input" />
          <label htmlFor="rol" className="f-label">
            Rol
          </label>
        </td>

        <td className="second-column">
          <input type="text" id="apellidos" name="apellidos" className="f-input" />
          <label htmlFor="apellidos" className="f-label">
            Apellidos
          </label>
        </td>

        <td>
          <input type="text" id="tipo" name="tipo" className="f-input"  />
          <label htmlFor="tipo" className="f-label">
            Tipo de documento
          </label>
          <br />
          <input type="text" id="numero" name="numero" className="f-input"  />
          <label htmlFor="numero" className="f-label">
            Número
          </label>
        </td>

        <td className="fourth-column">
          <img id="foto-usuario" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="foto" />
          <br />
          <p id="adjuntar-foto">Adjuntar foto</p>
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
            <input type="text" id="usuario" className="f-input"/>
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
                <input type="text" id="universidad" className="f-input f-input-search"/>
                <label for="universidad" className="f-label f-label-search">Universidad</label>
                <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill="black"/> </svg>

                <br/>

                <input type="text" id="carrera" className="f-input f-input-search"/>
                <label for="carrera" className="f-label  f-label-search">Carrera</label>
                <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill="black"/> </svg>
              </td>

              <td className="second-column">
                <input type="text" id="cursos" className="f-input f-input-search"/>
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
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiPerfil;
