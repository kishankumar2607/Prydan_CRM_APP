import React, { FC } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

/**
 * Renders a <Spinner /> component
 * @function Spinner component
 
 */
const Spinner: FC = (color) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};
export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
});
