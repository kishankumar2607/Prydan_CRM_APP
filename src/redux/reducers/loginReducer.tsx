import * as types from "../actions/types";
import { LoginAction, LoginModel } from "../actions/loginAction";

type LoginState = {
  loginResponse: LoginModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  id: 0,
  email: "",
  password: "",
  loginResponse: {} as LoginModel,
  spinner: false,
};

/**
 * Reducer
 * @class loginReducer
 */
const loginReducer = (
  state: LoginState = initialState,
  action: LoginAction
) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loginResponse: action.payload,
        spinner: true,
      };
    case types.LOGIN_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.LOGIN_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.LOGIN_RESPONSE:
      return {
        ...state,
        loginResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    case types.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { loginReducer };
