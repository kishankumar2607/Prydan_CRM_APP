import * as types from "../actions/types";
import { SignUpAction, SignUPModel } from "../actions/signUpAction";

type SignUpState = {
  signUpResponse: SignUPModel;
  isLoggedIn: boolean;
};

const initialState = {
  isLoggedIn: false,
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  login_with: "",
  signUpResponse: {} as SignUPModel,
  spinner: false,
};

const signUpReducer = (
  state: SignUpState = initialState,
  action: SignUpAction
) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        signUpResponse: action.payload,
        spinner: true,
      };
    case types.SIGNUP_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.SIGNUP_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.SIGNUP_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        signUpResponse: action.response,
        spinner: false,
      };
    case types.SIGNUP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { signUpReducer };
