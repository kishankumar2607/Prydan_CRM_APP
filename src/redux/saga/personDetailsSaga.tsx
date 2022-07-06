import { call, put } from "redux-saga/effects";
import { PersonDetails } from "../../services/Api";
import * as personDetailsAction from "../actions/personDetailsAction";

export default function* PersonDetailsAsync() {
  const response = yield call(PersonDetails);

  if (response) {
    yield put(personDetailsAction.onPersonDetailsResponse(response));

    yield put(personDetailsAction.disableLoader());
  } else {
    yield put(personDetailsAction.personDetailsFailed());
    yield put(personDetailsAction.disableLoader());
  }
}
