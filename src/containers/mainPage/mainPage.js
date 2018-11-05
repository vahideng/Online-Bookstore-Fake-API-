import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';
import Book from '../../components/Book/book';
import Navigation from '../../components/Navigation/NavigationItems';
import Head from '../../components/Head/Head';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class mainPage extends Component {
  state = {
    persons: []
  };

  clickHandler = id => {
    this.props.history.push('/' + id);
  };
  render() {
    let data = <Loading />;
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

const mapStateToProps = state => {
  return {
    books: state.booksReducer.books
  };
};

export default withRouter(connect(mapStateToProps)(mainPage));
