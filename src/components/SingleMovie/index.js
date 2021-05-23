import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { useHistory } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/w500";

const SingleMovie = (props) => {
  let history = useHistory();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [singleMovie, setSingleMovie] = useState(null);

  const getMovie = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${parseInt(
          id.slice(0),
          10
        )}?api_key=2796089069f7e1ab4a272ee08e4d6561`
      );
      const data = await response.json();

      if (data) {
        const {
          backdrop_path: backdropImage,
          poster_path: posterImage,
          budget,
          genres,
          homepage,
          id,
          original_language: language,
          original_title: title,
          overview: desc,
          popularity,
          poster_path: poster,
          production_companies: productionCompanies,
          production_countries: productionCountries,
          release_date: releaseDate,
          revenue,
          runtime: movieRuntime,
          spoken_languages: english,
          status,
          tagline,
          vote_average: voteAverage,
          vote_count: voteCount
        } = data;

        const newMovie = {
          backdropImage,
          posterImage,
          budget,
          genres,
          homepage,
          id,
          language,
          title,
          desc,
          popularity,
          poster,
          productionCompanies,
          productionCountries,
          releaseDate,
          revenue,
          movieRuntime,
          english,
          status,
          tagline,
          voteAverage,
          voteCount
        };
        setSingleMovie(newMovie);
      } else {
        setSingleMovie(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!singleMovie) {
    return <div>No movies displayed</div>;
  } else {
    return (
      <section className="single-Section-Item">
        <button
          type="button"
          className="back-to-home"
          onClick={() => history.goBack()}
        >
          Back To Home
        </button>
        <div className="single-Card">
          <h3 className="movieTitle">{singleMovie.title}</h3>

          <div className="row">
            <div className="col-1">
              <img
                src={`${baseURL}${singleMovie.posterImage}`}
                alt={singleMovie.id}
                className="single-card-image"
              />
            </div>

            <div className="col-3">
              <p className="paragraph">{singleMovie.desc}</p>
              <h4>
                Popularity :
                {!singleMovie.popularity ? 0 : singleMovie.popularity}
              </h4>
              <h4>Release Date: {singleMovie.releaseDate}</h4>
              <h4>Revenue : {singleMovie.revenue}</h4>
              <h4>
                Runtime : {!singleMovie.runtime ? 0 : singleMovie.runtime}
              </h4>
            </div>
          </div>
        </div>

        {!singleMovie.genres ? (
          <div></div>
        ) : (
          <div>
            <h3 className="genre-heading">Genres</h3>
            <div className="main-genre">
              {singleMovie.genres.map((genre) => {
                return (
                  <button type="button" className="genre-button">
                    {genre.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <br />
        <br />

        <div>
          <h3 className="genre-heading">Production Companies</h3>
          <div className="main-genre">
            {singleMovie.productionCompanies.map((comapany) => {
              return (
                <div key={comapany.id} className="company">
                  <img
                    src={`${baseURL}${comapany.logo_path}`}
                    alt={comapany.id}
                    className="company-image"
                  />
                  <h3>{comapany.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default SingleMovie;
