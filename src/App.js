import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Noticias from './components/Noticias';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <hr></hr>
      <Titulo></Titulo>
      <hr></hr>
      <Noticias></Noticias>
      <Footer/>
    </div>
  );
}

export default App;
