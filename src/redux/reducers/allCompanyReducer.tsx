import * as types from "../actions/types";
import { allCompanyAction, AllCompanyModel } from "../actions/allCompanyAction";

type allCompanyState = {
  allCompanyResponse: AllCompanyModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  allCompanyResponse: {} as AllCompanyModel,
  spinner: false,
};

/**
 * Reducer
 * @class allCompanyReducer
 */
const allCompanyReducer = (
  state: allCompanyState = initialState,
  action: allCompanyAction
) => {
  switch (action.type) {
    case types.ALL_COMPANY_REQUEST:
      return {
        ...state,
        personResponse: action.payload,
        spinner: true,
      };
    case types.ALL_COMPANY_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.ALL_COMPANY_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.ALL_COMPANY_RESPONSE:
      return {
        ...state,
        personResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.ALL_COMPANY_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { allCompanyReducer };
