import { Link } from "react-router-dom";

function navbar() {
  return (
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a  class="btn" role="button" href="/alumno">
            Iniciar Sesion
          </a>
          <button type="button" class="btn">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
