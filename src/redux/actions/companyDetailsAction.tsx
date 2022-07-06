import * as types from "./types";

export interface CompanyDetailsModel {
}

interface RequestAction {
  readonly type: "COMPANY_DETAILS_REQUEST";
  payload: CompanyDetailsModel;
}

interface ResponseAction {
  response: any;
  readonly type: "COMPANY_DETAILS_RESPONSE";
}

interface onCompanyDetailsResponse {
  readonly type: "COMPANY_DETAILS_FAILED";
}

interface enableLoader {
  readonly type: "COMPANY_DETAILS_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "COMPANY_DETAILS_DISABLE_LOADER";
}

export type CompanyDetailsAction =
  | RequestAction
  | ResponseAction
  | onCompanyDetailsResponse
  | enableLoader
  | disableLoader;

export function requestCompanyDetails(
) {
  return {
    type: types.COMPANY_DETAILS_REQUEST,
  };
}
export function companyDetailsFailed() {
  return {
    type: types.COMPANY_DETAILS_FAILED,
  };
}

export function onCompanyDetailsResponse(response: any) {
  return {
    type: types.COMPANY_DETAILS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.COMPANY_DETAILS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.COMPANY_DETAILS_DISABLE_LOADER,
  };
}
