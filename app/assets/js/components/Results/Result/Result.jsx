import React from "react";
import "./Result.scss";
import { Link } from 'react-router';


export const Result = React.createClass({

  componentDidMount() {
  },

  render: function() {
    return (
      <li className="result">
        <Link to={`/companies/${this.props.dnb_key}`}>{this.props.trade_name}</Link>
      </li>
    );
  }
});
