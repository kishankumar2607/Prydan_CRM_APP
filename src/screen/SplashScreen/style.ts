import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: "center",
		justifyContent: "center",
	},
	LogoContainer: {
		alignItems: "center",
		justifyContent: "center",
		top: moderateScale(200),
	},
	splashLogoContainer: {
		height: moderateScale(120),
		width: moderateScale(205),
		// backgroundColor: colors.blue,
		// flex: 1,
	},
	// text: {
	// 	color: colors.gray,
	// 	fontWeight: "700",
	// 	fontSize: scale(3),
	// 	opacity: moderateScale(0.7),
	// },
});

export default styles;
