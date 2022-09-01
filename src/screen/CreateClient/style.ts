import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	scale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  safeView: {
		flex: 1,
		backgroundColor: colors.white,
	},
  BoxContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputView: {
    borderColor: colors.Amber,
    width: "99%",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    color: colors.black,
    borderRadius:5,
  },
  inputView1: {
    width: "100%",
    // paddingHorizontal: 10,
    color: colors.black, 
    fontSize: 16, },

    placeholderTextColor: {
    color: colors.black,
   
  },
  topView: {
		flex: 1,
		margin: moderateScale(30),
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
  labelText: {
    paddingHorizontal: 10,
    fontSize: 17,
  },
  radioButton: {
    margin: 20,
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
  selectedTextStyle: {
    fontSize: 16,
    // color: colors.black,
  },
  dropdown: {
    margin:7,
        height: 35,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
});
