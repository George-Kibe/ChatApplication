import { View, Text, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styles from './styles'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const NewmessageButton = () => {
  const navigation = useNavigation()

  const goToContacts = () => {
    navigation.navigate("Contacts")
  }

  return (
    <Pressable onPress={goToContacts} style={styles.container}>
      <MaterialCommunityIcons 
        name="message-reply-text"
        size={32}
        color="white"
      />
    </Pressable>
  )
}

export default NewmessageButton