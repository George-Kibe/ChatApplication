import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
const Stack = createStackNavigator();

import SettingsScreen from '../screens/SettingsScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import BottomNavigator from './BottomNavigator';
import TopNavigator from './TopNavigator';
import { View, StyleSheet } from 'react-native';

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:"#34B7F1",
                shadowOpacity:0,
                elevation:0
            },
            headerTintColor:"white"
        }}>
            <Stack.Screen name="Home Navigation" 
                options={{
                    title:"ChatApp",
                    headerRight: () =>(
                        <View style={styles.iconsView}>
                            <FontAwesome name="search" size={22} color="white" />
                            <Entypo name="dots-three-vertical" size={22} color="white" />
                        </View>
                    )
                }} 
                component={TopNavigator}
            />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Contacts" component={ContactsScreen} />
            <Stack.Screen name="ChatRoom" component={ChatRoomScreen} 
                options={({route}) => ({
                    title:route.params.username,
                    headerRight: () =>(
                        <View style={[styles.iconsView, {width:100}]}>
                            <Ionicons name="call" size={22} color="white" />
                            <FontAwesome name="video-camera" size={22} color="white" />
                            <Entypo name="dots-three-vertical" size={22} color="white" />
                        </View>
                    )
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>    
  )
}
const styles = StyleSheet.create({
    iconsView:{
        flexDirection:"row",
        width:60,
        justifyContent:"space-between",
        marginRight:10
    }
})

export default Router