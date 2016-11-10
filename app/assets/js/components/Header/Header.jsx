import React from "react";
import PubSub from "pubsub-js";
import "./Header.scss";
import Search from "./../Search/Search";



export const Header = React.createClass({
  getInitialState: function() {
    return { counter: 0 };
  },

  componentWillMount() {
    // this.pubsub_token = PubSub.subscribe('clicker', function(topic, product) {
    //   this.setState({ counter: this.state.counter+1 });
    // }.bind(this));
  },
  componentWillUnmount: function() {
    // PubSub.unsubscribe(this.pubsub_token);
  },




  render: function() {
    return (
      <div className="header">
        <div className="wrapper">
          <div className="header__logo"></div>
          <Search/>
        </div>
      </div>
    );
  }
});
