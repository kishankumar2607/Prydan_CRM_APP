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
		// backgroundColor: colors.blue,
	},
	topView: {
		flex: 1,
		margin: moderateScale(30),
		marginTop: moderateScale(40),
	},
	logo: {
		width: moderateScale(134),
		height: moderateScale(80),
		resizeMode: "contain",
		alignSelf: "center",
	},
	heading: {
		fontSize: scale(22),
		// marginVertical: moderateVerticalScale(25),
		marginTop: moderateScale(25),
		color: colors.black,
		textAlign: "center",
		fontFamily: "Roboto-Bold",
		// backgroundColor: colors.blue,
	},
	smallText: {
		fontSize: scale(16),
		marginVertical: moderateVerticalScale(20),
		marginHorizontal: moderateScale(-20),
		color: colors.gray,
		letterSpacing: scale(0.8),
		fontFamily: "Roboto-SemiBold",
		// backgroundColor: "blue",
	},
	backText: {
		color: colors.gray,
		marginVertical: moderateVerticalScale(50),
		fontSize: scale(16),
		textAlign: "center",
		fontFamily: "Roboto-Bold",
		// flex: 0.2,
	},
	imageView: {
		flexDirection: "row",
		alignSelf: "center",
		// backgroundColor: "green",
		top: moderateScale(90),
		// marginVertical: 55,
		// backgroundColor: colors.blue,
	},
	text1: {
		bottom: moderateScale(2),
		justifyContent: "space-between",
	},
	text: {
		fontSize: scale(16),
		color: colors.gray,
		fontFamily: "Roboto-Medium",
	},
	textView: {
		// marginVertical: moderateVerticalScale(10),
	},
	link: {
		color: colors.Amber,
		fontSize: scale(16),
		letterSpacing: scale(0.2),
		alignContent: "center",
		textAlign: "center",
		top: scale(90),
		fontFamily: "Roboto-Medium",
	},
	iconView: {
		// marginVertical: 10,
	},
});
