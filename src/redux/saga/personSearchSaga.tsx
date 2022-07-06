import { call, put } from "redux-saga/effects";
import { PersonSearch } from "../../services/Api";
import * as personSearchAction from "../actions/personSearchAction";

export default function* PersonSearchAsync() {
  const response = yield call(PersonSearch);

  if (response) {
    yield put(personSearchAction.onPersonSearchResponse(response));

    yield put(personSearchAction.disableLoader());
  } else {
    yield put(personSearchAction.personSearchFailed());
    yield put(personSearchAction.disableLoader());
  }
}
