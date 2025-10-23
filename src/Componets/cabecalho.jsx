import Logo from '../assets/images/logo.png';
import { Link } from 'react-router';


export default function Cabecalho(){
    return(
               <div>
<header>
        <div className="cabecalho">
        <img src={Logo} height={"200px"} />
        <h1>Calculadora Auto</h1>
        <div className="link">
        <div className="um">
        <Link to={"/"}>Calculo</Link>
        </div>
        <div className="dois">
        <Link to={"/Sobre"}>Sobre</Link>
        </div>
        </div>
        </div>
</header>
</div>
    )
}