import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import Movie from "../Movie";

const MoviesList = () => {
  const { moviesData, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (moviesData.length < 1) {
    return <div> no Display movies List</div>;
  }

  return (
    <section className="section">
      <h2 className="section-title">Movies</h2>
      <div className="movies-center">
        {moviesData.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
};

export default MoviesList;
