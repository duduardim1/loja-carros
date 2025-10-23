import { Link } from "react-router"
import './sobre.scss'
import Cabecalho from "../Componets/cabecalho.jsx";
import Fusca from '../assets/images/fusca.png';

export default function Sobre(){
    return(
        <div>   

<Cabecalho/>


<div className="mae">
            <div className="apresentar">
            
<h1>Sobre Nós</h1>
<p>Esta plataforma foi desenvolvida com o propósito de facilitar a sua vida e oferecer uma forma prática e intuitiva de entender melhor os custos reais do seu veículo.
Aqui, você pode utilizar nossa calculadora inteligente para estimar seus gastos de forma simples e rápida — basta inserir as informações sobre o seu carro, como consumo, manutenção, impostos e outros detalhes que desejar acompanhar.

Com base nos dados informados, o sistema ajudará você a visualizar o custo total de uso do seu automóvel, permitindo uma análise mais completa sobre quanto ele realmente representa no seu orçamento.

Nosso objetivo é proporcionar mais transparência, controle e consciência financeira para que você possa tomar decisões mais informadas sobre o seu veículo.</p>

<img src={Fusca} height={"190px"} width={"350px"}/>


        </div>

        <p>Desenvolvido pelo Aluno: Eduardo Luiz da turma Informática B</p>

        </div>



        </div>
    )
}