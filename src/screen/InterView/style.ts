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
  menuView: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleView: {
    flex: 1,
    alignItems: "center",
  },
  headerTextDash: {
    color: colors.black,
    fontSize: 25,
  },
  headerTextButton: {
    color: colors.green,
    fontSize: 20,
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
  titleViewText: {
    flex: 0.5,
    alignItems: "center",
  },
  placeholderStyle: {
    fontSize: 15,
    color: colors.gray,
    paddingVertical: 52,
    paddingHorizontal: 5,
  },
  dateView: {
    borderColor: colors.silverChalice,
    width: "90%",
    height: 60,
    marginVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
});
