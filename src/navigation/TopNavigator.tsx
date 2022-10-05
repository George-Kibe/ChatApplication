import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const MainTab = createMaterialTopTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TopNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <MainTab.Navigator
      screenOptions={{
        "tabBarStyle": {
          "backgroundColor": "#34B7F1"
        },
      activeTintColor:"#000",
      indicatorStyle:{
        backgroundColor:""
      }
      }}
    >
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Settings" component={SettingsScreen} />
    </MainTab.Navigator>
  )
}

export default TopNavigator