import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
/**
 * Renders a <Button /> component
 * @function Button component
 * @param  props.buttonText {string} - the text in the button
 * @param  props.onPress {object} - the onpress event of the button
 * @param  props.color {object} - the color change of the button
 */

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
    height: responsiveHeight(6.5),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: responsiveFontSize(2.6),
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "400",
  },
});
