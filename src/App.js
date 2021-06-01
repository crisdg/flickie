import { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import clienteAxios from "./config/axios";

import HomePage from "./homePage";
import MoviePage from "./moviePage";
import SearchBar from "./components/searchbar";
import Footer from "./components/footer";
import SearchPage from "./searchPage";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [consultaTrends, guardarConsultaTrends] = useState([]);

  useEffect(() => {
    const consultarTrends = () => {
      clienteAxios
        .get("/3/trending/movie/day?api_key=" + apiKey)
        .then((respuesta) => {
          guardarConsultaTrends(respuesta.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    consultarTrends();
  }, []);

  return (
    <Fragment>
      <Router>
        <SearchBar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage trends={consultaTrends} />}
          />
          <Route exact path="/movie-page/:id" component={() => <MoviePage />} />
          <Route
            exact
            path="/search/:search"
            component={() => <SearchPage />}
          />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
