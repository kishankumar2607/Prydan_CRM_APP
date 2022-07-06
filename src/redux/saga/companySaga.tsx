import { call, put } from "redux-saga/effects";
import { Company } from "../../services/Api";
import * as companyAction from "../actions/companyAction";

export default function* CompanyAsync(action: {
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
}) {
  const response = yield call(
    Company,
    action.CompanyType,
    action.Name,
    action.WebsiteURL,
    action.PhoneNo,
    action.PhoneType,
    action.CountryCode,
    action.EmailType,
    action.EmailAddress,
    action.AddressType,
    action.Address,
    action.City,
    action.District,
    action.State,
    action.Country,
    action.PinCode,
  );

  if (response) {
    yield put(companyAction.onCompanyResponse(response));

    yield put(companyAction.disableLoader());
  } else {
    yield put(companyAction.companyFailed());
    yield put(companyAction.disableLoader());
  }
}
