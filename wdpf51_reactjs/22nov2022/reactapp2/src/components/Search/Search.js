import React from "react";

const Search = () => {
  let Term = "";
  const handleChange = (event) => {
    Term = event.target.value;
  };
  return (
    <div>
      <label>Serach:</label>
      <input type="text" onChange={handleChange} />
      <h1>Search for {Term}</h1>
    </div>
  );
};
export default Search;
