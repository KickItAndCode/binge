import React, { useContext } from 'react';
import { MyListContext } from '../mylist/mylistprovider';
import useToggle from '../Hooks/useToggle';
import '../css/resultCard.css';

const ResultCard = ({ item }) => {
    const { dispatch } = useContext(MyListContext);
    const [currSide, toggleCard] = useToggle(false);

    if (item.backdrop_path) {
        return (
            <div
                className="results_container"
                key={item.id}
                style={{
                    backgroundImage: `url(http://image.tmdb.org/t/p/w500${item.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="results_wrapper">
                    <div className="results_info">
                        <div className="results_info_wrapper">
                            <div
                                className="resultscard__buttons"
                                onClick={() => dispatch({ type: 'ADD_TO_LIST', payload: item })}
                            >
                                Add
                            </div>
                            <div
                                className="resultscard__buttons"
                                onClick={() => dispatch({ type: 'REMOVE_FROM_LIST', payload: item })}
                            >
                                Remove
                            </div>
                            <p>Title: {item.title}</p>
                            <p>Release Date: {item.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default ResultCard;
