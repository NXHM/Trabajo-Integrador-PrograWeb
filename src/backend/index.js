import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import {Usuarios} from './models/Usuarios.js';
import { sequelize } from './database/database.js';


const app = express();
const port = 3001;

app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}))

app.use(bodyParser.json());
app.use(session({secret: "soft"}));


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

app.post("/login", async function(req, res){
    if(!req.body.username || !req.body.password){
        return res.status(400).send({message: "Usuario y contraseña son campos obligatorios"})
    }
    const usuario = await Usuarios.findOne({
        where: {
            usuario_nombre: req.body.username,
        }
    })
    if(!usuario || usuario.contraseña !== req.body.password){
        return res.status(401).send({message: "Usuario no autorizado"})
    }
    // INITIALIZE COOCKIE SESSION
    req.session.usuario=usuario.toJSON();
    return res.status(200).send(usuario.toJSON());
})

app.listen(port, function() {
    console.log(`Servidor fucionando en el puerto ${port}.`);
    checkConnection();
})