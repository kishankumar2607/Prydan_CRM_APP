import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";

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
	btnView: {
		marginTop: moderateVerticalScale(30),
	},
	topView: {
		flex: 1,
		margin: moderateScale(30),
	},
	logo: {
		width: moderateScale(134),
		height: moderateScale(80),
		resizeMode: "contain",
		alignSelf: "center",
	},
	headingText: {
		fontSize: scale(20),
		marginVertical: moderateVerticalScale(35),
		fontWeight: "700",
		textAlign: "center",
		color: colors.gray,
		fontFamily: "Roboto-Medium",
		// letterSpacing: 1,
	},
	heading: {
		fontSize: scale(18),
		// marginVertical: 20,
		fontWeight: "700",
		textAlign: "center",
		color: colors.black,
		fontFamily: "Roboto-Medium",
	},
	cellText: {
		color: colors.black,
		flexDirection: "row",
	},
	BoxInput: {
		height: scale(60),
		flex: 1,
		width: scale(20),
		// margin: 5,
		borderBottomColor: colors.Amber,
		borderBottomWidth: moderateScale(1),
		borderRadius: moderateScale(5),
		textAlign: "center",
		color: colors.black,
		fontSize: scale(20),
		marginVertical: moderateVerticalScale(5),
		fontFamily: "Roboto-Bold",
	},
});
