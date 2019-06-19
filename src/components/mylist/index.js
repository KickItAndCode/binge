import React, { useContext, useState, useEffect } from "react";
import ResultCard from "../searchresults/resultcard";
import { MyListContext } from "./mylistprovider";

const MyList = props => {

  
  const { mylist } = useContext(MyListContext);

  const [list, setloist] = useState(mylist)
useEffect(() => {
  console.log("loaded");
  
}, [list])

  console.log("My List:" +list)
 return (
      <>
      <h1>Hello</h1>
      <div>
        {list.map((item, index) => (
          <ResultCard key={index} item={item} />
        ))}
      </div>
      </>
 )
};

export default MyList;
