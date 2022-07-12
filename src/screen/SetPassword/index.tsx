import React, { FC, useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
  Pressable,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Button, Input, Spinner } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import Images from "../../utils/Images";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import {
  requestSetPassword,
  onSetPasswordResponse,
} from "../../redux/actions/setPasswordAction";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import imageCheck from "../../assets/Images/icon-check.png";
import imageClose from "../../assets/Images/icon-close.png";
/**
 * @class SetPassword
 * @param  {Object} navigation - Use for navigation
 * @description OTP sent to Mail user ID add, when user add OTP and click on verify OTP and OTP match then user can set new password with criteria that given ,when critearia match user can click on submit button
 **/

const SetPassword: FC = ({ route, navigation }) => {
  /**
   * @description value {string} - value for login user.
   */
  const { email } = route.params;
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spinner, setSpinner] = useState(false);

  const [validateInput, setValidateInput] = useState({
    Lowercase: false,
    Uppercase: false,
    number: false,
    length: false,
  });

  const secureText = (newPassword: string) => {
    const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/);
    const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/);
    const regexNumber = new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    );

    const length = newPassword.length >= 8;

    setValidateInput({
      Lowercase: regexLowercase.test(newPassword),
      Uppercase: regexUppercase.test(newPassword),
      number: regexNumber.test(newPassword),
      length,
    });
  };

  const secureText1 = (confirmPassword: string) => {
    const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/);
    const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/);
    const regexNumber = new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    );

    const length = confirmPassword.length >= 8;

    setValidateInput({
      Lowercase: regexLowercase.test(confirmPassword),
      Uppercase: regexUppercase.test(confirmPassword),
      number: regexNumber.test(confirmPassword),
      length,
    });
  };

  const dispatch = useDispatch();

  const setPasswordResponse = useSelector(
    (state) => state.setPasswordReducer.setPasswordResponse
  );

  useEffect(() => {
    console.log("setPasswordResponse : ", JSON.stringify(setPasswordResponse));
    const updatePasswordReset = async () => {
      if (
        setPasswordResponse &&
        Object.keys(setPasswordResponse).length !== 0 &&
        setPasswordResponse.hasOwnProperty("status")
      ) {
        if (setPasswordResponse?.status === 200) {
          Alert.alert("Success", setPasswordResponse.data.message);
          navigation.navigate("Login");
          var setResponse = {};
          dispatch(onSetPasswordResponse(setResponse));
        } else {
          if (setPasswordResponse.message) {
            Alert.alert("Error", setPasswordResponse.message);
          }
        }
      }
      setSpinner(false);
    };
    updatePasswordReset();
  }, [setPasswordResponse]);

  const updatePasswordRequest = () => {
    if (newPassword === "" || newPassword.length === 0) {
      Alert.alert("Error", "Invalid new password");
      return false;
    } else if (newPassword !== "" && newPassword.length < 6) {
      Alert.alert("Error", "New password must be at least 6 characters");
      return false;
    } else if (confirmPassword === "" || confirmPassword.length === 0) {
      Alert.alert("Error", "Invalid confrim password");
      return false;
    } else if (confirmPassword !== "" && confirmPassword.length < 6) {
      Alert.alert("Error", "Confirm password must be at least 6 characters");
      return false;
    } else if (confirmPassword !== newPassword) {
      Alert.alert("Error", "Password does not match");
      return false;
    } else {
      return true;
    }
  };
  const onPasswordResetSubmit = () => {
    if (updatePasswordRequest()) {
      NetInfo.addEventListener((state) => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestSetPassword(newPassword, email));
        } else {
          Alert.alert("Error", "Please check your internet connection.");
        }
      });
    }
  };

  const useToggleNewPasswordVisibility = () => {
    const [newPasswordVisibility, setNewPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState("eye");

    const handleNewPasswordVisibility = () => {
      if (rightIcon === "eye") {
        setRightIcon("eye-off");
        setNewPasswordVisibility(!newPasswordVisibility);
      } else if (rightIcon === "eye-off") {
        setRightIcon("eye");
        setNewPasswordVisibility(!newPasswordVisibility);
      }
    };

    return {
      newPasswordVisibility,
      rightIcon,
      handleNewPasswordVisibility,
    };
  };
  const { newPasswordVisibility, rightIcon, handleNewPasswordVisibility } =
    useToggleNewPasswordVisibility();

  const useToggleConfirmPasswordVisibility = () => {
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
      useState(true);
    const [leftIcon, setLeftIcon] = useState("eye");

    const handleConfirmPasswordVisibility = () => {
      if (leftIcon === "eye") {
        setLeftIcon("eye-off");
        setConfirmPasswordVisibility(!confirmPasswordVisibility);
      } else if (leftIcon === "eye-off") {
        setLeftIcon("eye");
        setConfirmPasswordVisibility(!confirmPasswordVisibility);
      }
    };

    return {
      confirmPasswordVisibility,
      leftIcon,
      handleConfirmPasswordVisibility,
    };
  };

  const {
    confirmPasswordVisibility,
    leftIcon,
    handleConfirmPasswordVisibility,
  } = useToggleConfirmPasswordVisibility();

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar />
      {spinner ? (
        <Spinner color={colors.blue} />
      ) : (
        <View style={styles.container}>
          <View style={styles.topView}>
            <View>
              <Image source={Images.appLogo} style={styles.logo} />
            </View>
            <View>
              <Text style={styles.HeadingText}>
                {I18n.t("setPassword.titleLabel")}
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  // value={newPassword}
                  placeholder={I18n.t("setPassword.newPasswordPlaceholder")}
                  placeholderTextColor={colors.gray}
                  secureTextEntry={newPasswordVisibility}
                  // onChangeText={(newPassword) => {
                  //   setNewPassword(newPassword);
                  // }}
                  onChangeText={(newPassword) => {
                    setNewPassword(newPassword);
                    secureText(newPassword);
                  }}
                />

                <Pressable onPress={handleNewPasswordVisibility}>
                  <Feather name={rightIcon} size={22} color={colors.black} />
                </Pressable>
              </View>

              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.inputField}
                  value={confirmPassword}
                  placeholder={I18n.t("setPassword.confirmPasswordPlaceholder")}
                  placeholderTextColor={colors.gray}
                  secureTextEntry={confirmPasswordVisibility}
                  onChangeText={(confirmPassword) => {
                    setConfirmPassword(confirmPassword);
                    secureText(confirmPassword);
                  }}
                />

                <Pressable onPress={handleConfirmPasswordVisibility}>
                  <Feather name={leftIcon} size={22} color={colors.black} />
                </Pressable>
              </View>

              <View>
                <View style={styles.criteriaAreaView}>
                  <View style={styles.criteriaText}>
                    <Image
                      source={validateInput.length ? imageCheck : imageClose}
                    />
                  </View>
                  <Text style={styles.criteriaText}>
                    {I18n.t("setPassword.smallText")}
                  </Text>
                </View>
                <View style={styles.criteriaAreaView}>
                  <View style={styles.criteriaText}>
                    <Image
                      source={validateInput.Lowercase ? imageCheck : imageClose}
                    />
                  </View>
                  <Text style={styles.criteriaText}>
                    {I18n.t("setPassword.smallText1")}
                  </Text>
                </View>
                <View style={styles.criteriaAreaView}>
                  <View style={styles.criteriaText}>
                    <Image
                      source={validateInput.Uppercase ? imageCheck : imageClose}
                    />
                  </View>
                  <Text style={styles.criteriaText}>
                    {I18n.t("setPassword.smallText2")}
                  </Text>
                </View>
                <View style={styles.criteriaAreaView}>
                  <View style={styles.criteriaText}>
                    <Image
                      source={validateInput.number ? imageCheck : imageClose}
                    />
                  </View>
                  <Text style={styles.criteriaText}>
                    {I18n.t("setPassword.smallText3")}
                  </Text>
                </View>
              </View>

              <Button
                color={colors.white}
                buttonText={I18n.t("buttonText.SubmitButton")}
                // onPress={setCategoryIndex}
                onPress={() => onPasswordResetSubmit()}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default SetPassword;
