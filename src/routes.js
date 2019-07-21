import React from 'react';
import { Switch}  from 'react-router-dom';
                   
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import SignIn from './Components/signin';
import App from './App';
import SignUp from './Components/signup';

 
const Routes = (props) => {
  return(
        <Switch>                   
            <PublicRoute {...props} restricted={false} path="/sign_in" exact component={SignIn}/>
            <PublicRoute {...props} restricted={false} path="/sign_up" exact component={SignUp}/>
            <PrivateRoute {...props} restricted={false} path="/" exact component={App}/>
        </Switch>
  )
}

export default Routes;
