import { View, Text, TextInput , Pressable} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const InputBox = () => {
  const [message, setMessage] = useState("")
  
  const onMicrophonepress = () =>{
    console.warn("Microphone pressed!")
  }
  const onSendPress = () => {
    console.warn(`sending: ${message}`)
    setMessage("")//clear the inputbox
  }
  const onPress = () => {
    if (!message){
        onMicrophonepress()
    }else{
        onSendPress()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput style={styles.textInput}
        placeholder={"Type a message"}
         multiline
         value={message}
         onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} /> }
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {
            !message? <MaterialCommunityIcons name="microphone" size={24} color="white" />
            : <MaterialIcons name="send" size={24} color="white" />
        }
        
      </Pressable>
    </View>
  )
}

export default InputBox