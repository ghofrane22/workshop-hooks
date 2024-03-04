import MovieCard from "../MovieCard/MovieCard";
import "./Style.css";

const Movielist = ({ filteredMovies }) => {
  return (
    <div className="movie-list">
      {filteredMovies.map((movie, index) => {
        return <MovieCard movie={movie} index={index} />;
      })}
    </div>
  );
};

export default Movielist;
