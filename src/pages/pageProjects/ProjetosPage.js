import { Link } from 'react-router-dom';
import styles from '../../styles/ProjetosPage.module.css'
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFigma } from 'react-icons/fa'
import React from 'react';


export default function ProjetoPage() {
  function mouseEmCima(imagem) {
    imagem.src = "logoPw.png";
  }
  function mouseFora(imagem) {
    imagem.src = "school.png";
  }
  return (
    <div className={styles.op}>
      <h2>Meus projetos</h2>
      <div className={styles.listproject}>
        <div className={styles.itemproject}>
          <img className={styles.ftprojetos} src='ftlocadora.png'></img>
          <div className={styles.textproject}>
            <div className={styles.row}><h4>Locadora</h4> <div className={styles.svgprojects}> <Link to="https://www.linkedin.com/posts/euanaclaramelo_desenvolvendo-em-c-estou-come%C3%A7ando-a-desenvolver-activity-7008077521791389696-u-ay?utm_source=share&utm_medium=member_desktop"> <AiFillLinkedin /></Link>
              <Link to="https://github.com/anaclaraw/Locadora.git"><AiOutlineGithub /></Link></div></div>
            O projeto em C# para uma locadora de carros visa criar um sistema de gerenciamento completo, utilizando o paradigma CRUD (Create, Read, Update, Delete) para interagir com um banco de dados MySQL. Este sistema permitirá que a locadora registre novos veículos em seu inventário (Create), consulte informações sobre carros disponíveis (Read), atualize dados quando necessário (Update) e remova registros obsoletos (Delete). Isso proporcionará uma gestão eficaz e eficiente dos recursos da locadora, melhorando a experiência tanto para a empresa quanto para seus clientes.
            <div className={styles.languages}><p>C#</p><p>MYSQL</p><p>GitHub</p></div>
          </div>
        </div>
      </div>

      <div className={styles.listproject}>
        <div className={styles.itemproject}>
          <img className={styles.ftprojetos} src='phpcrud.png'></img>
          <div className={styles.textproject}>
            <div className={styles.row}><h4>CRUD com PHP e MySQL</h4> <div className={styles.svgprojects}>   <Link to="https://github.com/anaclaraw/CRUD-Loja.git"><AiOutlineGithub /></Link></div></div>
            Um sistema CRUD em PHP e MySQL para um pequeno gerenciamento de empresa de produtos, usuários e contatos permitirá que a empresa crie, leia, atualize e delete informações facilmente. Os produtos podem ser adicionados ao estoque (Create), detalhes podem ser consultados quando necessário (Read), informações atualizadas conforme necessário (Update) e registros podem ser removidos quando não forem mais relevantes (Delete). Além disso, o sistema possibilitará o gerenciamento de usuários da empresa e seus contatos, simplificando a administração de recursos e informações importantes.
            <div className={styles.languages}><p>PHP</p><p>MYSQL</p><p>CRUD</p><p>CSS</p><p>HTML</p></div>
          </div>
        </div>
      </div>

      <div className={styles.listproject}>
        <div className={styles.itemproject}>
          <img className={styles.ftprojetos} src='loginphp.png'></img>
          <div className={styles.textproject}>
            <div className={styles.row}><h4>Login e Logout</h4>
              <div className={styles.svgprojects}>
                <Link to="https://github.com/anaclaraw/LoginPHP.git">
                  <AiOutlineGithub /></Link></div></div>
            Ut fugiat consectetur aliqua non excepteur incididunt labore fugiat aliqua pariatur Lorem. Ipsum fugiat reprehenderit incididunt nostrud anim deserunt sint. Duis aute et nisi non irure dolor est dolore mollit tempor nisi. Exercitation velit ea labore Lorem.
            <div className={styles.languages}><p>ajaja</p><p>sshsuhs</p></div>
          </div>
        </div>
      </div>

      <div className={styles.listproject}>
        <div className={styles.itemproject}>
          <img className={styles.ftprojetos} src='designtelas.png'></img>
          <div className={styles.textproject}>
            <div className={styles.row}><h4>Design Telas</h4>
              <div className={styles.svgprojects}>
                <Link to="https://www.figma.com/proto/xuy4CRXpWyGVDanxeIizlm/Untitled?type=design&node-id=1-99&scaling=min-zoom&page-id=0%3A1">
                  <FaFigma /></Link></div></div>
            Design realizados para projetos próprios, para treino de UX, TCC. Todos pelo editor gráfico Figma.
            <div className={styles.languages}><p>Figma</p><p>UX</p><p>Acessibilidade</p></div>
          </div>
        </div>
      </div>

      <div className={styles.listproject}>
        <div className={styles.itemproject}>
          <img className={styles.ftprojetos} src='portfolio.png'></img>
          <div className={styles.textproject}>
            <div className={styles.row}><h4>Portifólio</h4>
              <div className={styles.svgprojects}>
                <Link to="https://github.com/anaclaraw/portfolio_anaclaram.git">
                  <AiOutlineGithub /></Link></div></div>
            Ut fugiat consectetur aliqua non excepteur incididunt labore fugiat aliqua pariatur Lorem. Ipsum fugiat reprehenderit incididunt nostrud anim deserunt sint. Duis aute et nisi non irure dolor est dolore mollit tempor nisi. Exercitation velit ea labore Lorem.
            <div className={styles.languages}><p>ajaja</p><p>sshsuhs</p></div>
          </div>
        </div>
      </div>



    </div>

  )
}