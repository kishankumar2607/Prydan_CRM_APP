import React, { FC, useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, StyleSheet } from "react-native";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "react-native-google-signin";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components";
import { colors } from "../../constants";

const Google: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken } = await GoogleSignin.signIn();
      setLoggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert("Cancel");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert("Signin in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert("PLAY_SERVICES_NOT_AVAILABLE");
      } else {
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      // scopes: ["email"],
      webClientId:
        "424142339279-aeajfl4cl26iobq8u5mhhou0rfn5eihm.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
      setUserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {/* <Header /> */}

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              {/* <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
              /> */}
            </View>
            <View style={styles.buttonContainer}>
              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && (
                <Button
                  onPress={signOut}
                  buttonText="LogOut"
                  color="red"
                ></Button>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Google;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: colors.black,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: colors.black,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});
