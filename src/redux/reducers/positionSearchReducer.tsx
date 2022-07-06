import * as types from "../actions/types";
import {
  PositionSearchAction,
  PositionSearchModel,
} from "../actions/PositionSearchAction";

type PositionSearchState = {
  PositionSearchResponse: PositionSearchModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  PositionSearchResponse: {} as PositionSearchModel,
  spinner: false,
};

/**
 * Reducer
 * @class PositionSearchReducer
 */
const positionSearchReducer = (
  state: PositionSearchState = initialState,
  action: PositionSearchAction
) => {
  switch (action.type) {
    case types.POSITION_SEARCH_REQUEST:
      return {
        ...state,
        positionSearchResponse: action.payload,
        spinner: true,
      };
    case types.POSITION_SEARCH_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.POSITION_SEARCH_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.POSITION_SEARCH_RESPONSE:
      return {
        ...state,
        positionSearchResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.POSITION_SEARCH_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { positionSearchReducer };
