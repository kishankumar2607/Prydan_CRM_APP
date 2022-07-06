import { takeEvery, all } from "redux-saga/effects";
import * as types from "../actions/types";
import loginSaga from "./loginSaga";
import signUpSaga from "./signUpSaga";
import verifyOtpSaga from "./verifyOtpSaga";
import forgotPasswordSaga from "./forgotPasswordSaga";
import setPasswordSaga from "./setPasswordSaga";
import personSaga from "./personSaga";
import allPersonSaga from "./allPersonSaga";
import personDetailsSaga from "./personDetailsSaga";
import personSearchSaga from "./personSearchSaga";
import personClientSaga from "./personClientSaga";
import personVendorSaga from "./personVendorSaga";
import staticSaga from "./staticSaga";
import companySaga from "./companySaga";
import allCompanySaga from "./allCompanySaga";
import companyDetailsSaga from "./companyDetailsSaga";
import userDetailsSaga from "./userDetailsSaga";
import positionSaga from "./positionSaga";
import allPositionSaga from "./allPositionSaga";
import positionDetailsSaga from "./positionDetailsSaga";
import positionSearchSaga from "./positionSearchSaga";

export default function* rootSaga() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.SIGNUP_REQUEST, signUpSaga)]);
  yield all([takeEvery(types.VERIFY_OTP_REQUEST, verifyOtpSaga)]);
  yield all([takeEvery(types.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga)]);
  yield all([takeEvery(types.SET_PASSWORD_REQUEST, setPasswordSaga)]);
  yield all([takeEvery(types.PERSON_REQUEST, personSaga)]);
  yield all([takeEvery(types.ALL_PERSON_REQUEST, allPersonSaga)]);
  yield all([takeEvery(types.PERSON_DETAILS_REQUEST, personDetailsSaga)]);
  yield all([takeEvery(types.PERSON_SEARCH_REQUEST, personSearchSaga)]);
  yield all([takeEvery(types.PERSON_CLIENT_REQUEST, personClientSaga)]);
  yield all([takeEvery(types.PERSON_VENDOR_REQUEST, personVendorSaga)]);
  yield all([takeEvery(types.STATIC_REQUEST, staticSaga)]);
  yield all([takeEvery(types.COMPANY_REQUEST, companySaga)]);
  yield all([takeEvery(types.ALL_COMPANY_REQUEST, allCompanySaga)]);
  yield all([takeEvery(types.COMPANY_DETAILS_REQUEST, companyDetailsSaga)]);
  yield all([takeEvery(types.USERS_DETAILS_REQUEST, userDetailsSaga)]);
  yield all([takeEvery(types.POSITION_REQUEST, positionSaga)]);
  yield all([takeEvery(types.ALL_POSITION_REQUEST, allPositionSaga)]);
  yield all([takeEvery(types.POSITION_DETAILS_REQUEST, positionDetailsSaga)]);
  yield all([takeEvery(types.POSITION_SEARCH_REQUEST, positionSearchSaga)]);
}