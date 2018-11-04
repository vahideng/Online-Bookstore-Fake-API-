import React from 'react';
import classes from './book.module.css';
const book = props => {
  return (
    <div className="col-md-4" style={{marginBottom: '20px'}} >
    <div className={classes.BookWrapper}>
    <div > {props.Title}</div>
      <div> PublishDate : {props.PublishDate}</div>
      <div> Pages: {props.PageCount}</div>
    </div>
      
    </div>
  );
};

export default book;
