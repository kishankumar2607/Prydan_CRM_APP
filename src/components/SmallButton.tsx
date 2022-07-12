import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants";

/**
 * Renders a <SmallButton /> component
 * @function SmallButton component
 * @param  props.buttonText {string} - the text in the button
 * @param  props.onPress {object} - the onpress event of the button
 * @param  props.color {object} - the color change of the button
 */

interface SmallButtonProps {
	buttonText: string;
	onPress?: () => void;
	color: string;
}
const SmallButton: FC<SmallButtonProps> = ({ buttonText, onPress, color }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={[styles.text, { color: color }]}>{buttonText}</Text>
		</TouchableOpacity>
	);
};
export default SmallButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.buttonBg,
		width: 140,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 25,
	},
	text: {
		fontSize: 16,
		alignItems: "center",
		justifyContent: "center",
		fontFamily: "LeagueSpartan-Medium",
	},
});
