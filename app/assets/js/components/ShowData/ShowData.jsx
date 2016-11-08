import React from "react";
import { AppStore } from "./../../Store/Store";
import { connect } from "react-redux";



const ShowData = React.createClass({
  componentWillMount() {
    let unsubscribe = AppStore.subscribe(this.handleChange);

  },
  componentWillUnmount: function() {
    unsubscribe();
  },
  handleChange: function(){
    console.log('got it',AppStore.getState().CountState);
    //this.props.counter = AppStore.getState().CountState;
  },

  render: function() {
    return (
      <div>
        showdata: {AppStore.getState().CountState}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    count: state.CountState
  }
}

export default connect(mapStateToProps)(ShowData);
