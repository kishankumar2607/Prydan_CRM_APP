import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { responsiveFontSize } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  LogoContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 200,
  },
  text: {
    color: colors.gray,
    fontWeight: "700",
    fontSize: responsiveFontSize(3),
    opacity: 0.7,
  },
});

export default styles;
