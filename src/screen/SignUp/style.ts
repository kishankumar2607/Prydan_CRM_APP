import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
export default StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  logoImage: {
    width: 134,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
  },
  btnView: {
    marginTop: 30,
  },
  topView: {
    flex: 1,
    justifyContent: "center",
    margin: 30,
  },

  appLogo: {
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
  },
  HeadingText: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: responsiveFontSize(3),
    marginVertical: 25,
    textAlign: "center",
  },
  optionsView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  lineView: {
    width: responsiveWidth(1),
    height: responsiveHeight(0.1),
    flex: 1,
    opacity: 0.9,
    backgroundColor: colors.lightGrey,
  },
  optionsText: {
    width: responsiveWidth(14),
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    color: colors.lightGrey,
    opacity: 0.9,
  },
  SignInBtnView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  googleBtn: {
    marginHorizontal: 20,
  },
  linkedinBtn: {
    marginHorizontal: 30,
  },
  mainText: {
    color: colors.Amber,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(2),
    letterSpacing: 0.7,
    textAlign: "center",
    alignContent: "center",
    textDecorationLine: "underline",
  },
  text1: {
    color: colors.black,
    fontSize: responsiveFontSize(1.9),
    letterSpacing: 0.9,
    textAlign: "center",
    alignContent: "center",
  },
  text2: {
    color: colors.black,
    fontSize: responsiveFontSize(1.9),
    letterSpacing: 0.9,
    textAlign: "center",
    alignContent: "center",
    marginVertical: 2,
  },
  text3: {
    fontSize: responsiveFontSize(1.9),
    color: colors.gray,
    letterSpacing: 0.7,
  },
  boxTextView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  viewText: {
    marginVertical: 5,
  },
  link: {
    color: colors.Amber,
    fontSize: responsiveFontSize(1.9),
    letterSpacing: 0.7,
  },
  bottomLineView: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    marginVertical: 15,
    width: responsiveWidth(85),
    flex: 1,
  },
});
