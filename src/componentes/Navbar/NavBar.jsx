import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import React from 'react';

function Navbar() {

    return (
        <div id='nav'>

            <ul className={styles.list}>
                <li> <img className={styles.logo} src='ft_logo.png' width={50} height={50} alt='ft_logo'></img></li>
                <li className={styles.item}>
                    <Link to="/"> Home </Link>
                </li>
                <li className={styles.item}>
                    <a href='/curriculo'>Currículo</a>
                </li>
                <li className={styles.item}>
                    <a href='/ProjetosPage'>Projetos</a>
                </li>
                <li className={styles.item}>
                    <a href='/Cursos'>Certificados</a>
                </li>
                {/* <li className={styles.item}>
                <a href='/contato' > Contato </a>
            </li> */}
            </ul></div>
    )
}
export default Navbar;