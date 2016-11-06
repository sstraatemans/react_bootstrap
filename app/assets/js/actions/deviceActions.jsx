import * as types from "./actionTypes";


export function getDevicesSuccess(devices) {
  return {
    type: types.GET_DEVICES_SUCCESS,
    devices
  };
};
