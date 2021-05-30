import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

function MovieCard(props) {
  return (
    <div className="col-6 col-md-3 mt-2 mb-3" key={props.i}>
      <div className="card">
        <Link to={"/movie-page/" + props.movieId}>
          <img src={props.pic} className="card-img-top" alt="..."></img>
        </Link>

        <div className="card-body"></div>
      </div>
    </div>
  );
}

export default MovieCard;
