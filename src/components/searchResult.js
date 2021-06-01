import { Fragment, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import { useParams } from "react-router";
import { Suspense } from "react";
import SearchCard from "./searchCards";

function SearchResult(prop) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [consulta, guardarConsulta] = useState([]);
  let { search } = useParams();

  let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false&region=AR
  `;

  useEffect(() => {
    consultarAPI();
  }, [search]);

  const consultarAPI = () => {
    clienteAxios
      .get(url)
      .then((respuesta) => {
        guardarConsulta(respuesta.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(consulta, "desde resulkt");
  return (
    <>
      <div className="container main-search">
        {consulta.map((item) => {
          return (
            <SearchCard
              pic={item.poster_path}
              title={item.title}
              resumen={item.overview}
              estreno={item.release_date}
            />
          );
        })}
      </div>
    </>
  );
}

export default SearchResult;
