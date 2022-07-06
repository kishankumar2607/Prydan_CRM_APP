import * as types from "./types";

export interface PositionDetailsModel {}

interface RequestAction {
  readonly type: "POSITION_DETAILS_REQUEST";
  payload: PositionDetailsModel;
}

interface ResponseAction {
  response: any;
  readonly type: "POSITION_DETAILS_RESPONSE";
}

interface onPositionDetailsResponse {
  readonly type: "POSITION_DETAILS_FAILED";
}

interface enableLoader {
  readonly type: "POSITION_DETAILS_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "POSITION_DETAILS_DISABLE_LOADER";
}

export type PositionDetailsAction =
  | RequestAction
  | ResponseAction
  | onPositionDetailsResponse
  | enableLoader
  | disableLoader;

export function requestPositionDetails() {
  return {
    type: types.POSITION_DETAILS_REQUEST,
  };
}
export function positionDetailsFailed() {
  return {
    type: types.POSITION_DETAILS_FAILED,
  };
}

export function onPositionDetailsResponse(response: any) {
  return {
    type: types.POSITION_DETAILS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.POSITION_DETAILS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.POSITION_DETAILS_DISABLE_LOADER,
  };
}
