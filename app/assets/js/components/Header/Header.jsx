import React from "react";
import PubSub from "pubsub-js";
import "./Header.scss";
import {Content} from "./../Content/Content";
import {Footer} from "./../Footer/Footer";
import ShowData from "./../ShowData/ShowData";
import GetData from "./../GetData/GetData";


export const Header = React.createClass({
  getInitialState: function() {
    return { counter: 0 };
  },

  componentWillMount() {
    this.pubsub_token = PubSub.subscribe('clicker', function(topic, product) {
      this.setState({ counter: this.state.counter+1 });
    }.bind(this));
  },
  componentWillUnmount: function() {
    PubSub.unsubscribe(this.pubsub_token);
  },




  render: function() {
    return (
      <div className="header">
        <div className="header__logo"></div>
        Header
         - counter: {this.state.counter}
        <Content/>
        <Content/>
        <Footer/>
        <hr/>
        <h2>Redux</h2>
        <ShowData/>
        <GetData/>
        <hr/>

      </div>
    );
  }
});
