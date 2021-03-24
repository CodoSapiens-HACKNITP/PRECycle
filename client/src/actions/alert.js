// import uuid from 'uuid'
import { SET_ALERT, REMOVE_ALERT, ERROR } from "./types";

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = Math.ceil(Math.random() * 10000);
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
