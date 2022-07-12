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
	BoxContainer: {
		flex: 1,
		alignItems: "center",
	},
	HeadingText: {
		// fontWeight: "bold",
		textAlign: "center",
		fontSize: scale(24),
		marginVertical: moderateVerticalScale(30),
		fontFamily: "LeagueSpartan-SemiBold",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: moderateScale(1),
		borderColor: colors.Amber,
		paddingHorizontal: moderateScale(13),
		borderRadius: moderateScale(5),
	},
	inputContainer1: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: moderateScale(1),
		borderColor: colors.Amber,
		paddingHorizontal: moderateScale(13),
		borderRadius: moderateScale(5),
		marginVertical: moderateVerticalScale(20),
	},
	inputField: {
		flex: 1,
		fontSize: scale(16),
		width: moderateScale(68),
		height: moderateScale(45),
		color: colors.black,
		fontFamily: "LeagueSpartan-Medium",
		// backgroundColor: colors.blue,
	},
	// text: {
	// 	fontSize: scale(16),
	// 	marginBottom: moderateScale(14),
	// 	fontFamily: "LeagueSpartan-Medium",
	// 	backgroundColor: colors.blue,
	// },
	criteriaAreaView: {
		flexDirection: "row",
		paddingVertical: moderateVerticalScale(2),
		marginHorizontal: moderateScale(2),
	},
	criteriaText: {
		color: colors.taupeGray,
		fontSize: scale(14),
		paddingHorizontal: moderateScale(2),
		marginHorizontal: moderateScale(2),
		marginBottom: moderateScale(2),
		fontFamily: "LeagueSpartan-Medium",
	},
	imageCheck: {
		color: colors.green,
	},
	imageClose: {
		color: colors.Amber,
	},
});
