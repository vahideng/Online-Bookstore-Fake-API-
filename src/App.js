import React, { Component } from 'react';
import MainPage from './containers/mainPage/mainPage';
import BookDetail from './components/BookDetail/BookDetail';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/fetchData';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/:id" component={BookDetail} />
      </Switch>
    );
    return <div className="App">{routes}</div>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(actions.fetchdata())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
