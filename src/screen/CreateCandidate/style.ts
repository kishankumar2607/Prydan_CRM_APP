import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  BoxContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputView: {
    borderColor: colors.silverChalice,
    width: "90%",
    height: 60,
    marginVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    color: colors.black,
  },
  placeholderTextColor: {
    color: colors.black,
  },

  textView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    color: colors.black,
    letterSpacing: 0.2,
  },
  link: {
    color: colors.green,
    fontSize: 15,
    letterSpacing: 0.2,
  },

  label: {
    position: "absolute",
    // backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 15,
    color: colors.gray,
    paddingVertical: 52,
    paddingHorizontal: 5,
  },

  labelText: {
    paddingHorizontal: 10,
    fontSize: 17,
  },
  radioButton: {
    margin: 20,
  },
});
