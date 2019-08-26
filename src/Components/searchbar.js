import React from 'react';
import './css/searchbar.css';
import { Input } from 'antd';
const { Search } = Input;
const SearchBar = ({ handleKeyDown, searchHandler, searchFor }) => {
    return (
        <div>
            <div className="search_header">Search for your favorite shows</div>

            <div className="search_bar">
                <Search
                    placeholder="Game Of Thrones"
                    enterButton="Search"
                    size="large"
                    onSearch={handleKeyDown}
                    onChange={searchHandler}
                    value={searchFor}
                    className="search_input"
                />
            </div>
        </div>
    );
};

export default SearchBar;
