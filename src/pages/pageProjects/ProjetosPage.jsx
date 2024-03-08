import styles from '../../styles/ProjetosPage.module.css'
import React from 'react';
import Card from '../../componentes/ProjetosPage/Card';
import { projetos } from '../../data/projetos';

export default function ProjetoPage() {
  return (
    <div className={styles.op}>
      <h2>Meus projetos</h2> 
       <Card projetosArray={projetos}/>
    </div>
  )
}
