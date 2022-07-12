import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";
export default StyleSheet.create({
	safeContainer: {
		flex: 1,
		backgroundColor: colors.white,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		// backgroundColor: colors.white,
	},
	logoImage: {
		width: moderateScale(134),
		height: moderateScale(80),
		resizeMode: "contain",
		alignSelf: "center",
	},
	// btnView: {
	// 	marginTop: moderateVerticalScale(30),
	// },
	topView: {
		flex: 1,
		justifyContent: "center",
		margin: moderateScale(30),
	},

	// appLogo: {
	// 	marginVertical: moderateVerticalScale(20),
	// },
	inputContainer: {
		flexDirection: "row",
	},
	HeadingText: {
		fontWeight: "bold",
		color: colors.black,
		fontSize: scale(16),
		marginVertical: moderateVerticalScale(25),
		textAlign: "center",
	},
	optionsView: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: moderateVerticalScale(20),
	},
	lineView: {
		// width: moderateScale(4),
		height: moderateScale(1.5),
		flex: 1,
		opacity: moderateScale(0.6),
		backgroundColor: colors.lightGrey,
	},
	optionsText: {
		width: moderateScale(40),
		fontSize: moderateScale(16),
		textAlign: "center",
		color: colors.lightGrey,
		opacity: moderateScale(0.9),
	},
	SignInBtnView: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: moderateVerticalScale(15),
		// backgroundColor: colors.blue,
		// flex: 1,
	},
	googleBtn: {
		marginHorizontal: moderateScale(20),
	},
	linkedinBtn: {
		marginHorizontal: moderateScale(30),
	},
	mainText: {
		color: colors.Amber,
		marginHorizontal: moderateScale(20),
		fontSize: scale(14),
		letterSpacing: scale(0.6),
		textAlign: "center",
		alignContent: "center",
		textDecorationLine: "underline",
	},
	text1: {
		color: colors.black,
		fontSize: scale(14),
		letterSpacing: scale(0.7),
		textAlign: "center",
		alignContent: "center",
	},
	text2: {
		color: colors.black,
		fontSize: scale(14),
		letterSpacing: scale(0.8),
		textAlign: "center",
		alignContent: "center",
		marginVertical: moderateVerticalScale(2),
	},
	text3: {
		fontSize: scale(14),
		color: colors.gray,
		letterSpacing: scale(0.8),
	},
	boxTextView: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: moderateVerticalScale(20),
	},
	viewText: {
		marginVertical: moderateVerticalScale(5),
	},
	link: {
		color: colors.Amber,
		fontSize: scale(14),
		letterSpacing: scale(0.2),
	},
	bottomLineView: {
		borderBottomColor: colors.gray,
		borderBottomWidth: moderateScale(1),
		marginVertical: moderateVerticalScale(15),
		width: "100%",
		flex: 1,
		// backgroundColor: colors.blue,
	},
});
