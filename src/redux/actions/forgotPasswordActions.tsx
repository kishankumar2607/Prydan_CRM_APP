import * as types from "./types";

export interface ForgotPasswordModel {
  email: string;
}

interface ForgotPasswordRequestAction {
  readonly type: "FORGOT_PASSWORD_REQUEST";
  payload: ForgotPasswordModel;
}
interface ForgotPasswordResponseAction {
  response: any;
  readonly type: "FORGOT_PASSWORD_RESPONSE";
}

interface onForgotPasswordResponse {
  readonly type: "FORGOT_PASSWORD_FAILED";
}

interface enableLoader {
  readonly type: "FORGOT_PASSWORD_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "FORGOT_PASSWORD_DISABLE_LOADER";
}

export type ForgotPasswordAction =
  | ForgotPasswordRequestAction
  | ForgotPasswordResponseAction
  | onForgotPasswordResponse
  | enableLoader
  | disableLoader;

export function requestForgotPassword(email: string) {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    email,
  };
}

export function forgotPasswordFailed() {
  return {
    type: types.FORGOT_PASSWORD_FAILED,
  };
}

export function onForgotPasswordResponse(response) {
  return {
    type: types.FORGOT_PASSWORD_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.FORGOT_PASSWORD_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.FORGOT_PASSWORD_DISABLE_LOADER,
  };
}
