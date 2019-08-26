import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import '../css/header.css';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const AppHeader = () => {
    return (
        <Header className="header">
            <Link to="/">
                <div className="header_title">Binge</div>
            </Link>
        </Header>
    );
};

export default AppHeader;
