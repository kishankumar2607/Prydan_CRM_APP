import { call, put } from "redux-saga/effects";
import { Person } from "../../services/Api";
import * as personAction from "../actions/personAction";

export default function* PersonAsync(action: {
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
}) {
  const response = yield call(
    Person,
    action.PersonType,
    action.Name,
    action.Candidate_Source,
    action.Vendor_Company,
    action.Salary,
    action.Experience,
    action.PhoneNo,
    action.PhoneType,
    action.CountryCode,
    action.EmailType,
    action.EmailAddress,
    action.Skill,
    action.Photo,
    action.PhotoType,
    action.Document
  );

  if (response) {
    yield put(personAction.onPersonResponse(response));

    yield put(personAction.disableLoader());
  } else {
    yield put(personAction.personFailed());
    yield put(personAction.disableLoader());
  }
}
