import * as types from "./types";

export interface PersonClientModel {
  PersonType: number;
  Name: string;
  Client_Company: number;
  PhoneNo: number;
  PhoneType: number;
  CountryCode: number;
  EmailType: number;
  EmailAddress: string;
  Photo: string;
  PhotoType: number;
  Requirement: string;
}

interface RequestAction {
  readonly type: "PERSON_CLIENT_REQUEST";
  payload: PersonClientModel;
}

interface ResponseAction {
  response: any;
  readonly type: "PERSON_CLIENT_RESPONSE";
}

interface onPersonClientResponse {
  readonly type: "PERSON_CLIENT_FAILED";
}

interface enableLoader {
  readonly type: "PERSON_CLIENT_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "PERSON_CLIENT_DISABLE_LOADER";
}

export type PersonClientAction =
  | RequestAction
  | ResponseAction
  | onPersonClientResponse
  | enableLoader
  | disableLoader;

export function requestPersonClient(
  PersonType: number,
  Name: string,
  Client_Company: number,
  PhoneNo: number,
  PhoneType: number,
  CountryCode: number,
  EmailType: number,
  EmailAddress: string,
  Photo: string,
  PhotoType: number,
  Requirement: string
) {
  return {
    type: types.PERSON_CLIENT_REQUEST,
    PersonType,
    Name,
    Client_Company,
    PhoneNo,
    PhoneType,
    CountryCode,
    EmailType,
    EmailAddress,
    Photo,
    PhotoType,
    Requirement,
  };
}
export function personClientFailed() {
  return {
    type: types.PERSON_CLIENT_FAILED,
  };
}

export function onPersonClientResponse(response: any) {
  return {
    type: types.PERSON_CLIENT_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.PERSON_CLIENT_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.PERSON_CLIENT_DISABLE_LOADER,
  };
}
