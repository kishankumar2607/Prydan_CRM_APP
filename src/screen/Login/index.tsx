import React, { useState, FC, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
  BackHandler,
  Pressable,
  TextInput,
  StatusBar,
} from "react-native";
import { Input, Button, TextButton, Spinner } from "../../components";
import { colors, I18n } from "../../constants";
import styles from "./style";
import Images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin, onLoginResponse } from "../../redux/actions/loginAction";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";
/**
 * @class Login
 * @description  UI design add for login ,when user forgot password they click on forgot password link for new password,google and linkedin authentication for direct login ,Signup link for those who have not create an account When click on login button it navigate to Today screen
 * @param  {Object} navigation - Use for navigation
 */

const Login: FC = ({ navigation }) => {
  /**

   * @description email {string} - Email for login user.
   * @description password {string} - Password for login user.
   */

  const [email, setEmail] = useState("vanshika11.prydan@gmail.com");
  const [password, setPassword] = useState("123456");
  const [spinner, setSpinner] = useState(false);
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const dispatch = useDispatch();

  const loginResponse = useSelector(
    (state) => state.loginReducer.loginResponse
  );
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    console.log("loginResponse : ", JSON.stringify(loginResponse));

    const updateAfterLogin = async () => {
      if (
        loginResponse &&
        Object.keys(loginResponse).length !== 0 &&
        loginResponse.hasOwnProperty("status")
      ) {
        if (loginResponse?.status === 200) {
          await AsyncStorage.setItem(
            "UserDetails",
            JSON.stringify(loginResponse?.data)
          );
          navigation.navigate("AppNavigator");
          setEmail("");
          setPassword("");
          // Alert.alert("Success", loginResponse.data.message);
          // navigation.navigate("Today");
          var setResponse = {};
          dispatch(onLoginResponse(setResponse));
        } else {
          if (loginResponse.message) {
            Alert.alert("Error", loginResponse.message);
          }
        }
      }
      setSpinner(false);
    };
    updateAfterLogin();
  }, [loginResponse]);

  const validateRequest = () => {
    if (email === "" || !regex.test(email)) {
      Alert.alert("Error", "Invalid email");
      return false;
    } else if (password === "") {
      Alert.alert("Error", "Invalid password");
      return false;
    } else if (password === "" || password.length < 6) {
      Alert.alert("Error", "Password must contain at least 6 characters.");
      return false;
    } else {
      return true;
    }
  };

  const onLoginSubmit = () => {
    if (validateRequest()) {
      NetInfo.addEventListener((state) => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestLogin(email, password));
        } else {
          Alert.alert("Error", "Please check your internet connection.");
        }
      });
    }
  };
  const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState("eye");

    const handlePasswordVisibility = () => {
      if (rightIcon === "eye") {
        setRightIcon("eye-off");
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === "eye-off") {
        setRightIcon("eye");
        setPasswordVisibility(!passwordVisibility);
      }
    };

    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility,
    };
  };
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar />
      {spinner ? (
        <Spinner color={colors.blue} />
      ) : (
        <View style={styles.container}>
          <View style={styles.topView}>
            <View>
              <Image source={Images.appLogo} style={styles.logoImage} />
            </View>
            <View>
              <Text style={styles.HeadingText}>
                {I18n.t("loginPage.labelText")}
              </Text>
            </View>
            <View>
              <Input
                placeholder={I18n.t("loginPage.emailInputPlaceholder")}
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder={I18n.t("loginPage.passwordInputPlaceholder")}
                  placeholderTextColor={colors.gray}
                  secureTextEntry={passwordVisibility}
                  value={password}
                  onChangeText={(e) => setPassword(e)}
                />

                <Pressable
                  onPress={handlePasswordVisibility}
                  // style={{ alignSelf: "flex-end" }}
                >
                  <Feather name={rightIcon} size={22} color={colors.black} />
                </Pressable>
              </View>
            </View>
            <View>
              <TextButton
                text={I18n.t("loginPage.forgotPasswordLabel")}
                onPress={() => navigation.navigate("ForgotPassword")}
              />
            </View>
            <View style={styles.btnView}>
              <Button
                color={colors.white}
                buttonText={I18n.t("buttonText.loginUpButtonText")}
                onPress={() => onLoginSubmit()}
              />
            </View>
            <View style={styles.optionsView}>
              <View style={styles.lineView} />

              <Text style={styles.optionsText}>
                {I18n.t("loginPage.optionsText")}
              </Text>
              <View style={styles.lineView} />
            </View>

            <View style={styles.SignInBtnView}>
              <View>
                <TouchableOpacity>
                  <Image style={styles.googleBtn} source={Images.googleLogo} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    style={styles.linkedinBtn}
                    source={Images.linkedinLogo}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.textView}>
              <Text style={styles.text}>
                {I18n.t("loginPage.createAccountLabel")}
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.link}>
                  {I18n.t("loginPage.createAccountLabel1")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Login;
