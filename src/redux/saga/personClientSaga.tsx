import { call, put } from "redux-saga/effects";
import { PersonClient } from "../../services/Api";
import * as personClientAction from "../actions/personClientAction";

export default function* PersonClientAsync(action: {
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
}) {
  const response = yield call(
    PersonClient,
    action.PersonType,
    action.Name,
    action.Client_Company,
    action.PhoneNo,
    action.PhoneType,
    action.CountryCode,
    action.EmailType,
    action.EmailAddress,
    action.Photo,
    action.PhotoType,
    action.Requirement
  );

  if (response) {
    yield put(personClientAction.onPersonClientResponse(response));

    yield put(personClientAction.disableLoader());
  } else {
    yield put(personClientAction.personClientFailed());
    yield put(personClientAction.disableLoader());
  }
}
