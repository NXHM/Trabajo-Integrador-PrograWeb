import React, { useState } from "react";
//import PaginaBaseCitas from './front-end/pages/citas/AlumnoCitas.js';
//import VerCitas from './front-end/pages/citas/AlumnoCitas/AlumnoCitas.js';
//import PaginaCitasPasadas from './front-end/pages/citas/AlumnoCitasPasadas/AlumnoCitasPasadas.js';
//import PaginaCitasPasadasDocente from './front-end/pages/citas/DocenteCitas/DocenteCitas.js';
import Barras from './frontend/pages/citas/nuevasBarras/Barras';
//import MiPerfil from "./front-end/pages/mi_perfil/mi_perfil.js";
import LoginTab from './frontend/pages/login/LoginTab';


function App(){
    //Prop para heredar
    const [desplegado, setDesplegado] = useState(false);
    return(
        <div>
            {/*<Barras desplegado={desplegado} setDesplegado={setDesplegado} />*/}
            <div className={`paginaContenido ${desplegado ? "desplegado" : ""}`} desplegado={desplegado}>
                <LoginTab/>
            </div>
            
        </div>
        
    );
}
export default App;