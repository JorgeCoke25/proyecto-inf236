import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Noticias from './components/Noticias';
import Titulo from './components/Titulo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <hr></hr>
      <Switch>
        <Titulo></Titulo>
        <hr></hr>
        <Noticias></Noticias>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
