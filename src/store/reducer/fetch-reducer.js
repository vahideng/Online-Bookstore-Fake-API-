import * as actionType from '../actions/actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        books: action.books
      };

    default:
      return { ...state };
  }
};

export default reducer;
