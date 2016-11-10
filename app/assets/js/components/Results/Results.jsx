import React from "react";
import PubSub from "pubsub-js";
import { AppStore } from "./../../Store/Store";
import { connect } from "react-redux";
import { Result } from "./Result/Result";
import "./Results.scss";



const Results = React.createClass({

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
      <div className="results">
        {
          this.props.searchState.map(function(res){
            return (<Result {...res} key={res.id}/>);
          })
        }
      </div>
    );
  }
});


const mapStateToProps = (state) => {
  return {
    searchState: state.SearchState
  };
};

export default connect(mapStateToProps)(Results);
