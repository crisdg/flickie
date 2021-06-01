import React from "react";
import "../styles/searchCard.css";
function SearchCards(props) {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-2">
          <div className="card-img">
            <img
              src={"https://www.themoviedb.org/t/p/w500" + props.pic}
              alt=""
            />
          </div>
        </div>
        <div className="col-10">
          <div className="card-title">
            <p>{props.title}</p>
            <hr />
            <p>{props.estreno}</p>
            <p>{props.resumen}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCards;
