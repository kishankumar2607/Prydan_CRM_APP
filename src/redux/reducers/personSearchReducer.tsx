import * as types from "../actions/types";
import {
  PersonSearchAction,
  PersonSearchModel,
} from "../actions/personSearchAction";

type PersonSearchState = {
  personSearchResponse: PersonSearchModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  personSearchResponse: {} as PersonSearchModel,
  spinner: false,
};

/**
 * Reducer
 * @class personSearchReducer
 */
const personSearchReducer = (
  state: PersonSearchState = initialState,
  action: PersonSearchAction
) => {
  switch (action.type) {
    case types.PERSON_SEARCH_REQUEST:
      return {
        ...state,
        personSearchResponse: action.payload,
        spinner: true,
      };
    case types.PERSON_SEARCH_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.PERSON_SEARCH_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.PERSON_SEARCH_RESPONSE:
      return {
        ...state,
        personSearchResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.PERSON_SEARCH_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { personSearchReducer };
