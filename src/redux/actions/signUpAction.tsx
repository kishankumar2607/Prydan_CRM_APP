import * as types from "./types";

export interface SignUPModel {
  first_name: string;
  last_name: string;
  email: string;
  login_with: string;
}

export interface RequestAction {
  readonly type: "SIGNUP_REQUEST";
  payload: SignUPModel;
}

export interface ResponseAction {
  response: any;
  readonly type: "SIGNUP_RESPONSE";
}

export interface onSignUpResponse {
  readonly type: "SIGNUP_FAILED";
}

export interface enableLoader {
  readonly type: "SIGNUP_ENABLE_LOADER";
}

export interface disableLoader {
  readonly type: "SIGNUP_DISABLE_LOADER";
}
export interface logOut {
  readonly type: "LOG_OUT";
}
export interface onlogoutResponse {
  readonly type: "LOGOUT_RESPONSE";
}

export type SignUpAction =
  | RequestAction
  | ResponseAction
  | onSignUpResponse
  | enableLoader
  | disableLoader
  | logOut
  | onlogoutResponse;

export function requestSignUp(
  first_name: string,
  last_name: string,
  email: string,
  login_with: string
) {
  return {
    type: types.SIGNUP_REQUEST,
    first_name,
    last_name,
    email,
    login_with,
  };
}

export function signUpFailed() {
  return {
    type: types.SIGNUP_FAILED,
  };
}

export function onSignUpResponse(response) {
  return {
    type: types.SIGNUP_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.SIGNUP_LOADING_ENDED,
  };
}

export function disableLoader() {
  return {
    type: types.SIGNUP_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
export function onlogoutResponse(response: any) {
  return {
    type: types.LOGOUT_RESPONSE,
    response,
  };
}
