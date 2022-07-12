import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, font } from "../constants";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
/**
 * Renders a <SignUpButton /> component
 * @function SignUpButton component
 * @param  props.buttonText {string} - the text in the button
 * @param  props.onPress {object} - the onpress event of the button
 * @param  props.color {object} - the color change of the button
 */

interface SignUpButtonProps {
	buttonText: string;
	onPress?: () => void;
}
const SignUpButton: FC<SignUpButtonProps> = ({ buttonText, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={styles.text}>{buttonText}</Text>
		</TouchableOpacity>
	);
};
export default SignUpButton;

const styles = StyleSheet.create({
	button: {
		borderColor: colors.Amber,
		borderWidth: 1,
		width: responsiveWidth(40),
		height: responsiveHeight(5.1),
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 20,
		backgroundColor: colors.Amber,
		borderRadius: 5,
	},
	text: {
		fontSize: responsiveFontSize(2.2),
		color: colors.white,
		fontFamily: "LeagueSpartan-Medium",
	},
});
