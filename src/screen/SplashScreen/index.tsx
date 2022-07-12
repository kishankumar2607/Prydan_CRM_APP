import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";
import Images from "../../utils/Images";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
	const [authLoaded, setAuthLoaded] = useState(false);
	useEffect(() => {
		const firstFuncCall = async () => {
			var isLogIn = await AsyncStorage.getItem("UserDetails");
			console.log("isLogIn", isLogIn);

			const finalUserDetails = JSON.parse(isLogIn);
			if (
				finalUserDetails &&
				finalUserDetails?.access_token &&
				finalUserDetails?.access_token !== "" &&
				finalUserDetails?.access_token !== null &&
				finalUserDetails?.user &&
				finalUserDetails?.user !== "" &&
				finalUserDetails?.user !== null
			) {
				navigation.navigate("AppNavigator");
			} else {
				navigation.navigate("AuthNavigator");
			}
		};
		firstFuncCall();
	}, []);

	return (
		<View style={styles.container}>
			<View>
				<Image
					source={Images.splashLogo}
					style={styles.splashLogoContainer}
				/>
			</View>
			<View style={styles.LogoContainer}>
				<Image
					source={Images.prydanLogo}
					style={{ width: 103, height: 38 }}
				/>
			</View>
		</View>
	);
};

export default SplashScreen;
