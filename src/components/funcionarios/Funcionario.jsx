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
            <Switch>
                <Route path="/funcionario">
                    <div className="funcionario">
                        <Titulo/>
                        <hr/>
                        <h1>a</h1>
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
            </Switch>
        </Router>
    )
}

export default Funcionario;