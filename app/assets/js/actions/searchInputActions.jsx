import * as types from "./actionTypes";


export function ActionSetSearchText(text) {
  return {
    type: types.SET_SEARCH_TEXT,
    str
  };
};

export function ActionGetSearchText() {
  return {
    type: types.GET_SEARCH_TEXT
  };
};

export function ActionSetSearchCountry(country) {
  return {
    type: types.SET_SEARCH_COUNTRY,
    country
  };
};

export function ActionGetSearchCountry() {
  return {
    type: types.GET_SEARCH_COUNTRY
  };
};
