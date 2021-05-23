import React, { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const SearchItem = () => {
  const { searchItems } = useGlobalContext();
  const [value, setValue] = useState("");
  const searchValue = useRef("");

  const searchMovieName = () => {
    setValue(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchItems(value);
    setValue("");
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite Movie</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchMovieName}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchItem;
