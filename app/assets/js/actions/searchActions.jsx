import * as types from "./actionTypes";


export function ActionGetSearchResults(results) {
  return {
    type: types.GET_SEARCH_RESULTS,
    results
  };
};
