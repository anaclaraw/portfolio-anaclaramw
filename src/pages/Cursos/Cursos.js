import styles from "../../styles/Cursos.module.css"
import { Link } from 'react-router-dom';

// import {Link} from "react-router-dom"

function Curso() {
  return (
    <div className={styles.all}>
      <h1 className={styles.title}>CURSOS COMPLEMENTARES E CERTIFICADOS</h1>
      <div className={styles.cursos}>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='hardware_img.png' alt='foto_certificado'></img>
          <div className={styles.text}>
            <h1>Oficina de Hardware</h1>
            <strong>2023 | FATEC Santana de Parnaíba</strong>
            <p> Aulas presenciais de perifericos até sistemas operacionais. Com compreensão sólida dos elementos fundamentais do hardware de computador e estará pronto para realizar upgrades, solucionar problemas e tomar decisões informadas sobre a escolha de componentes para construir ou melhorar seu próprio sistema. Este conhecimento é valioso tanto para entusiastas de tecnologia quanto para profissionais de TI que desejam aprimorar suas habilidades em hardware de computador.</p>
          </div>
        </div>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='cursodatd.png' alt='foto_certificado'></img>
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
          <img className={styles.ftprojects} src='badgeaws.png' alt='foto_certificado'></img>
          <div className={styles.text}>
            <h1>AWS Academy Cloud Foundations</h1>
            <strong>2023 | SENAI "Nadir Dias de Figueiredo"</strong>

            <p>O curso AWS Academy Cloud Foundations abrange uma ampla gama de tópicos cruciais relacionados à computação em nuvem e à AWS, incluindo conceitos fundamentais de nuvem, serviços essenciais da AWS, arquitetura em nuvem, segurança, gerenciamento, governança, custos e precificação. Além disso, oferece oportunidades práticas por meio de laboratórios para consolidar o aprendizado. Este curso serve como um alicerce sólido para indivíduos que buscam compreender e utilizar eficazmente os recursos da AWS, tornando-se proficientes na implementação e operação de soluções na nuvem. </p>
            <Link to="https://www.credly.com/badges/332c5198-47c2-4946-b366-ddfc0ab49132/public_url"> Acessar badge </Link>
            {/* <Link to="#"> Acessar certificado SENAI </Link> */}
          </div>
        </div>


        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='logprog.png' alt='foto_certificado'></img>
          <div className={styles.text}>
            <h1>Lógica de programação</h1>
            <strong>2023 | Cubos academy</strong>
            <p>Um curso de lógica de programação é projetado para ensinar os princípios fundamentais de como escrever algoritmos eficazes e estruturar o pensamento lógico para resolver problemas computacionais. Curso base para o mundo da programação, apenas para relembrar os conceitos. </p>
          </div>
        </div>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='certficadoMeta.png' alt='foto_certificado'></img>
          <div className={styles.text}>
            <h1>Realidade aumentada</h1>
            <strong>2023 | Meta Spark</strong>
            <p>No curso de realidade aumentada, os tópicos abordados incluíram: uma introdução à realidade aumentada,
               destacando suas diferenças em relação à realidade virtual; o uso do software Meta Spark Studio, 
               incluindo download e interface; a hierarquia de elementos como luzes, canvas e textos; 
               a criação de materiais e texturas; o Patch Editor para criar efeitos personalizados; 
               tipos de efeitos, como target tracking e experiências imersivas; o desenvolvimento de um filtro prático;
                como testar e publicar esses efeitos na plataforma Hub Meta Spark; e orientações sobre como construir uma carreira na área de realidade aumentada, incluindo onde atuar e onde encontrar cursos adicionais da Meta para aprendizado contínuo. </p>
          </div>
        </div>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='ada_front.png' alt='foto_certificado'></img>
          <div className={styles.text}>
            <h1>Trilha Java</h1>
            <strong>2023 | ADAtech</strong>
            <p>
            O curso trilha digital Java, oferecido pela ADAtech, é composto por quatro módulos que abordam os conceitos
             e as práticas fundamentais da linguagem Java. Sendo eles: Introdução a linguagem Java;
             Banco de Dados utilizando Postgres; API REST e os métodos HTTP; Git e Versionamento para controle de versões.
              </p>
          </div>
        </div>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='ada_front.png' alt='foto_certificado'></img>
          <div className={styles.text}>
            <h1>Trilha Front-End</h1>
            <strong>2023 | ADAtech</strong>
            <p>
            A trilha digital web front-end foi uma oportunidade de rever os conceitos de aplicações web front-end, 
            que são aquelas que interagem com os usuários através de interfaces gráficas. Oferecido pela ADAtech o 
            curso ensina os principais conceitos e ferramentas para o desenvolvimento de aplicações web front-end, 
            que são as partes visíveis e interativas de um site ou aplicativo. O curso é dividido em quatro módulos, 
            que são: Git e versionamento, que ensina a usar o Git, um sistema de controle de versão distribuído, e o 
            GitHub, uma plataforma online que hospeda repositórios Git; HTML; CSS; e JavaScript e React, que ensinam a 
            usar o JavaScript e o React. 
              </p>
          </div>
        </div>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='cisco.jpg' alt='foto_certificado'></img>
          <div className={styles.text}>
            <h1>Cisco Network Essentials.</h1>
            <strong>2023 | Cisco Academy</strong>
            <p>O curso Cisco Network Essentials é um curso que ensina os fundamentos das redes de computadores. O curso explica como os dispositivos de usuário final e as redes locais interagem com a Internet global, quais são os requisitos da conectividade de rede e como configurar e solucionar problemas de redes básicas. O curso também apresenta os conceitos de segurança de rede, protocolos de rede, modelos de rede e arquiteturas de rede. </p>
          </div>
        </div>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='certificado_github.jpg' alt='foto_certificado'></img>
          <div className={styles.text}>
            <h1>Git e Github.</h1>
            <strong>2023 | Udemy - Guilherme Romão</strong>
            <p>Oferecido na plataforma da Udemy, o curso é uma abordagem abrangente para quem busca entender e aprimorar suas habilidades em controle de versão. Desde conceitos fundamentais do Git até práticas avançadas no GitHub, o curso proporciona uma experiência prática para iniciantes, abordando a criação e gerenciamento de repositórios locais, estratégias de branching e merging, resolução de conflitos, colaboração efetiva no GitHub.</p>
          </div>
        </div>



      </div>
    </div>)
}
export default Curso;