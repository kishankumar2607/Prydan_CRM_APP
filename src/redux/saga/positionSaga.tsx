import { call, put } from "redux-saga/effects";
import { Position } from "../../services/Api";
import * as positionAction from "../actions/positionAction";

export default function* PositionAsync(action: {
  Company: string;
  P_Title: string;
  Skill: number;
  JobDescription: string;
  No_Positions: number;
  Salary_Range: number;
  Location: string;
  Duration: string;
}) {
  const response = yield call(
    Position,
    action.Company,
    action.P_Title,
    action.Skill,
    action.JobDescription,
    action.No_Positions,
    action.Salary_Range,
    action.Location,
    action.Duration
  );

  if (response) {
    yield put(positionAction.onPositionResponse(response));

    yield put(positionAction.disableLoader());
  } else {
    yield put(positionAction.positionFailed());
    yield put(positionAction.disableLoader());
  }
}
