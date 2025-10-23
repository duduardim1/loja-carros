import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/inicio.jsx";
import Sobre from "./pages/sobre.jsx";




export default function Navegacao(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element = {<Inicio/>}/>
    <Route path="/Sobre" element = {<Sobre/>}/>
</Routes>
</BrowserRouter>

    )
}