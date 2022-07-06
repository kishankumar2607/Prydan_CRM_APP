import * as types from "../actions/types";
import { VerifyOtpAction, VerifyOtpModel } from "../actions/VerifyOtpAction";

type VerifyOtpState = {
  verifyOtpResponse: VerifyOtpModel;
  isLoggedIn: boolean;
};

const initialState = {
  isLoggedIn: false,
  otp: "",
  email: "",
  verifyOtpResponse: {} as VerifyOtpModel,
  spinner: false,
};

/**
 * Reducer
 * @class verifyOtpReducer
 */

const verifyOtpReducer = (
  state: VerifyOtpState = initialState,
  action: VerifyOtpAction
) => {
  switch (action.type) {
    case types.VERIFY_OTP_REQUEST:
      return {
        ...state,
        verifyOtpResponse: action.payload,
        spinner: true,
      };
    case types.VERIFY_OTP_RESPONSE:
      return {
        ...state,
        verifyOtpResponse: action.response,
        spinner: false,
      };
    case types.VERIFY_OTP_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
};
export { verifyOtpReducer };
