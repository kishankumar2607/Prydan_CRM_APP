import React, { FC } from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../constants";
import {
	responsiveHeight,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";
/**
 * Renders a <TextInput /> component
 * @function TextInput Input component
 * @param  props.placeholder {string} - Placeholder of text input.
 * @param  props.value {string} - Value of text input.
 * @param  props.onChangeText {string} - Change Text event of text input.
 * @param  props.secureTextEntry {string} - Secure Text Entry for password
 */

interface InputProps {
	placeholder: string;
	value: string;
	onChangeText: () => void;
	secureTextEntry?: boolean;
	readOnly?: boolean;
}

const Input: FC<InputProps> = ({
	placeholder,
	value,
	onChangeText,
	secureTextEntry,
	readOnly,
}) => {
	return (
		<TextInput
			placeholder={placeholder}
			placeholderTextColor={colors.gray}
			style={styles.inputContainer}
			value={value}
			onChangeText={onChangeText}
			secureTextEntry={secureTextEntry}
			autoCapitalize="none"
			editable={!readOnly}
		/>
	);
};

export default Input;
const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: moderateScale(1),
		borderColor: colors.Amber,
		paddingHorizontal: moderateScale(18),
		borderRadius: moderateScale(5),
		marginVertical: moderateVerticalScale(10),
		justifyContent: "center",
		fontSize: scale(16),
		color: colors.black,
		fontFamily: "LeagueSpartan-Medium",
		// backgroundColor: colors.blue,
	},
});
