import React from "react";
import {
	Today,
	InterView,
	Contact,
	CreateCandidate,
	CreateClient,
	CreateVendor,
	Candidate,
	Login,
} from "../screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text } from "react-native";
import { colors } from "../constants";
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TodayNavigator = createStackNavigator();

const TodayStackNavigator = ({ navigation, route }) => {
	return (
		<TodayNavigator.Navigator
			initialRouteName="Today"
			screenOptions={{
				headerShown: false,
			}}
		>
				<TodayNavigator.Screen name="Today" component={Today} />
				<TodayNavigator.Screen name="InterView" component={InterView} />
				<TodayNavigator.Screen name="CreateClient" component={CreateClient} />
				
		</TodayNavigator.Navigator>
	);
};

const CandidateNavigator = createStackNavigator();

const CandidateStackNavigator = ({ navigation, route }) => {
	return (
		<CandidateNavigator.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<CandidateNavigator.Screen
				name="CreateCandidate"
				component={CreateCandidate}
			/>
			<CandidateNavigator.Screen
				name="CreateVendor"
				component={CreateVendor}
			/>
			<CandidateNavigator.Screen
				name="CreateClient"
				component={CreateClient}
			/>
		</CandidateNavigator.Navigator>
	);
};

const ContactNavigator = createStackNavigator();

const ContactStackNavigator = ({ navigation, route }) => {
	return (
		<ContactNavigator.Navigator
		initialRouteName="Contact"
			screenOptions={{
				headerShown: false,
			}}
		>
			<ContactNavigator.Screen name="Contact" component={Contact} />
		</ContactNavigator.Navigator>
	);
};

/**
 * Manage application authentication navigation
 * @class AuthNavigator
 */

const AppNavigator = () => (
	<Tab.Navigator
		initialRouteName="Today"
		// tabBarOptions={{
		// 	showIcon: true,
		// 	tabBarVisible: false,
		// 	swipeEnabled: false,
		// 	showLabel: false,
		// 	lazyLoad: true,
		// }}
		screenOptions={{
			showIcon: true,
			tabBarVisible: false,
			swipeEnabled: false,
			showLabel: false,
			lazyLoad: true,
			tabBarShowLabel: false,
			tabBarStyle: [
				{
					display: "flex",
				},
				null,
			],
			headerShown: false,
		}}
	>
		<Tab.Screen
			name="Today"
			component={TodayStackNavigator}
			options={{
				tabBarLabel: "Today",
				tabBarIcon: ({ focused }) => (
					<>
						<Image
							source={require("../assets/Images/Home.png")}
							style={{
								tintColor: focused ? colors.Amber : colors.gray,
							}}
						/>
						<Text
							style={{
								color: focused ? colors.Amber : colors.gray,
							}}
						>
							Today
						</Text>
					</>
				),
			}}
		/>

		<Tab.Screen
			name="Contact"
			component={ContactStackNavigator}
			options={{
				tabBarIcon: ({ focused }) => (
					<>
						<Image
							source={require("../assets/Images/User.png")}
							style={{
								tintColor: focused ? colors.Amber : colors.gray,
							}}
						/>
						<Text
							style={{
								color: focused ? colors.Amber : colors.gray,
							}}
						>
							Contact
						</Text>
					</>
				),
			}}
		/>
		<Tab.Screen
			name="Application"
			component={ContactStackNavigator}
			options={{
				tabBarLabel: "Application",
				tabBarIcon: ({ focused }) => (
					<>
						<Image
							source={require("../assets/Images/Handshake.png")}
							style={{
								tintColor: focused ? colors.Amber : colors.gray,
							}}
						/>
						<Text
							style={{
								color: focused ? colors.Amber : colors.gray,
							}}
						>
							Application
						</Text>
					</>
				),
			}}
		/>
		<Tab.Screen
			name="Position"
			component={CandidateStackNavigator}
			options={{
				tabBarLabel: "Position",
				tabBarIcon: ({ focused }) => (
					<>
						<Image
							source={require("../assets/Images/Map.png")}
							style={{
								tintColor: focused ? colors.Amber : colors.gray,
							}}
						/>
						<Text
							style={{
								color: focused ? colors.Amber : colors.gray,
							}}
						>
							Position
						</Text>
					</>
				),
			}}


		/>
		<Tab.Screen
			name="More"
			component={Login}
			options={{
				tabBarLabel: "More",
				tabBarIcon: ({ focused }) => (
					<>
						<Image
							source={require("../assets/Images/Menu.png")}
							style={{
								tintColor: focused ? colors.Amber : colors.gray,
							}}
						/>
						<Text
							style={{
								color: focused ? colors.Amber : colors.gray,
							}}
						>
							More
						</Text>
					</>
				),
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
