import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Fontisto from "react-native-vector-icons/Fontisto"

const MainTab = createMaterialTopTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';

const TopNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <MainTab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": "#000",
        "tabBarIndicatorStyle": {
          "backgroundColor": "#000",
          "height": 4
        },
        "tabBarStyle": {
          "backgroundColor": "#34B7F1"
        },
        "tabBarShowIcon": true
      }}
    >
      <MainTab.Screen name="Camera" component={HomeScreen} 
        options={{
          tabBarIcon:() => <Fontisto name="camera" size={18}/>,
          tabBarLabel:() => null
        }}
      />
      <MainTab.Screen name="Chats" component={ChatScreen} />
      <MainTab.Screen name="Status" component={HomeScreen} />
      <MainTab.Screen name="Calls" component={SettingsScreen} />
    </MainTab.Navigator>
  )
}

export default TopNavigator