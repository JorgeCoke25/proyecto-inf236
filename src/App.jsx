import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Noticias from './components/Noticias';
import Titulo from './components/Titulo';
import Cursos from './components/Cursos'

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
        <Switch> 
          <Route path="/alumno">
            <Titulo/>
            <hr/>
            <Cursos/>
          </Route>
          <Route path="/">  
            <Titulo/>
            <hr/>
            <Noticias/>
          </Route> 
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
