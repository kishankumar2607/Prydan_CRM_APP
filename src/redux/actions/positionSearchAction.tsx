import * as types from "./types";

export interface PositionSearchModel {}

interface RequestAction {
  readonly type: "POSITION_SEARCH_REQUEST";
  payload: PositionSearchModel;
}

interface ResponseAction {
  response: any;
  readonly type: "POSITION_SEARCH_RESPONSE";
}

interface onPositionSearchResponse {
  readonly type: "POSITION_SEARCH_FAILED";
}

interface enableLoader {
  readonly type: "POSITION_SEARCH_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "POSITION_SEARCH_DISABLE_LOADER";
}

export type PositionSearchAction =
  | RequestAction
  | ResponseAction
  | onPositionSearchResponse
  | enableLoader
  | disableLoader;

export function requestPositionSearch() {
  return {
    type: types.POSITION_SEARCH_REQUEST,
  };
}
export function positionSearchFailed() {
  return {
    type: types.POSITION_SEARCH_FAILED,
  };
}

export function onPositionSearchResponse(response: any) {
  return {
    type: types.POSITION_SEARCH_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.POSITION_SEARCH_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.POSITION_SEARCH_DISABLE_LOADER,
  };
}
