import React, { useContext, useState, useEffect } from 'react';
import ResultCard from '../searchresults/resultcard';
import { MyListContext } from './mylistprovider';
import '../css/mylist.css';
const myList = props => {
    const { myList } = useContext(MyListContext);

    return (
        <>
            {myList.length > 0 && <div className="mylist_header">Currently binging {myList.length} show/s </div>}

            <div>
                {myList.map((item, index) => (
                    <ResultCard key={index} item={item} />
                ))}
            </div>
        </>
    );
};

export default myList;
