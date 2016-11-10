import * as types from "./actionTypes";


export function ActionGetSearchResults(results) {
  return {
    type: types.GET_SEARCH_RESULTS,
    results
  };
};

export function ActionGetCompany(company) {
  return {
    type: types.GET_COMPANY,
    company
  };
};
