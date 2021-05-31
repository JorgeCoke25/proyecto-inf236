import './App.css';
import Cursos from './components/Cursos';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <hr></hr>
      <Titulo></Titulo>
      <hr></hr>
      <Cursos/>
      <hr></hr>
      <Footer/>
    </div>
  );
}     

export default App;
