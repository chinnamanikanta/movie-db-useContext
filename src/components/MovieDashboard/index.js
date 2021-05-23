import SearchItem from "../searchItem";
import MoviesList from "../MoviesList";
import PaginationItems from "../Pagination/";
const MoviesDashboard = () => {
  return (
    <div className="App">
      <SearchItem />
      <MoviesList />
      <PaginationItems />
    </div>
  );
};
export default MoviesDashboard;
