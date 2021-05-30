import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SimilarCard from "./similarCard";
import "../styles/mainContent.css";

function Similar(props) {
  //divide el array de similares en array de 4 items para el carousel
  function chunk(array, size) {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
  }
  // define nuevo array agrupado de a 4 items
  const CarousselArray = chunk(props.data, 4);

  return (
    <div className="container similar">
      <h3>Peliculas similares</h3>
      <hr></hr>

      <Carousel indicators={false}>
        {CarousselArray.map((item, index) => (
          <Carousel.Item>
            <div className="row" key={index}>
              {item.map((chunk, i) => {
                return (
                  <SimilarCard pic={chunk.poster_path} key={i} id={chunk.id} />
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Similar;
