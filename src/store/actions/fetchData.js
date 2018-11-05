import axios from 'axios';
import * as actionType from './actions';

export const fetechDataInit = () => {
  return {
    type: actionType.FETCH_DATA_INIT
  };
};
export const fetechDataSuccess = books => {
  return {
    type: actionType.FETCH_DATA_SUCCESS,
    books: books
  };
};

export const fetchdata = () => {
  return dispatch => {
    dispatch(fetechDataInit());
    axios({
      method: 'get',
      url: 'https://fakerestapi.azurewebsites.net/api/Books'
    }).then(response => {
      const books = response.data.slice(0, 12);
      console.log(response.data);
      dispatch(fetechDataSuccess(books));
    });
  };
};
