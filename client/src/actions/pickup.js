import axios from "axios";
import { setAlert } from "./alert";
import { VENDOR_LOADED, WASTELIST_UPDATED, FAIL_WASTELIST_UPDATE } from "./types";

//Load Vendors
export const loadNearbyVendors = (pincode, city) => async (dispatch) => {
  try {
    let vendors = await axios.get(`/seller/vendor/${pincode}/${city}`);
    dispatch({
      type: VENDOR_LOADED,
      payload: vendors.data,
    });
    var length = vendors.data.length;
    if (length > 0)
      dispatch(setAlert(`${length} Nearby Vendors Found`, "success"));
  } catch (error) {
    dispatch({
      type: VENDOR_LOADED,
    });
    dispatch(setAlert(`We Don't Serve in Your City`, "success"));
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
    const data = JSON.stringify({wasteType});
    const res = await axios.put('/vendor/wastetype', data, config);
    dispatch({
      type: WASTELIST_UPDATED,
      payload: res.data
    });
    dispatch(setAlert("Waste List Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: FAIL_WASTELIST_UPDATE
    })
  }
}
