import React, {useContext, useState} from "react";

export const MyListContext = React.createContext({
  mylist: [],
  addtolist: () => {},
  removefromlist: () => {}
});


export const MyListConsumer = MyListContext.Consumer;


const MyListProvider = (props) => {
  const [mylist, setmylist] = useState([])

  const addtolist = item => {
    let temp = mylist;
    temp.push(item) 
    setmylist(temp)
    console.log("item added: "+ mylist);
    
  };

  const removefromlist = item => {
    let temp = mylist;

    var index = temp.indexOf(item);
    if (index !== -1) temp.splice(index, 1);
    setmylist(temp)
    console.log("Item Removed: " +mylist);

  };

  return (
    <MyListContext.Provider value={{mylist, addtolist, removefromlist }}>
      {props.children}
    </MyListContext.Provider>
  );
};

export default MyListProvider;

