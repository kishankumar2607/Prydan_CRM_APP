import React, { FC, useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Alert,
  StatusBar,
} from "react-native";
import { Button, Spinner } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import Images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import {
  requestVerifyOtp,
  onVerifyOtpResponse,
} from "../../redux/actions/verifyOtpAction";
/**
 * @class VerifyOtp
 * @param  {Object} navigation - Use for navigation
 * @description OTP sent to Mail user ID add, when user add OTP and click on verify OTP and OTP match then user can set new password with criteria that given ,when critearia match user can click on submit button
 **/

const VerifyOtp: FC = ({ route, navigation }) => {
  /**
   * @description value {string} - value for login user.
   */
  const { email } = route.params;

  const [spinner, setSpinner] = useState(false);
  const [codeOne, setCodeOne] = useState("");
  const [codeTwo, setCodeTwo] = useState("");
  const [codeThree, setCodeThree] = useState("");
  const [codeFour, setCodeFour] = useState("");
  const [codeFive, setCodeFive] = useState("");
  const [codeSix, setCodeSix] = useState("");

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();
  const [otp, setOtp] = useState();
  const dispatch = useDispatch();

  const verifyOtpResponse = useSelector(
    (state) => state.verifyOtpReducer.verifyOtpResponse
  );

  useEffect(() => {
    console.log("verifyOtpResponse : ", JSON.stringify(verifyOtpResponse));
    const updateAfterLogin = async () => {
      if (verifyOtpResponse && verifyOtpResponse.hasOwnProperty("status")) {
        if (verifyOtpResponse.status === 200) {
          navigation.navigate("SetPassword", { email: email });
          var setResponse = {};
          dispatch(onVerifyOtpResponse(setResponse));
        }
      }
      setSpinner(false);
    };
    updateAfterLogin();
  }, [verifyOtpResponse]);

  const validateOTP = () => {
    if (
      codeOne !== "" &&
      codeOne !== null &&
      codeTwo !== "" &&
      codeTwo !== null &&
      codeThree !== "" &&
      codeThree !== null &&
      codeFour !== "" &&
      codeFour !== null &&
      codeFive !== "" &&
      codeFive !== null &&
      codeSix !== "" &&
      codeSix !== null
    ) {
      return true;
    } else {
      return false;
    }
  };

  const verifyOTP = () => {
    if (validateOTP()) {
      const finalOTP =
        codeOne.toString() +
        codeTwo.toString() +
        codeThree.toString() +
        codeFour.toString() +
        codeFive.toString() +
        codeSix.toString();
      setOtp(finalOTP);
      NetInfo.addEventListener((state) => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestVerifyOtp(Number(finalOTP), email));
        } else {
          Alert.alert("Error", "Please check your internet connection.");
        }
      });
    } else {
      Alert.alert("Error", "Please enter OTP");
    }
  };

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
              <Text style={styles.headingText}>
                {I18n.t("verifyOtpPage.headerText")}
              </Text>
              <Text style={styles.heading}>
                {I18n.t("verifyOtpPage.titleLabel")}
              </Text>
              <View style={styles.cellText}>
                <TextInput
                  style={styles.BoxInput}
                  onChangeText={(val) => {
                    setCodeOne(val.replace(/[^0-9]/g, ""));
                    if (val) {
                      ref_input2.current.focus();
                    }
                  }}
                  secureTextEntry={false}
                  maxLength={1}
                  keyboardType="numeric"
                  autoFocus={true}
                  returnKeyType="next"
                  onSubmitEditing={() => ref_input2.current.focus()}
                />
                <TextInput
                  style={styles.BoxInput}
                  onChangeText={(val) => {
                    setCodeTwo(val.replace(/[^0-9]/g, ""));
                    if (val) {
                      ref_input3.current.focus();
                    }
                  }}
                  secureTextEntry={false}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_input3.current.focus()}
                  ref={ref_input2}
                />
                <TextInput
                  style={styles.BoxInput}
                  onChangeText={(val) => {
                    setCodeThree(val.replace(/[^0-9]/g, ""));
                    if (val) {
                      ref_input4.current.focus();
                    }
                  }}
                  secureTextEntry={false}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_input4.current.focus()}
                  ref={ref_input3}
                />
                <TextInput
                  style={styles.BoxInput}
                  onChangeText={(val) => {
                    setCodeFour(val.replace(/[^0-9]/g, ""));
                    if (val) {
                      ref_input5.current.focus();
                    }
                  }}
                  secureTextEntry={false}
                  maxLength={1}
                  returnKeyType="next"
                  keyboardType="numeric"
                  onSubmitEditing={() => ref_input5.current.focus()}
                  ref={ref_input4}
                />
                <TextInput
                  style={styles.BoxInput}
                  onChangeText={(val) => {
                    setCodeFive(val.replace(/[^0-9]/g, ""));
                    if (val) {
                      ref_input6.current.focus();
                    }
                  }}
                  secureTextEntry={false}
                  maxLength={1}
                  keyboardType="numeric"
                  ref={ref_input5}
                />
                <TextInput
                  style={styles.BoxInput}
                  onChangeText={(val) => {
                    setCodeSix(val.replace(/[^0-9]/g, ""));
                  }}
                  secureTextEntry={false}
                  maxLength={1}
                  keyboardType="numeric"
                  ref={ref_input6}
                />
              </View>
              <Button
                color={colors.white}
                buttonText={I18n.t("buttonText.VerifyOtpButton")}
                onPress={() => verifyOTP()}
                // onPress={() =>
                //   navigation.navigate("SetPassword", { email: email })
                // }
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default VerifyOtp;
