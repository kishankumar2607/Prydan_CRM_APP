import * as types from "../actions/types";
import {
  PersonClientAction,
  PersonClientModel,
} from "../actions/personClientAction";

type PersonClientState = {
  personClientResponse: PersonClientModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  PersonType: "",
  Name: "",
  Client_Company: "",
  PhoneNo: "",
  PhoneType: "",
  CountryCode: "",
  EmailType: "",
  EmailAddress: "",
  Photo: "",
  PhotoType: "",
  Requirement: "",
  personClientResponse: {} as PersonClientModel,
  spinner: false,
};

/**
 * Reducer
 * @class personClientReducer
 */
const personClientReducer = (
  state: PersonClientState = initialState,
  action: PersonClientAction
) => {
  switch (action.type) {
    case types.PERSON_CLIENT_REQUEST:
      return {
        ...state,
        personClientResponse: action.payload,
        spinner: true,
      };
    case types.PERSON_CLIENT_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.PERSON_CLIENT_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.PERSON_CLIENT_RESPONSE:
      return {
        ...state,
        personClientResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.PERSON_CLIENT_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { personClientReducer };
