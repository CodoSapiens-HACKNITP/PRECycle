import { VENDOR_LOADED, WASTELIST_UPDATED, FAIL_WASTELIST_UPDATE , CLEAR_PROFILE} from "../actions/types";
const initialState = {
  vendors: [],
  loading: true,
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
    case FAIL_WASTELIST_UPDATE:
    case CLEAR_PROFILE:
    default:
      return {
        ...state,
      };
  }
}
