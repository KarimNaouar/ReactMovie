import React from "react";
import MovieAdd from "./AddMovie";
import Search from "./search";
const Navbar = (props) => {
  const { add, search, useMovie, useRating } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse search"
          id="navbarSupportedContent"
        >
          <Search
            useMovie={useMovie}
            useRating={useRating}
            search={(m) => search(m)}
          />
          <div className="nav-item addbutton ml-auto">
            <MovieAdd add={(M) => add(M)} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
