import './App.css';
import Footer from './components/general/Footer';
import Navbar from './components/general/Navbar';
import Noticias from './components/home/Noticias';
import Titulo from './components/general/Titulo';
import Alumno from './components/alumnos/Alumno';
import Funcionario from './components/funcionarios/Funcionario';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <hr/>
        <div className="body">
          <Switch> 
            <Route path="/alumno">
                <Alumno/>
            </Route>
            <Route path="/home">  
              <Titulo/>
              <hr/>
              <Noticias/>
            </Route>
            <Route path="/funcionario">
              <Funcionario/>  
            </Route> 
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
