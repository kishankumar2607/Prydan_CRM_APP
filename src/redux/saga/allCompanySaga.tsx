import { call, put } from "redux-saga/effects";
import { AllCompany } from "../../services/Api";
import * as allCompanyAction from "../actions/allCompanyAction";

export default function* CompanyAsync() {
  const response = yield call(AllCompany);

  if (response) {
    yield put(allCompanyAction.onAllCompanyResponse(response));

    yield put(allCompanyAction.disableLoader());
  } else {
    yield put(allCompanyAction.allCompanyFailed());
    yield put(allCompanyAction.disableLoader());
  }
}
