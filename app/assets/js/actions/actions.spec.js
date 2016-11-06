import {expect, assert} from "chai";
import * as deviceActions from './deviceActions'
import * as types from './actionTypes'


describe('DeviceActions', () => {
  it('should create an action to get a list of devices', () => {
    const devices = [
                {
                  "mac": "0004B70700CA",
                  "name": "testa",
                  "deviceTypeName": "DecoderUHF",
                  "deviceType": 3,
                  "version": "4.3.1006",
                  "company": {
                    "id": 1,
                    "name": "test33"
                  },
                  "deviceStatus": {
                    "connectedStatus": "OFFLINE"
                  }
                },
                {
                  "mac": "00305680209C",
                  "name": "Chip-ear",
                  "deviceTypeName": "INet3",
                  "deviceType": 3,
                  "version": "009f",
                  "company": {
                    "id": 1,
                    "name": "test33"
                  },
                  "deviceStatus": {
                    "connectedStatus": "OFFLINE"
                  }
                }];


    const expectedAction = {
      type: types.GET_DEVICES_SUCCESS,
      devices
    };
    expect(deviceActions.getDevicesSuccess(devices)).to.eql(expectedAction)
  });

});
