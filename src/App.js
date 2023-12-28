
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/NavBar';
import Home from './pages/Home/Home';
import Empresa from './componentes/Projetos/Projetos';
import Contato from './componentes/Contato/contato';
import Footer from './componentes/Footer';
import ProjetoPage from './pages/pageProjects/ProjetosPage';
import Curso from './pages/Cursos/Cursos';
import Curriculo from './componentes/Curriculo/curriculo';
import VLibras from '@djpfs/react-vlibras';

function App() {
  return (
    <div className="App">
      
       <VLibras forceOnload={true} />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/Projetos" element={<Empresa />} />
          <Route path='/ProjetosPage' element={<ProjetoPage/>}/>
          <Route path='/Cursos' element={<Curso/>}/> 
          <Route path='/Home' element={<Home/>}/> 
          <Route path='/curriculo' element={<Curriculo/>}/> 
        </Routes>
        <div id='footer'>
        <Footer/> </div>
      </Router>
      


    </div>
  );
}

export default App;
