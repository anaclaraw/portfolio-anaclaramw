import React from 'react'
import styles from "../styles/Cursos.module.css"
import { Link } from 'react-router-dom';
import { IoMdLink } from "react-icons/io";
const Card = ({ cursos }) => {
    return (
        cursos.map((curso) => (
            <div className={styles.curso_item}>
                <img className={styles.ftprojects} src={curso.foto} alt='foto_certificado'></img>
                <div className={styles.text}>
                    <h1>{curso.title}</h1>
                    <strong>{curso.subtitle}</strong>
                    <p>{curso.text}</p>
                    { curso.link ? <Link to={curso.link} >  <IoMdLink/> </Link> : ''}
                    
                </div>
            </div>
        ))

    )
}

export default Card