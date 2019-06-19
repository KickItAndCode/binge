import React, { useContext } from "react";
import { MyListContext } from "../mylist/mylistprovider";


const ResultCard = ({ item }) => {

    const {addtolist, removefromlist} = useContext(MyListContext)
    
  return (
    <div
      className="results_container"
      key={item.id}
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/w500${
          item.backdrop_path
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="results_wrapper">
        <div className="results_info">
          <div className="results_info_wrapper">
          <div className="resultscard__buttons" onClick={() => addtolist(item)}> Add</div>
          <div className="resultscard__buttons" onClick={() => removefromlist(item)}> Remove</div>
            <p>Title: {item.title}</p>
            <p>Release Date: {item.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
