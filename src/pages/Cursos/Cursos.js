import styles from "../../styles/Cursos.module.css"
import { Link } from 'react-router-dom';

// import {Link} from "react-router-dom"

function Curso() {
  return (
    <div className={styles.all}>
      <h1 className={styles.title}>CURSOS COMPLEMENTARES E CERTIFICADOS</h1>
      <div className={styles.cursos}>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='hardware_img.png' alt='foto_perfil'></img>
          <div className={styles.text}>
            <h1>Oficina de Hardware</h1>
            <strong>2023 | FATEC Santana de Parnaíba</strong>
            <p> Aulas presenciais de perifericos até sistemas operacionais. Com compreensão sólida dos elementos fundamentais do hardware de computador e estará pronto para realizar upgrades, solucionar problemas e tomar decisões informadas sobre a escolha de componentes para construir ou melhorar seu próprio sistema. Este conhecimento é valioso tanto para entusiastas de tecnologia quanto para profissionais de TI que desejam aprimorar suas habilidades em hardware de computador.</p>
          </div>
        </div>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='cursodatd.png' alt='foto_perfil'></img>
          <div className={styles.text}>
            <h1>Design de Aplicativos na Transformação Digital</h1>
            <strong>2023 | Escola virtual do governo</strong>
            <p>Sobre a compreensão da importância de desenvolvimento e aplicação de produtos
              e serviços para atender às necessidades atuais dos cidadãos por meio da inovação tecnológica.
              Abordando assuntos como: CX,UX,Experiencia do usuário,Módulo 1: Introdução à Transformação Digital e ao Design de Aplicativos;
              Módulo 2: Princípios do Design Centrado no Humano (DCH) e seus Processos;
              Módulo 3: Discovery: a Etapa da Pesquisa;
              Módulo 4: Criação e Prototipação de Aplicativos;
              Módulo 5: Teste de Usabilidade: a Validação das Soluções;
              Módulo 6: Design de Aplicativos Mobile na Prática </p>
          </div>
        </div>


        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='badgeaws.png' alt='foto_perfil'></img>
          <div className={styles.text}>
            <h1>AWS Academy Cloud Foundations</h1>
            <strong>2023 | SENAI "Nadir Dias de Figueiredo"</strong>

            <p>O curso AWS Academy Cloud Foundations abrange uma ampla gama de tópicos cruciais relacionados à computação em nuvem e à AWS, incluindo conceitos fundamentais de nuvem, serviços essenciais da AWS, arquitetura em nuvem, segurança, gerenciamento, governança, custos e precificação. Além disso, oferece oportunidades práticas por meio de laboratórios para consolidar o aprendizado. Este curso serve como um alicerce sólido para indivíduos que buscam compreender e utilizar eficazmente os recursos da AWS, tornando-se proficientes na implementação e operação de soluções na nuvem. </p>
            <Link to="https://www.credly.com/badges/332c5198-47c2-4946-b366-ddfc0ab49132/public_url"> acessar badge </Link>
            <Link to="#"> acessar certificado SENAI </Link>
          </div>
        </div>


        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='logprog.png' alt='foto_perfil'></img>
          <div className={styles.text}>
            <h1>Lógica de programação</h1>
            <strong>2023 | Cubos academy</strong>
            <p>Um curso de lógica de programação é projetado para ensinar os princípios fundamentais de como escrever algoritmos eficazes e estruturar o pensamento lógico para resolver problemas computacionais. Curso base para o mundo da programação, apenas para relembrar os conceitos. </p>
          </div>
        </div>

      </div>
    </div>)
}
export default Curso;