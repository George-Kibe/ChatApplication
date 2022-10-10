import { View, Text } from 'react-native'
import React from 'react'
import moment from "moment"
import { Message } from '../types'
import styles from './styles'

export type ChatMessageTypes ={
    message : Message
}

const ChatMessage = (props:ChatMessageTypes) => {
  const {message} = props

  const isMyMessage = () => {
    return message.user.id === "u1";
  }
  return (
    <View style={styles.container}>
      <View style={[styles.messageBox,
      {
        backgroundColor: isMyMessage() ? "#ADD8E6" : "#e7e7e7",
        marginLeft: isMyMessage() ? 50 : 0,
        marginRight: isMyMessage() ? 0 :50
      }
      ]}>
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  )
}

export default ChatMessage