import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	scale,
} from "react-native-size-matters";

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
    flex: 0.5,
  },
  headerTextButton: {
    color: colors.green,
    fontSize: 20,
  },
  inputView: {
    borderColor: colors.Amber,
    width: "90%",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    color: colors.black,
    borderRadius:5,
    },

    titleViewText: {
      flex: 0.2,
    borderRadius:5,
    alignItems: "center",
  },
  inputView1: {
  width: "95%",
  paddingHorizontal: 10,
   color: colors.black,  },
  
  placeholderStyle: {
    fontSize: scale(14),
    color: colors.gray,
  },
  dateView: {
    borderColor: colors.Amber,
    width: "90%",
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius:5,
  },
  selectedTextStyle: {
    fontSize: 16,
  },


  // -----------

  dropdown: {
 margin:7,
    height: 35,
    
    // borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  // placeholderStyle: {
  //   fontSize: 16,
  // },
  
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
 
  
});
