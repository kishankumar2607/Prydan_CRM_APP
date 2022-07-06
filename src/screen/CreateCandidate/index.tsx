import React, { FC, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  TextInput

} from "react-native";
import { Input, Button } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-native-element-dropdown";
import RadioForm from "react-native-simple-radio-button";

import {
  requestPerson,
  onPersonResponse,
} from "../../redux/actions/personAction";
import {
  requestStatic,
  onStaticResponse,
} from "../../redux/actions/staticAction";

import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import style from "./style";

/**
 * @class  CreateCandidate
 * @param  {Object} navigation - Use for navigation
 * @description User enter email ID and click on reset password button, in that time Help is On The Way message popup if user want to go back to login screen click on back to home link
 */
const CreateCandidate: FC = ({ navigation }) => {
  const [PersonType, setPersonType] = useState<string>("");
  const [isFocusPerson, setFocusPerson] = useState(false);
  const [name, setName] = useState("");
  const [candidateSource, setCandidateSource] = useState<string>(null);
  const [vendorValue, setVendorValue] = useState<number>(null);
  const [isFocusVendor, setIsFocusVendor] = useState(false);
  const [salary, setSalary] = useState(0);
  const [experience, setExperience] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<number>("");
  const [phoneTypeValue, setPhoneTypeValue] = useState<number>(null);
  const [isFocusPhoneType, setIsFocusPhoneType] = useState(false);
  const [emailTypeValue, setEmailTypeValue] = useState<number>(null);
  const [isFocusEmailType, setIsFocusEmailType] = useState(false);
  const [emailAddress, setEmailAddress] = useState<number>("");
  const [skillValue, setSkillValue] = useState('');
  const [isFocusSkill, setIsFocusSkill] = useState(0);
  const [photo, setPhoto] = useState(false);
  const [photoTypeValue, setPhotoTypeValue] = useState(0);
  const [isFocusPhotoType, setIsFocusPhotoType] = useState(0);
  const [document, setDocument] = useState("");
  const [isCandidateSelected, setCandidateSelection] = useState(false);
  const [isVendorSelected, setVendorSelection] = useState(false);
  const [isClientSelected, setClientSelection] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [chosenOption, setChosenOption] = useState([]); 
 const [value, setValue] = useState(null);
 const [isFocus, setIsFocus] = useState(false);

  const options = [
    { label: "Candidate", Value: "1" },
    { label: "Vendor", Value: "2" },
    { label: "Client", Value: "3" },
  ]; 
  const CountryCode = "1";
  const dispatch = useDispatch();

  

  const personResponse = useSelector(
    (state) => state.personReducer.personResponse
  );
 const staticResponse = useSelector(
  (state) => state.staticReducer.staticResponse
);
  useEffect(() => {
    console.log("personResponse : ", JSON.stringify(personResponse));

    const updateAfterPerson = async () => {
      if (
        personResponse &&
        Object.keys(personResponse).length !== 0 &&
        personResponse.hasOwnProperty("status")
      ) {
        if (personResponse?.status === 200) {
          Alert.alert("Success", personResponse.data.message);
          navigation.navigate("Today");
          var setResponse = {};
          dispatch(onPersonResponse(setResponse));
        } else {
          if (personResponse.message) {
            Alert.alert("Error", personResponse.message);
          }
        }
      }
      setSpinner(false);
    };
    updateAfterPerson();
  }, [personResponse]);

  const validateRequest = () => {
    if (PersonType === "") {
      // Alert.alert("Error", "Invalid PersonType");
      return false;
    } else if (name === "") {
      // Alert.alert("Error", "Invalid name");
      return false;
    }
    //  else if (candidateSource === "") {
    //   Alert.alert("Error", "Invalid candidateSource");
    //   return false;
    // } else if (vendorValue === "") {
    //   Alert.alert("Error", "Invalid vendorValue");
    //   return false;
    // } else if (salary === "") {
    //   Alert.alert("Error", "Invalid salary");
    //   return false;
    // } else if (experience === "") {
    //   Alert.alert("Error", "Invalid experience");
    //   return false;
    // } else if (phoneTypeValue === "") {
    //   Alert.alert("Error", "Invalid phoneType");
    //   return false;
    // } else if (phoneNo === "") {
    //   Alert.alert("Error", "Invalid phoneNo");
    //   return false;
    // } else if (emailTypeValue === "") {
    //   Alert.alert("Error", "Invalid emailType");
    //   return false;
    // } else if (emailAddress === "") {
    //   Alert.alert("Error", "Invalid emailAddress");
    //   return false;
    // } else if (skillValue === "") {
    //   Alert.alert("Error", "Invalid skillValue");
    //   return false;
    // } else if (photoTypeValue === "") {
    //   Alert.alert("Error", "Invalid photoType");
    //   return false;
    // }
    //  else if (photo === "") {
    //   Alert.alert("Error", "Invalid photo");
    //   return false;
    // }
    //  else if (document === "") {
    //   Alert.alert("Error", "Invalid document");
    //   return false;
    // }
    else {
      return true;
    }
  };

  const onPersonSubmit = () => {
    console.log(PersonType);
    console.log(name);
    if (validateRequest()) {
      NetInfo.addEventListener((state) => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(
            requestPerson(
              PersonType,
              name,
              candidateSource,
              vendorValue,
              salary,
              experience,
              phoneNo,
              phoneTypeValue,
              emailTypeValue,
              emailAddress,
              skillValue,
              photoTypeValue,
              CountryCode,
              photo,
              document
            )
          );
        } else {
          Alert.alert("Error", "Please check your internet connection.");
        }
      });
    }
  };
