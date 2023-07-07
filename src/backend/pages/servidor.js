const express = require("express");  //importar
const cors = require('cors');
const app = express() //llamar la libreria
// Importan su endpoint aca
const port = 3001;  //puerto
const fs = require('fs');

app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}))

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


app.get('/consultar-citas', function (req,res) {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al leer el archivo');
        } else {
            let citas=''
            let jsonData = JSON.parse(data);
            for(let cita in jsonData.data.citas){
                let fotoProfesor = jsonData.data.citas[`${cita}`].fotoProfesor;
                let fechaCita = jsonData.data.citas[`${cita}`].fechaCita;
                let cursoCita = jsonData.data.citas[`${cita}`].cursoCita;
                citas+=`<button className="citaX">
                            <div className="contenerdorImagen">
                                <img className="fotoProfesor" src="${fotoProfesor}" alt="Descripción de la imagen" />
                            </div>
                            <div className="fechaCita">${fechaCita}</div>
                            <div className="cursoCita">${cursoCita}</div>
                            <a className="enlaceZoom" href="http://ulima.edu.pe" target="_blank" rel="noreferrer">Enlace a Zoom</a>
                            <button className="cancelarBoton">Calificar</button>
                        </button>`
            }
            res.send(citas    
            );
        }
    });
});
app.post('/programar-citas',function(req,res){

});
app.post('/alumnos-form', function (req, res) {
    var codigo = req.body.codigo;
    var nombre = req.body.nombre;
    //var apellidos = req.body.apellidos;
    //var comentario = req.body.comentario;
    res.send(`Tipo FORM<br/><h1>Codigo: ${codigo}</h1>
    <h2>Nombre Completo: ${nombre} </h2>
    `);
    //var obj = {
     //   "codigo": { codigo },
      //  "nombre": { nombre }

    //}
    //res.send(obj);
});


//cofigurar el servidor cómo vaa estar escuchando los mensajes
app.listen(port, function () {
    console.log(`Servidor está funcionando en el puerto ${port}`)  // `
})