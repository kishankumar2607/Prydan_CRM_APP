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

  topView: {
    flex: 1,

    margin: 10,
  },
  mainView: {
    backgroundColor: colors.Peach,
    borderColor: colors.Peach,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    // marginVertical: 20,
  },
  BoxView: {
    flexDirection: "row",
  },
  menuView: {
    // flex: 1,
    flexDirection: "row",

    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    top: 10,
    marginHorizontal: 10,
  },
  titleView: {
    marginVertical: 5,
    alignItems: "center",
  },
  headerTextDash: {
    fontWeight: "400",
    marginVertical: 20,
    color: colors.black,
    fontSize: responsiveFontSize(3),
  },
  greetingText: {
    color: colors.gray,
    fontSize: responsiveFontSize(1.8),
  },
  headerText: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  smallText: {
    color: colors.gray,
    fontSize: responsiveFontSize(1.8),
    marginHorizontal: 50,
  },
  smallText1: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  mainHeadingText: {
    marginHorizontal: 15,
    marginVertical: 25,
  },
  textHeading: {
    fontSize: responsiveFontSize(2),
    marginVertical: 5,
  },
  textView: {
    marginRight: 20,
    color: colors.gray,
    fontSize: responsiveFontSize(1.8),
  },
  icon: {
    alignSelf: "flex-end",
    marginVertical: 30,
    marginHorizontal: 20,
    flex: 1,
  },
});
