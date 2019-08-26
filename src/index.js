import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase } from './firebase';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const Index = props => {
    return (
        <Router>
            <Routes {...props} />
        </Router>
    );
};
firebase.auth().onAuthStateChanged(user => {
    ReactDOM.render(<Index user={user} />, document.getElementById('root'));
});
