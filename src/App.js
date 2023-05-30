import React, { useState } from "react";
import PaginaBaseCitas from './front-end/pages/citas/AlumnoCitas.js';
import VerCitas from './front-end/pages/citas/AlumnoCitas/AlumnoCitas.js';
import PaginaCitasPasadas from './front-end/pages/citas/AlumnoCitasPasadas/AlumnoCitasPasadas.js';
import PaginaCitasPasadasDocente from './front-end/pages/citas/DocenteCitas/DocenteCitas.js';
import Barras from './front-end/pages/citas/nuevasBarras/Barras'
function App(){
    //Prop para heredar
    const [desplegado, setDesplegado] = useState(false);
    return(
        <div>
            <Barras desplegado={desplegado} setDesplegado={setDesplegado} />
            <VerCitas desplegado={desplegado}/>
        </div>
        
    );
}
export default App;