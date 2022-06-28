import React from "react";

function SearchBar({ searchReq }) {
  return (
    <div className="Input-wrapper mt-1">
      <input
        type="search"
        className="Form-input"
        placeholder="Search tv show"
        onChange={(event) => searchReq(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
