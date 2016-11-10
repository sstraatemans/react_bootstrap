import * as types from "./../actions/actionTypes";

const initialState = [];


export function searchReducer(state = initialState, action)  {
  switch (action.type) {
      case types.GET_SEARCH_RESULTS:
        const newState = action.results;
        return newState;
      default:
        return state;
    }
}
