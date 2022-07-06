import * as types from "./types";

export interface CompanySearchModel {}

interface RequestAction {
  readonly type: "COMPANY_SEARCH_REQUEST";
  payload: CompanySearchModel;
}

interface ResponseAction {
  response: any;
  readonly type: "COMPANY_SEARCH_RESPONSE";
}

interface onCompanySearchResponse {
  readonly type: "COMPANY_SEARCH_FAILED";
}

interface enableLoader {
  readonly type: "COMPANY_SEARCH_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "COMPANY_SEARCH_DISABLE_LOADER";
}

export type companySearchAction =
  | RequestAction
  | ResponseAction
  | onCompanySearchResponse
  | enableLoader
  | disableLoader;

export function requestCompanySearch() {
  return {
    type: types.COMPANY_SEARCH_REQUEST,
  };
}
export function companySearchFailed() {
  return {
    type: types.COMPANY_SEARCH_FAILED,
  };
}

export function onCompanySearchResponse(response: any) {
  return {
    type: types.COMPANY_SEARCH_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.COMPANY_SEARCH_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.COMPANY_SEARCH_DISABLE_LOADER,
  };
}
