const Ingreso = (props) =>{
    return (
      <div>        
        <label className={props.lname}>{props.name}</label><br/>
        <input className={props.iname} type={props.tipo? 'text':'password'}></input>
      </div>
    );
  }

export default Ingreso;