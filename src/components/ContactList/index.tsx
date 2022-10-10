import { View, Text, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { User } from '../types'
import styles from './styles'
import moment from "moment"

export type ContactListProps ={
    user:User
}

const ContactList = (props:ContactListProps) => {
  const {user} = props
  const navigation = useNavigation()

  const goToChat = () =>{
    //console.warn(user.name)
    navigation.navigate("ChatRoom", {
      username:user.name
    })
  }
  return (
    <Pressable onPress={goToChat} style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{uri:user.imageUri}} style={styles.avatar}/>
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.status}>{user.status}</Text>
        </View>
      </View>      
    </Pressable>
  )
}

export default ContactList


