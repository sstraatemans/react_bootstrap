import {expect, assert} from "chai";
import * as types from "./../actions/actionTypes";
import {deviceReducer} from "./deviceReducer";


describe('DeviceReducer', () => {
  const devices = [{
      "mac": "0004B70700CA",
      "name": "initial state"
    },
    {
      "mac": "0004B70700CA",
      "name": "initial state2"
    }];

  it('should return the initial state', () => {
    expect(deviceReducer(undefined, {})).to.eql([]);
  });

  it('should handle GET_DEVICES_SUCCESS', () => {
    expect(deviceReducer({}, {
        type: types.GET_DEVICES_SUCCESS,
        devices
      })).to.eql(devices);
  });
});
