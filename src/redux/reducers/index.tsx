import { loginReducer } from "./loginReducer";
import { signUpReducer } from "./signUpReducers";
import { verifyOtpReducer } from "./verifyOtpReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { setPasswordReducer } from "./setPasswordReducer";
import { personReducer } from "./personReducer";
import { allPersonReducer } from "./allPersonReducer";
import { personDetailsReducer } from "./personDetailsReducer";
import { personSearchReducer } from "./personSearchReducer";
import { personClientReducer } from "./personClientReducer";
import { personVendorReducer } from "./personVendorReducer";
import { staticReducer } from "./staticReducer";
import { companyReducer } from "./companyReducer";
import { allCompanyReducer } from "./allCompanyReducer";
import { companyDetailsReducer } from "./companyDetailsReducer";
import { companySearchReducer } from "./companySearchReducer";
import { userDetailsReducer } from "./userDetailsReducer";
import { positionReducer } from "./positionReducer";
import { allPositionReducer } from "./allPositionReducer";
import { positionDetailsReducer } from "./positionDetailsReducer";
import { positionSearchReducer } from "./positionSearchReducer";

const rootReducer = {
  loginReducer,
  signUpReducer,
  verifyOtpReducer,
  forgotPasswordReducer,
  setPasswordReducer,
  personReducer,
  allPersonReducer,
  personDetailsReducer,
  personSearchReducer,
  personClientReducer,
  personVendorReducer,
  staticReducer,
  companyReducer,
  allCompanyReducer,
  companyDetailsReducer,
  companySearchReducer,
  userDetailsReducer,
  positionReducer,
  allPositionReducer,
  positionDetailsReducer,
  positionSearchReducer,
};

export default rootReducer;
