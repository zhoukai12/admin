import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/index/index'
import PrivateRouter from 'components/privateRouter/index'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact component={Login} path='/login'></Route>
                <PrivateRouter component={Home} path='/'></PrivateRouter>
            </Switch>
        </Router>
    );
}

export default App;
