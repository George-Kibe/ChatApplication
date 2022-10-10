import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ContactList from '../components/ContactList'
import Users from '../assets/Users'

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={Users}
        renderItem = {({item}) => <ContactList user={item}/> }
        keyExtractor={(item) => item.id}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})

export default ContactsScreen