import React from "react";
import PubSub from "pubsub-js";
import { browserHistory } from './react-router';
import { AppStore } from "./../../Store/Store";
import { connect } from "react-redux";
import {GetSearchResults} from "./../../api/companyAPI";
import "./Search.scss";



const Search = React.createClass({
  getInitialState () {
    return {
      name: "",
      country: ""
    };
  },
  componentWillMount() {
    this.state.name = localStorage.getItem("searchText");
    this.state.country = localStorage.getItem("searchCountry");

    this.submitForm();
  },
  componentWillUnmount: function() {
    // PubSub.unsubscribe(this.pubsub_token);
  },

  submitForm: function() {
    //const text = this.state.SearchInputState.text;
    localStorage.setItem('searchText', this.state.name);
    localStorage.setItem('searchCountry', this.state.country);
    GetSearchResults(this.state);

    browserHistory.transitionTo('/');

  },
  handleInput: function(e){
    this.state.name = e.target.value;
    //AppStore.dispatch(ActionSetSearchText(e.target.value));
  },
  handleCountry: function(e){
    this.state.country = e.target.options[e.target.selectedIndex].value;

  },


  render: function() {
    let name = this.state.name;
    let country = this.state.country;
    return (
      <div className="wrapper">
        <div className="search">
          <div className="search__bar">
            <input className="search__input" type="text" name="q" value={name} placeholder="Company name" onChange={this.handleInput}/>
            <select className="search__select" name="countryCode" defaultValue={country}  onChange={this.handleCountry}>
              <option value="">Select a Country</option>
              <option value="BE">Belgium</option>
              <option value="FR">France</option>
              <option value="IT">Italy</option>
              <option value="IR">Ireland</option>
              <option value="UK">Great Britain</option>
              <option value="FI">Finland</option>
              <option value="NO">Norway</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
            </select>
            <button className="search__button" onClick={this.submitForm}>Search</button>
          </div>
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    SearchInputState: state.SearchInputState
  };
};

export default connect(mapStateToProps)(Search);
