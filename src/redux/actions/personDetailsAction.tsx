import * as types from "./types";

export interface PersonDetailsModel {}

interface RequestAction {
  readonly type: "PERSON_DETAILS_REQUEST";
  payload: PersonDetailsModel;
}

interface ResponseAction {
  response: any;
  readonly type: "PERSON_DETAILS_RESPONSE";
}

interface onPersonDetailsResponse {
  readonly type: "PERSON_DETAILS_FAILED";
}

interface enableLoader {
  readonly type: "PERSON_DETAILS_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "PERSON_DETAILS_DISABLE_LOADER";
}

export type PersonDetailsAction =
  | RequestAction
  | ResponseAction
  | onPersonDetailsResponse
  | enableLoader
  | disableLoader;

export function requestPersonDetails() {
  return {
    type: types.PERSON_DETAILS_REQUEST,
  };
}
export function personDetailsFailed() {
  return {
    type: types.PERSON_DETAILS_FAILED,
  };
}

export function onPersonDetailsResponse(response: any) {
  return {
    type: types.PERSON_DETAILS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.PERSON_DETAILS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.PERSON_DETAILS_DISABLE_LOADER,
  };
}
