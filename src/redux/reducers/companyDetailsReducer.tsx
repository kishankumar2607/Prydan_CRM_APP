import * as types from "../actions/types";
import {
  CompanyDetailsAction,
  CompanyDetailsModel,
} from "../actions/companyDetailsAction";

type companyDetailsState = {
  companyDetailsResponse: CompanyDetailsModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  companyDetailsResponse: {} as CompanyDetailsModel,
  spinner: false,
};

/**
 * Reducer
 * @class companyDetailsReducer
 */
const companyDetailsReducer = (
  state: companyDetailsState = initialState,
  action: CompanyDetailsAction
) => {
  switch (action.type) {
    case types.COMPANY_DETAILS_REQUEST:
      return {
        ...state,
        companyDetailsResponse: action.payload,
        spinner: true,
      };
    case types.COMPANY_DETAILS_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.COMPANY_DETAILS_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.COMPANY_DETAILS_RESPONSE:
      return {
        ...state,
        companyDetailsResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.COMPANY_DETAILS_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { companyDetailsReducer };
