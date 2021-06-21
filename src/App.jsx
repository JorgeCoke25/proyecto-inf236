import './App.css';
import Footer from './components/general/Footer';
import Navbar from './components/general/Navbar';
import Noticias from './components/home/Noticias';
import Titulo from './components/general/Titulo';
import Alumno from './components/alumnos/Alumno';

import {Provider} from 'react-redux'
import generateStore from './redux/store';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar/>
        <hr/>
        <div className="body">
          <Switch> 
            <Route path="/alumno">
                <Alumno/>
            </Route>
            <Route path="/">  
              <Titulo/>
              <hr/>
              <Noticias/>
            </Route> 
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    </Provider>
  )
}

export default App;
