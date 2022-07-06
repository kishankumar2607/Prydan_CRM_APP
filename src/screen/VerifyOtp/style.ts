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
  btnView: {
    marginTop: 30,
  },
  topView: {
    flex: 1,
    margin: 30,
  },
  logo: {
    width: 134,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
  },
  headingText: {
    fontSize: responsiveFontSize(2.5),
    marginVertical: 35,
    fontWeight: "700",
    textAlign: "center",
    color: colors.gray,
    // letterSpacing: 1,
  },
  heading: {
    fontSize: responsiveFontSize(3),
    // marginVertical: 20,
    fontWeight: "700",
    textAlign: "center",
    color: colors.black,
  },
  cellText: {
    color: colors.black,
    flexDirection: "row",
  },
  BoxInput: {
    height: responsiveHeight(10),
    flex: 1,
    width: responsiveWidth(11),
    // margin: 5,
    borderBottomColor: colors.Amber,
    borderBottomWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    color: colors.black,
    fontSize: responsiveFontSize(3),
    marginVertical: 5,
  },
});
