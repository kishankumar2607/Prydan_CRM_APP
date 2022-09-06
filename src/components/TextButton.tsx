import React, { FC } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { colors } from "../constants";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";
/**
 * Renders a <TextButton /> component
 * @function Button TextButton component
 * @param  props.text {string} - the text in the button
 * @param  props.onPress {object} - the onpress event of the button
 */

interface TextButtonProps {
	text: string;
	onPress?: () => void;
}
const TextButton: FC<TextButtonProps> = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		color: colors.Blueberry,
		fontSize: scale(16),
		fontFamily: "Roboto-Medium",
	},
});

export default TextButton;
