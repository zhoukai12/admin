import React from 'react';
import { Switch, Route, Link, HashRouter as Router } from 'react-router-dom'
import Login from './pages/login/Login'

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact component={Login} path='/'></Route>
                </Switch>
            </Router>
        </>

    );
}

export default App;
