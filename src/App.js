import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import routes from './config/routes';
import PrivacyPolicy from './components/PrivacyPolicy';
import Nav from './components/Nav'

class App extends Component{
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={ Header }/>
          <Route path='/privacy' component={ PrivacyPolicy}/>
        </Switch>
      </div>
    );
  };
};

export default App;
