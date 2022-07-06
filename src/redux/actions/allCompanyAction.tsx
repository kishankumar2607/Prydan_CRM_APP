import * as types from "./types";

export interface AllCompanyModel {}

interface RequestAction {
  readonly type: "ALL_COMPANY_REQUEST";
  payload: AllCompanyModel;
}

interface ResponseAction {
  response: any;
  readonly type: "ALL_COMPANY_RESPONSE";
}

interface onAllCompanyResponse {
  readonly type: "ALL_COMPANY_FAILED";
}

interface enableLoader {
  readonly type: "ALL_COMPANY_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "ALL_COMPANY_DISABLE_LOADER";
}

export type allCompanyAction =
  | RequestAction
  | ResponseAction
  | onAllCompanyResponse
  | enableLoader
  | disableLoader;

export function requestAllCompany() {
  return {
    type: types.ALL_COMPANY_REQUEST,
  };
}
export function allCompanyFailed() {
  return {
    type: types.ALL_COMPANY_FAILED,
  };
}

export function onAllCompanyResponse(response: any) {
  return {
    type: types.ALL_COMPANY_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ALL_COMPANY_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.ALL_COMPANY_DISABLE_LOADER,
  };
}
