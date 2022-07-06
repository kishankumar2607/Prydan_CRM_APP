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
    margin: 30,
  },
  HeadingText: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: responsiveFontSize(3),
    textAlign: "center",
    marginVertical: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.Amber,
    paddingHorizontal: 13,
    borderRadius: 5,
    marginVertical: 10,
  },
  inputField: {
    fontSize: responsiveFontSize(1.9),
    width: responsiveWidth(68),
    height: responsiveHeight(6.1),
    color: colors.black,
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
  },
  googleBtn: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  linkedinBtn: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  text: {
    fontSize: responsiveFontSize(1.9),
    color: colors.gray,
    letterSpacing: 0.2,
  },
  link: {
    color: colors.Amber,
    fontSize: responsiveFontSize(1.9),
    letterSpacing: 0.2,
  },
});
