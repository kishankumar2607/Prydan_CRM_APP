import { call, put } from "redux-saga/effects";
import { UserDetails } from "../../services/Api";
import * as userDetailsAction from "../actions/userDetailsAction";

export default function* UserDetailsAsync() {
  const response = yield call(UserDetails);

  if (response) {
    yield put(userDetailsAction.onUserDetailsResponse(response));

    yield put(userDetailsAction.disableLoader());
  } else {
    yield put(userDetailsAction.userDetailsFailed());
    yield put(userDetailsAction.disableLoader());
  }
}
