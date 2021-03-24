import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  FEEDBACK_SUBMITTED,
  FEEDBACK_FAILED
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  typeofuser: "",
  feedbacks: null
};

export default function abc(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      localStorage.setItem("pincode", payload.address.pin);
      localStorage.setItem("city", payload.address.city);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        typeofuser: localStorage.getItem("typeofuser"),
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        typeofuser: localStorage.getItem("typeofuser"),
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem("token");
      localStorage.removeItem("typeofuser");
      localStorage.removeItem("pincode");
      localStorage.removeItem("city");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        typeofuser: "",
      };
    case FEEDBACK_SUBMITTED: 
      return {
        ...state,
        feedbacks: payload
      }
    case FEEDBACK_FAILED:
    default:
      return state;
  }
}
