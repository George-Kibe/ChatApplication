import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { ChatRoom } from '../types'
import styles from './styles'
import moment from "moment"
export type ChatListProps ={
    chatRoom:ChatRoom
}

const ChatList = (props:ChatListProps) => {
  const {chatRoom} = props
  const user = chatRoom.users[1]
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{uri:chatRoom.users[1].imageUri}} style={styles.avatar}/>
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>      
      <Text style={styles.timestamp}>
        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
    </View>
  )
}

export default ChatList


