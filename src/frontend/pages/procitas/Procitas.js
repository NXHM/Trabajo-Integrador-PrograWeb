import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../login/hooks";
import "./Procitas.css";


const Citasr = ({cita}) =>{
    return (
        <div className="caja">
            <img src={cita.image} alt="icono" />
            <p id="p1">{cita.nombre}</p>
            <p id="p2">{cita.hora}</p>      
        </div>

    );
}

const Pbcitas = ({ citas }) => {
    const generateCitasrComponents = () => {
        return citas.map((cita) => <Citasr key={cita.id} cita={cita} />);
      };
    
      return (
        <div className="Pbcitas">
          <p id="Titulo">Proximas Citas</p>
          <div className="cant">{generateCitasrComponents()}</div>
        </div>
      );
};

const Prcitas = () => {
  const navigate = useNavigate();
  const [user] = useAuth();
  const [cant, setcant] = useState(0);
  const [citas,setcitas]=useState([]);

  useEffect(() => {
    if (!user) navigate('/login');
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`http://pw-tidb-server-production.up.railway.app/citas/${user.username}`)
        .then(response=>response.json())
        .then(data=>{
          setcitas(data);
          setcant(data.length);
        })
        .catch(e=>console.log("ocurrio un error "+e))
    }
  }, [user, setcitas, setcant]);


/* useEffect(() => {
  

  function procesardato(data){
    (data.rol)===0?
    document.getElementById('tiusu').value="Bienvenido,"+data.nombres
    :
    document.getElementById('tiusu').value="Bienvenido,Profesor "+data.nombres +"!"
  }

  
  const id=1;
  const username="juan";
    
  fetch(`https://pw-tidb-server-production.up.railway.app/mostrar-usuarios/${id}`)
        .then(response=>response.json())
        .then(data=>procesardato(data))
        .catch(e=>console.log("Ocurrio un error "+e ))
  
  fetch(`https://pw-tidb-server-production.up.railway.app/citas/${username}`)
      .then(response=>response.json())
      .then(data=>{
        setcitas(data)
        setcant(data.length)
        
      })
      .catch(e=>console.log("ocurrio un error "+e))
  
}, []);
 */
  const generatePbcitasComponents = () => {
    const components = [];
    let remainingCitas = cant;//5
    let citaIndex = 0;

    while (remainingCitas > 0) {
                          //4,5 =4
      const citaCount = Math.min(4, remainingCitas);
                                  //0            0+4=4 =1-2-3
      const slicedCitas = citas.slice(citaIndex, citaIndex + citaCount);
      //                                                      
      components.push(<Pbcitas key={components.length} citas={slicedCitas} />);
      //5-4=1
      remainingCitas -= citaCount;
      //0+4=4
      citaIndex += citaCount;
    }

    return components;
  };

  return (
    <div className="pci">
      {user && <p id="tiusu">Bienvenido {user.rol && "Profesor"}, {user.nombres}</p>}
      {generatePbcitasComponents()}
    </div>
  );
};
  
  


export default Prcitas;

