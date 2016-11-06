import React from "react";
import { notificationRemove } from "./../actions/notifications";
import { connect } from "react-redux";
import { store } from "./../../../Store/Store";

const Notification = React.createClass({

  defaultProps: {
    kind: 'info',
    _id: new Date().getTime()
  },

  propTypes: {
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    message: React.PropTypes.string.isRequired,
    kind: React.PropTypes.oneOf([
      'success',
      'info',
      'warning',
      'danger'
    ]).isRequired
  },

  componentDidMount: function() {

    //after x seconds set-in the remove animation.
    //when the animation ends, than remove the notification
    const el = this.refs.notification;
    el.addEventListener("animationend", () => {
      this.props.dispatch(notificationRemove(this.props.id));
     }, false);

    window.setTimeout(() => {
      el.setAttribute("data-remove", true);
    }, 3000);
  },


  render() {
      return <div ref="notification" className={`notification notification--${this.props.kind}`}>
          <div className="notification__icon" />
          <div className="notification__content">
            <span className="notification__message">{this.props.message}</span>
          </div>
      </div>
  }
});


const mapStateToProps = (state) => {
  return {
    notifications: state.NotificationState
  }
}

export default connect(mapStateToProps)(Notification);
