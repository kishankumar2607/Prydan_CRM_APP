import { call, put } from "redux-saga/effects";
import { AllPerson } from "../../services/Api";
import * as allPersonAction from "../actions/allPersonAction";

export default function* AllPersonAsync() {
  const response = yield call(AllPerson);

  if (response) {
    yield put(allPersonAction.onAllPersonResponse(response));

    yield put(allPersonAction.disableLoader());
  } else {
    yield put(allPersonAction.allPersonFailed());
    yield put(allPersonAction.disableLoader());
  }
}
