import React from "react";
import PubSub from "pubsub-js";
import "./Layout.scss";
import { Header } from "./../Header/Header";
import Search from "./../Search/Search";
import Results from "./../Results/Results";

export const Layout = React.createClass({

  componentWillMount() {
  },
  componentWillUnmount: function() {

  },




  render: function() {
    return (
      <div className="layout">
        <Header/>
        <Search/>
        <Results/>

      </div>
    );
  }
});
