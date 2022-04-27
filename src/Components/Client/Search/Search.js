import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <section className="search-section">
      <div className="search">
        <h1 className="search-title">I grow by helping people in need.</h1>
        <div className="search-area">
          <input type="text" placeholder="Search..." className="search-field" />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Search;
