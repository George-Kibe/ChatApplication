import { View, Text, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import ChatMessage from '../components/ChatMessage'
import chats from '../assets/Chats'
import BG from "../assets/BG.png"
import InputBox from '../components/InputBox'

const ChatRoomScreen = () => {
  const route = useRoute()
  const id = route.params.id
  
  return (
    <ImageBackground 
    style={{
      width:"100%",
      height:"100%"
    }}
    source={BG}
    >    
      <FlatList 
        data={chats.messages}
        renderItem={({item}) => <ChatMessage message={item}/>}
        inverted
      />
      <InputBox />
    </ImageBackground>
  )
}

export default ChatRoomScreen