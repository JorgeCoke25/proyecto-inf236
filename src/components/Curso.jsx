import React from "react";
import PropTypes from "prop-types";

function Curso({ imageSource, title, text, profesor }) {
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
        <a
          href="#!"
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Ir a {title}
        </a>
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