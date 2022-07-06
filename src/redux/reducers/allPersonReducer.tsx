import * as types from "../actions/types";
import { AllPersonAction, AllPersonModel } from "../actions/allPersonAction";

type AllPersonState = {
  allPersonResponse: AllPersonModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  allPersonResponse: {} as AllPersonModel,
  spinner: false,
};

/**
 * Reducer
 * @class allPersonReducer
 */
const allPersonReducer = (
  state: AllPersonState = initialState,
  action: AllPersonAction
) => {
  switch (action.type) {
    case types.ALL_PERSON_REQUEST:
      return {
        ...state,
        allPersonResponse: action.payload,
        spinner: true,
      };
    case types.ALL_PERSON_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.ALL_PERSON_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.ALL_PERSON_RESPONSE:
      return {
        ...state,
        allPersonResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.ALL_PERSON_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { allPersonReducer };
