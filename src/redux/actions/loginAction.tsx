import * as types from "./types";

export interface LoginModel {
  email: string;
  password: string;
}

interface RequestAction {
  readonly type: "LOGIN_REQUEST";
  payload: LoginModel;
}

interface ResponseAction {
  response: any;
  readonly type: "LOGIN_RESPONSE";
}

interface onLoginResponse {
  readonly type: "LOGIN_FAILED";
}

interface enableLoader {
  readonly type: "LOGIN_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "LOGIN_DISABLE_LOADER";
}
interface logOut {
  readonly type: "LOG_OUT";
}
interface onlogoutResponse {
  readonly type: "LOGOUT_RESPONSE";
}

export type LoginAction =
  | RequestAction
  | ResponseAction
  | onLoginResponse
  | enableLoader
  | disableLoader
  | logOut
  | onlogoutResponse;

export function requestLogin(email: string, password: string) {
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
  };
}
export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response: any) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}

export function onlogoutResponse(response) {
  return {
    type: types.LOGOUT_RESPONSE,
    response,
  };
}
