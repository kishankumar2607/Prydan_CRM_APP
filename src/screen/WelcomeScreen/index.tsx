import React, { FC, useState } from "react";
import styles from "./style";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Images from "../../utils/Images";
import AppIntroSlider from "react-native-app-intro-slider";
import { LoginButton, SignUpButton } from "../../components";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../constants";

const WelcomeScreen: FC = ({ navigation }) => {
	const RenderNextButton = () => {
		return (
			<>
				<View style={styles.buttonCircle}>
					<AntDesign
						name={"arrowright"}
						size={15}
						color={colors.black}
					/>
				</View>
			</>
		);
	};
	const dotsView = () => {
		return <View style={{ backgroundColor: colors.white, flex: 1 }}></View>;
	};

	const RenderDoneButton = () => {
		return (
			<View style={styles.buttonCircle}>
				<AntDesign name={"check"} size={15} color={colors.black} />
			</View>
		);
	};

	const RenderItem = ({ item }) => {
		return (
			<>
				<View style={styles.mainView}>
					<View style={styles.logo}>
						<Image
							style={styles.introImageStyle}
							source={Images.appLogo}
						/>
					</View>
					<View style={styles.logoView}>
						<Image source={item.image} />
					</View>
					<View style={{ flex: 1 }}>
						<Text style={styles.introTitleStyle}>{item.title}</Text>
						<Text style={styles.introTextStyle}>{item.text}</Text>
						<Text style={styles.introSmallTextStyle}>
							{item.smallText}
						</Text>
					</View>
				</View>
			</>
		);
	};

	return (
		<View style={styles.mainContainerView}>
			<AppIntroSlider
				data={slides}
				activeDotStyle={styles.activeView}
				dotsView={dotsView}
				renderItem={RenderItem}
				renderDoneButton={RenderDoneButton}
				renderNextButton={RenderNextButton}
			/>
			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<View>
					{/* <TouchableOpacity
						onPress={() => navigation.navigate("Login")}
					> */}
					<View style={styles.containerViewLogin}>
						<LoginButton
							buttonText="Log in"
							onPress={() => navigation.navigate("Login")}
						/>
					</View>
					{/* </TouchableOpacity> */}
				</View>
				<View>
					<TouchableOpacity
					// onPress={() => navigation.navigate("SignUp")}
					>
						<View style={styles.containerViewSignUP}>
							<SignUpButton
								buttonText="Sign up"
								onPress={() => navigation.navigate("SignUp")}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default WelcomeScreen;

const slides = [
	{
		key: "s1",
		image: require("../../assets/Images/WelcomeOne.png"),
		title: "Prydan Growth Stack",
		text: "Powerful alone.Even together. Businesses grow  faster when they have a complete Growth Stack for marketing, sales, and CRM from prydan.",
		smallText:
			"Free version of every prydan product. Start now upgrade as you grow.",
	},
	{
		key: "s2",
		image: require("../../assets/Images/WelcomeTwo.png"),
		title: "Prydan CRM",
		text: "Automate data enters and manual tasked,gain visibility into your pipeline, and keep contacts organized so you can close more deals with less work.",
		smallText:
			"Free version of every prydan product. Start now upgrade as you grow.",
	},
	{
		key: "s3",
		image: require("../../assets/Images/WelcomeThree.png"),
		title: "Marketing Free",
		text: "Learn more about the people visiting site and what pages convert the most leads with easy-to-build lead forms and built-in analytics.",
		smallText:
			"Free version of every prydan product. Start now upgrade as you grow.",
	},
	{
		key: "s4",
		image: require("../../assets/Images/WelcomeFour.png"),
		title: "Sales Free",
		text: " Track email opens and clicks, spend less time writing emails, log calls automatically, and speed up your sales process.",
		smallText:
			"Free version of every prydan product. Start now upgrade as you grow.",
	},
];
