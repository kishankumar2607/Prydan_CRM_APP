import React, { FC } from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../constants";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
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
    borderColor: colors.Amber,
    height: responsiveHeight(6.5),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
});
