import React, { FC } from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../constants";
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from "react-native-size-matters";

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
		paddingHorizontal: moderateScale(15),
		borderRadius: moderateScale(5),
		marginVertical: moderateVerticalScale(10),
		justifyContent: "center",
		fontSize: scale(16),
		color: colors.black,
		fontFamily: "Roboto-Medium",
		// backgroundColor: colors.blue,
	},
});
