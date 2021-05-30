import React from "react";

function noticias() {
  return (
    <div class="noticias">
      <h1 class="titulo-noticias">NOTICIAS</h1>
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Rifa a beneficio</h5>
            <small>3/06/2021</small>
          </div>
          <p class="mb-1">
            El día 5 de Junio del 2021 se realizará una rifa para poder ayudar a
            la Familia de un alumno que lamentablemente se encuentra en estado
            critico , debido a complicaciones causadas por covid..
          </p>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Calendario Vacunación</h5>
            <small>31/5/2021</small>
          </div>
          <p class="mb-1">
            Este domingo 30 de mayo se anuncio el calendario de vacunación en la
            región metropolitana, confirmando que el siguiente rango etario en
            poder vacunarse seran los menores de 20 años.
          </p>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Cuarentena para el 4°B</h5>
            <small>27/5/2021</small>
          </div>
          <p class="mb-1">
            Debido al reciente contagio del familiar de un alumno, el curso 4°B
            se va a ir cuarentena y el profesor "Matraz Kitasato" no ejercera
            clases presenciales debido a un posible contacto estrecho con el
            curso. El plazo de cuarentena sera de 2 semanas, dependiendo como se
            desarrollo del entorno este plazo se vera modificado hasta nuevo
            aviso.
          </p>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Suspension de clases online</h5>
            <small>23/4/2021</small>
          </div>
          <p class="mb-1">
            Se informa a la comunidad educativa que el día Martes 25 de Mayo del
            2021, se suspenderán las clases para poder realizar mantención a
            nuestra pagina web.
          </p>
        </a>
      </div>
    </div>
  );
}

export default noticias;
