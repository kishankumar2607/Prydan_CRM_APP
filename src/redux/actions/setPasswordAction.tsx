import * as types from "./types";

export interface SetPasswordModel {
  password: string;
  email: string;
}

export interface RequestAction {
  readonly type: "SET_PASSWORD_REQUEST";
  payload: SetPasswordModel;
}

export interface ResponseAction {
  response: any;
  readonly type: "SET_PASSWORD_RESPONSE";
}

export interface onSetPasswordResponse {
  readonly type: "SET_PASSWORD_FAILED";
}

export type SetPasswordAction =
  | RequestAction
  | ResponseAction
  | onSetPasswordResponse;

export function requestSetPassword(password: string, email: string) {
  return {
    type: types.SET_PASSWORD_REQUEST,
    password,
    email,
  };
}

export function setPasswordFailed() {
  return {
    type: types.SET_PASSWORD_FAILED,
  };
}

export function onSetPasswordResponse(response: any) {
  return {
    type: types.SET_PASSWORD_RESPONSE,
    response,
  };
}
