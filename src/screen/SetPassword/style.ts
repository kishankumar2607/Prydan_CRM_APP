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
  BoxContainer: {
    flex: 1,
    alignItems: "center",
  },
  HeadingText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: responsiveFontSize(3),
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.Amber,
    paddingHorizontal: 13,
    borderRadius: 5,
  },
  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.Amber,
    paddingHorizontal: 13,
    borderRadius: 5,
    marginVertical: 20,
  },
  inputField: {
    fontSize: responsiveFontSize(1.9),
    width: responsiveWidth(68),
    height: responsiveHeight(6.1),
    color: colors.black,
  },
  text: {
    fontSize: responsiveFontSize(1.9),
    marginBottom: 15,
  },
  criteriaAreaView: {
    flexDirection: "row",
    paddingVertical: 2,
    marginHorizontal: 2,
  },
  criteriaText: {
    color: colors.taupeGray,
    fontSize: responsiveFontSize(1.9),
    paddingHorizontal: 1,
  },
  imageCheck: {
    color: colors.green,
  },
  imageClose: {
    color: colors.Amber,
  },
});
