import React from "react";
import "./Notifications.scss";
import { connect } from "react-redux";
import Notification from "./Notification";
import { AppStore } from "./../../../Store/Store";

function Notifications(props) {

  const items = props.notifications.map((notification) => (
    <Notification
      key={notification.id}
      id={notification.id}
      message={notification.message}
      kind={notification.kind}
    />
  ));

  return (
    <div className="notifications" >
        {items}
    </div>
  );
}

Notifications.propTypes = {
  notifications: React.PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    notifications: state.NotificationState
  }
}

export default connect(mapStateToProps)(Notifications);
