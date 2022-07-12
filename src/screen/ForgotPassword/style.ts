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
		fontSize: scale(18),
		// marginVertical: moderateVerticalScale(25),
		marginTop: moderateScale(25),
		fontWeight: "700",
		color: colors.black,
		textAlign: "center",
		fontFamily: "LeagueSpartan-Medium",
		// backgroundColor: colors.blue,
	},
	smallText: {
		fontSize: scale(16),
		marginVertical: moderateVerticalScale(20),
		color: colors.gray,
		letterSpacing: scale(0.8),
		fontFamily: "LeagueSpartan-Medium",
	},
	backText: {
		color: colors.gray,
		marginVertical: moderateVerticalScale(50),
		fontSize: scale(16),
		textAlign: "center",
		fontFamily: "LeagueSpartan-Medium",
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
		fontSize: scale(16),
		color: colors.gray,
		fontWeight: "400",
		fontFamily: "LeagueSpartan-Medium",
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
		fontFamily: "LeagueSpartan-Medium",
	},
	iconView: {
		// marginVertical: 10,
	},
});
