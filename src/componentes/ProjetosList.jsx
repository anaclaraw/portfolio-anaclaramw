import styles from '../styles/Projetos.module.css'
import { useNavigate } from 'react-router-dom';
import React, { } from 'react';
import { TbCircleArrowRightFilled } from "react-icons/tb"

function ProjetosList() {
    const navigate = useNavigate()
    const navigateProjetosPage = () => {
        navigate("/ProjetosPage")
    }
    return (
        <div className={styles.sobre}>
            <div className={styles.container_projetos}>
                <div className={styles.container_sobre}>
                    <h1>Meus projetos  </h1>
                    <p>Aqui alguns dos meus projetos recentes, você pode conferir melhor seus detalhes e acessa-los pelo github.
                    </p>

                </div>
                <div className={styles.grid1}>
                    <div className={styles.box}>
                        <h1>Locadora</h1>
                        <p>Projeto em C# e MySQL, com método CRUD completo. Gerencimento para locadora de carros.</p>
                        <img className={styles.ftprojects} src='logoLocadora.png' alt='foto_perfil'>
                        </img>
                    </div>

                    <div className={styles.box}>

                        <h1>CRUD</h1>
                        <p> Projeto em PHP e MySQL, com estrutura em HTML e CSS. Gerenciamento administrador completo de vendas.</p>
                        <img className={styles.ftprojects} src='lojaLogo.png' alt='foto_perfil'>
                        </img>
                    </div>

                    <div className={styles.box}>
                        <h1>CYAN</h1>
                        <p>Projeto de TCC para inclusão de PCD. Desenvolvimento em React.js, Node.js e MySQL.</p>
                        <img className={styles.ftprojects} src='alogocyan.png' alt='foto_perfil'>
                        </img>
                    </div>
                </div>
                
                <div onClick={navigateProjetosPage}><TbCircleArrowRightFilled /></div>

            </div>
        </div>

    )
}
export default ProjetosList; 