import React from 'react';
import image6 from '../../imagenes/Bio.jpg';
import image4 from '../../imagenes/Fi.jpg';
import image3 from '../../imagenes/Hi.jpg';
import image2 from '../../imagenes/Le.jpg';
import image1 from '../../imagenes/Ma.jpg';
import image5 from '../../imagenes/Qui.jpeg';
import Curso from './Curso';


const cards = [
        {
          id: 1,
          title: "Matematica",
          image: image1,
          profesor: "Profesor Rossa"
        },
        {
          id: 2,
          title: "Lenguaje",
          image: image2,
          profesor: "Profesor A.Uzieda"
        },
        {
          id: 3,
          title: "Historia",
          image: image3,
          profesor: "Profesor P.Aguirre"
        },
         {
          id: 4,
          title: "Fisica",
          image: image4,
          profesor: "Profesor O.Kenobi"
        },
        {
            id: 5,
            title: "Quimica",
            image: image5,
            profesor: "Profesor S.Ishigami"
        },
        {
            id: 6,
            title: "Biologia",
            image: image6,
            profesor: "Profesor K.Reeves"
        },
      ];
      
      function Cursos() {
        return (
        <div>
            <h1 className="titulo-cursos">Cursos</h1>
            <br/>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
              {cards.map(({ title, image, profesor, id },index) => (
                <div className="col-md-4" key={id}>
                  <Curso imageSource={image} title={title} profesor={profesor} card={cards[index]} />
                </div>
              ))}
            </div>
          </div>
        </div>
        );
      }
export default Cursos;