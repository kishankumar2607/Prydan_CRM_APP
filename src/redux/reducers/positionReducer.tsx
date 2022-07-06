import * as types from "../actions/types";
import { PositionAction, PositionModel } from "../actions/positionAction";

type PositionState = {
  positionResponse: PositionModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  Company: "",
  P_Title: "",
  Skill: "",
  JobDescription: "",
  No_Positions: "",
  Salary_Range: "",
  Location: "",
  Duration: "",
  positionResponse: {} as PositionModel,
  spinner: false,
};

/**
 * Reducer
 * @class PositionReducer
 */
const positionReducer = (
  state: PositionState = initialState,
  action: PositionAction
) => {
  switch (action.type) {
    case types.POSITION_REQUEST:
      return {
        ...state,
        positionResponse: action.payload,
        spinner: true,
      };
    case types.POSITION_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.POSITION_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.POSITION_RESPONSE:
      return {
        ...state,
        positionResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.POSITION_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { positionReducer };
