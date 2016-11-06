import * as types from "./../actions/actionTypes";

const initialState = [];


export function deviceReducer(state = initialState, action)  {
  switch (action.type) {
      case types.GET_DEVICES_SUCCESS:
        const newState = action.devices;
        return newState;
      default:
        return state;
    }
}
