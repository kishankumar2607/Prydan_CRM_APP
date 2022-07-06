import * as types from "./types";

export interface PersonVendorModel {
  PersonType: number;
  Name: string;
  Vendor_Company: number;
  PhoneNo: number;
  PhoneType: number;
  CountryCode: number;
  EmailType: number;
  EmailAddress: string;
  Photo: string;
  PhotoType: number;
}

interface RequestAction {
  readonly type: "PERSON_VENDOR_REQUEST";
  payload: PersonVendorModel;
}

interface ResponseAction {
  response: any;
  readonly type: "PERSON_VENDOR_RESPONSE";
}

interface onPersonVendorResponse {
  readonly type: "PERSON_VENDOR_FAILED";
}

interface enableLoader {
  readonly type: "PERSON_VENDOR_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "PERSON_VENDOR_DISABLE_LOADER";
}

export type PersonVendorAction =
  | RequestAction
  | ResponseAction
  | onPersonVendorResponse
  | enableLoader
  | disableLoader;

export function requestPersonVendor(
  PersonType: number,
  Name: string,
  Vendor_Company: number,
  PhoneNo: number,
  PhoneType: number,
  CountryCode: number,
  EmailType: number,
  EmailAddress: string,
  Photo: string,
  PhotoType: number
) {
  return {
    type: types.PERSON_VENDOR_REQUEST,
    PersonType,
    Name,
    Vendor_Company,
    PhoneNo,
    PhoneType,
    CountryCode,
    EmailType,
    EmailAddress,
    Photo,
    PhotoType,
  };
}
export function personVendorFailed() {
  return {
    type: types.PERSON_VENDOR_FAILED,
  };
}

export function onPersonVendorResponse(response: any) {
  return {
    type: types.PERSON_VENDOR_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.PERSON_VENDOR_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.PERSON_VENDOR_DISABLE_LOADER,
  };
}
