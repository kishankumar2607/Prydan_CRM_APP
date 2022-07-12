import React, { FC } from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../constants";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";

/**
 * Renders a <SmallInput /> component
 * @function TextInput Input component
 * @param  props.placeholder {string} - Placeholder of text input.
 * @param  props.value {string} - Value of text input.
 * @param  props.onChangeText {string} - Change Text event of text input.
 * @param  props.secureTextEntry {string} - Secure Text Entry for password
 */

interface SmallInputProps {
	placeholder: string;
	value: string;
	onChangeText: () => void;
	secureTextEntry?: boolean;
	readOnly?: boolean;
}

const SmallInput: FC<SmallInputProps> = ({
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

export default SmallInput;
const styles = StyleSheet.create({
	inputContainer: {
		borderColor: colors.Amber,
		width: moderateScale(150),
		height: moderateScale(50),
		borderRadius: moderateScale(5),
		borderWidth: moderateScale(1),
		paddingHorizontal: moderateScale(16),
		fontSize: scale(16),
		color: colors.black,
		fontFamily: "LeagueSpartan-Medium",
	},
});
