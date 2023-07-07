import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {Usuarios} from './models/Usuarios.js';

const app = express();
const port = 3001;

app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}))

app.use(bodyParser.json());

async function checkConnection() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Conexión a base de datos exitosa.");
    }
    catch(err) {
        console.log("Conexión a base de datos fallida.");
    }
}

app.get("/mostrar-usuario", async function(req, res) {
    const usuario = await Usuarios.findAll({
        where: {
            id: 1
        }
    });
    res.send(usuario);
})

app.listen(port, function() {
    console.log(`Servidor fucionando en el puerto ${port}.`);
    checkConnection();
})