import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Colegio Coquimbano
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Switch>
          <Route path="/alumno">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a  class="btn" role="button" href="/alumno/calendario">
                  Calendario
                </a>
                <a  class="btn" role="button" href="/alumno">
                  Cursos
                </a>
              </div>
            </Route>  
            <Route path="/funcionario">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a  class="btn" role="button" href="/funcionario/calendario_sanitizacion">
                  Calendario de sanitizacion
                </a>
                <a  class="btn" role="button" href="/funcionario/horario_sala">
                  Horarios y salas
                </a>
                <a  class="btn" role="button" href="/funcionario/bodega">
                  Bodega
                </a>
                <a  class="btn" role="button" href="/funcionario">
                  Inicio
                </a>
              </div>
            </Route>
            <Route path="/">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a  class="btn" role="button" href="/apoderado">
                  Apoderado
                </a>
                <a  class="btn" role="button" href="/profesor">
                  Profesor
                </a>
                <a  class="btn" role="button" href="/alumno">
                  Alumno
                </a>
                <a  class="btn" role="button" href="/establecimiento">
                  Establecimiento
                </a>
                <a  class="btn" role="button" href="/funcionario">
                  Funcionario
                </a>
              </div>
            </Route>
          </Switch>
        </div>
      </nav>
    </Router>
 );
}

export default navbar;
