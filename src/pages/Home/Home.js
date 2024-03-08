import styles from '../../styles/Sobre.module.css'
import { AiFillGithub,  AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import Projetos from '../../componentes/Projetos/Projetos';
import Espaco from '../../componentes/espaco'
import Contato from '../../componentes/Contato/contato'
import Formacoes from '../Formacoes/Formacoes';
import {  Link } from 'react-router-dom';
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4Filled, TbSquareRoundedNumber5Filled } from "react-icons/tb"
import { BsChevronDoubleDown} from 'react-icons/bs'
import { createContext,React } from "react";


export const ThemeContext = createContext("dark");

function Home() {
  
    return (
        <div >
            
            <div className={styles.navScroll}>
                <li><a href='#nav'><TbSquareRoundedNumber1Filled /></a></li>
                <li><a href='#about'><TbSquareRoundedNumber2Filled /></a></li>
                <li><a href='#formacoes'><TbSquareRoundedNumber3Filled /></a></li>
                <li><a href='#projetos'><TbSquareRoundedNumber4Filled /></a></li>
                <li><a href='#contato'><TbSquareRoundedNumber5Filled /></a></li>

            </div>
          

            <div className={styles.container} >
                <div className={styles.article}>
                    <h1>Prazer, sou a Ana!</h1>
                    <p>É um prazer ter você por aqui! Sou desenvolvedora, e minha história com a programação começou por volta de três anos atrás. Desde então, venho me aprofundando nos estudos e desenvolvendo projetos. Fique à vontade para rolar a página e descobrir mais.</p>
                    
                    <BsChevronDoubleDown />

                </div>
                <img className={styles.ftPerfil} src='ft_capa.png' alt='foto_perfil'></img>
            </div>
            <div className={styles.social_list} id='about'>
                <Link target={'_blank'} to="https://www.linkedin.com/in/euanaclaramelo"><AiOutlineLinkedin /></Link>
                <Link target={'_blank'} to="https://github.com/anaclaraw"><AiFillGithub /></Link>
                <Link target={'_blank'} to="mailto:cadastrosanaw@gmail.com?subject=Resposta portifólio&body=Ol%C3%A1%2C%20Ana%20Clara!"><AiOutlineMail /></Link>

            </div>
            <Espaco />
            <div id='formacoes'>
                <Formacoes />
            </div>
            <div className={styles.divquadrados}>
<div className={styles.bloco}></div>
                <div className={styles.quadrados}>
                    <div className={styles.quadrado}></div>
                    <div className={styles.quadrado}></div>
                    <div className={styles.quadrado}></div>
                </div>
                <div className={styles.text}>
                    <h2> &nbsp;&nbsp; Vamos trabalhar juntos!</h2>
                    <p>
                        Meu foco atual é me profissionalizar no mercado de trabalho, colocando em prática o que já aprendi e pronta para aprender mais,
                        tenho a intenção de ser um diferencial e colaborar na conquista dos melhores resultados...
                    </p>
                </div>
                <div className={styles.img_projects}>
                    <img  src='ftcodigo.png' alt='foto_codigo'></img>
                    <img  src='csharpcode.png' alt='foto_csharp'></img>
                    <img  src='nodecode.png' alt='foto_node'></img>
                </div>
            </div>
            <Espaco />
            <div id="projetos">
                <Projetos />
            </div>
            <Espaco />

            <div id="contato">
                <Contato />
            </div>
            <Espaco />

        </div>

    )
}
export default Home;