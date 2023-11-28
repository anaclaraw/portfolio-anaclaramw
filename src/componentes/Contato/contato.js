import { useForm } from "react-hook-form";
import styles from '../../styles/Contato.module.css'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin,AiOutlineMail} from "react-icons/ai";
import {  Link } from 'react-router-dom';


function Contato() {


  return (
    <div className={styles.container_contato}>
      
      <div>
      <h1>Conheça minhas Redes:</h1>
        <ul className={styles.redes}>
          {/* <AiFillBulb /> */}
          <li><Link className={styles.linkedin} to="https://www.linkedin.com/in/euanaclaramelo"><AiOutlineLinkedin /></Link>
          </li><li><Link className={styles.git} to="https://twitter.com/"><AiFillGithub /></Link>
          {/* </li><li><Link className={styles.insta} to="https://www.instagram.com/anclaramelo/"><AiOutlineInstagram /></Link> */}
          </li>
        </ul>
        <p>Visite meus projetos para conhecer <br></br>um pouco mais.</p>
      </div>
      <form action="mailto:anaclaramelo2707@gmail.com" className={styles.form}>
        <div className={styles.input}>
          <h3>Me mande um email, <br></br> vamos trabalhar juntos!</h3>         
        </div>

        <button type="submit" className={styles.button}>Enviar e-mail</button> 
      </form>
      </div>
      
  );
}
export default Contato;