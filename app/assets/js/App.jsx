import React from "react";
import ReactDOM from "react-dom";


import Route from "react-router/lib/Route";
import Router from "react-router/lib/Router";
import IndexRoute from "react-router/lib/IndexRoute";
import Redirect from "react-router/lib/Redirect";
import browserHistory from "react-router/lib/browserHistory";

import "./scss/global.scss";

import {Home} from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import { Provider } from "react-redux";
import { AppStore } from "./Store/Store";

import { Notifications } from './components/Notifications';


var App = () => (
    <Provider store={AppStore}>
        <div>
          <Notifications />
          <Router >
            <Route path='/' component={Home} />
            <Route path="/companies/:id" component={Detail} />
              <Redirect from='*' to='/404' />
          </Router>
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
