import * as types from "../actions/types";
import {
  PersonDetailsAction,
  PersonDetailsModel,
} from "../actions/personDetailsAction";

type PersonDetailsState = {
  personDetailsResponse: PersonDetailsModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  personDetailsResponse: {} as PersonDetailsModel,
  spinner: false,
};

/**
 * Reducer
 * @class personDetailsReducer
 */
const personDetailsReducer = (
  state: PersonDetailsState = initialState,
  action: PersonDetailsAction
) => {
  switch (action.type) {
    case types.PERSON_DETAILS_REQUEST:
      return {
        ...state,
        personDetailsResponse: action.payload,
        spinner: true,
      };
    case types.PERSON_DETAILS_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.PERSON_DETAILS_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.PERSON_DETAILS_RESPONSE:
      return {
        ...state,
        personDetailsResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.PERSON_DETAILS_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { personDetailsReducer };
