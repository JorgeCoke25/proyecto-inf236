import React from 'react'
import Titulo from '../general/Titulo';
import Cursos from './Cursos';
import Calendario from './Calendario';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
  
  

function Alumno() {
    return (
        <Router>
            <Switch>
                <Route path="/alumno/calendario">
                    <div className="alumno">
                        <Titulo/>
                        <hr/>
                        <Calendario/>
                    </div>
                </Route>
                <Route path="/alumno">
                    <div className="alumno">
                        <Titulo/>
                        <hr/>
                        <Cursos/>
                    </div>
                </Route>
            </Switch>
        </Router>

    )
}

export default Alumno;
