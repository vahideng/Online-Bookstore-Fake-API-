import React, { Component } from 'react';
import axios from 'axios';
import Book from '../../components/Book/book';
import Navigation from '../../components/Navigation/NavigationItems'

export default class mainPage extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://fakerestapi.azurewebsites.net/api/Books'
    }).then(response => {
      const books = response.data.slice(0, 12);
      console.log(response.data);

      this.setState({ persons: books });
    });
  }

  render() {
    let data = this.state.persons.map(ite => {
      return (
        <Book
          key={ite.ID}
          PublishDate={ite.PublishDate}
          Title={ite.Title}
          PageCount={ite.PageCount}
        />
      );
    });

    return (
      <div> <Navigation/>
      <div className="container">
     
     <div className="jumbotron">
       <h1 className="display-4">Jingers-Online Book Store</h1>
       <p className="lead">
       Welcome to Book Depository, one of the world's leading specialist online bookstores. We're proud to offer more than 19 million titles at low prices -- all with free delivery worldwide to over 100 countries. Whatever your interest or passion, you'll find something interesting in our bookshop full of delights.
       </p>
       <hr className="my-4" />
       <p>
       We want to offer as many books as possible and we are very keen to talk to publishers and distributors about supply arrangements.
       </p>
       <a className="btn btn-primary btn-lg" href="/" role="button">
         Learn more
       </a>
     </div>
     <div className="row">{data}</div>
   </div></div>
      
    );
  }
}
