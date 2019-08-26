import React, { Component, useState, useEffect } from 'react';
import './App.css';
import AppHeader from './Components/Layout/header';
import SearchResults from './Components/searchresults';
import MyList from './Components/mylist';
import axios from 'axios';
import MyListProvider from './Components/mylist/mylistprovider';
import SearchBar from './Components/searchbar';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const API_KEY = '7162df2fd005697749ada799f6d12790';

const App = () => {
    const [searchfor, setSearchFor] = useState('');
    const [res, setRes] = useState([]);

    useEffect(() => {
        searchSubmit();
    }, [searchfor]);

    const searchSubmit = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchfor}`).then(res => {
            setRes(res.data);
        });
    };
    const searchHandler = e => {
        setSearchFor(e.target.value);
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            setSearchFor(e.target.value);
        }
    };

    return (
        <div className="App ">
            <Layout className="layout">
                <AppHeader />
                <Content>
                    <MyListProvider>
                        <SearchBar searchFor={searchfor} searchHandler={searchHandler} handleKeyDown={handleKeyDown} />
                        <div className="container">
                            <MyList />
                            <SearchResults results={res} />
                        </div>
                    </MyListProvider>
                </Content>
            </Layout>
        </div>
    );
};

export default App;
