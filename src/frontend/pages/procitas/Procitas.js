import { useEffect, useState } from "react";
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
    const [cant, setcant] = useState(0);
    const [citas,setcitas]=useState([]);
  
    useEffect(() => {
      setcant(5);
      const listac=[
        {
            id:'1',
            image:'https://1.bp.blogspot.com/-6Bgz6fXcGvo/XjOlzfqFwfI/AAAAAAAADJ0/YCzp2YSDQjslKkEWhqnjKDF4qGTXuXqYACLcBGAsYHQ/s1600/Cuales%2Bson%2Blos%2Btipos%2Bde%2Bdatos%2Bdisponibles%2Ben%2BJSON%2B3.jpg',
            nombre:'Carrion Luis',
            hora:"9am",
        
        },
        {
            id:'2',
            image:'https://0901.static.prezi.com/preview/v2/nm7jz55ilj47sldqcf6u4toih36jc3sachvcdoaizecfr3dnitcq_3_0.png',
            nombre:'jose',
            hora:"10am",
        
        },
        {
            id:'3',
            image:'https://st.depositphotos.com/1016440/2534/i/600/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
            nombre:'pedro',
            hora:"11am",
        },
        {
            id:'4',
            image:'https://st.depositphotos.com/1016440/2534/i/600/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
            nombre:'pedro',
            hora:"11am",
        },
        {
            id:'5',
            image:'https://st.depositphotos.com/1016440/2534/i/600/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
            nombre:'pedro',
            hora:"11am",
        },


    ];

      setcitas(listac);

        
          /*fetch(`https://pw-tidb-server-production.up.railway.app/mostrar-usuarios/${id}`)
            .then(response=>response.json())
            .then(data=>setcitas(data))
            .catch(e=>console.log("Ocurrio un error "+e ))*/
      
    }, []);
  
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
        <p>Bienvenido Andres</p>
        {generatePbcitasComponents()}
      </div>
    );
  };
  
  


export default Prcitas;

