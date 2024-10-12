import React from 'react'
import styles from '../styles/Formacoes.module.css'
import { Link } from "react-router-dom"
import { SiCss3, SiReact, SiMysql, SiPhp, SiNodedotjs, SiGit, SiTailwindcss } from 'react-icons/si'
import {TbBrandCSharp,TbBrandPython} from "react-icons/tb"
import LegendaIcon from './LegendaIcon'

function Formacoes() {
   
      

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textAbout}>
                    <div className={styles.div_title}>
                        <h1 id='iam'>Sobre mim</h1>
                        <p className={styles.mytext}>Aqui as minhas principais formações e para completar,
                            meus pontos de destaque são  raciocinio lógico, resolução de problemas, design inteligente,
                            prazos, comunicação e dedicação.</p>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.box} id={styles.teste} >
                        <h3>Programação</h3>
                        <p>Gosto da lógica de programação e entender o desenvolvimento do software por completo. Com foco em React.js, Node.js e Mysql, já tive experiência com:</p>
                        <div className={styles.programacao}>
                            {/* <li><SiHtml5 /></li> */}
                            <li> <LegendaIcon icon={<SiCss3/>} tooltip='CSS'/></li>
                            <li> <LegendaIcon icon={<SiReact/>} tooltip='React.js'/></li>
                            <li> <LegendaIcon icon={<SiMysql/>} tooltip='Mysql'/></li>
                            <li> <LegendaIcon icon={<SiNodedotjs/>} tooltip='Node.js'/></li>
                            <li> <LegendaIcon icon={<SiPhp/>} tooltip='PHP'/></li>
                            <li> <LegendaIcon icon={<TbBrandCSharp/>} tooltip='Csharp'/></li>
                            <li> <LegendaIcon icon={<SiGit/>} tooltip='Git'/></li>
                            <li> <LegendaIcon icon={<SiTailwindcss/>} tooltip='Tailwind'/></li>
                            <li> <LegendaIcon icon={<TbBrandPython />} tooltip='Python'/></li>

                         
                        </div>
                    </div>
                    <div className={styles.box}>
                        <h3>Formações</h3>
                        <li>2024-2027 | Engenharia de Software - FIAP</li>
                        <li>2021-2023 | Técnico em Desenvolvimento de Sistemas - ETEC Ermelinda</li>
                        <li>2021-2023 | Ensino Médio Integrado - ETEC Ermelinda</li>
                       <li>Inglês Intermediário A2 | CNA idiomas</li> 

                    </div>

                    <div className={styles.box}>
                        <h3>Cursos Complementares</h3>
                        {/* <li>AWS Academy Cloud Foundations - SENAI "Nadir Dias de Figueiredo" </li> */}
                        <li>Cisco Networking Essentials - Cisco/ETEC</li>
                        <li>T-Academy Cloud - ProWay</li>
                        <li><Link to="/Cursos" className={styles.link}> + Mais e certificados </Link></li>

                    </div>
                </div>

            </div>
        </div>
    )
};
export default Formacoes;