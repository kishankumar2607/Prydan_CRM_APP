import * as types from "../actions/types";
import {
  companySearchAction,
  CompanySearchModel,
} from "../actions/companySearchAction";

type CompanySearchState = {
  companySearchResponse: CompanySearchModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  companySearchResponse: {} as CompanySearchModel,
  spinner: false,
};

/**
 * Reducer
 * @class companySearchReducer
 */
const companySearchReducer = (
  state: CompanySearchState = initialState,
  action: companySearchAction
) => {
  switch (action.type) {
    case types.COMPANY_SEARCH_REQUEST:
      return {
        ...state,
        companySearchResponse: action.payload,
        spinner: true,
      };
    case types.COMPANY_SEARCH_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.COMPANY_SEARCH_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.COMPANY_SEARCH_RESPONSE:
      return {
        ...state,
        companySearchResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.COMPANY_SEARCH_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { companySearchReducer };
