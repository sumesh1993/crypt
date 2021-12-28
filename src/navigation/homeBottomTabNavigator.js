import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        tabStyle: {
          backgroundColor: "#000",
        },
        activeTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name={"home"} size={22} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name={"Search"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name={"search1"} size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Upload"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"upload-file"} size={29} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={"Inbox"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name={"inbox"} size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Profile"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"user-o"} size={22} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
