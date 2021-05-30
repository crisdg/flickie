import MovieCard from "./movieCard";
import Carousel from "react-bootstrap/Carousel";
import "../styles/mainContent.css";

function MainContent(props) {
  return (
    <div className="container main">
      <Carousel indicators={false}>
        {props.trends.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <div className="movie-banner" key={i}>
                <img
                  className="img-fluid img-hero"
                  src={
                    "https://www.themoviedb.org/t/p/w1280" + item.backdrop_path
                  }
                  alt=""
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="row">
        {props.trends.map((item, i) => {
          return (
            <MovieCard
              title={item.title}
              pic={"https://www.themoviedb.org/t/p/original" + item.poster_path}
              movieId={item.id}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainContent;
