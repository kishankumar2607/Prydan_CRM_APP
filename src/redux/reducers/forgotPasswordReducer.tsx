import * as types from "../actions/types";
import {
  ForgotPasswordAction,
  ForgotPasswordModel,
} from "../actions/forgotPasswordActions";

type ForgotPasswordState = {
  forgotPasswordResponse: ForgotPasswordModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  email: "",
  forgotPasswordResponse: {} as ForgotPasswordModel,
  spinner: false,
};

/**
 * Reducer
 * @class forgotPasswordReducer
 */

const forgotPasswordReducer = (
  state: ForgotPasswordState = initialState,
  action: ForgotPasswordAction
) => {
  switch (action.type) {
    case types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPasswordResponse: action.payload,
        spinner: true,
      };
    case types.FORGOT_PASSWORD_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.FORGOT_PASSWORD_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.FORGOT_PASSWORD_RESPONSE:
      return {
        ...state,
        forgotPasswordResponse: action.response,
        spinner: false,
      };
    case types.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
};
export { forgotPasswordReducer };
