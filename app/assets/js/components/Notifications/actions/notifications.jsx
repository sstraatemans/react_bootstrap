export const NOTIFICATION_SEND = 'NOTIFICATION_SEND';
export const NOTIFICATION_REMOVE = 'NOTIFICATION_REMOVE';
export const NOTIFICATION_CLEARALL = 'NOTIFICATION_CLEARALL';

/**
 * Publish a notification,
 */
export function notificationSend(notification) {
  const payload = Object.assign({}, notification);
  if (!payload.id) {
    payload.id = new Date().getTime();
  }
  return {
    type: NOTIFICATION_SEND,
    payload
  };

  return dispatch => {
    dispatch({ type: NOTIFICATION_SEND, payload });
  };
}

/**
 * Remove a notification by the given id.
 */
export function notificationRemove(id) {
  return { type: NOTIFICATION_REMOVE, payload: id };
}

/**
 * Clear all notifications
 */
export function notificationClearALL() {
  return { type: NOTIFICATION_CLEARALL };
}
