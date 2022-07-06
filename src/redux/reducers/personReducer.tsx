import * as types from "../actions/types";
import { PersonAction, PersonModel } from "../actions/personAction";

type PersonState = {
  personResponse: PersonModel;
  isLoggedIn: boolean;
};
const initialState = {
  isLoggedIn: false,
  PersonType: "",
  Name: "",
  Candidate_Source: "",
  Vendor_Company: "",
  Salary: "",
  Experience: "",
  PhoneNo: "",
  PhoneType: "",
  CountryCode: "",
  EmailType: "",
  EmailAddress: "",
  Skill: "",
  Photo: "",
  PhotoType: "",
  Document: "",
  personResponse: {} as PersonModel,
  spinner: false,
};

/**
 * Reducer
 * @class personReducer
 */
const personReducer = (
  state: PersonState = initialState,
  action: PersonAction
) => {
  switch (action.type) {
    case types.PERSON_REQUEST:
      return {
        ...state,
        personResponse: action.payload,
        spinner: true,
      };
    case types.PERSON_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.PERSON_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.PERSON_RESPONSE:
      return {
        ...state,
        personResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.PERSON_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
};
export { personReducer };
