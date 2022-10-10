import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        margin:10,
        height:50,
        // justifyContent:"center"
    },
    mainContainer:{
        flexDirection:"row",
        backgroundColor:"white",
        padding:5,
        borderRadius:25,
        marginRight:10,
        flex:1,
        alignItems:"center",
        justifyContent:"center"

    },
    buttonContainer:{
        backgroundColor:"#ADD8E6",
        borderRadius:50,
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:'center'
    },
    textInput:{
        flex:1,
        marginHorizontal:10,
        fontSize:20
    },
    icon:{
        marginHorizontal:5
    }
})

export default styles