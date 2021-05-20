import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../styles/card.css";
import MovieCard from "./movieCard";

function Premiere() {
  return (
    <div className="container bar">
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="row">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Premiere;
