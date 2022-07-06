import * as types from "../actions/types";
import {
  PersonVendorAction,
  PersonVendorModel,
} from "../actions/personVendorAction";

type PersonVendorState = {
  personVendorResponse: PersonVendorModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  PersonType: "",
  Name: "",
  Vendor_Company: "",
  PhoneNo: "",
  PhoneType: "",
  CountryCode: "",
  EmailType: "",
  EmailAddress: "",
  Photo: "",
  PhotoType: "",
  personVendorResponse: {} as PersonVendorModel,
  spinner: false,
};

/**
 * Reducer
 * @class personVendorReducer
 */
const personVendorReducer = (
  state: PersonVendorState = initialState,
  action: PersonVendorAction
) => {
  switch (action.type) {
    case types.PERSON_VENDOR_REQUEST:
      return {
        ...state,
        personVendorResponse: action.payload,
        spinner: true,
      };
    case types.PERSON_VENDOR_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.PERSON_VENDOR_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.PERSON_VENDOR_RESPONSE:
      return {
        ...state,
        personVendorResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.PERSON_VENDOR_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { personVendorReducer };
