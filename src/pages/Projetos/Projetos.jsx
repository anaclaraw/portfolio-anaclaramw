import styles from '../../styles/Projetos.module.css'
import React from 'react';
import Card from '../../componentes/ProjetoCard';
import { projetos } from '../../data/projetos';

export default function Projetos() {
  return (
    <div className={styles.op}>
      <h2>Meus projetos</h2> 
       <Card projetosArray={projetos}/>
    </div>
  )
}
