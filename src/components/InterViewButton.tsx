import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants";
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
/**
 * Renders a <InterViewButton /> component
 * @function InterViewButton component
 * @param  props.buttonText {string} - the text in the button
 * @param  props.onPress {object} - the onpress event of the button
 * @param  props.color {object} - the color change of the button
 */

interface InterViewButtonProps {
	buttonText: string;
	onPress?: () => void;
	color: string;
}
const InterViewButton: FC<InterViewButtonProps> = ({
	buttonText,
	onPress,
	color,
}) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={[styles.text, { color: color }]}>{buttonText}</Text>
		</TouchableOpacity>
	);
};
export default InterViewButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.Amber,
		width: moderateScale(154),
		height: moderateScale(57),
		alignItems: "center",
		justifyContent: "center",
		marginVertical: moderateVerticalScale(25),
		borderColor: colors.Peach,
		borderWidth: moderateScale(1),
		borderRadius: moderateScale(5),
	},
	text: {
		fontSize: scale(18),
		alignItems: "center",
		justifyContent: "center",
		fontFamily: "LeagueSpartan-Medium",
	},
});
