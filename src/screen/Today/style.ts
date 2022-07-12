import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
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

	topView: {
		flex: 1,

		margin: moderateScale(10),
	},
	mainView: {
		backgroundColor: colors.Peach,
		borderColor: colors.Peach,
		borderWidth: moderateScale(1),
		borderRadius: moderateScale(5),
		padding: moderateScale(5),
		// marginVertical: 20,
	},
	BoxView: {
		flexDirection: "row",
		// backgroundColor: colors.blue,
		// flex: 1,
	},
	menuView: {
		// flex: 1,
		flexDirection: "row",

		paddingHorizontal: moderateScale(10),
		justifyContent: "center",
		alignItems: "center",
	},
	imageView: {
		top: moderateScale(12),
		marginHorizontal: moderateScale(10),
		// backgroundColor: colors.blue,
	},
	titleView: {
		marginVertical: moderateVerticalScale(5),
		alignItems: "center",
	},
	headerTextDash: {
		// fontWeight: "400",
		marginTop: moderateScale(-2),
		marginVertical: moderateVerticalScale(12),
		color: colors.black,
		fontSize: scale(24),
		fontFamily: "LeagueSpartan-SemiBold",
	},
	greetingText: {
		color: colors.gray,
		fontSize: scale(16),
		fontFamily: "LeagueSpartan-Medium",
	},
	headerText: {
		color: colors.black,
		fontSize: scale(18),
		paddingVertical: moderateVerticalScale(5),
		marginHorizontal: moderateScale(5),
		fontFamily: "LeagueSpartan-SemiBold",
	},
	smallText: {
		color: colors.gray,
		fontSize: scale(16),
		marginHorizontal: moderateScale(50),
		fontFamily: "LeagueSpartan-Medium",
	},
	smallText1: {
		alignItems: "center",
		justifyContent: "center",
	},
	iconView: {
		alignItems: "center",
		justifyContent: "center",
		marginVertical: moderateVerticalScale(50),
		// backgroundColor: colors.blue,
	},
	mainHeadingText: {
		marginHorizontal: moderateScale(5),
		marginVertical: moderateVerticalScale(25),
		// backgroundColor: colors.blue,
		flex: 1,
	},
	textHeading: {
		fontSize: scale(16),
		marginVertical: moderateVerticalScale(4),
		fontFamily: "LeagueSpartan-Medium",
	},
	textView: {
		marginRight: moderateScale(20),
		color: colors.gray,
		fontSize: scale(16),
		fontFamily: "LeagueSpartan-Medium",
		// backgroundColor: colors.blue,
	},
	icon: {
		alignSelf: "flex-end",
		marginTop: moderateScale(-20),
		// flex: 1,
		// backgroundColor: colors.blue,
	},
});
