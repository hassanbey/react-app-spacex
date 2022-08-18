import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//comp
import NavBar from './../components/NavBar';
import Home from './../pages/Home';
import PastLaunches from './../pages/PastLaunches';
import Rocket from './../pages/Rocket';

var Routing = () => (
    <Router>
        <div class="main">
            <NavBar/>
            <Switch/>
            <Route path="/" component={Home}/>
            <Route path="/Launches" component={PastLaunches}/>
            <Route path="rocket/:id" component={Rocket}/>
        </div>
    </Router>
);

export default Routing;