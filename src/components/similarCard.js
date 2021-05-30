import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

function similarCard(props) {
  return (
    <div className="col-6 col-md-3 mt-2 mb-3">
      <div class="card similar-card">
        <Link to="/">
          <img
            src={"https://www.themoviedb.org/t/p/w500" + props.pic}
            class="card-img-top similar-img"
            alt="..."
          ></img>
        </Link>

        <div class="card-body similar-card-body"></div>
      </div>
    </div>
  );
}

export default similarCard;
