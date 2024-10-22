import React, { FC, useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	SafeAreaView,
	StatusBar,
} from "react-native";
import { InterViewButton, Spinner } from "../../components";
import styles from "./style";
import { colors } from "../../constants";

import Images from "../../utils/Images";

const Today: FC = ({ navigation }) => {
	const [spinner, setSpinner] = useState(false);

	return (
		<SafeAreaView style={styles.safeView}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<StatusBar />
				{spinner ? (
					<Spinner color={colors.blue} />
				) : (
					<View style={styles.container}>
						<View style={styles.topView}>
							<View style={styles.titleView}>
								<Text style={styles.headerTextDash}>Today</Text>
							</View>

							<View style={styles.mainView}>
								<View style={styles.BoxView}>
									<Image
										source={Images.calender}
										style={styles.imageView}
									/>
									<Text style={styles.headerText}>
										Upcoming Tasks
									</Text>
								</View>
								<View>
									<Text style={styles.smallText}>
										No tasks due today
									</Text>
								</View>
							</View>
							<View style={styles.BoxView}>
								<View style={styles.iconView}>
									<Image source={Images.todayOne} />
								</View>
								<View style={styles.mainHeadingText}>
									<Text style={styles.textHeading}>
										You’re all caught up
									</Text>
									<Text style={styles.greetingText}>
										Nice work
									</Text>
									<InterViewButton
										color={colors.white}
										buttonText={"Go to Interview"}
									/>
								</View>
							</View>
							<View style={styles.mainView}>
								<View style={styles.BoxView}>
									<Image
										source={Images.calender}
										style={styles.imageView}
									/>
									<Text style={styles.headerText}>
										Upcoming Interview
									</Text>
								</View>
								<Text style={styles.smallText}>
									No meetings schedules
								</Text>
							</View>
							<View style={styles.BoxView}>
								<View style={styles.iconView}>
									<Image source={Images.todayTwo} />
								</View>
								<View style={styles.mainHeadingText}>
									<Text style={styles.textHeading}>
										Connect your calender
									</Text>
									<Text style={styles.greetingText}>
										See upcoming meetings
									</Text>
									<Text style={styles.textView}>
										& add attenders to your CRM
									</Text>
									<InterViewButton
										color={colors.white}
										buttonText={"Learn more"}
									/>
								</View>
							</View>
							<View style={styles.icon}>
								<TouchableOpacity
									onPress={() =>
										navigation.navigate("CreateClient")
									}
								>
									<Image source={Images.plus} />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};
export default Today;
