import React from "react";
import PropTypes from "prop-types";
import {useDispatch} from 'react-redux'
import { obtenerCursoAccion } from "../../redux/cursoDucks";
import { Link } from "react-router-dom";


function Curso({ imageSource, title, profesor,card }) {
  const dispatch = useDispatch();
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {profesor
            ? profesor
            : "A."}
        </p>
        <Link
          to={`/alumno/${title}`}
          className="btn btn-outline-secondary border-0"
          onClick={()=>dispatch(obtenerCursoAccion(card))}
        >
          Ir a {title}
        </Link>
      </div>
    </div>
  );
  
}

Curso.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Curso;