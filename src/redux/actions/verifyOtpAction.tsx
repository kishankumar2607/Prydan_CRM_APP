import * as types from "./types";

export interface VerifyOtpModel {
  otp: number;
  email: string;
}

export interface RequestAction {
  readonly type: "VERIFY_OTP_REQUEST";
  payload: VerifyOtpModel;
}

export interface ResponseAction {
  response: any;
  readonly type: "VERIFY_OTP_RESPONSE";
}

export interface onVerifyOtpResponse {
  readonly type: "VERIFY_OTP_FAILED";
}

export type VerifyOtpAction =
  | RequestAction
  | ResponseAction
  | onVerifyOtpResponse;

export function requestVerifyOtp(otp: number, email: string) {
  return {
    type: types.VERIFY_OTP_REQUEST,
    otp,
    email,
  };
}

export function verifyFailed() {
  return {
    type: types.VERIFY_OTP_FAILED,
  };
}

export function onVerifyOtpResponse(response: any) {
  return {
    type: types.VERIFY_OTP_RESPONSE,
    response,
  };
}
