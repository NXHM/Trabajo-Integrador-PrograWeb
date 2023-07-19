import React, { useState } from "react";
import PaginaBaseCitas from './frontend/pages/citas/AlumnoCitas.js';
import VerCitas from './frontend/pages/citas/AlumnoCitas/AlumnoCitas.js';
import PaginaCitasPasadas from './frontend/pages/citas/AlumnoCitasPasadas/AlumnoCitasPasadas.js';
import PaginaCitasPasadasDocente from './frontend/pages/citas/DocenteCitas/DocenteCitas.js';
import Barras from './frontend/pages/citas/nuevasBarras/Barras';
import MiPerfil from "./frontend/pages/mi_perfil/mi_perfil.js";

function App(){
    //Prop para heredar
    const [desplegado, setDesplegado] = useState(false);
    return(
        <div>
            <Barras desplegado={desplegado} setDesplegado={setDesplegado} />
            <div className={`paginaContenido ${desplegado ? "desplegado" : ""}`} desplegado={desplegado}>
                <MiPerfil/>
            </div>
            
        </div>
        
    );
}
export default App;