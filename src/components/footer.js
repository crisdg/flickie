import React from "react";
import "../styles/footer.css";

export function Footer() {
  return (
    <div className="container-fluid bg-dark text-white-50 mt-4">
      <div className="row">
        <div className="col md-4">
          <h5>Contacto</h5>
          <ul>
            <li>Correo: Cris@gmail.com</li>
            <li>TEL: 11 12457654</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Redes</h5>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="col-md-4">
          <p>Data source</p>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt=""
            className="data-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
