import * as types from "../actions/types";
import {
  UserDetailsAction,
  UserDetailsModel,
} from "../actions/userDetailsAction";

type userDetailsState = {
  userDetailsResponse: UserDetailsModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  userDetailsResponse: {} as UserDetailsModel,
  spinner: false,
};

/**
 * Reducer
 * @class userDetailsReducer
 */
const userDetailsReducer = (
  state: userDetailsState = initialState,
  action: UserDetailsAction
) => {
  switch (action.type) {
    case types.USERS_DETAILS_REQUEST:
      return {
        ...state,
        userDetailsResponse: action.payload,
        spinner: true,
      };
    case types.USERS_DETAILS_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.USERS_DETAILS_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.USERS_DETAILS_RESPONSE:
      return {
        ...state,
        UsersDetailsResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.USERS_DETAILS_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { userDetailsReducer };
