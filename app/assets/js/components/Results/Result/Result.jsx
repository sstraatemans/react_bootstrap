import React from "react";
import "./Result.scss";



export const Result = React.createClass({

  componentDidMount() {
  },

  render: function() {
    return (
      <div className="result">
        {this.props.name}
      </div>
    );
  }
});
