import * as types from "../actions/types";
import { companyAction, CompanyModel } from "../actions/companyAction";

type CompanyState = {
  companyResponse: CompanyModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  CompanyType: "",
  Name: "",
  WebsiteURL: "",
  PhoneNo: "",
  PhoneType: "",
  CountryCode: "",
  EmailType: "",
  EmailAddress: "",
  AddressType: "",
  Address: "",
  City: "",
  District: "",
  State: "",
  Country: "",
  PinCode: "",
  companyResponse: {} as CompanyModel,
  spinner: false,
};

/**
 * Reducer
 * @class clientReducer
 */
const companyReducer = (
  state: CompanyState = initialState,
  action: companyAction
) => {
  switch (action.type) {
    case types.COMPANY_REQUEST:
      return {
        ...state,
        companyResponse: action.payload,
        spinner: true,
      };
    case types.COMPANY_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.COMPANY_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.COMPANY_RESPONSE:
      return {
        ...state,
        companyResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.COMPANY_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { companyReducer };
