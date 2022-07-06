import * as types from "./types";

export interface PersonSearchModel {}

interface RequestAction {
  readonly type: "PERSON_SEARCH_REQUEST";
  payload: PersonSearchModel;
}

interface ResponseAction {
  response: any;
  readonly type: "PERSON_SEARCH_RESPONSE";
}

interface onPersonSearchResponse {
  readonly type: "PERSON_SEARCH_FAILED";
}

interface enableLoader {
  readonly type: "PERSON_SEARCH_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "PERSON_SEARCH_DISABLE_LOADER";
}

export type PersonSearchAction =
  | RequestAction
  | ResponseAction
  | onPersonSearchResponse
  | enableLoader
  | disableLoader;

export function requestPersonSearch() {
  return {
    type: types.PERSON_SEARCH_REQUEST,
  };
}
export function personSearchFailed() {
  return {
    type: types.PERSON_SEARCH_FAILED,
  };
}

export function onPersonSearchResponse(response: any) {
  return {
    type: types.PERSON_SEARCH_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.PERSON_SEARCH_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.PERSON_SEARCH_DISABLE_LOADER,
  };
}
