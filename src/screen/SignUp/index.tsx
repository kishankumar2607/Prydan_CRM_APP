import React, { useState, FC, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  BackHandler,
  Alert,
  Linking,
  StatusBar,
} from "react-native";
import styles from "./style";
import { Input, Button, Spinner, SmallInput } from "../../components";
import { colors, I18n } from "../../constants";
import Images from "../../utils/Images";
import NetInfo from "@react-native-community/netinfo";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSignUp,
  onSignUpResponse,
} from "../../redux/actions/signUpAction";

const BottomLine = () => <View style={styles.bottomLineView} />;

/**
 * @class SignUp
 * @param  {Object} navigation - Use for navigation
 * @description UI add design for create account when click on next button they navigate to main dashboard today screen,if user click on googlelogin button or linkedin button user directly login to application, signin link for those who have already account
 */
const SignUp: FC = ({ navigation }) => {
  /**
   * @description dispatch {object} - Dispatch Action
   */
  const dispatch = useDispatch();

  /**
  /**
   * @description firstName {string} - firstName for login user.
   * @description lastName {string} - lastName for login user.
   * @description email {string} - email for login user.
   */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);
  const login_with = "email";

  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const signUpResponse = useSelector(
    (state) => state.signUpReducer.signUpResponse
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
    console.log("signUpResponse : ", JSON.stringify(signUpResponse));
    const updateSignUp = async () => {
      if (
        signUpResponse &&
        Object.keys(signUpResponse).length !== 0 &&
        signUpResponse.hasOwnProperty("status")
      ) {
        if (signUpResponse.status === 200) {
          Alert.alert("Success", signUpResponse.data.message);
          navigation.navigate("VerifyOtp", { email: email });
          var setResponse = {};
          dispatch(onSignUpResponse(setResponse));
        } else {
          if (signUpResponse.message) {
            Alert.alert("Error", signUpResponse.message);
          } else {
            Alert.alert("Error", "Something went wrong. Please try again");
          }
        }
      }
      setSpinner(false);
    };
    updateSignUp();
  }, [signUpResponse]);

  const validateRequest = () => {
    if (firstName === "") {
      Alert.alert("Error", "Invalid firstName");
      return false;
    } else if (lastName === "") {
      Alert.alert("Error", "Invalid lastName");
      return false;
    } else if (email === "" || !regex.test(email)) {
      Alert.alert("Error", "Invalid email");
      return false;
    } else {
      return true;
    }
  };

  const onSignUpSubmit = () => {
    if (validateRequest()) {
      NetInfo.addEventListener((state) => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestSignUp(firstName, lastName, email, login_with));
        } else {
          Alert.alert("Please check your internet connection");
        }
      });
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
              <Image source={Images.appLogo} style={styles.logoImage} />
            </View>
            <View>
              <Text style={styles.HeadingText}>
                {I18n.t("registerPage.labelText")}
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <View style={{ flex: 1, justifyContent: "space-between" }}>
                <SmallInput
                  placeholder={I18n.t("registerPage.firstNameInputPlaceholder")}
                  value={firstName}
                  onChangeText={setFirstName}
                  secureTextEntry={undefined}
                />
              </View>
              <View style={{}}>
                <SmallInput
                  placeholder={I18n.t("registerPage.lastNameInputPlaceholder")}
                  value={lastName}
                  onChangeText={setLastName}
                  secureTextEntry={undefined}
                />
              </View>
            </View>
            <View>
              <Input
                placeholder={I18n.t("registerPage.emailInputPlaceholder")}
                value={email}
                onChangeText={(e) => {
                  setEmail(e.trim());
                }}
                secureTextEntry={undefined}
              />
            </View>
            <Button
              color={colors.white}
              buttonText={I18n.t("buttonText.signUpButtonText")}
              onPress={() => onSignUpSubmit()}
            />
            <View style={styles.optionsView}>
              <View style={styles.lineView} />
              <Text style={styles.optionsText}>
                {I18n.t("registerPage.optionsText")}
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

            <View style={styles.viewText}>
              <Text style={styles.text1}>
                {I18n.t("registerPage.conditionsText")}

                <Text style={styles.mainText}>
                  {" "}
                  {I18n.t("registerPage.conditions")}
                </Text>
              </Text>
            </View>
            <View>
              <BottomLine />
            </View>

            <View>
              <Text style={styles.text2}>
                {I18n.t("registerPage.informationText")}
              </Text>
              <View style={styles.boxTextView}>
                <Text style={styles.text3}>
                  {I18n.t("registerPage.createAccountLabel")}
                </Text>

                <TouchableOpacity>
                  <Text
                    style={styles.link}
                    onPress={() => navigation.navigate("Login")}
                  >
                    {I18n.t("registerPage.createAccountLabel1")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default SignUp;
