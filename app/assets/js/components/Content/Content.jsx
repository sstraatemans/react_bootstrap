import React from "react";
import PubSub from "pubsub-js";



export const Content = React.createClass({
  onclick: function() {
    PubSub.publish('clicker');
  },

  render: function() {
    return (
      <div>
        <a onClick={this.onclick}>bump counter</a>
      </div>
    );
  }
});
