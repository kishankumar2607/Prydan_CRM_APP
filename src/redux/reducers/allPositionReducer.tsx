import * as types from "../actions/types";
import {
  AllPositionAction,
  AllPositionModel,
} from "../actions/allPositionAction";

type AllPositionState = {
  allPositionResponse: AllPositionModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  allPositionResponse: {} as AllPositionModel,
  spinner: false,
};

/**
 * Reducer
 * @class allPositionReducer
 */
const allPositionReducer = (
  state: AllPositionState = initialState,
  action: AllPositionAction
) => {
  switch (action.type) {
    case types.ALL_POSITION_REQUEST:
      return {
        ...state,
        allPositionResponse: action.payload,
        spinner: true,
      };
    case types.ALL_POSITION_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.ALL_POSITION_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.ALL_POSITION_RESPONSE:
      return {
        ...state,
        allPositionResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.ALL_POSITION_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { allPositionReducer };
