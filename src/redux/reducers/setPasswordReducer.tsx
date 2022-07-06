import * as types from "../actions/types";
import {
  SetPasswordAction,
  SetPasswordModel,
} from "../actions/setPasswordAction";

type SetPasswordState = {
  setPasswordResponse: SetPasswordModel;
  isLoggedIn: boolean;
};

const initialState = {
  isLoggedIn: false,
  password: "",
  email: "",
  setPasswordResponse: {} as SetPasswordModel,
  spinner: false,
};

/**
 * Reducer
 * @class setPasswordReducer
 */

const setPasswordReducer = (
  state: SetPasswordState = initialState,
  action: SetPasswordAction
) => {
  switch (action.type) {
    case types.SET_PASSWORD_REQUEST:
      return {
        ...state,
        setPasswordResponse: action.payload,
        spinner: true,
      };
    case types.SET_PASSWORD_RESPONSE:
      return {
        ...state,
        setPasswordResponse: action.response,
        spinner: false,
      };
    case types.SET_PASSWORD_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
};
export { setPasswordReducer };
