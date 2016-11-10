import React from "react";
import "./Result.scss";
import { Link } from 'react-router';


export const Result = React.createClass({

  componentDidMount() {
  },

  render: function() {
    return (
      <div className="result">
        <Link to={`/companies/${this.props.id}`}>{this.props.name}</Link>
      </div>
    );
  }
});
