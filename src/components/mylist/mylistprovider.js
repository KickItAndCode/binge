import React, { useReducer, useState } from 'react';

export const MyListContext = React.createContext({});

export const MyListConsumer = MyListContext.Consumer;

const reducer = (mylist, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return [...mylist, action.payload];

        case 'REMOVE_FROM_LIST':
            let temp = [...mylist];
            var index = temp.indexOf(action.payload);
            if (index !== -1) temp.splice(index, 1);
            return temp;

        default:
            return mylist;
    }
};

const MyListProvider = props => {
    const [myList, dispatch] = useReducer(reducer, []);

    return <MyListContext.Provider value={{ myList, dispatch }}>{props.children}</MyListContext.Provider>;
};

export default MyListProvider;
