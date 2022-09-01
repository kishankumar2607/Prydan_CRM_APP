import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	scale,
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
		// backgroundColor: colors.blue,
	},
	logoImage: {
		width: moderateScale(140),
		height: moderateScale(80),
		marginTop: moderateVerticalScale(10),
		resizeMode: "contain",
		alignSelf: "center",
		// backgroundColor: colors.blue,
	},
	btnView: {
		marginTop: moderateVerticalScale(30),
	},
	topView: {
		flex: 1,
		margin: moderateScale(30),
	},
	HeadingText: {
		// fontWeight: "bold",
		color: colors.black,
		fontSize: scale(24),
		textAlign: "center",
		marginVertical: moderateVerticalScale(15),
		fontFamily: "LeagueSpartan-SemiBold",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: moderateScale(1),
		borderColor: colors.Amber,
		paddingHorizontal: moderateScale(13),
		borderRadius: moderateScale(5),
		marginVertical: moderateVerticalScale(10),
	},
	inputField: {
		fontSize: scale(14),
		width: moderateScale(70),
		height: moderateScale(45),
		color: colors.black,
		flex: 1,
	},
	optionsView: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: moderateVerticalScale(20),
	},
	lineView: {
		width: moderateScale(50),
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
	ForgetButton: {
		// marginVertical: moderateVerticalScale(20),
		borderColor: colors.blue,
	},
	SignInBtnView: {
		flexDirection: "row",
		justifyContent: "center",
	},
	googleBtn: {
		marginHorizontal: moderateScale(20),
		marginVertical: moderateVerticalScale(10),
	},
	linkedinBtn: {
		marginHorizontal: moderateScale(20),
		marginVertical: moderateVerticalScale(10),
	},
	textView: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: moderateVerticalScale(15),
	},
	text: {
		fontSize: scale(14),
		color: colors.gray,
		letterSpacing: scale(0.2),
	},
	link: {
		color: colors.Amber,
		fontSize: scale(14),
		letterSpacing: scale(0.2),
	},
});
