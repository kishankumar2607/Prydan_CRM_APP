import * as types from "../actions/types";
import {
  PositionDetailsAction,
  PositionDetailsModel,
} from "../actions/positionDetailsAction";

type positionDetailsState = {
  positionDetailsResponse: PositionDetailsModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  positionDetailsResponse: {} as PositionDetailsModel,
  spinner: false,
};

/**
 * Reducer
 * @class positionDetailsReducer
 */
const positionDetailsReducer = (
  state: positionDetailsState = initialState,
  action: PositionDetailsAction
) => {
  switch (action.type) {
    case types.POSITION_DETAILS_REQUEST:
      return {
        ...state,
        positionDetailsResponse: action.payload,
        spinner: true,
      };
    case types.POSITION_DETAILS_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.POSITION_DETAILS_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.POSITION_DETAILS_RESPONSE:
      return {
        ...state,
        positionDetailsResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.POSITION_DETAILS_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { positionDetailsReducer };
