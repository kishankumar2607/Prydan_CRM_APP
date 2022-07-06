import { call, put } from "redux-saga/effects";
import { ForgotPassword } from "../../services/Api";
import * as forgotPasswordActions from "../actions/forgotPasswordActions";

export default function* forgotPasswordAsync(action: { email: string }) {
  const response = yield call(ForgotPassword, action.email);

  if (response) {
    yield put(forgotPasswordActions.onForgotPasswordResponse(response));
  } else {
    yield put(forgotPasswordActions.forgotPasswordFailed());
  }
}
