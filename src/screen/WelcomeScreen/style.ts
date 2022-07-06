import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { responsiveFontSize } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  mainView: {
    backgroundColor: colors.white,
    alignItems: "center",
  },
  mainContainerView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logo: {
    marginVertical: 50,
    alignItems: "center",
    flex: 1,
  },
  logoView: {
    marginVertical: 30,
  },

  paragraphStyle: {
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    height: 80,
    width: 144,
  },
  introTextStyle: {
    fontSize: responsiveFontSize(1.8),
    textAlign: "center",
    marginHorizontal: 30,
    letterSpacing: 1,
    lineHeight: 25,
    marginVertical: 15,
    color: colors.black,
  },
  introTitleStyle: {
    fontSize: responsiveFontSize(2.5),
    textAlign: "center",
    color: colors.black,
    marginVertical: 10,
    letterSpacing: 1,
    fontWeight: "700",
  },
  introSmallTextStyle: {
    fontSize: responsiveFontSize(1.8),
    letterSpacing: 1,
    lineHeight: 25,
    marginHorizontal: 30,
    textAlign: "center",
    justifyContent: "center",
    color: colors.black,
    marginVertical: 25,
  },
  buttonView: {
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  containerViewLogin: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containerViewSignUP: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonCircle: {
    width: 30,
    height: 30,
    backgroundColor: colors.buttonBg,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    flex: 1,
  },
  activeView: {
    backgroundColor: colors.Amber,
  },
});

export default styles;
