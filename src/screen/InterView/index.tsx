import React, { FC, useState } from "react";
import {
	Text,
	View,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	Button,
	Platform,
} from "react-native";
import { Input } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { scale } from "react-native-size-matters";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-datepicker";
import { TimePicker, ValueMap } from "react-native-simple-time-picker";
/**
 * @class  ForgotPassword
 * @param  {Object} navigation - Use for navigation
 * @description User enter email ID and click on reset password button, in that time Help is On The Way message popup if user want to go back to login screen click on back to home link
 */
const InterView: FC = ({ navigation }) => {
	/**
	 * @description email {string} - email for login user.
	 */

	const [Candidate, setCandidate] = useState(null);
	const [isFocusCandidate, setIsFocusCandidate] = useState(false);
	const [Company, setCompany] = useState(null);
	const [isFocusCompany, setIsFocusCompany] = useState(false);
	const [Position, setPosition] = useState(null);
	const [isFocusPosition, setIsFocusPosition] = useState(false);
	const [Date, setDate] = useState();
	const [Time, setTime] = useState();
	const [Duration, setDuration] = useState();
	const [Round, setRound] = useState();
	const [selectedHours, setSelectedHours] = useState(0);
	const [selectedMinutes, setSelectedMinutes] = useState(0);
	const [mode, setMode] = useState(null);
	const [isFocusMode, setIsFocusMode] = useState(false);
	const [value, setValue] = useState<ValueMap>({
		hours: 1,
		minutes: 0,
		seconds: 0,
	});
	const handleChange = (newValue: ValueMap) => {
		setValue(newValue);
	};
	return (
		<>
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View style={styles.BoxContainer}>
						<View style={styles.menuView}>
							<MaterialIcons
								name="arrow-back"
								size={30}
								color={colors.green}
								onPress={() => {
									navigation.goBack();
								}}
							/>
							<View style={styles.titleView}>
								<Text style={styles.headerTextDash}>
									InterView
								</Text>
							</View>

							<View style={styles.titleViewText}>
								<TouchableOpacity>
									<Text style={styles.headerTextButton}>
										Save
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.inputView}>
							<Dropdown
								style={styles.dropdown}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={[
									{ label: "andidate", Candidate: "1" },
									{ label: "endor", Candidate: "2" },
									{ label: "lient", Candidate: "3" },
								]}
								maxHeight={300}
								labelField="label"
								valueField="value"
								placeholder="Candidate Name"
								searchPlaceholder="Search..."
								value={Candidate}
								onFocus={() => setIsFocusCandidate(true)}
								onBlur={() => setIsFocusCandidate(false)}
								onChange={(item) => {
									setCandidate(item.value);
									setIsFocusCandidate(false);
								}}
							/>
						</View>
						<View style={styles.inputView}>
							<Dropdown
								style={styles.dropdown}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={[
									{ label: "Candidate", Company: "1" },
									{ label: "Vendor", Company: "2" },
									{ label: "Client", Company: "3" },
								]}
								labelField="label"
								valueField="value"
								placeholder="Company Name"
								value={Company}
								onFocus={() => setIsFocusCompany(true)}
								onBlur={() => setIsFocusCompany(false)}
								onChange={(item) => {
									setCompany(item.value);
									setIsFocusCompany(false);
								}}
							/>
						</View>
						<View style={styles.inputView}>
							<Dropdown
								style={styles.dropdown}
								placeholderStyle={styles.placeholderStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={[
									{ label: "Candid", Position: "1" },
									{ label: "Vend", Position: "2" },
									{ label: "Clit", Position: "3" },
								]}
								labelField="label"
								valueField="value"
								placeholder="Position"
								value={Position}
								onFocus={() => setIsFocusPosition(true)}
								onBlur={() => setIsFocusPosition(false)}
								onChange={(item) => {
									setPosition(item.value);
									setIsFocusPosition(false);
								}}
							/>
						</View>
						<View style={styles.dateView}>
							<DatePicker
								date={Date}
								placeholder="Date"
								format="DD/MM/YYYY"
								minDate=""
								maxDate=""
								confirmBtnText="Confirm"
								cancelBtnText="Cancel"
								customStyles={{
									dateIcon: {
										alignSelf: "flex-end",
										right: -195,
									},
									dateInput: {
										alignItems: "flex-start",
										borderWidth: 0,
									},
									placeholderText: {
										fontSize: scale(14),
										color: colors.gray,
										top: 3,
									},
								}}
								onDateChange={(date) => {
									setDate(date);
								}}
							/>
						</View>
						<View style={styles.inputView}>
							<TimePicker value={value} onChange={handleChange} />
						</View>
						<View style={styles.inputView1}>
							<Input
								placeholder={"Duration"}
								onChangeText={setDuration}
								value={Duration}
								secureTextEntry={undefined}
							/>
						</View>
						<View style={styles.inputView}>
							<Dropdown
								style={styles.dropdown}
								selectedTextStyle={styles.selectedTextStyle}
								placeholderStyle={styles.placeholderStyle}
								data={[
									{ label: "Online", mode: "1" },
									{ label: "Offline", mode: "2" },
								]}
								search
								labelField={"label"}
								valueField={"value"}
								placeholder={"Mode of interview"}
								value={mode}
								onFocus={() => setIsFocusMode(true)}
								onBlur={() => setIsFocusMode(false)}
								onChange={(item) => {
									setMode(item.value);
									setIsFocusMode(false);
								}}
							/>
						</View>

						<View style={styles.inputView1}>
							<Input
								placeholder={"Round"}
								onChangeText={setRound}
								value={Round}
								secureTextEntry={undefined}
							/>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};
export default InterView;
