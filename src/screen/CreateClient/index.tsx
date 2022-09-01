import React, { FC, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Input, Button } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import { Dropdown } from "react-native-element-dropdown";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RadioForm from "react-native-simple-radio-button";

/**
 * @class  CreateCandidate
 * @param  {Object} navigation - Use for navigation
 * @description User enter email ID and click on reset password button, in that time Help is On The Way message popup if user want to go back to login screen click on back to home link
 */
const CreateClient: FC = ({ navigation }) => {
  const [vendor, setVendor] = useState(null);
  const [isFocusVendor, setIsFocusVendor] = useState(false);
  const [name, setName] = useState("");
  const [requirement, setRequirement] = useState("");
  const [phoneNo, setPhoneNo] = useState<number>("");
  const [emailAddress, setEmailAddress] = useState<number>("");
  const [photo, setPhoto] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [chosenOption, setChosenOption] = useState([]); 

  const options = [
    { label: "Candidate", Value: "1" },
    { label: "Vendor", Value: "2" },
    { label: "Client", Value: "3" },
  ]; 
 return (
    // <ScrollView>
    <SafeAreaView style={styles.safeView}>
    <StatusBar />
    {/* {spinner ? (
      <Spinner color={colors.blue} />
    ) : ( */}
      <View style={styles.container}>
        <View style={styles.topView}>
        <View>
         
          <RadioForm
            radio_props={options}
            buttonColor={colors.gray}
            selectedButtonColor={colors.green}
            initial={0}
            onPress={(value) => {
              setChosenOption(value);
            }}
            labelStyle={styles.labelText}
            formHorizontal={true}
            style={styles.radioButton}
          />
         
          <View style={styles.inputView}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={[
                { label: "Candate", vendor: "1" },
                { label: "ndor", vendor: "2" },
                { label: "Cient", vendor: "3" },
              ]}
              labelField={"label"}
              valueField={"vendor"}
              placeholder="Name Of Vendor Company"
              value={vendor}
              onFocus={() => setIsFocusVendor(true)}
              onBlur={() => setIsFocusVendor(false)}
              onChange={(item) => {
                setVendor(item.vendor);
                setIsFocusVendor(false);
              }}
            />
          </View>
          <View style={styles.inputView1}>
            <Input
              placeholder={"Requirement"}
              onChangeText={setRequirement}
              value={requirement}
              secureTextEntry={undefined}
              color={colors.black}
            />
          </View>
          <View style={styles.inputView1}>
            <Input
              placeholder={"Name"}
              onChangeText={setName}
              value={name}
              secureTextEntry={undefined}
              color={colors.black}
            />
          </View>
          <View style={styles.inputView1}>
            <Input
              placeholder={"Contact Number"}
              onChangeText={setPhoneNo}
              value={phoneNo}
              secureTextEntry={undefined}
              color={colors.black}
            />
          </View>
          <View style={styles.inputView1}>
            <Input
              placeholder={"Email"}
              onChangeText={setEmailAddress}
              value={emailAddress}
              secureTextEntry={undefined}
            />
          </View>
          <View style={styles.inputView1}>
          <Button
            color={colors.white}
            buttonText="Upload Photo"
            onPress={setPhoto}
            bgColor={undefined}
          />
          </View>
        </View>
        </View>
				</View>
			{/* )} */}
		</SafeAreaView>
    // </ScrollView>
  );
};
export default CreateClient;
