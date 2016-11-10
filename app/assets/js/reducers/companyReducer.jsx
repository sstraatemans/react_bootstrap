import * as types from "./../actions/actionTypes";

const initialState = {};


export function companyReducer(state = initialState, action)  {
  switch (action.type) {
      case types.GET_COMPANY:
        const newState = action.company;
        return newState;
      default:
        return state;
    }
}
