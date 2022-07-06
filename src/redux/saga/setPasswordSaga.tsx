import { call, put } from "redux-saga/effects";
import { SetPassword } from "../../services/Api";
import * as setPasswordAction from "../actions/setPasswordAction";

export default function* setPasswordAsync(action: {
  password: string;
  email: string;
}) {
  const response = yield call(SetPassword, action.password, action.email);

  if (response) {
    yield put(setPasswordAction.onSetPasswordResponse(response));
  } else {
    yield put(setPasswordAction.setPasswordFailed());
  }
}
