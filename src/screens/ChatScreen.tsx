import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'
import ChatRooms from '../assets/ChatRooms'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatList chatRoom={ChatRooms[0]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})

export default ChatScreen