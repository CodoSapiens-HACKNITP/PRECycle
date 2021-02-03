import axios from "axios";
import { setAlert } from "./alert";
import {
  VENDOR_LOADED,
  WASTELIST_UPDATED,
  FAIL_WASTELIST_UPDATE,
  REQUEST_CREATED,
  REQUEST_FAILED,
  VENDOR_ORDER_LIST,
  ACCEPTED_ORDER_LIST,
  RIDER_NEARBY_ORDER,
  RIDER_REQUEST_ACCEPTED,
  VIEW_ACCEPTED_ORDER,
} from "./types";

//Load Vendors
export const loadNearbyVendors = (pincode, city) => async (dispatch) => {
  try {
    let vendors = await axios.get(`/seller/vendor/${pincode}/${city}`);
    let activeRequest = await axios.get(`/seller/active/request`);
    dispatch({
      type: VENDOR_LOADED,
      payload: vendors.data,
    });
    if (activeRequest.data.length > 0) {
      dispatch({
        type: REQUEST_CREATED,
        payload: activeRequest.data,
      });
    }
    // var length = vendors.data.length;
    // if (length > 0)
    //   dispatch(setAlert(`${length} Nearby Vendors Found`, "success"));
  } catch (error) {
    dispatch({
      type: VENDOR_LOADED,
    });
    // dispatch(setAlert(`We Don't Serve in Your City`, "success"));
    console.log(error.message);
  }
};

//Update rate list of vendors
export const updateWasteList = (wasteType) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = JSON.stringify({ wasteType });
    const res = await axios.put("/vendor/wastetype", data, config);
    dispatch({
      type: WASTELIST_UPDATED,
      payload: res.data,
    });
    dispatch(setAlert("Waste List Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: FAIL_WASTELIST_UPDATE,
    });
  }
};

//Create A pickup reequest
export const createRequest = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = JSON.stringify(formData);
    const res = await axios.post("/seller/request", data, config);
    dispatch({
      type: REQUEST_CREATED,
      payload: res.data,
    });
    dispatch(vendorOrderList());
    dispatch(setAlert("Request Created Successfully!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REQUEST_FAILED,
    });
  }
};

//Update the order status
export const updateRequest = () => async (dispatch) => {
  try {
    let activeRequest = await axios.get(`/seller/active/request`);
    if (activeRequest.data.length > 0) {
      dispatch({
        type: REQUEST_CREATED,
        payload: activeRequest.data,
      });
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REQUEST_FAILED,
    });
  }
};

//Show the pending request to the vendor dashboard
export const vendorOrderList = () => async (dispatch) => {
  try {
    let orderList = await axios.get("/vendor/request");
    var pendingOrder = [];
    orderList.data.map((order) => {
      if (order.vendorAccepted === false) pendingOrder.push(order);
    });
    var acceptedOrder = [];
    orderList.data.map((order) => {
      if (order.vendorAccepted === true) acceptedOrder.push(order);
    });
    dispatch({
      type: VENDOR_ORDER_LIST,
      payload: pendingOrder,
    });
    dispatch({
      type: ACCEPTED_ORDER_LIST,
      payload: acceptedOrder,
    });
  } catch (err) {
    dispatch({
      type: REQUEST_FAILED,
    });
  }
};

//Accept or Decline the order by the vendor
export const acceptOrder = (orderid) => async (dispatch) => {
  try {
    await axios.put(`/vendor/request/accept/${orderid}`);
    dispatch(setAlert("Order Accepted!", "success"));
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: REQUEST_FAILED,
    });
  }
};

//Get all the vendor accepted request in rider of that area
export const viewRequest = () => async (dispatch) => {
  try {
    const response = await axios.get("/rider/request");
    dispatch({
      type: RIDER_NEARBY_ORDER,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }
    console.log(error.message);
    dispatch({
      type: REQUEST_FAILED,
    });
  }
};

//Rider Accept request
export const acceptRequest = (orderid) => async (dispatch) => {
  try {
    const res = await axios.put(`/rider/request/accept/${orderid}`);
    dispatch({
      type: RIDER_REQUEST_ACCEPTED,
      payload: res.data,
    });
    dispatch(viewRequest());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }
    dispatch({
      type: REQUEST_FAILED,
    });
  }
};

//To view all the accepted order by the rider
export const viewAcceptedRequestRider = () => async (dispatch) => {
  try {
    const res = await axios.get("/rider/request/accept");
    dispatch({
      type: VIEW_ACCEPTED_ORDER,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }
    dispatch({
      type: REQUEST_FAILED,
    });
  }
};
