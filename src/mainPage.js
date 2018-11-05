import React, { Component } from 'react';
import * as actions from '../../store/actions/fetchData';

import Book from '../../components/Book/book';
import Navigation from '../../components/Navigation/NavigationItems';
import Head from '../../components/Head/Head';
import { connect } from 'react-redux';

class mainPage extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    this.props.onFetchProducts();
  }

  clickHandler = id => {
    this.props.history.push('/' + id);
  };
  render() {
    let data = '';
    if (this.props.books) {
      data = this.props.books.map(ite => {
        return (
          <Book
            key={ite.ID}
            PublishDate={ite.PublishDate}
            Title={ite.Title}
            PageCount={ite.PageCount}
            clicked={() => this.clickHandler(ite.ID)}
          />
        );
      });
    }

    return (
      <div>
        <Navigation />
        <div className="container">
          <Head />
          <div className="row">{data}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(actions.fetchdata())
  };
};

const mapStateToProps = state => {
  return {
    books: state.booksReducer.books
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainPage);
