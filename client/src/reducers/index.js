import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import pickup from "./pickup";

export default combineReducers({
  alert,
  auth,
  pickup,
});
