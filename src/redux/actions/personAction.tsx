import * as types from "./types";

export interface PersonModel {
  PersonType: string;
  Name: string;
  Candidate_Source: string;
  Vendor_Company: number;
  Salary: number;
  Experience: string;
  PhoneNo: number;
  PhoneType: number;
  CountryCode: number;
  EmailType: number;
  EmailAddress: string;
  Skill: number;
  Photo: string;
  PhotoType: number;
  Document: string;
}

interface RequestAction {
  readonly type: "PERSON_REQUEST";
  payload: PersonModel;
}

interface ResponseAction {
  response: any;
  readonly type: "PERSON_RESPONSE";
}

interface onPersonResponse {
  readonly type: "PERSON_FAILED";
}

interface enableLoader {
  readonly type: "PERSON_ENABLE_LOADER";
}

interface disableLoader {
  readonly type: "PERSON_DISABLE_LOADER";
}

export type PersonAction =
  | RequestAction
  | ResponseAction
  | onPersonResponse
  | enableLoader
  | disableLoader;

export function requestPerson(
  PersonType: string,
  Name: string,
  Candidate_Source: string,
  Vendor_Company: number,
  Salary: number,
  Experience: string,
  PhoneNo: number,
  PhoneType: number,
  CountryCode: number,
  EmailType: number,
  EmailAddress: string,
  Skill: number,
  Photo: string,
  PhotoType: number,
  Document: string
) {
  return {
    type: types.PERSON_REQUEST,
    PersonType,
    Name,
    Candidate_Source,
    Vendor_Company,
    Salary,
    Experience,
    PhoneNo,
    PhoneType,
    CountryCode,
    EmailType,
    EmailAddress,
    Skill,
    Photo,
    PhotoType,
    Document,
  };
}
export function personFailed() {
  return {
    type: types.PERSON_FAILED,
  };
}

export function onPersonResponse(response: any) {
  return {
    type: types.PERSON_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.PERSON_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.PERSON_DISABLE_LOADER,
  };
}
