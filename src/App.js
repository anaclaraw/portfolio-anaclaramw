
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/NavBar';
import Home from './pages/Home/Home';
import ProjetosList from './componentes/ProjetosList';
import Contato from './componentes/contato';
import Footer from './componentes/Footer/Footer';
import ProjetoPage from './pages/Projetos/Projetos';
import Curso from './pages/Cursos/Cursos';
import Curriculo from './componentes/Curriculo';
// import VLibras from '@djpfs/react-vlibras';

function App() {
  return (
    <div className="App" >
       {/* <VLibras forceOnload={true} /> */}
      <Router>
        <Navbar /> {/*Inserindo Navbar em todas as páginas*/}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/Projetos" element={<ProjetosList />} />
          <Route path='/ProjetosPage' element={<ProjetoPage/>}/>
          <Route path='/Cursos' element={<Curso/>}/> 
          <Route path='/Home' element={<Home/>}/> 
          <Route path='/curriculo' element={<Curriculo/>}/> 
        </Routes>
        <div id='footer'>
        <Footer/> {/*Inserindo Footer em todas as páginas*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
