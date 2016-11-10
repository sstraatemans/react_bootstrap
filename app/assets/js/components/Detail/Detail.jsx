import React from "react";
import PubSub from "pubsub-js";
import { AppStore } from "./../../Store/Store";
import { connect } from "react-redux";
import {GetCompany} from "./../../api/companyAPI";
import "./Detail.scss";
import { Header } from "./../Header/Header";

const Detail = React.createClass({

  componentWillMount() {
    GetCompany(this.props.routeParams.id);
  },
  componentWillUnmount: function() {

  },




  render: function() {
    return (
      <div className="detail">
        <Header/>
        <h2>{this.props.company.name}</h2>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    company: state.CompanyState
  };
};

export default connect(mapStateToProps)(Detail);
