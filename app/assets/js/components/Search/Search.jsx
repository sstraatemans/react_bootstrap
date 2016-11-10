import React from "react";
import PubSub from "pubsub-js";
import { AppStore } from "./../../Store/Store";
import { connect } from "react-redux";
import {GetSearchResults} from "./../../api/companyAPI";
import "./Search.scss";



const Search = React.createClass({
  getInitialState () {
    return {
      name: "",
      country: ""
    }
  },
  componentWillMount() {
    // this.pubsub_token = PubSub.subscribe('clicker', function(topic, product) {
    //   this.setState({ counter: this.state.counter+1 });
    // }.bind(this));
  },
  componentWillUnmount: function() {
    // PubSub.unsubscribe(this.pubsub_token);
  },

  submitForm: function() {
    //const text = this.state.SearchInputState.text;
    GetSearchResults(this.state);
  },
  handleInput: function(e){
    this.state.name = e.target.value;
    //AppStore.dispatch(ActionSetSearchText(e.target.value));
  },
  handleCountry: function(e){
    this.state.country = e.target.options[e.target.selectedIndex].value;
  },


  render: function() {
    return (
      <div className="wrapper">
        <div className="search">
          <div className="search__bar">
            <input className="search__input" type="text" name="q" placeholder="Company name" onChange={this.handleInput}/>
            <select className="search__select" name="countryCode"  onChange={this.handleCountry}>
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
