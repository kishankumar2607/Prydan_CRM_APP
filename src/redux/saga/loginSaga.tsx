import { call, put } from "redux-saga/effects";
import LogIn from "../../services/Api";
import * as loginAction from "../actions/loginAction";

export default function* loginAsync(action: {
  email: string;
  password: string;
}) {
  const response = yield call(LogIn, action.email, action.password);

  if (response) {
    yield put(loginAction.onLoginResponse(response));

    yield put(loginAction.disableLoader());
  } else {
    yield put(loginAction.loginFailed());
    yield put(loginAction.disableLoader());
  }
}
