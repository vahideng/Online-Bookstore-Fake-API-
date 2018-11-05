import React from 'react';
import classes from './Loading.module.css';

const loading = props => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}>
	<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
		<circle className="length" fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
	</svg>
	<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
		<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
	</svg>
	<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
		<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
	</svg>
	<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
		<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
	</svg>
</div>
    </div>
  );
};
export default loading;
