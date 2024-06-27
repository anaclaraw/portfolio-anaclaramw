import { Link } from 'react-router-dom';
import styles from '../styles/ProjetosPage.module.css'
import { AiOutlineGithub } from "react-icons/ai";
import React from 'react';



const Card = ({ projetosArray }) => {
 
  return (
    projetosArray.map((projeto)=>(
      <div className={styles.listproject}>
      <div className={styles.itemproject}>
        <img className={styles.ftprojetos} src={projeto.foto} alt="foto_projeto"></img>
        <div className={styles.textproject}>
          <div className={styles.row}>
            <h4>{projeto.title}</h4>
            <div className={styles.svgprojects}>
              <Link to={projeto.link}>{projeto.icon ? projeto.icon :  <AiOutlineGithub /> }</Link>
            </div>
          </div>
          {projeto.text}
          <div className={styles.languages}>{projeto.languages}</div>
        </div>
      </div>
    </div>
    ))
   
  )
}

export default Card