import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";
import {searchReducer} from "./../reducers/searchReducer";
import {companyReducer} from "./../reducers/companyReducer";
import {searchInputReducer} from "./../reducers/searchInputReducer";
import { reducer as notificationReducer } from './../components/Notifications';



const reducers = combineReducers({
  SearchState: searchReducer,
  SearchInputState: searchInputReducer,
  CompanyState: companyReducer,
  NotificationState: notificationReducer
});


export const AppStore = createStore(reducers);
//, window.devToolsExtension && window.devToolsExtension()
