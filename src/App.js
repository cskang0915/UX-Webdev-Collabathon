import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import routes from './config/routes';
import PrivacyPolicy from './components/PrivacyPolicy';
// import SubmitContainer from './containers/SubmitContainer';
import Submit from './components/Submit'
import Updated from './components/Updated'


class App extends Component{
  render() {
    return (
      <Router>
        <div className="container">
        <h1>TechnoClub</h1>
          <Switch>
            <Route exact path='/' component={ Header }/>
            <Route path='/privacy' component={ PrivacyPolicy }/>
            <Route path='/submit' component={ Submit }/>
            <Route path='/updated' component={ Updated }/>
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
