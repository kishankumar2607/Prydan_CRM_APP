import { call, put } from "redux-saga/effects";
import { PositionSearch } from "../../services/Api";
import * as PositionSearchAction from "../actions/positionSearchAction";

export default function* PositionSearchAsync() {
  const response = yield call(PositionSearch);

  if (response) {
    yield put(PositionSearchAction.onPositionSearchResponse(response));

    yield put(PositionSearchAction.disableLoader());
  } else {
    yield put(PositionSearchAction.positionSearchFailed());
    yield put(PositionSearchAction.disableLoader());
  }
}
