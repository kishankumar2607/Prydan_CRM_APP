import * as types from "../actions/types";
import {
  StaticAction,
  StaticModel,
} from "../actions/staticAction";

type StaticState = {
  StaticResponse: StaticModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  StaticResponse: {} as StaticModel,
  spinner: false,
};

/**
 * Reducer
 * @class StaticReducer
 */
const staticReducer = (
  state: StaticState = initialState,
  action: StaticAction
) => {
  switch (action.type) {
    case types.STATIC_REQUEST:
      return {
        ...state,
        StaticResponse: action.payload,
        spinner: true,
      };
    case types.STATIC_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.STATIC_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.STATIC_RESPONSE:
      return {
        ...state,
        StaticResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.STATIC_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { staticReducer };
