import React from "react";
import { AppStore } from "./../../Store/Store";
import { connect } from "react-redux";
import { CountUp } from "./../../actions/deviceActions";



const GetData = React.createClass({


  onclick: function() {
    this.props.dispatch(CountUp());
  },

  render: function() {
    return (
      <div>
        <a onClick={this.onclick}>getdata</a>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    count: state.CountState
  }
}

export default connect(mapStateToProps)(GetData);
