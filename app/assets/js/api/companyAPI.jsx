import axios from "axios";
import {AppStore} from "./../Store/Store";
import { ActionGetSearchResults } from "./../actions/searchActions";
import * as EndPoints from "./endPoints";


/**
 * Get all devices
 */
export function GetSearchResults(search) {
  return axios.get(`${EndPoints.GET_RESULTS}?country=${search.country}&name=${search.name}`)
    .then(response => {
      AppStore.dispatch(ActionGetSearchResults(response.data));
      return response;
    });
}
