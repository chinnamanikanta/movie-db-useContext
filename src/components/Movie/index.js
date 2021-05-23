import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
const imageUrl = "https://image.tmdb.org/t/p/w500";

const Movie = ({ id, image, title, releaseDate, desc }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="movies">
      <div className="img-container">
        <img src={`${imageUrl}${image}`} alt={id} />
      </div>
      <div className="movies-footer">
        <h4>MovieName: {title}</h4>

        <p>
          <span className="span-class">Description : </span>
          {readMore ? desc : `${desc.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)} className="showMore">
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <p>Release-Date : {releaseDate}</p>
        <Link to={`/movies/${id}`} className="viewDeaitls">
          View Details
        </Link>
      </div>
    </article>
  );
};

export default Movie;
