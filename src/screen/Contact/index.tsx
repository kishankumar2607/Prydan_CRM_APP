import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import { Searchbar } from "react-native-paper";
import { colors } from "../../constants";
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  requestPersonSearch,
  onPersonSearchResponse,
} from "../../redux/actions/personSearchAction";
import NetInfo from "@react-native-community/netinfo";
import TabBar from "react-native-underline-tabbar";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Ionicons from "react-native-vector-icons/Ionicons";

const Contact: FC = ({ navigation }) => {
  const [searchContact, setSearchContact] = useState("");
  const data = [
    { label: "Client", value: "1" },
    { label: "Vendor", value: "2" },
    { label: "Candidate", value: "3" },
  ];

  const Search = "s";
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [nameValue, setNameValue] = useState(null);
  const [isNameFocus, setNameIsFocus] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const Page = ({ label }) => (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.GhostWhite,
          marginVertical: 20,
        }}
      >
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={[
            { label: "Candidate", value: "1" },
            { label: "Vendor", value: "2" },
            { label: "Client", value: "3" },
          ]}
          // input={input}
          // maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"All Person"}
          // searchPlaceholder="Mode of interview"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={[
            { label: "Canate", nameValue: "1" },
            { label: "Vdor", nameValue: "2" },
          ]}
          // input={input}
          // maxHeight={300}
          labelField="label"
          valueField="nameValue"
          placeholder={"Name"}
          // searchPlaceholder="Mode of interview"
          value={nameValue}
          onFocus={() => setNameIsFocus(true)}
          onBlur={() => setNameIsFocus(false)}
          onChange={(item) => {
            setNameValue(item.nameValue);
            setNameIsFocus(false);
          }}
        />
      </View>
      <View style={{ alignSelf: "flex-end", marginHorizontal: 30 }}>
        <TouchableOpacity>
          <Ionicons
            name={"ios-person-circle"}
            size={45}
            color={colors.YankeesBlue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const Page1 = ({ label }) => (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.GhostWhite,
          marginVertical: 20,
        }}
      >
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={[
            { label: "Canate", nameValue: "1" },
            { label: "Vdor", nameValue: "2" },
          ]}
          // input={input}
          // maxHeight={300}
          labelField="label"
          valueField="nameValue"
          placeholder={"Name"}
          // searchPlaceholder="Mode of interview"
          value={nameValue}
          onFocus={() => setNameIsFocus(true)}
          onBlur={() => setNameIsFocus(false)}
          onChange={(item) => {
            setNameValue(item.nameValue);
            setNameIsFocus(false);
          }}
        />
      </View>
      <View style={{ alignSelf: "flex-end", marginHorizontal: 30 }}>
        <TouchableOpacity>
          <Ionicons
            name={"ios-person-circle"}
            size={45}
            color={colors.YankeesBlue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  const dispatch = useDispatch();

  const personSearchResponse = useSelector(
    (state) => state.personSearchReducer.personSearchResponse
  );
  useEffect(() => {
    console.log(
      "personSearchResponse : ",
      JSON.stringify(personSearchResponse)
    );

    const updatePersonSearch = async () => {
      if (
        personSearchResponse &&
        Object.keys(personSearchResponse).length !== 0 &&
        personSearchResponse.hasOwnProperty("status")
      ) {
        if (personSearchResponse?.status === 200) {
          Alert.alert("Success", personSearchResponse.data.message);
          navigation.navigate("Today");
          var setResponse = {};
          dispatch(onPersonSearchResponse(setResponse));
        } else {
          if (personSearchResponse.message) {
            Alert.alert("Error", personSearchResponse.message);
          }
        }
        setSpinner(false);
      }
    };
    updatePersonSearch();
  }, [personSearchResponse]);

  const onPersonSearchSubmit = () => {
    NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        setSpinner(true);
        dispatch(requestPersonSearch());
      } else {
        Alert.alert("Please check your internet connection");
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.menuView}>
            <View style={styles.titleView}>
              <Text style={styles.headerTextDash}>Contact</Text>
            </View>
          </View>
          <Searchbar
            placeholder="Search Person Here"
            onChangeText={setSearchContact}
            value={searchContact}
            style={styles.SearchView}
            iconColor={"green"}
            onPress={() => onPersonSearchSubmit()}
          />

          <ScrollableTabView
            tabBarActiveTextColor="#53ac49"
            renderTabBar={() => <TabBar underlineColor="#53ac49" />}
          >
            <Page
              tabLabel={{ label: "Person" }}
              label="Company"
              style={{ backgroundColor: colors.GhostWhite }}
            />
            <Page1 tabLabel={{ label: "Company" }} label="Company" />
          </ScrollableTabView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;
