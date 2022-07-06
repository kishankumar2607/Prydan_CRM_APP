import React, { FC } from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../constants";

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
    width: 161,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    color: colors.black,
  },
});
