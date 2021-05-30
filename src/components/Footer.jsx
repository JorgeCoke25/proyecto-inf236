import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Contacto</h5>
            <p>Rectoria: +56225678912</p>
            <p>Recepcion: +56225678913</p>
          </div>
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Direccion</h5>
            <p>
            Vicuña Mackenna 3939
            </p>
          </div>
        </div>
      </div>
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
      >
        © 2021 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">
          institucionuwu.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
