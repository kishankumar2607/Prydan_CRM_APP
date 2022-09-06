import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: "center",
	},
	BoxContainer: {
		flex: 1,
		alignItems: "center",
	},
	logo: {
		marginVertical: moderateScale(25),
		alignItems: "center",
	},

	heading: {
		fontSize: scale(20),
		fontFamily: "Roboto-Medium",
		color: colors.green,
		marginVertical: moderateScale(25),
	},
	smallText: {
		fontSize: scale(14),
		fontFamily: "Roboto-Medium",
		marginHorizontal: moderateScale(16),
		marginVertical: moderateScale(25),
		color: colors.taupeGray,
	},
	helpText: {
		color: colors.Cinnabar,
		fontSize: scale(16),
		fontFamily: "Roboto-Medium",
		marginVertical: moderateScale(10),
	},
	backText: {
		color: colors.black,
		fontSize: scale(16),
		fontFamily: "Roboto-Regular",
	},
	text: {
		fontSize: scale(16),
		fontFamily: "Roboto-Medium",
		color: colors.darkLiver,
		marginVertical: moderateVerticalScale(25),
		textAlign: "center",
		alignContent: "center",
		marginHorizontal: moderateScale(50),
	},
	link: {
		fontSize: scale(16),
		alignContent: "center",
		textAlign: "center",
		color: colors.Amber,
	},
	buttonStyle: {
		alignContent: "center",
		justifyContent: "center",
		// backgroundColor: colors.green,
	},
});
