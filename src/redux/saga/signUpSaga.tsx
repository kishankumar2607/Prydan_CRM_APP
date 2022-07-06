import { call, put } from "redux-saga/effects";
import { SignUp } from "../../services/Api";
import * as signUpActions from "../actions/signUpAction";

export default function* signUpAsync(action: {
  first_name: string;
  last_name: string;
  email: string;
  login_with: string;
}) {
  const response = yield call(
    SignUp,
    action.first_name,
    action.last_name,
    action.email,
    action.login_with
  );

  if (response) {
    yield put(signUpActions.onSignUpResponse(response));

    yield put(signUpActions.disableLoader());
  } else {
    yield put(signUpActions.signUpFailed());
    yield put(signUpActions.disableLoader());
  }
}
