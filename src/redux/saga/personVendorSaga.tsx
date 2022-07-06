import { call, put } from "redux-saga/effects";
import { PersonVendor } from "../../services/Api";
import * as personVendorAction from "../actions/personVendorAction";

export default function* PersonVendorAsync(action: {
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
}) {
  const response = yield call(
    PersonVendor,
    action.PersonType,
    action.Name,
    action.Vendor_Company,
    action.PhoneNo,
    action.PhoneType,
    action.CountryCode,
    action.EmailType,
    action.EmailAddress,
    action.Photo,
    action.PhotoType
  );

  if (response) {
    yield put(personVendorAction.onPersonVendorResponse(response));

    yield put(personVendorAction.disableLoader());
  } else {
    yield put(personVendorAction.personVendorFailed());
    yield put(personVendorAction.disableLoader());
  }
}
