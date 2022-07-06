import { call, put } from "redux-saga/effects";
import { Static } from "../../services/Api";
import * as staticAction from "../actions/staticAction";

export default function* StaticAsync() {
  const response = yield call(Static);

  if (response) {
    yield put(staticAction.onStaticResponse(response));

    yield put(staticAction.disableLoader());
  } else {
    yield put(staticAction.staticFailed());
    yield put(staticAction.disableLoader());
  }
}
