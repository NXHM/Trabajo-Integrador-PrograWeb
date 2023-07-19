import './Barras.css';
import {useLocation} from "react-router-dom";


const BarraTareas = ({ desplegado }) => {
  return (
    <div className={`barraTareas ${desplegado ? "desplegado" : ""}`}>
      
      {desplegado && (
        <ul id="contenidoDesplegable">
          <li>
            <button className="opciones">Principal</button>
          </li>
          <li>
            <button className="opciones">Perfil</button>
          </li>
          <li>
          < button className="opciones">Citas</button>
          </li>
          </ul>
      )}
    </div>
  );
};
const BarraSuperior = ({ desplegado, setDesplegado }) => {
  const toggleDesplegado = () => {
    setDesplegado(!desplegado);
  };
  return (

    <div>
      <div id="barra-superior">
        Atencion de Citas
        <svg id='miniUsuario' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM6.5 7.5C6.5 5.56 8.06 4 10 4C11.94 4 13.5 5.56 13.5 7.5C13.5 9.44 11.94 11 10 11C8.06 11 6.5 9.44 6.5 7.5Z" fill="#49454F"/>
        </svg>
      </div>
      <div id="botonDesplegar" onClick={toggleDesplegado}>
          <div id="iconoTresBarras">
            <div class="barra"></div>
            <div class="barra"></div>
            <div class="barra"></div>
          </div>
        </div>
      <hr className={`lineaSeparadora ${desplegado ?"desplegado" : ""}`}/>
    </div>

  );
};

function Barras({ desplegado, setDesplegado }){
  //const [desplegado, setDesplegado] = useState(false);
  const location = useLocation();
  console.log("location", location);

  if (location.pathname.includes("login") || location.pathname.includes("registro")) {
    return null;
  }

  return(
    <div>
      <BarraSuperior desplegado={desplegado} setDesplegado={setDesplegado} />
      <BarraTareas desplegado={desplegado} />
    </div>  
  );
}
export default Barras;
