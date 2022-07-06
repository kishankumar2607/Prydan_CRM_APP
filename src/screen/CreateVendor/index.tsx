import React, { FC, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import { Dropdown } from "react-native-element-dropdown";
import CheckBox from "@react-native-community/checkbox";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

/**
 * @class  CreateVendor
 * @param  {Object} navigation - Use for navigation
 * @description User enter email ID and click on reset password button, in that time Help is On The Way message popup if user want to go back to login screen click on back to home link
 */
const CreateVendor: FC = ({ navigation }) => {
  const [personValue, setPersonValue] = useState(null);
  const [isFocusPerson, setFocusPerson] = useState(false);
  const [name, setName] = useState("");
  const [vendorValue, setVendorValue] = useState(null);
  const [isFocusVendor, setIsFocusVendor] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [phoneTypeValue, setPhoneTypeValue] = useState(null);
  const [isFocusPhoneType, setIsFocusPhoneType] = useState(false);
  const [emailTypeValue, setEmailTypeValue] = useState(null);
  const [isFocusEmailType, setIsFocusEmailType] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoTypeValue, setPhotoTypeValue] = useState(null);
  const [isFocusPhotoType, setIsFocusPhotoType] = useState(false);
  const [isCandidateSelected, setCandidateSelection] = useState(false);
  const [isVendorSelected, setVendorSelection] = useState(false);
  const [isClientSelected, setClientSelection] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.BoxContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                value={isCandidateSelected}
                onValueChange={setCandidateSelection}
              />
              <Text style={{ marginVertical: 5, marginHorizontal: 10 }}>
                Candidate
              </Text>
            </View>
            <TouchableOpacity>
              <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                <CheckBox
                  value={isVendorSelected}
                  onValueChange={setVendorSelection}
                />
                <Text style={{ marginVertical: 5, marginHorizontal: 10 }}>
                  Vendor
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <CheckBox
                  value={isClientSelected}
                  onValueChange={setClientSelection}
                />
                <Text style={{ marginVertical: 5, marginHorizontal: 10 }}>
                  Client
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              data={[
                { label: "Candidate", personValue: "1" },
                { label: "Vendor", personValue: "2" },
                { label: "Client", personValue: "3" },
              ]}
              labelField="label"
              valueField="personValue"
              placeholder={"Person Type"}
              value={personValue}
              onChange={(item) => {
                setPersonValue(item.personValue);
                setFocusPerson(false);
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={"Name"}
              secureTextEntry={undefined}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputView}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              data={[
                { label: "Candidate", vendorValue: "1" },
                { label: "Vendor", vendorValue: "2" },
                { label: "Client", vendorValue: "3" },
              ]}
              labelField="label"
              valueField="vendorValue"
              placeholder={"Vendor Company"}
              value={vendorValue}
              onChange={(item) => {
                setVendorValue(item.vendorValue);
                setIsFocusVendor(false);
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              data={[
                { label: "Personal", phoneTypeValue: "1" },
                { label: "Home", phoneTypeValue: "2" },
              ]}
              labelField="label"
              valueField="phoneTypeValue"
              placeholder={"PhoneType"}
              value={phoneTypeValue}
              onChange={(item) => {
                setPhoneTypeValue(item.phoneTypeValue);
                setIsFocusPhoneType(false);
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={"PhoneNo"}
              onChangeText={setPhoneNo}
              value={phoneNo}
              secureTextEntry={undefined}
            />
          </View>
          <View style={styles.inputView}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              data={[
                { label: "Personal", emailTypeValue: "1" },
                { label: "Company", emailTypeValue: "2" },
              ]}
              labelField="label"
              valueField="emailTypeValue"
              placeholder={"Email Type"}
              value={emailTypeValue}
              onChange={(item) => {
                setEmailTypeValue(item.emailTypeValue);
                setIsFocusEmailType(false);
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={"Email Address"}
              onChangeText={setEmailAddress}
              value={emailAddress}
              secureTextEntry={undefined}
            />
          </View>

          <Button
            color={colors.black}
            buttonText="Upload Photo"
            onPress={setPhoto}
            bgColor={undefined}
          />
          <View style={styles.inputView}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              data={[{ label: "Personal", photoTypeValue: "1" }]}
              labelField="label"
              valueField="photoTypeValue"
              placeholder={"PhotoType"}
              value={photoTypeValue}
              onChange={(item) => {
                setPhotoTypeValue(item.photoTypeValue);
                setIsFocusPhotoType(false);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateVendor;
