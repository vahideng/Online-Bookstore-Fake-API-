import React, { Component } from 'react';
import { connect } from 'react-redux';

class bookDetails extends Component {



  render() {
    let bookDetail = this.props.match.params.id -1;
    let book ='';
    console.log(bookDetail);
    console.log(this.props.books);
    
    if(this.props.books){
       book = (
        <div className="jumbotron">
          <h1 className="display-4">{this.props.books[bookDetail].Title}</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="/add-to-cart" role="button">
            Learn more
          </a>
        </div>
      );
    }
    
    return <div>{book}</div>;
  }
}


const mapStateToProps = state => {
  return {
    books: state.booksReducer.books
  };
};
export default connect(mapStateToProps)(bookDetails);
