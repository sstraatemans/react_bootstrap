import axios from "axios";
import {AppStore} from "./../Store/Store";
import { getDevicesSuccess } from "./../actions/deviceActions";
import { getToken } from "./../Utils/utils";


/**
 * Get all devices
 */
export function getDevices() {
  return axios.get('/api/v1/devices',
    {
      headers: {'Authorization': 'Bearer '+getToken()},
    })
    .then(response => {
      AppStore.dispatch(getDevicesSuccess(response.data));
      return response;
    });
}
