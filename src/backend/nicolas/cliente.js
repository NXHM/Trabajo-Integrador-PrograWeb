import './App.css';

const port=3000;
function App() {
  function verificarEstado(response) {  //recibe la respuesta
    if (!response.ok) {
      throw Error("Ocurrio un error: " + response.statusText); //mostrar en texto el error que ocurrio
    }
    return response;
  }
  function vistaCitas(data) {
    var res = data;

    
    return data
    
  }

  function handleError(error) {
    console.log("Ocurrio un error: " + error);
  }

  function verCitas() {
    const URL = "http://localhost:3001/consultar-citas";
    fetch(URL)
      .then(verificarEstado) //verificar estatus
      .then(response => response.json()) // extraer la data , retornar un texto
      .then(vistaCitas) // retorna las citas con su react
      .catch(handleError);
  }


  return (
    <div>
      
      <button onClick={verCitas}>Programar Cita</button><br></br>
      <button onClick={verCitas}>Ver citas</button><br></br>
      <div id="resultado"></div>
    </div>
  );
}

export default App;