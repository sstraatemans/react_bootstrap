import {expect, assert} from "chai";
import sinon from "sinon";
import * as utils from "./utils";
import Store from "store";

describe('Utils', () => {
  it('should style a MAC address `XX:XX:XX:XX`', () => {
    expect(utils.macAddress("0004b7070170")).to.equal("00:04:B7:07:01:70")
  });


  it('should return token', () => {
    const token = "test";

    const storeMock = sinon.mock(Store);
    storeMock.expects('get').withArgs('token').returns(token);
    expect(utils.getToken()).to.equal(token);

    storeMock.restore();
    storeMock.verify();
  });
});
