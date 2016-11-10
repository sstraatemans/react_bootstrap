import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";
import {searchReducer} from "./../reducers/searchReducer";
import {searchInputReducer} from "./../reducers/searchInputReducer";
import { reducer as notificationReducer } from './../components/Notifications';



const reducers = combineReducers({
  SearchState: searchReducer,
  SearchInputState: searchInputReducer,
  NotificationState: notificationReducer
});


export const AppStore = createStore(reducers);
//, window.devToolsExtension && window.devToolsExtension()
