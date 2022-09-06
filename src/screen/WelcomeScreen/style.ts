import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		alignItems: "center",
		// backgroundColor: colors.white,
		backgroundColor: colors.blue,
	},
	mainView: {
		flex: 1,
		// backgroundColor: colors.white,
		// backgroundColor: colors.blue,
		alignItems: "center",
	},
	mainContainerView: {
		backgroundColor: colors.white,
		flex: 1,
	},
	logo: {
		marginVertical: moderateVerticalScale(25),
		marginBottom: moderateScale(1),
		alignItems: "center",

		// backgroundColor: colors.blue,
		// flex: 1,
	},
	logoView: {
		// flex: 1,
		// marginVertical: moderateVerticalScale(1),
		marginTop: moderateScale(8),
		// backgroundColor: colors.blue,
	},

	// paragraphStyle: {
	// 	textAlign: "center",
	// 	fontSize: scale(1),
	// },
	introImageStyle: {
		height: moderateScale(90),
		width: moderateScale(145),
	},
	introTextStyle: {
		fontSize: scale(14),
		textAlign: "center",
		marginHorizontal: moderateScale(25),
		letterSpacing: scale(0.5),
		lineHeight: moderateScale(18),
		marginVertical: moderateVerticalScale(8),
		color: colors.black,
		// fontFamily: "LeagueSpartan-Medium",
		fontFamily: "Roboto-Bold",
		// backgroundColor: colors.blue,
	},
	introTitleStyle: {
		fontSize: scale(24),
		textAlign: "center",
		color: colors.black,
		marginVertical: moderateVerticalScale(5),
		letterSpacing: scale(0.5),
		// fontFamily: "LeagueSpartan-SemiBold",
		fontFamily: "Roboto-Bold",

		// backgroundColor: colors.blue,
	},
	introSmallTextStyle: {
		fontSize: scale(14),
		letterSpacing: scale(0.5),
		lineHeight: moderateScale(22),
		marginHorizontal: moderateScale(30),
		textAlign: "center",
		justifyContent: "center",
		color: colors.black,
		marginVertical: moderateVerticalScale(8),
		// fontFamily: "LeagueSpartan-Medium",
		fontFamily: "Roboto-Bold",
		// backgroundColor: colors.blue,
	},
	// buttonView: {
	// 	flexDirection: "row",
	// 	backgroundColor: colors.white,
	// },
	containerViewLogin: {
		marginHorizontal: moderateScale(20),
		marginVertical: moderateVerticalScale(10),
	},
	containerViewSignUP: {
		marginHorizontal: moderateScale(20),
		marginVertical: moderateVerticalScale(10),
	},
	buttonCircle: {
		width: moderateScale(30),
		height: moderateScale(30),
		backgroundColor: colors.buttonBg,
		borderRadius: moderateScale(20),
		justifyContent: "center",
		alignItems: "center",
		marginVertical: moderateVerticalScale(5),
		flex: 1,
	},
	activeView: {
		backgroundColor: colors.Amber,
	},
});

export default styles;
