import React from "react";
import ReactDOM from "react-dom";
import Route from "react-router/lib/Route";
import Router from "react-router/lib/Router";
import IndexRoute from "react-router/lib/IndexRoute";
import Redirect from "react-router/lib/Redirect";
import browserHistory from "react-router/lib/browserHistory";

import "./scss/global.scss";

import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import { AppStore } from "./Store/Store";

import { Notifications } from './components/Notifications';

var App = () => (
    <Provider store={AppStore}>
        <Notifications />
        <Router history={browserHistory}>
          <Route path='/' component={Header} />

            <Redirect from='*' to='/404' />
        </Router>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
