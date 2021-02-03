import {
  VENDOR_LOADED,
  WASTELIST_UPDATED,
  FAIL_WASTELIST_UPDATE,
  CLEAR_PROFILE,
  REQUEST_CREATED,
  REQUEST_FAILED,
  VENDOR_ORDER_LIST,
  ACCEPTED_ORDER_LIST,
  LOGOUT_REMOVE,
  RIDER_NEARBY_ORDER,
  RIDER_REQUEST_ACCEPTED,
  VIEW_ACCEPTED_ORDER,
} from "../actions/types";
const initialState = {
  vendors: [],
  loading: true,
  request: [],
  acceptedRequest: [],
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
        request: payload,
      };
    case VENDOR_ORDER_LIST:
      return {
        ...state,
        request: payload,
      };
    case ACCEPTED_ORDER_LIST:
      return {
        ...state,
        acceptedRequest: payload,
      };
    case LOGOUT_REMOVE:
      return {
        ...state,
        vendors: [],
        loading: false,
        request: [],
        acceptedRequest: [],
      };
    case RIDER_NEARBY_ORDER:
      return {
        ...state,
        request: payload,
      };
    case VIEW_ACCEPTED_ORDER:
      return {
        ...state,
        acceptedRequest: payload,
      };
    case RIDER_REQUEST_ACCEPTED:
    case FAIL_WASTELIST_UPDATE:
    case CLEAR_PROFILE:
    case REQUEST_FAILED:
    default:
      return {
        ...state,
      };
  }
}
