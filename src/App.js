import React, { Component } from 'react';
import MainPage from './containers/mainPage/mainPage';
import { Route, Switch } from 'react-router-dom';



import './App.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="./:id" component={"Details"} />
      </Switch>
    );
    return <div className="App">{routes}</div>;
  }
}

export default App;
