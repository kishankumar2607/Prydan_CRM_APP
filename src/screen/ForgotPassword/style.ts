import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";
import { responsiveFontSize } from "react-native-responsive-dimensions";

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
		fontSize: scale(18),
		// marginVertical: moderateVerticalScale(25),
		marginTop: moderateScale(25),
		fontWeight: "700",
		color: colors.black,
		textAlign: "center",
		// backgroundColor: colors.blue,
	},
	smallText: {
		fontSize: scale(14),
		marginVertical: moderateVerticalScale(20),
		color: colors.gray,
		letterSpacing: scale(0.8),
	},
	backText: {
		color: colors.gray,
		marginVertical: moderateVerticalScale(50),
		fontSize: responsiveFontSize(1.9),
		textAlign: "center",
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
		// flex: 1,
	},
	text: {
		fontSize: scale(14),
		color: colors.gray,
		fontWeight: "400",
	},
	textView: {
		// marginVertical: moderateVerticalScale(10),
	},
	link: {
		color: colors.Amber,
		fontSize: scale(13),
		letterSpacing: scale(0.2),
		alignContent: "center",
		textAlign: "center",
		top: scale(90),
	},
	iconView: {
		// marginVertical: 10,
	},
});
