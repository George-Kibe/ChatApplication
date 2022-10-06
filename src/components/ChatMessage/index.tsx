import { View, Text } from 'react-native'
import React from 'react'
import moment from "moment"
import { Message } from '../types'

export type ChatMessageTypes ={
    message : Message
}

const ChatMessage = (props:ChatMessageTypes) => {
  const {message} = props
  return (
    <View>
      <View>
        <Text>{message.user.name}</Text>
        <Text>{message.content}</Text>
        <Text>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  )
}

export default ChatMessage