import "./Procitas.css";
import  BarraSuperior from "../citas/barras/BarraSuperior";
import  BarraTarea from"../citas/barras/BarraTareas";

const Citasr = () =>{
    return (
        <div className="caja">
                    <img src="https://e1.pngegg.com/pngimages/476/608/png-clipart-radial-icon-set-2-publisher-white-letter-p-on-green-background-thumbnail.png" alt="icono"></img>
                    <p id="p1">Alfonso Carrion</p>
                    <p id="p2">18/06/2023 08:00 am</p>
        </div>

    );
}

const Pbcitas = () =>{
    return (
        <div className="Pbcitas">
            <p id="Titulo">Proximas Citas</p>
            <div className="gcaja">
                
                <div className="cant">
                    <Citasr/>
                    <Citasr/>
                </div>
                
                
            </div>
        </div>
    )
}

const Prcitas = () =>{
    return (
        <div className="pci">
            <BarraSuperior/>
            <BarraTarea/>
            <p>Bienvenido Andres</p>
            <hr/>
            <Pbcitas/>
            <Pbcitas/>
        </div>
    )
}


export default Prcitas;
