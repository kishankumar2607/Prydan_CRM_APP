import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  WelcomeScreen,
  Login,
  SignUp,
  ForgotPassword,
  VerifyOtp,
  SetPassword,
  Google,
  ForgotFinal,
} from "../screen";

const Stack = createStackNavigator();
/**
 * Manage application authentication navigation
 * @class AuthNavigator
 */

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
    <Stack.Screen name="SetPassword" component={SetPassword} />
    <Stack.Screen name="Google" component={Google} />
    <Stack.Screen name="ForgotFinal" component={ForgotFinal} />
  </Stack.Navigator>
);

export default AuthNavigator;
