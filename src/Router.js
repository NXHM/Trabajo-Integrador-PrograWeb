import {useState} from 'react';
import Barras from './frontend/pages/citas/nuevasBarras/Barras';
import LoginTab from './frontend/pages/login/LoginTab.js';
import Registro from './frontend/pages/Registro/registrodeusuario.js';
import Prcitas from './frontend/pages/procitas/Procitas';
import MiPerfil from './frontend/pages/mi_perfil/mi_perfil';
import AlumnoCitasPasadas from  './frontend/pages/citas/AlumnoCitasPasadas/AlumnoCitasPasadas';
import InfoDocente from './frontend/pages/citas/DocenteCitas/InfoDocente';
import MisHorarios from './frontend/pages/mis_horarios/mis_horarios'
import EvaluationPopup from './frontend/pages/CalifiEstre/Calificación estrellas'
import VerCitas from './frontend/pages/citas/AlumnoCitas/AlumnoCitas'

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
                element:<Prcitas/>
            },
            {
                path:"/perfil",
                element:<MiPerfil/>
            },
            {
                path:"/alumnocitaspasadas",
                element:<AlumnoCitasPasadas/>
            },
            {
                path:"/infodocente",
                element:<InfoDocente/>
            },
            {
                path:"/horarios",
                element:<MisHorarios/>
            },
            {
                path:"/calificaciones",
                element:<EvaluationPopup/>
            },
            {
                path:"/citas",
                element:<VerCitas/>
            }
        ]
    },
    
]);

export default router; 
