import { call, put } from "redux-saga/effects";
import { PositionDetails } from "../../services/Api";
import * as PositionDetailsAction from "../actions/positionDetailsAction";

export default function* PositionDetailsAsync() {
  const response = yield call(PositionDetails);

  if (response) {
    yield put(PositionDetailsAction.onPositionDetailsResponse(response));

    yield put(PositionDetailsAction.disableLoader());
  } else {
    yield put(PositionDetailsAction.positionDetailsFailed());
    yield put(PositionDetailsAction.disableLoader());
  }
}
