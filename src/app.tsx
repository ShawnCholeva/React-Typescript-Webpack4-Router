import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './home/home';
import About from './about/about';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/about/test' component={About}/>
                    <Route exact path='*' component={My404Component} />
                </Switch>
            </Router>
        );
    }
}

export default App;

class My404Component extends Component {
    render() {
        return (
            <div>404</div>
        );
    }
}