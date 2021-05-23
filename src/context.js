import React, { useCallback, useContext, useEffect, useState } from "react";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=2796089069f7e1ab4a272ee08e4d6561&language=en-US&page=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const searchItems = (searchedValue) => {
    setSearchItem(searchItem);
    const filtered = moviesData.filter((movie) => {
      return movie.title.toLowerCase().includes(searchedValue.toLowerCase());
    });
    setMoviesData(filtered);
    setSearchItem("");
  };

  const fetchMovies = useCallback(async () => {
    setLoading(true);

    try {
      console.log(`${url}${pageNumber}`, pageNumber);
      const response = await fetch(`${url}${pageNumber}`);
      const data = await response.json();
      const { results } = data;
      if (results) {
        const newMoviesData = results.map((movie) => {
          const {
            id,
            original_language,
            original_title,
            overview,
            poster_path,
            release_date,
            vote_average,
            vote_count
          } = movie;

          return {
            id,
            language: original_language,
            title: original_title,
            desc: overview,
            image: poster_path,
            releaseDate: release_date,
            voteAverage: vote_average,
            voteCount: vote_count
          };
        });
        setMoviesData(newMoviesData);
      } else {
        setMoviesData([]);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [pageNumber]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, searchItem, pageNumber]);

  return (
    <AppContext.Provider
      value={{
        loading,
        moviesData,
        searchItem,
        searchItems,
        setPageNumber,
        pageNumber
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
