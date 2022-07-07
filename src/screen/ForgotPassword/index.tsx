import React, { FC, useEffect, useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	SafeAreaView,
	Alert,
	StatusBar,
	TouchableHighlight,
} from "react-native";
import { Input, Button, Spinner } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
	requestForgotPassword,
	onForgotPasswordResponse,
} from "../../redux/actions/forgotPasswordActions";
import NetInfo from "@react-native-community/netinfo";
import Images from "../../utils/Images";

/**
 * @class  ForgotPassword
 * @param  {Object} navigation - Use for navigation
 * @description User enter email ID and click on reset password button, in that time Help is On The Way message popup if user want to go back to login screen click on back to home link
 */
const ForgotPassword: FC = ({ navigation }) => {
	/**
	 * @description email {string} - email for login user.
	 */
	const [email, setEmail] = useState("");
	const [spinner, setSpinner] = useState(false);

	const dispatch = useDispatch();
	const forgotPasswordResponse = useSelector(
		(state) => state.forgotPasswordReducer.forgotPasswordResponse,
	);

	const regex =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	useEffect(() => {
		console.log(
			"forgotPasswordResponse : ",
			JSON.stringify(forgotPasswordResponse),
		);

		const updateForgotPass = async () => {
			if (
				forgotPasswordResponse &&
				Object.keys(forgotPasswordResponse).length !== 0 &&
				forgotPasswordResponse.hasOwnProperty("status")
			) {
				if (forgotPasswordResponse?.status === 200) {
					Alert.alert("Success", forgotPasswordResponse.data.message);
					navigation.navigate("VerifyOtp", { email: email });
					var setResponse = {};
					dispatch(onForgotPasswordResponse(setResponse));
				} else {
					if (forgotPasswordResponse.message) {
						Alert.alert("Error", forgotPasswordResponse.message);
					}
				}
				setSpinner(false);
			}
		};
		updateForgotPass();
	}, [forgotPasswordResponse]);

	const validateRequest = () => {
		if (email === "" || !regex.test(email)) {
			Alert.alert("Error", "Invalid email");
			return false;
		} else {
			return true;
		}
	};

	const onForgotSubmit = () => {
		if (validateRequest()) {
			NetInfo.addEventListener((state) => {
				if (state.isConnected) {
					setSpinner(true);
					setShouldShow(true);
					dispatch(requestForgotPassword(email));
				} else {
					Alert.alert(
						"Error",
						"Please check your internet connection.",
					);
				}
			});
		} else {
			Alert.alert("Error", "Invalid email");
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
							<Image
								style={styles.logo}
								source={Images.appLogo}
							/>
						</View>
						<View>
							<Text style={styles.heading}>
								{I18n.t("forgotPasswordPage.titleLabel")}
							</Text>
						</View>
						<View>
							<Text style={styles.smallText}>
								{I18n.t("forgotPasswordPage.subTitleLabel")}
							</Text>
						</View>

						<View>
							<Input
								placeholder={I18n.t(
									"forgotPasswordPage.emailInputPlaceholder",
								)}
								value={email}
								onChangeText={(e: {
									trim: () => (
										prevState: undefined,
									) => undefined;
								}) => {
									setEmail(e.trim());
								}}
								secureTextEntry={undefined}
							/>
						</View>
						<Button
							color={colors.white}
							buttonText={I18n.t(
								"buttonText.resetPasswordButtonText",
							)}
							onPress={() => onForgotSubmit()}

							// onPress={() =>
							// 	navigation.navigate("VerifyOtp", {
							// 		email: email,
							// 	})
							// }
						/>
						<View>
							<Text
								style={styles.backText}
								onPress={() => navigation.navigate("Login")}
							>
								{I18n.t("forgotPasswordPage.backBtnText")}
							</Text>
						</View>

						<View style={styles.imageView}>
							<View style={styles.textView}>
								<Image
									source={Images.GroupLogo}
									style={styles.text1}
								/>
							</View>
							<View style={styles.textView}>
								<Text style={styles.text}>
									{I18n.t(
										"forgotPasswordPage.createAccountLabel",
									)}
								</Text>
							</View>
						</View>

						<View>
							<TouchableOpacity>
								<Text style={styles.link}>
									{I18n.t(
										"forgotPasswordPage.createAccountLabel1",
									)}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
};
export default ForgotPassword;
function setShouldShow(arg0: boolean) {
	throw new Error("Function not implemented.");
}
