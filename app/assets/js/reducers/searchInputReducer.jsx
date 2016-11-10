import * as types from "./../actions/actionTypes";

const initialState = {
  text: "",
  country: ""
};


export function searchInputReducer(state = initialState, action)  {
  switch (action.type) {
      case types.SET_SEARCH_TEXT:
        state.text = action.text;
        return newState;
      default:
        return state;
    }
}
