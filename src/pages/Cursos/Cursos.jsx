import styles from "../../styles/Cursos.module.css"
import Card from "../../componentes/CursosPage/Card";
import { cursos } from "../../data/cursos";
// import {Link} from "react-router-dom"

function Curso() {
  return (
    <div className={styles.all}>
      <h1 className={styles.title}>CURSOS COMPLEMENTARES E CERTIFICADOS</h1>
      <div className={styles.cursos}>
        <Card cursos={cursos} />
      </div>
    </div>)
}
export default Curso;