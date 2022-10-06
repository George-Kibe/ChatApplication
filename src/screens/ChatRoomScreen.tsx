import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import ChatMessage from '../components/ChatMessage'
import chats from '../assets/Chats'


const ChatRoomScreen = () => {
  const route = useRoute()
  const id = route.params.id
  
  return (
    <FlatList 
      data={chats.messages}
      renderItem={({item}) => <ChatMessage message={item}/>}
    />
  )
}

export default ChatRoomScreen