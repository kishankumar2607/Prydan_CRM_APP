import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  BoxContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginVertical: 10,
    alignItems: "center",
  },

  heading: {
    fontSize: 20,
    fontWeight: "400",
    color: colors.green,
    marginVertical: 30,
  },
  smallText: {
    fontSize: 15,
    marginHorizontal: 18,
    marginVertical: 30,
    color: colors.taupeGray,
  },
  helpText: {
    color: colors.Cinnabar,
    fontSize: 20,
    fontWeight: "400",
    marginVertical: 10,
  },
  backText: {
    color: colors.black,
    fontSize: 17,
  },
  text: {
    fontSize: 18,
    color: colors.darkLiver,
    marginVertical: 25,
    textAlign: "center",
    alignContent: "center",
    marginHorizontal: 50,
  },
  link: {
    fontSize: 17,
    alignContent: "center",
    textAlign: "center",
    color: colors.darkLiver,
  },
});
