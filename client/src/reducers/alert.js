import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function abc(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
