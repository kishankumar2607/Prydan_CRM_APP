import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
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
  heading: {
    fontSize: responsiveFontSize(3),
    marginVertical: 20,
    fontWeight: "700",
    color: colors.black,
    textAlign: "center",
  },
  smallText: {
    fontSize: responsiveFontSize(2),
    marginVertical: 20,
    color: colors.gray,
    letterSpacing: 0.9,
  },
  backText: {
    color: colors.gray,
    marginVertical: 50,
    fontSize: responsiveFontSize(1.9),
    textAlign: "center",
    // flex: 0.2,
  },
  imageView: {
    flexDirection: "row",
    alignSelf: "center",
    // backgroundColor: "green",
    top: 95,
    // marginVertical: 55,
  },
  text1: {
    bottom: 4,
    flex: 1,
  },
  text: {
    fontSize: responsiveFontSize(1.9),
    color: colors.gray,
    fontWeight: "400",
  },
  textView: {
    marginVertical: 10,
  },
  link: {
    color: colors.Amber,
    fontSize: responsiveFontSize(1.9),
    alignContent: "center",
    textAlign: "center",
    top: 90,
  },
  iconView: {
    // marginVertical: 10,
  },
});
