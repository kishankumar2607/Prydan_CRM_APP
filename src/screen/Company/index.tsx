// import React, { FC, useEffect, useState } from "react";
// import { View, Text, Alert, SafeAreaView, ScrollView } from "react-native";
// import styles from "./style";
// import { Searchbar } from "react-native-paper";
// import { colors } from "../../constants";
// import { Dropdown } from "react-native-element-dropdown";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   requestPersonSearch,
//   onPersonSearchResponse,
// } from "../../redux/actions/personSearchAction";
// import NetInfo from "@react-native-community/netinfo";
// import TabBar from "react-native-underline-tabbar";
// import ScrollableTabView from "react-native-scrollable-tab-view";

// const Page = ({ label }) => (
//   <View style={styles.container}>
//     <Text style={styles.welcome}>{label}</Text>
//     <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
//     <Text style={styles.instructions}>
//       Press Cmd+R to reload,{"\n"}
//       Cmd+D or shake for dev menu
//     </Text>
//   </View>
// );

// const Candidate: FC = ({ navigation }) => {
//   const [searchContact, setSearchContact] = useState("");
//   const data = [
//     { label: "Client", value: "1" },
//     { label: "Vendor", value: "2" },
//     { label: "Candidate", value: "3" },
//   ];

//   const Search = "s";
//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);
//   const [spinner, setSpinner] = useState(false);

//   const dispatch = useDispatch();

//   const personSearchResponse = useSelector(
//     (state) => state.personSearchReducer.personSearchResponse
//   );
//   useEffect(() => {
//     console.log(
//       "personSearchResponse : ",
//       JSON.stringify(personSearchResponse)
//     );

//     const updatePersonSearch = async () => {
//       if (
//         personSearchResponse &&
//         Object.keys(personSearchResponse).length !== 0 &&
//         personSearchResponse.hasOwnProperty("status")
//       ) {
//         if (personSearchResponse?.status === 200) {
//           Alert.alert("Success", personSearchResponse.data.message);
//           navigation.navigate("Today");
//           var setResponse = {};
//           dispatch(onPersonSearchResponse(setResponse));
//         } else {
//           if (personSearchResponse.message) {
//             Alert.alert("Error", personSearchResponse.message);
//           }
//         }
//         setSpinner(false);
//       }
//     };
//     updatePersonSearch();
//   }, [personSearchResponse]);

//   const onPersonSearchSubmit = () => {
//     NetInfo.addEventListener((state) => {
//       if (state.isConnected) {
//         setSpinner(true);
//         dispatch(requestPersonSearch());
//       } else {
//         Alert.alert("Please check your internet connection");
//       }
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.container}>
//           <View style={styles.menuView}>
//             <View style={styles.titleView}>
//               <Text style={styles.headerTextDash}>Candidate</Text>
//             </View>
//           </View>
//            <Searchbar
//             placeholder="Search Person Here"
//             onChangeText={setSearchContact}
//             value={searchContact}
//             style={styles.SearchView}
//             iconColor={"green"}
//             onPress={() => onPersonSearchSubmit()}
//           />

//           {/* <ScrollableTabView
//             tabBarActiveTextColor="black"
//             renderTabBar={() => <TabBar underlineColor="#53ac49" />}
//           > */}
//             <Page tabLabel={{ label: "Candidate" }} label="Company" />
//           {/* </ScrollableTabView> */}
//            <View
//            style={{
//               flexDirection: "row",
//                backgroundColor: colors.GhostWhite,
//              marginVertical: 20,
//             }}
//          > 
//             <Dropdown
//               style={styles.dropdown}
//               placeholderStyle={styles.placeholderStyle}
//               // selectedTextStyle={styles.selectedTextStyle}
//               inputSearchStyle={styles.inputSearchStyle}
//               data={data}
//               // input={input}
//               // maxHeight={300}
//               labelField="label"
//               valueField="value"
//               placeholder={"All Person"}
//               // searchPlaceholder="Mode of interview"
//               value={value}
//               onFocus={() => setIsFocus(true)}
//               onBlur={() => setIsFocus(false)}
//               onChange={(item) => {
//                 setValue(item.value);
//                 setIsFocus(false);
//               }}
//             />
//             <Dropdown
//               style={styles.dropdown}
//               placeholderStyle={styles.placeholderStyle}
//               // selectedTextStyle={styles.selectedTextStyle}
//               inputSearchStyle={styles.inputSearchStyle}
//               data={data}
//               // input={input}
//               // maxHeight={300}
//               labelField="label"
//               valueField="value"
//               placeholder={"Name"}
//               // searchPlaceholder="Mode of interview"
//               value={value}
//               onFocus={() => setIsFocus(true)}
//               onBlur={() => setIsFocus(false)}
//               onChange={(item) => {
//                 setValue(item.value);
//                 setIsFocus(false);
//               }}
//             />
//           </View> 
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Candidate;


import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
 const Company = ({ navigation }) => {
   
        return(  
            <View>  
                <Text>this is profile screen</Text>  
            </View>  
        )  
    }  

    
export default Company;