import React, { FC, useEffect, useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	SafeAreaView,
	Linking,
	Alert,
	StyleSheet,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Input, Button } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import Images from "../../utils/Images";

const url = "http://career.prydan.com";

const ForgotFinal: FC = ({ navigation }) => {
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
					<View style={styles.buttonStyle}>
						<Button
							color={colors.white}
							width={moderateScale(342)}
							buttonText={I18n.t("buttonText.Continue")}
							onPress={() => onForgotSubmit()}
							// onPress={() => navigation.navigate("VerifyOtp")}
						/>
					</View>
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
						<Text style={styles.text}>
							{I18n.t("forgotFinal.smallText3")}
						</Text>
						<TouchableOpacity
							// onPress={() => navigation.navigate("SignUp")}
							onPress={() => Linking.openURL(url)}
						>
							<Text style={styles.link}>
								{/* {I18n.t("forgotFinal.labelText")} */}
								{url}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default ForgotFinal;
function onForgotSubmit(): void {
	throw new Error("Function not implemented.");
}
