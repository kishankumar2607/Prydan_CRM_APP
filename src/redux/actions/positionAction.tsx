import * as types from "./types";

export interface PositionModel {
  Company: string;
  P_Title: string;
  Skill: number;
  JobDescription: string;
  No_Positions: number;
  Salary_Range: number;
  Location: string;
  Duration: string;
}

interface RequestAction {
  readonly type: "POSITION_REQUEST";
  payload: PositionModel;
}

interface ResponseAction {
  response: any;
  readonly type: "POSITION_RESPONSE";
}

interface onPositionResponse {
  readonly type: "POSITION_FAILED";
}

interface enableLoader {
  readonly type: "POSITION_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "POSITION_DISABLE_LOADER";
}

export type PositionAction =
  | RequestAction
  | ResponseAction
  | onPositionResponse
  | enableLoader
  | disableLoader;

export function requestPosition(
  Company: string,
  P_Title: string,
  Skill: number,
  JobDescription: string,
  No_Positions: number,
  Salary_Range: number,
  Location: string,
  Duration: string
) {
  return {
    type: types.POSITION_REQUEST,
    Company,
    P_Title,
    Skill,
    JobDescription,
    No_Positions,
    Salary_Range,
    Location,
    Duration,
  };
}
export function positionFailed() {
  return {
    type: types.POSITION_FAILED,
  };
}

export function onPositionResponse(response: any) {
  return {
    type: types.POSITION_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.POSITION_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.POSITION_DISABLE_LOADER,
  };
}
