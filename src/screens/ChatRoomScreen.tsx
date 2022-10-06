import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ChatRoomScreen = () => {
  const route = useRoute()
  const id = route.params.id
  
  return (
    <View>
      <Text>ChatRoomScreen</Text>
    </View>
  )
}

export default ChatRoomScreen