useEffect(() => {
  NetInfo.addEventListener((state) => {
    if (state.isConnected) {
      setSpinner(true);
      dispatch(requestStatic());
    } else {
      setSpinner(false);
      Alert.alert("Please check your internet connection");
    }
  });
}, []);
 useEffect(() => {
  // console.log(DATA);
   const updateStatic = async () => {
     if (
       staticResponse &&
       Object.keys(staticResponse).length !== 0 &&
       staticResponse.hasOwnProperty("status")
     ) {
       if (staticResponse?.status === 200) {
         if (staticResponse?.data?.data) {
           const respData = staticResponse?.data?.data;
           console.log("staticResponse : ", JSON.stringify(respData));
        //  let DATA = [
        //    {
        //      title: "PersonType",
        //      data: respData.PersonType,
        //    },
        //  ];
        //   setFinalDataList(DATA);
           var setResponse = {};
           dispatch(onStaticResponse(setResponse));
           setSpinner(false);
         }
       } else {
         if (staticResponse.message) {
           Alert.alert("Error", staticResponse.message);
         } else {
           Alert.alert("Error", "Something went wrong. Please try again");
         }
       }
     }
   };
   updateStatic();
 }, [staticResponse]);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.BoxContainer}>
         
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
              placeholderStyle={styles.placeholderStyle}
              data={[
                { label: "Candidate", vendorValue: "1" },
                { label: "Vendor", vendorValue: "2" },
                { label: "Client", vendorValue: "3" },
              ]}
              labelField="label"
              valueField="PersonType"
              placeholder={"Person Type"}
              value={PersonType}
              onChange={(item) => {
                setPersonType(item.PersonType);
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
            <Input
              placeholder={"Candidate Source"}
              onChangeText={setCandidateSource}
              value={candidateSource}
              secureTextEntry={undefined}
              color={colors.black}
            />
          </View>
          {/* <View style={styles.inputView}>
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
          </View> */}
          {/* <View style={styles.inputView}>
            <Input
              placeholder={"Salary"}
              onChangeText={setSalary}
              value={salary}
              secureTextEntry={undefined}
            />
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={"Experience"}
              onChangeText={setExperience}
              value={experience}
              secureTextEntry={undefined}
            />
          </View> */}
          {/* <View style={styles.inputView}>
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
          </View> */}
          {/* <View style={styles.inputView}>
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
          </View> */}
          {/* <View style={styles.inputView}>
            <Input
              placeholder={"Email Address"}
              onChangeText={setEmailAddress}
              value={emailAddress}
              secureTextEntry={undefined}
            />
          </View> */}
          {/* <View style={styles.inputView}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              data={[
                { label: "React Native", skillValue: "1" },
                { label: "React Js", skillValue: "2" },
                { label: "Python", skillValue: "3" },
                { label: "Php", skillValue: "4" },
                { label: "Flutter", skillValue: "5" },
              ]}
              labelField="label"
              valueField="skillValue"
              placeholder={"Skill"}
              value={skillValue}
              onChange={(item) => {
                setSkillValue(item.skillValue);
                setIsFocusSkill(false);
              }}
            />
          </View> */}
          {/* <View style={styles.inputView}>
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
          <Button
            color={colors.black}
            buttonText="Upload Photo"
            onPress={setPhoto}
            bgColor={undefined}
          />
          <Button
            color={colors.black}
            buttonText="Upload PDF"
            onPress={setDocument}
            bgColor={undefined}
          /> */}
          <Button
            color={colors.black}
            buttonText="Submit"
            onPress={() => onPersonSubmit()}
            bgColor={undefined}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateCandidate;


