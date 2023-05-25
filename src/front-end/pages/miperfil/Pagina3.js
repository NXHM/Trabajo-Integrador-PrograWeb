import "./Pagina3.css";
import Ingreso from "./Ingreso"
import { useState } from "react";
import BarraS from "../citas/barras/BarraSuperior";
import BarraT from "../citas/barras/BarraTareas";

const Pagina1 = () =>{
    return (
        <div className="pr3">
            <div className="pr2">
                <Ingreso name="Usuario" tipo={true} lname="p3l2" iname="p3i2" />
            </div>
            <div className="pr1">
                <Ingreso name="Contraseña Actual" tipo={true} lname="p3l2" iname="p3i2" />
                <Ingreso name="Nueva Contraseña" tipo={true} lname="p3l2" iname="p3i2" />
                <Ingreso name="Repetir Contraseña" tipo={true} lname="p3l2" iname="p3i2" />
            </div>
        </div>
    );
}

const Pagina11 = () =>{
    return (
        <div className="pagina11">
            <div className="pagina11_1">
                <Ingreso name="Universidad" tipo={true} lname="p4l1" iname="p4i1"></Ingreso>
                <img src="https://cdn-icons-png.flaticon.com/512/13/13311.png" alt="icono b1" className="b1"></img>
                <Ingreso name="Agregar cursos" tipo={true} lname="p4l1" iname="p4i1"></Ingreso>
                <img src="https://cdn-icons-png.flaticon.com/512/13/13311.png" alt="icono b2" className="b2"></img>
            </div>
            
            <div className="pagina11_2">
                <Ingreso name="Carrera" tipo={true} lname="p4l1" iname="p4i1"></Ingreso>
                <img src="https://cdn-icons-png.flaticon.com/512/13/13311.png" alt="icono b2" className="b3"></img>
            </div>
        </div>
    );
}

const Pagina31 = () =>{
    return (
        <div>
            <Ingreso name="Titulo" tipo={true} lname="p5l1" iname="p5i1"></Ingreso>
            <Ingreso name="Presentacion" tipo={true} lname="p5l1" iname="p5i1"></Ingreso>
        </div>
    );
}

const Barra = () =>{
    return  (
        <div className="barrah">
            <p>Principal</p>
            <p>Perfil</p>
            <p>Horarios</p>

        </div>
    );
}






const  Pagina3 = () => {

    const [p1, setP1] = useState(true);
    const [p2,setP2]=useState(false);
    const [p3,setP3]=useState(false);
    const [color1,setcolor1]=useState('blueviolet');
    const [color2,setcolor2]=useState('black');
    const [color3,setcolor3]=useState('black');
    const [mderecha,setderecha]=useState(false);

    const camp1 = () =>{
        setP1(true);
        setcolor1('blueviolet');
        setcolor2('black');
        setcolor3('black');
        setP2(false);
        setP3(false);
    }

    
    const camp2 = () =>{
        setP2(true);
        setcolor2('blueviolet');
        setcolor1('black');
        setcolor3('black');
        setP1(false);
        setP3(false);
    }

    const camp3 = () =>{
        setP3(true);
        setcolor3('blueviolet');
        setcolor1('black');
        setcolor2('black');
        setP1(false);
        setP2(false)
    }

    const handleclik = () =>{
        
        setderecha(!mderecha);
        
    }

    return(
        <div className="p3">

            <BarraS/>
            <BarraT/>

            <div className="container">
                <div className={mderecha? "der":null}>
                    <div className="Titulos">
                        <p id="titulo1" > Mi perfil</p>
                        <input id={mderecha? "boton1p":"boton1"} type="button" value="Cancelar"></input>
                        <input id={mderecha? "boton2p":"boton2"} type="button" value="Guardar"></input>
                        <hr/>
                    </div>

                    <div className="ip">
                        <p>Informacion Personal</p>
                        <Ingreso name="Nombres" tipo={true} lname="p3l1" iname="p3i1" />
                        <Ingreso name="Apellidos" tipo={true} lname="p3l1" iname="p3i1" />
                        <Ingreso name="Tipo de Documento" tipo={true} lname="p3l1" iname="p3i1" /><br/>
                        <Ingreso name="Rol" tipo={true} lname="p3l4" iname="p3i4" />
                        <Ingreso name="Numero" tipo={true} lname="p3l4" iname="p3i4"/>
                        <div className="ip2">
                            <img src="https://okdiario.com/img/2021/12/15/los-10-cientificos-mas-locos-de-la-historia.jpg" alt="cientifico"></img>
                        </div>
                    </div>

                    <div className="is">
                        <p style={{color:color1}} onClick={camp1}>Datos de Usuario</p>
                        <p style={{color:color2}} onClick={camp2}>Universidad</p>
                        <p style={{color:color3}} onClick={camp3}>Presentacion</p><br/>

                        
                        
                    </div>
                    
                    
                    {p1 && <Pagina1/>}
                    {p2 && <Pagina11/>}
                    {p3 && <Pagina31/>}

                </div>

            </div>

        </div>
    );
}


export default Pagina3;
