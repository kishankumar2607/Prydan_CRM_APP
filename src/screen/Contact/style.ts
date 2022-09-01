import { StyleSheet } from "react-native";
import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  SearchView: {
    borderRadius: 25,
    justifyContent: "center",
    marginHorizontal: 20,
    // marginVertical: 20,
    backgroundColor: colors.GhostWhite,
    overflow: "hidden",
  },
  placeholderStyle: {
    fontSize: 15,
    color: colors.black,
  },
  dropdown: {
    backgroundColor: colors.TeaGreen,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginVertical: 20,
    width: 150,
    borderColor: colors.FernGreen,
    borderWidth: 1,
    marginHorizontal: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: 28,
  },


  tabStyle: {},
  scrollStyle: {
    backgroundColor: 'white',
    paddingLeft: 65,
    paddingRight: 65,
    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'red',
    borderRadius: 3,
    width: 15,
  },
});

export default styles;
