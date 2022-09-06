import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
/**
 * Renders a <LoginButton /> component
 * @function LoginButton component
 * @param  props.buttonText {string} - the text in the button
 * @param  props.onPress {object} - the onpress event of the button
 * @param  props.color {object} - the color change of the button
 */

interface LoginButtonProps {
	buttonText: string;
	onPress?: () => void;
	color?: string;
}
const LoginButton: FC<LoginButtonProps> = ({ buttonText, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={styles.text}>{buttonText}</Text>
		</TouchableOpacity>
	);
};
export default LoginButton;

const styles = StyleSheet.create({
	button: {
		borderColor: colors.Amber,
		borderWidth: 1,
		width: responsiveWidth(40),
		height: responsiveHeight(5.1),
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 20,
		borderRadius: 5,
	},
	text: {
		fontSize: responsiveFontSize(2.2),
		color: colors.YankeesBlue,
		fontFamily: "Roboto-Bold",
	},
});
