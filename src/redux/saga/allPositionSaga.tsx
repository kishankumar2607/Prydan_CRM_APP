import { call, put } from "redux-saga/effects";
import { AllPosition } from "../../services/Api";
import * as allPositionAction from "../actions/allPositionAction";

export default function* AllPositionAsync() {
  const response = yield call(AllPosition);

  if (response) {
    yield put(allPositionAction.onAllPositionResponse(response));

    yield put(allPositionAction.disableLoader());
  } else {
    yield put(allPositionAction.allPositionFailed());
    yield put(allPositionAction.disableLoader());
  }
}
