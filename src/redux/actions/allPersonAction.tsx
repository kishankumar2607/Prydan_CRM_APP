import * as types from "./types";

export interface AllPersonModel {}

interface RequestAction {
  readonly type: "ALL_PERSON_REQUEST";
  payload: AllPersonModel;
}

interface ResponseAction {
  response: any;
  readonly type: "ALL_PERSON_RESPONSE";
}

interface onAllPersonResponse {
  readonly type: "ALL_PERSON_FAILED";
}

interface enableLoader {
  readonly type: "ALL_PERSON_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "ALL_PERSON_DISABLE_LOADER";
}

export type AllPersonAction =
  | RequestAction
  | ResponseAction
  | onAllPersonResponse
  | enableLoader
  | disableLoader;

export function requestAllPerson() {
  return {
    type: types.ALL_PERSON_REQUEST,
  };
}
export function allPersonFailed() {
  return {
    type: types.ALL_PERSON_FAILED,
  };
}

export function onAllPersonResponse(response: any) {
  return {
    type: types.ALL_PERSON_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ALL_PERSON_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.ALL_PERSON_DISABLE_LOADER,
  };
}
