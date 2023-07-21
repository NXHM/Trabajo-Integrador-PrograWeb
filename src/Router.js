import {useState} from 'react';
import Barras from './frontend/pages/citas/nuevasBarras/Barras';
import LoginTab from './frontend/pages/login/LoginTab.js';
import Registro from './frontend/pages/Registro/registrodeusuario.js';
import Procitas from "./frontend/pages/procitas/Procitas.js";
import PaginaCitasPasadas from './frontend/pages/citas/AlumnoCitasPasadas/AlumnoCitasPasadas';
import VerCitas from './frontend/pages/citas/AlumnoCitas/AlumnoCitas';


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
                path:"/citasPasadas",
                element:<PaginaCitasPasadas/>
            }
        ]
    },
    
]);

export default router; 
