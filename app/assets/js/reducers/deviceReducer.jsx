import * as types from "./../actions/actionTypes";

const initialState = 0;


export function deviceReducer(state = initialState, action)  {
  switch (action.type) {
      case types.COUNT_UP:
        let newState = state+1;
        return newState;
      default:
        return state;
    }
}
