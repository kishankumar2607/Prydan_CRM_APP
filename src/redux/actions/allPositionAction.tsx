import * as types from "./types";

export interface AllPositionModel {}

interface RequestAction {
  readonly type: "ALL_POSITION_REQUEST";
  payload: AllPositionModel;
}

interface ResponseAction {
  response: any;
  readonly type: "ALL_POSITION_RESPONSE";
}

interface onAllPositionResponse {
  readonly type: "ALL_POSITION_FAILED";
}

interface enableLoader {
  readonly type: "ALL_POSITION_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "ALL_POSITION_DISABLE_LOADER";
}

export type AllPositionAction =
  | RequestAction
  | ResponseAction
  | onAllPositionResponse
  | enableLoader
  | disableLoader;

export function requestAllPosition() {
  return {
    type: types.ALL_POSITION_REQUEST,
  };
}
export function allPositionFailed() {
  return {
    type: types.ALL_POSITION_FAILED,
  };
}

export function onAllPositionResponse(response: any) {
  return {
    type: types.ALL_POSITION_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ALL_POSITION_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.ALL_POSITION_DISABLE_LOADER,
  };
}
