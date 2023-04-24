import {BrowserRouter, Routes, Route} from "react-router-dom" 

import Cadastro from './paginas/Cadastro'
import Interna from './paginas/Interna'
import Login from './paginas/Login'


const Rotas = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact = {true} path="/" Component={Cadastro} />
                <Route exact = {true} path="/Interna" Component={Interna} />
                <Route exact = {true} path="/Login" Component={Login} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas