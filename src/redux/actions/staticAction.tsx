import * as types from "./types";

export interface StaticModel {}

interface RequestAction {
  readonly type: "STATIC_REQUEST";
  payload: StaticModel;
}

interface ResponseAction {
  response: any;
  readonly type: "STATIC_RESPONSE";
}

interface onStaticResponse {
  readonly type: "STATIC_FAILED";
}

interface enableLoader {
  readonly type: "STATIC_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "STATIC_DISABLE_LOADER";
}

export type StaticAction =
  | RequestAction
  | ResponseAction
  | onStaticResponse
  | enableLoader
  | disableLoader;

export function requestStatic() {
  return {
    type: types.STATIC_REQUEST,
  };
}
export function staticFailed() {
  return {
    type: types.STATIC_FAILED,
  };
}

export function onStaticResponse(response: any) {
  return {
    type: types.STATIC_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.STATIC_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.STATIC_DISABLE_LOADER,
  };
}
