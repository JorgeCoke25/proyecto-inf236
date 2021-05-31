function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!">
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
        <h2 className="Nombre-Alumno">Bienvenido, Alumno: Elon Musk</h2>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button type="button" class="btn">
            Mensajes 
            <small style={{backgroundColor: "red",marginLeft:"3px",fontSize:"1rem"}}>3</small>
          </button>
          <button type="button" class="btn">
            Horario
          </button>
          <button type="button" class="btn">
            Calendario
          </button>
          <button type="button" class="btn">
            Notas 
          </button>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
