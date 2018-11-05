import React from 'react';

const head = props => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Jingers-Online Book Store</h1>
        <p className="lead">
          Welcome to Book Depository, one of the world's leading specialist
          online bookstores. We're proud to offer more than 19 million titles at
          low prices -- all with free delivery worldwide to over 100 countries.
          Whatever your interest or passion, you'll find something interesting
          in our bookshop full of delights.
        </p>
        <hr className="my-4" />
        <p>
          We want to offer as many books as possible and we are very keen to
          talk to publishers and distributors about supply arrangements.
        </p>
        <a className="btn btn-primary btn-lg" href="/" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default head;
