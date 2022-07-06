import React, { FC, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-datepicker";

/**
 * @class  ForgotPassword
 * @param  {Object} navigation - Use for navigation
 * @description User enter email ID and click on reset password button, in that time Help is On The Way message popup if user want to go back to login screen click on back to home link
 */
const InterView: FC = ({ navigation }) => {
  /**
   * @description email {string} - email for login user.
   */

  const [CandidateName, setCandidateName] = useState();
  const [CompanyName, setCompany] = useState();
  const [Position, setPosition] = useState();
  const [Date, setDate] = useState();
  const [Time, setTime] = useState();
  const [Duration, setDuration] = useState();
  const [Round, setRound] = useState();
  const data = [
    { label: "Offline", value: "1" },
    { label: "Online", value: "2" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
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
              <Text style={styles.headerTextDash}>InterView</Text>
            </View>

            <View style={styles.titleViewText}>
              <TouchableOpacity>
                <Text style={styles.headerTextButton}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={"Candidate Name"}
              onChangeText={setCandidateName}
              value={CandidateName}
              secureTextEntry={undefined}
            />
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={"CompanyName"}
              secureTextEntry={undefined}
              value={CompanyName}
              onChangeText={setCompany}
            />
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={"Panel Name"}
              onChangeText={(e) => {
                setPosition(e.trim());
              }}
              value={Position}
              secureTextEntry={undefined}
              color={colors.black}
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
                  right: -165,
                  top: 4,
                  with: "95%",
                },
                dateInput: {
                  alignItems: "flex-start",
                  borderWidth: 0,
                },
                placeholderText: {
                  fontSize: 16,
                  color: "gray",
                  marginHorizontal: 10,
                  paddingVertical: 20,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />
          </View>

          <View style={styles.inputView}>
            <Input
              placeholder={"Time"}
              onChangeText={setTime}
              value={Time}
              secureTextEntry={undefined}
            />
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={"Duration"}
              onChangeText={setDuration}
              value={Duration}
              secureTextEntry={undefined}
            />
          </View>
          <View style={styles.inputView}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              data={data}
              labelField={"label"}
              valueField={"value"}
              placeholder={"Mode of interview"}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View style={styles.inputView}>
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
  );
};
export default InterView;
