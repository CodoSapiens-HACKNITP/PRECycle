import {
  VENDOR_LOADED,
  WASTELIST_UPDATED,
  FAIL_WASTELIST_UPDATE,
  CLEAR_PROFILE,
  REQUEST_CREATED,
  REQUEST_FAILED
} from "../actions/types";
const initialState = {
  vendors: [],
  loading: true,
  request: []
};

export default function abc(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VENDOR_LOADED:
    case WASTELIST_UPDATED:
      return {
        ...state,
        vendors: payload,
        loading: false,
      };
    case REQUEST_CREATED:
      return { 
        ...state,
        request: payload
      }
    case FAIL_WASTELIST_UPDATE:
    case CLEAR_PROFILE:
    case REQUEST_FAILED:
    default:
      return {
        ...state,
      };
  }
}
