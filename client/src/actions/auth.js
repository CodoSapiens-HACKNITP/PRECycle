import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  LOGOUT_REMOVE,
  FEEDBACK_SUBMITTED,
  FEEDBACK_FAILED,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { viewRequest } from "./pickup";

//Load userif(localStorage.token)
export const loadUser = (typeOfUser) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    let res;
    res = await axios.get(`/auth/${typeOfUser}`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register Seller
export const registerSeller = (
  name,
  email,
  password,
  phone,
  pincode,
  firstline,
  landmark,
  avatar
) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    name,
    email,
    password,
    phone,
    pincode,
    landmark,
    firstline,
    avatar,
  });

  try {
    const res = await axios.post("/users/seller", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
    dispatch(
      setAlert(
        "Sucessfull Registration, Please login with the credentials",
        "success"
      )
    );
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Register Vendor
export const registerVendor = (
  name,
  email,
  password,
  phone,
  gstin,
  pincode,
  firstline,
  landmark,
  aadhar
) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    name,
    email,
    password,
    phone,
    gstin,
    pincode,
    firstline,
    landmark,
    aadhar,
  });

  try {
    const res = await axios.post("/users/vendor", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("typeofuser", res.data.typeofuser);

    // dispatch(loadUser(localStorage.getItem("typeofuser")));
    dispatch(
      setAlert(
        "Sucessfull Registration, Please login with the credentials",
        "success"
      )
    );
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Register Rider
export const registerRider = (
  name,
  email,
  password,
  password2,
  phone,
  pincode,
  firstline,
  landmark,
  typeofvehicle,
  regnumber,
  aadhar,
  dob
) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    name,
    email,
    password,
    password2,
    phone,
    pincode,
    firstline,
    landmark,
    typeofvehicle,
    regnumber,
    aadhar,
    dob,
  });

  try {
    const res = await axios.post("/users/rider", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("typeofuser", res.data.typeofuser);

    // dispatch(loadUser(localStorage.getItem("typeofuser")));
    dispatch(
      setAlert(
        "Sucessfull Registration, Please login with the credentials",
        "success"
      )
    );
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    console.log(err.message);

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login User
export const login = (loginDetail, password, typeOfUser) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ loginDetail, password, typeOfUser });

  try {
    const res = await axios.post("/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser(localStorage.getItem("typeofuser")));
    if (localStorage.typeofuser === "rider") {
      dispatch(viewRequest());
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Logout the user / Clear the profiles
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: LOGOUT_REMOVE,
  });
  dispatch({ type: CLEAR_PROFILE });
};

//Feedback submission
export const submitFeedback = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post('/feedback', data, config);
    dispatch(setAlert(res.data.msg, "success"));
    dispatch({
      type: FEEDBACK_SUBMITTED,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: FEEDBACK_FAILED
    })
  }
  
}
