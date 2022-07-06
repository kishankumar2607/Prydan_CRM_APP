import * as types from "./types";

export interface UserDetailsModel {}

interface RequestAction {
  readonly type: "USERS_DETAILS_REQUEST";
  payload: UserDetailsModel;
}

interface ResponseAction {
  response: any;
  readonly type: "USERS_DETAILS_RESPONSE";
}

interface onUserDetailsResponse {
  readonly type: "USERS_DETAILS_FAILED";
}

interface enableLoader {
  readonly type: "USERS_DETAILS_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "USERS_DETAILS_DISABLE_LOADER";
}

export type UserDetailsAction =
  | RequestAction
  | ResponseAction
  | onUserDetailsResponse
  | enableLoader
  | disableLoader;

export function requestUserDetails() {
  return {
    type: types.USERS_DETAILS_REQUEST,
  };
}
export function userDetailsFailed() {
  return {
    type: types.USERS_DETAILS_FAILED,
  };
}

export function onUserDetailsResponse(response: any) {
  return {
    type: types.USERS_DETAILS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.USERS_DETAILS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.COMPANY_DETAILS_DISABLE_LOADER,
  };
}
