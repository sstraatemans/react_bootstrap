import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";
import {deviceReducer} from "./../reducers/deviceReducer";
import { reducer as notificationReducer } from './../components/Notifications';



const reducers = combineReducers({
  CountState: deviceReducer,
  NotificationState: notificationReducer
});


export const AppStore = createStore(reducers);
//, window.devToolsExtension && window.devToolsExtension()
