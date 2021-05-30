import { Fragment, useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import "../styles/mainContent.css";
import clienteAxios from "../config/axios";
import { useParams } from "react-router";
import Similar from "./similar";

function MovieDetails() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [consulta, guardarConsulta] = useState({});
  const [providers, guardarProviders] = useState({});
  const [similares, guardarSimilares] = useState([]);

  let { id } = useParams(); // toma el id de la URL

  //Url para consultas
  let url = `/3/movie/${id}?api_key=` + apiKey;
  let urlProvider = `/3/movie/${id}/watch/providers?api_key=` + apiKey;
  let urlSimilar = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = () => {
    clienteAxios
      .get(url)
      .then((respuesta) => {
        guardarConsulta(respuesta.data);
        consultarSimilares();
        consultarProv();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const consultarProv = () => {
    clienteAxios
      .get(urlProvider)
      .then((respuesta) => {
        guardarProviders(respuesta.data.results);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const consultarSimilares = () => {
    clienteAxios
      .get(urlSimilar)
      .then((respuesta) => {
        guardarSimilares(respuesta.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div
        className="hero"
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w1280${consulta.backdrop_path}")`,
        }}
      >
        <div className="col-md-3"></div>
        <div className="col-md-9 info">
          <span className="movie-info-text">
            <p>{consulta.release_date}</p>
            <h2>{consulta.title}</h2>
            <p>{consulta.runtime} min</p>
            <p>Director: Peter Jackson</p>
          </span>
        </div>
      </div>
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3 info">
            <Image
              src={
                "https://www.themoviedb.org/t/p/original" + consulta.poster_path
              }
              className="movie-img-sm"
            />
          </div>
          <div className="col-md-9 mt-3 mb-3 plot">
            <span className="main-txt">{consulta.overview}</span>

            {providers["AR"] && (
              <div>
                <h3>Streaming</h3>
                {providers["AR"].flatrate ? (
                  providers["AR"].flatrate.map((item, i) => {
                    return (
                      <div key={i}>
                        <p>{item.provider_name}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>No hay servicios de streaming en su region</p>
                )}
                <h3>Rent</h3>
                {providers["AR"].rent ? (
                  providers["AR"].rent.map((item, i) => {
                    return (
                      <div key={i}>
                        <p>{item.provider_name}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>No hay servicios de alquiler en su region</p>
                )}
              </div>
            )}
          </div>
        </div>
        <Similar data={similares} />
      </div>
    </Fragment>
  );
}

export default MovieDetails;
