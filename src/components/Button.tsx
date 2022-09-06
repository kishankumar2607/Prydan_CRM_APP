import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants";
import {
	responsiveHeight,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
import { scale, moderateScale } from "react-native-size-matters";

interface ButtonProps {
	buttonText: string;
	onPress?: () => void;
	color: string;
	width?: number;
	height?: number;
}
const Button: FC<ButtonProps> = ({
	buttonText,
	onPress,
	color,
	width,
	height,
}) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={[styles.text, { color: color, width, height }]}>
				{buttonText}
			</Text>
		</TouchableOpacity>
	);
};
export default Button;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.Amber,
		height: moderateScale(50),
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 15,
		borderRadius: 5,
	},
	text: {
		fontSize: scale(18),
		alignItems: "center",
		justifyContent: "center",
		fontFamily: "Roboto-Bold",
	},
});
