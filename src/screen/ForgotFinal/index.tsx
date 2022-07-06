import React, { FC, useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { Input, Button } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import Images from "../../utils/Images";

/**
 * @class  ForgotPassword
 * @param  {Object} navigation - Use for navigation
 * @description User enter email ID and click on reset password button, in that time Help is On The Way message popup if user want to go back to login screen click on back to home link
 */
const ForgotFinal: FC = ({ navigation }) => {
  /**
   * @description email {string} - email for login user.
   */

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.BoxContainer}>
          <Image style={styles.logo} source={Images.appLogo} />
          <View>
            <Text style={styles.smallText}>
              {I18n.t("forgotFinal.smallText")}
            </Text>
          </View>
          <View>
            <Text style={styles.heading}>
              {I18n.t("forgotFinal.smallText1")}
            </Text>
          </View>
          <Button
            color={colors.dimGray}
            buttonText={I18n.t("buttonText.Continue")}
            onPress={() => onForgotSubmit()}
            // onPress={() => navigation.navigate("VerifyOtp")}
          />
          <View>
            <Text
              style={styles.backText}
              onPress={() => navigation.navigate("Login")}
            >
              {I18n.t("forgotFinal.orText")}
            </Text>
          </View>
          <Text style={styles.helpText}>
            {I18n.t("forgotFinal.smallText2")}
          </Text>
          <View>
            <Text style={styles.text}>{I18n.t("forgotFinal.smallText3")}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.link}>{I18n.t("forgotFinal.labelText")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ForgotFinal;
