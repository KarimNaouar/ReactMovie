import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <form className="form-inline my-2 my-lg-0">
        <input
          onChange={(e) => {
            props.search(e.target.value);
          }}
          className="form-control mr-sm-2"
          type="text"
          title="title"
          placeholder="search"
        />
        <button
          onClick={(e) => {
            props.search(e.target.value);
          }}
          className="btn btn-outline-secondary my-2 my-sm-0"
          type="submit"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Search;
