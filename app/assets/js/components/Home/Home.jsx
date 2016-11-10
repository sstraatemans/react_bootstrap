import React from "react";
import PubSub from "pubsub-js";
import "./Home.scss";
import { Header } from "./../Header/Header";
import Results from "./../Results/Results";

export const Home = React.createClass({

  componentWillMount() {
  },
  componentWillUnmount: function() {

  },




  render: function() {
    return (
      <div className="layout">
        <Header/>

        <Results/>

      </div>
    );
  }
});
