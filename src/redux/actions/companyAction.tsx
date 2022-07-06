import * as types from "./types";

export interface CompanyModel {
  CompanyType: string;
  Name: string;
  WebsiteURL: number;
  GST_No: number;
  PhoneNo: number;
  PhoneType: number;
  CountryCode: number;
  EmailType: number;
  EmailAddress: string;
  AddressType: number;
  Address: string;
  City: string;
  District: string;
  State: string;
  Country: string;
  PinCode: number;
}

interface RequestAction {
  readonly type: "COMPANY_REQUEST";
  payload: CompanyModel;
}

interface ResponseAction {
  response: any;
  readonly type: "COMPANY_RESPONSE";
}

interface onCompanyResponse {
  readonly type: "COMPANY_FAILED";
}

interface enableLoader {
  readonly type: "COMPANY_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "COMPANY_DISABLE_LOADER";
}

export type companyAction =
  | RequestAction
  | ResponseAction
  | onCompanyResponse
  | enableLoader
  | disableLoader;

export function requestCompany(
  CompanyType: string,
  Name: string,
  WebsiteURL: number,
  GST_No: number,
  PhoneNo: number,
  PhoneType: number,
  CountryCode: number,
  EmailType: number,
  EmailAddress: string,
  AddressType: number,
  Address: string,
  City: string,
  District: string,
  State: string,
  Country: string,
  PinCode: number,
) {
  return {
    type: types.COMPANY_REQUEST,
    CompanyType,
    Name,
    WebsiteURL,
    GST_No,
    PhoneNo,
    PhoneType,
    CountryCode,
    EmailType,
    EmailAddress,
    AddressType,
    Address,
    City,
    District,
    State,
    Country,
    PinCode,
  };
}
export function companyFailed() {
  return {
    type: types.COMPANY_FAILED,
  };
}

export function onCompanyResponse(response: any) {
  return {
    type: types.COMPANY_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.COMPANY_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.COMPANY_DISABLE_LOADER,
  };
}
