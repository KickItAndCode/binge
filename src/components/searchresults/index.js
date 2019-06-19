import React from "react";
import ResultCard from "./resultcard";

const SearchResults = props => {
  const { results } = props;
  let resArray = results.results;
  console.log(resArray);

  let baseImage = "http://image.tmdb.org/t/p/w185";
  let searchResults = null;

  if (resArray) {
    searchResults = resArray.map((item, index) => <ResultCard key={index} item={item} />);
  } else {
    searchResults = <div>Waiting For Results</div>;
  }

  let noresults = (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <span> Search For Your Favorite Shows</span>
    </div>
  );
  return (
    <React.Fragment>{resArray ? searchResults : noresults}</React.Fragment>
  );
};

export default SearchResults;
