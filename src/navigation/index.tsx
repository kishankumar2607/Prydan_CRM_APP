import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { SplashScreen, WelcomeScreen } from "../screen";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./NavigationService";
import Tab1 from "./Tab";

/**
 * Manage application navigation flow, This function is called when application loads.
 * @class Navigator
 */
const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
