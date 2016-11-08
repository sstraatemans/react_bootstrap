import React from "react";
import PubSub from "pubsub-js";



export const Footer = React.createClass({
  getInitialState: function() {
    return { counter: 0 };
  },

  componentDidMount() {
    this.pubsub_token = PubSub.subscribe('clicker', function(topic, product) {
      this.setState({ counter: this.state.counter+1 });
    }.bind(this));
  },
  componentWillUnmount: function() {
    PubSub.unsubscribe(this.pubsub_token);
  },
  render: function() {
    return (
      <div>
        Footer
         - counter: {this.state.counter}
      </div>
    );
  }
});
