 import { Link } from 'react-router'
 import './inicio.scss'
import Logo from '../assets/images/logo.png'
import Fusca from '../assets/images/fusca.png'
import { useState } from 'react'
import Cabecalho from '../Componets/cabecalho.jsx'



 export default function Inicio(){

const [Principal, setPrincipal] = useState(0);
const [Valor,setValor] = useState();
const [Desconto, setDesconto] = useState();
const [Parcelas, setParcelas] = useState();


function Callculo(){
let call = (Number(Valor) - Number(Desconto)) / Number(Parcelas);
setPrincipal(call.toFixed(2));
}




    return(
        <div>
<Cabecalho/>



<main>

<div className="maee">


<div className="card">

<div className="imagem">
<img src={Fusca} height={"400px"}/>
</div>

<div className="i">
<div className="inputs"> 
<label>Valor Do Carro</label>
<input value={Valor} onChange={(e) => setValor(e.target.value)} placeholder='R$0,00' />
</div>



<div className="inputs">
<label>Desconto</label>
<input value={Desconto} onChange={(e) => setDesconto(e.target.value)} placeholder='R$0,00' />
</div>



<div className="inputs">
<label>Quantidade De Parcelas</label>
<input value={Parcelas} onChange={(e) => setParcelas(e.target.value)} placeholder='0' />
</div>


<div className="botao">
<label>EFETUAR CALCULO </label>
<button onClick={Callculo}>CALCULAR</button>
<h1>Parcelas de: R${Principal}</h1>
</div>

</div>


</div>



</div>
</main>




        </div>
    )
 }