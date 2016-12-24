import axios from "axios";
import {AppStore} from "./../Store/Store";
import { ActionGetSearchResults, ActionGetCompany } from "./../actions/searchActions";
import * as EndPoints from "./endPoints";


/**
 * Get all Companies
 */
export function GetSearchResults(search) {
  return axios.get(`${EndPoints.GET_RESULTS}?country_iso2=${search.country}&trade_name=${search.name}`)
    .then(response => {
      AppStore.dispatch(ActionGetSearchResults(response.data));
      return response;
    });
}


export function GetCompany(id) {
  return axios.get(`${EndPoints.GET_COMPANY}/${id}`)
    .then(response => {
      AppStore.dispatch(ActionGetCompany(response.data));
      return response;
    });
}
