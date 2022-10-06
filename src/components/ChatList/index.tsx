import { View, Text } from 'react-native'
import React from 'react'
import { ChatRoom } from '../types'
import styles from './styles'


export type ChatListProps ={
    chatRoom:ChatRoom
}

const ChatList = (props:ChatListProps) => {
    const {chatRoom} = props
  return (
    <View>
      <Text>{chatRoom.lastMessage.content}</Text>
    </View>
  )
}

export default ChatList