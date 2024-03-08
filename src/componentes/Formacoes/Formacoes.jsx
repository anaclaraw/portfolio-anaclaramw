import styles from '../../styles/Formacoes.module.css'
import { Link } from "react-router-dom"
import { SiHtml5, SiCss3, SiReact, SiMysql, SiPhp, SiFuturelearn,SiNodedotjs } from 'react-icons/si'
import {TbBrandCSharp} from "react-icons/tb"

function Formacoes() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textAbout}>
                    <div className={styles.div_title}>
                        <h1>Sobre mim</h1>
                        <p className={styles.mytext}>Aqui as minhas principais formações e para completar,
                            meus pontos de destaque são  raciocinio lógico, resolução de problemas, design inteligente,
                            prazos, comunicação e dedicação.</p>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.box} id={styles.teste} >
                        <h3>Programação</h3>
                        <p>Gosto da lógica de programação e entender o desenvolvimento do software por completo. Com foco em React.js  e Node.js, já tive experiência com as seguintes tecnologias:</p>
                        <div className={styles.programacao}>
                            <li><SiHtml5 /></li>
                            <li><SiCss3 /></li>
                            <li><SiReact /></li>
                            <li><SiMysql /></li>
                            <li><SiNodedotjs/></li>
                            <li><SiPhp/></li>
                            <li><TbBrandCSharp/></li>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <h3>Formações</h3>
                        <li>2021-2023 | Técnico em Desnvolvimento de Sistemas - ETEC Ermelinda</li>
                        <li>2021-2023 | Ensino médio - ETEC Ermelinda</li>
                        <li>Inglês Básico A2 | CNA idiomas</li>
                    </div>
                    <div className={styles.box}>
                        <h3>Cursos Complementares</h3>
                        <li>2023| Oficina de Hardware - FATEC Santana de Parnaíba</li>
                        <li>2023| AWS Academy Cloud Foundations - SENAI "Nadir Dias de Figueiredo" </li>
                        <li><Link to="/Cursos" className={styles.link}> + Mais e certificados </Link></li>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Formacoes;