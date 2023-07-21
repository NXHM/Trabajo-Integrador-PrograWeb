import {useState} from 'react';
import Barras from './frontend/pages/citas/nuevasBarras/Barras';
import LoginTab from './frontend/pages/login/LoginTab.js';
import Registro from './frontend/pages/Registro/registrodeusuario.js';
import Procitas from "./frontend/pages/procitas/Procitas.js";
import MiPerfil from './frontend/pages/mi_perfil/mi_perfil';
import AlumnoCitasPasadas from  './frontend/pages/citas/AlumnoCitasPasadas/AlumnoCitasPasadas';

import {
    createBrowserRouter,
    Outlet
} from 'react-router-dom';

const Layout = () => {
    const [desplegado, setDesplegado] = useState(false);
    return (
        <>
            <Barras desplegado={desplegado} setDesplegado={setDesplegado} />
            <Outlet/>
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/login",
                element: <LoginTab/>,
            },
            {
                path: "/registro",
                element: <Registro/>,
            },
            {
                path:"/reserva",
                element:<Procitas/>
            },
            {
                path:"/perfil",
                element:<MiPerfil/>
            },
            {
                path:"/alumnocitaspasadas",
                element:<AlumnoCitasPasadas/>
            },
        ]
    },
    
]);

export default router; 
