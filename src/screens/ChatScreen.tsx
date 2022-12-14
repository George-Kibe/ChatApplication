import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'
import ChatRooms from '../assets/ChatRooms'
import NewmessageButton from '../components/NewMessageButton'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={ChatRooms}
        renderItem = {({item}) => <ChatList chatRoom={item}/> }
        keyExtractor={(item) => item.id}
      />
      <NewmessageButton />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})

export default ChatScreen