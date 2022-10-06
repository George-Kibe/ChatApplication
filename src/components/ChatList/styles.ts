import {StyleSheet} from "react-native"


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        padding:10
    },
    avatar:{
      height:60,
      width:60,
      marginRight:10,
      borderRadius:30
    },
    midContainer:{
        justifyContent:"space-between"
    },
    leftContainer:{
        flexDirection:"row"
    },
    rightContainer:{

    },
    username:{
        fontWeight:"bold",
        fontSize:16
    },
    lastMessage:{
        fontSize:16,
        color:"grey"
    },
    timestamp:{
        fontSize:16,
        color:"grey"
    }
  })

export default styles;