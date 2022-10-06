import { View, Text, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
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
  const navigation = useNavigation()

  const goToChat = () =>{
    //console.warn(user.name)
    navigation.navigate("ChatRoom", {
      id:chatRoom.id,
      username:user.name
    })
  }
  return (
    <Pressable onPress={goToChat} style={styles.container}>
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
    </Pressable>
  )
}

export default ChatList


