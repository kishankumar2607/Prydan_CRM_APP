import React, { FC, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  SafeAreaView,
  StatusBar,

} from "react-native";
import { Input, Button, Spinner } from "../../components";
import styles from "./style";
import { colors, I18n } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-native-element-dropdown";
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
import RadioForm from "react-native-simple-radio-button";

/**
 * @class  CreateCandidate
 * @param  {Object} navigation - Use for navigation
 * @description User enter email ID and click on reset password button, in that time Help is On The Way message popup if user want to go back to login screen click on back to home link
 */
const CreateCandidate: FC = ({ navigation }) => {
  const [candidateSource, setCandidateSource] = useState(null);
  const [isFocusCandidateSource, setFocusCandidateSource] = useState(false);
  const [vendor, setVendor] = useState(null);
  const [isFocusVendor, setIsFocusVendor] = useState(false);
  const [PersonType, setPersonType] = useState<string>("");
  const [isFocusPerson, setFocusPerson] = useState(false);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [experience, setExperience] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<number>("");
  const [phoneTypeValue, setPhoneTypeValue] = useState<number>(null);
  const [isFocusPhoneType, setIsFocusPhoneType] = useState(false);
  const [emailTypeValue, setEmailTypeValue] = useState<number>(null);
  const [isFocusEmailType, setIsFocusEmailType] = useState(false);
  const [emailAddress, setEmailAddress] = useState<number>("");
  const [skill, setSkill] = useState(null);
  const [isFocusSkill, setIsFocusSkill] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [resume, setResume] = useState(false);
  const [photoTypeValue, setPhotoTypeValue] = useState(0);
  const [isFocusPhotoType, setIsFocusPhotoType] = useState(0);
  const [document, setDocument] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [chosenOption, setChosenOption] = useState([]); 

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
    <ScrollView>
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
                { label: "Candidate", candidateSource: "1" },
                { label: "Vendor", candidateSource: "2" },
                { label: "Client", candidateSource: "3" },
              ]}
              labelField={"label"}
              valueField={"candidateSource"}
              placeholder="Candidate Source"
              value={candidateSource}
              onFocus={() => setFocusCandidateSource(true)}
              onBlur={() => setFocusCandidateSource(false)}
              onChange={(item) => {
                setCandidateSource(item.candidateSource);
                setFocusCandidateSource(false);
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
                { label: "Candate", vendor: "1" },
                { label: "ndor", vendor: "2" },
                { label: "Cient", vendor: "3" },
              ]}
              labelField="label"
              valueField="vendor"
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

          <View style={styles.inputView}>
            <Dropdown
             style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={[
                { label: "andate", skill: "1" },
                { label: "ndr", skill: "2" },
               
              ]}
              labelField="label"
              valueField="skill"
              placeholder="Skill"
              value={skill}
              onChange={(item) => {
                setSkill(item.skill);
                setIsFocusSkill(false);
              }}
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
          <Button
            color={colors.white}
            buttonText="Upload Resume"
            onPress={setResume}
            bgColor={undefined}
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
          <View style={styles.inputView1}>
            <Input
              placeholder={"Cost/Salary"}
              onChangeText={setSalary}
              value={salary}
              secureTextEntry={undefined}
            />
          </View>
          <View style={styles.inputView1}>
            <Input
              placeholder={"Experience"}
              onChangeText={setExperience}
              value={experience}
              secureTextEntry={undefined}
            />
          </View>
        </View>
        </View>
				</View>
			{/* )} */}
		</SafeAreaView>
    </ScrollView>
  );
};
export default CreateCandidate;


