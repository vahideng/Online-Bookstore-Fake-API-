import React, { Component } from 'react';
import axios from 'axios';
import Book from '../../components/Book/book';
import Navigation from '../../components/Navigation/NavigationItems';
import Head from '../../components/Head/Head';

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

  clickHandler= (id)=>{

    this.props.history.push('/' + id)

 }
  render() {
    let data = this.state.persons.map(ite => {
      return (
        <Book
          key={ite.ID}
          PublishDate={ite.PublishDate}
          Title={ite.Title}
          PageCount={ite.PageCount}
          clicked= {()=>this.clickHandler(ite.ID)}
        />
      );
    });
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
