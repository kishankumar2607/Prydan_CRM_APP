import * as loginAction from "./loginAction";
import * as signUpAction from "./signUpAction";
import * as forgotPasswordActions from "./forgotPasswordActions";
import * as verifyOtpAction from "./verifyOtpAction";
import * as setPasswordAction from "./setPasswordAction";
import * as personAction from "./personAction";
import * as allPersonAction from "./allPersonAction";
import * as personDetailsAction from "./personDetailsAction";
import * as personSearchAction from "./personSearchAction";
import * as personClientAction from "./personClientAction";
import * as personVendorAction from "./personVendorAction";
import * as staticAction from "./staticAction";
import * as companyAction from "./companyAction";
import * as allCompanyAction from "./allCompanyAction";
import * as companyDetailsAction from "./companyDetailsAction";
import * as companySearchAction from "./companySearchAction";
import * as userDetailsAction from "./userDetailsAction";
import * as positionAction from "./positionAction";
import * as allPositionAction from "./allPositionAction";
import * as positionSearchAction from "./positionSearchAction";

const ActionCreators = {
  ...loginAction,
  ...signUpAction,
  ...forgotPasswordActions,
  ...verifyOtpAction,
  ...setPasswordAction,
  ...personAction,
  ...allPersonAction,
  ...personDetailsAction,
  ...personSearchAction,
  ...personClientAction,
  ...personVendorAction,
  ...staticAction,
  ...companyAction,
  ...allCompanyAction,
  ...companyDetailsAction,
  ...companySearchAction,
  ...userDetailsAction,
  ...positionAction,
  ...allPositionAction,
  ...positionSearchAction,
};

export default ActionCreators;
