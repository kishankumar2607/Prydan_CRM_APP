import { call, put } from "redux-saga/effects";
import { CompanySearch } from "../../services/Api";
import * as companySearchAction from "../actions/companySearchAction";

export default function* CompanySearchAsync() {
  const response = yield call(CompanySearch);

  if (response) {
    yield put(companySearchAction.onCompanySearchResponse(response));

    yield put(companySearchAction.disableLoader());
  } else {
    yield put(companySearchAction.companySearchFailed());
    yield put(companySearchAction.disableLoader());
  }
}
