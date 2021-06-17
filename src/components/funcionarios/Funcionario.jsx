import React from 'react'
import Titulo from '../general/Titulo';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

function Funcionario() {
    return (
        <Router>
            <switch>
                <Route path="/funcionario">
                    <div className="funcionario">
                    </div>
                </Route>
                <Route path="/funcionario/calendario_sanitizacion">
                    <div className="funcionario">

                    </div>
                </Route>
                <Route path="/funcionario/horario_sala">
                    <div className="funcionario">

                    </div>
                </Route>
                <Route path="/funcionario/bodega">
                    <div className="funcionario">

                    </div>
                </Route>
            </switch>
        </Router>
    )
}

export default Funcionario;