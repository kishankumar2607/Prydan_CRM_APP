import { call, put } from "redux-saga/effects";
import { CompanyDetails } from "../../services/Api";
import * as companyDetailsAction from "../actions/companyDetailsAction";

export default function* CompanyDetailsAsync(action: {}) {
  const response = yield call(CompanyDetails);

  if (response) {
    yield put(companyDetailsAction.onCompanyDetailsResponse(response));

    yield put(companyDetailsAction.disableLoader());
  } else {
    yield put(companyDetailsAction.companyDetailsFailed());
    yield put(companyDetailsAction.disableLoader());
  }
}
