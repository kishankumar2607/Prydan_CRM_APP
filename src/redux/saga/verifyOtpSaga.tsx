import { call, put } from "redux-saga/effects";
import { VerifyOtp } from "../../services/Api";
import * as verifyOtpAction from "../actions/verifyOtpAction";

export default function* verifyOtpAsync(action: {
  otp: number;
  email: string;
}) {
  const response = yield call(VerifyOtp, action.otp, action.email);

  if (response) {
    yield put(verifyOtpAction.onVerifyOtpResponse(response));
  } else {
    yield put(verifyOtpAction.verifyFailed());
  }
}
