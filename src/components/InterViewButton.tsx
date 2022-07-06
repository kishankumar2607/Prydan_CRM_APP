import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
/**
 * Renders a <InterViewButton /> component
 * @function InterViewButton component
 * @param  props.buttonText {string} - the text in the button
 * @param  props.onPress {object} - the onpress event of the button
 * @param  props.color {object} - the color change of the button
 */

interface InterViewButtonProps {
  buttonText: string;
  onPress?: () => void;
  color: string;
}
const InterViewButton: FC<InterViewButtonProps> = ({
  buttonText,
  onPress,
  color,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={[styles.text, { color: color }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default InterViewButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.Amber,
    width: responsiveWidth(38),
    height: responsiveHeight(6),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
    borderColor: colors.Peach,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontSize: responsiveFontSize(2.2),
    alignItems: "center",
    justifyContent: "center",
  },
});
