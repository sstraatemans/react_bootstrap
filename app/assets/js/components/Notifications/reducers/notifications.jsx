import { NOTIFICATION_SEND, NOTIFICATION_REMOVE, NOTIFICATION_CLEARALL } from "./../actions/notifications";

export default function notifications(state = [], action) {
  if (!action || !action.type) return state;
  switch (action.type) {
    case NOTIFICATION_SEND:
      return [action.payload, ...state];
    case NOTIFICATION_REMOVE:
      return state.filter(notification =>
          notification.id !== action.payload
      );
    case NOTIFICATION_CLEARALL:
      return [];
    default:
      return state;
  }
}
