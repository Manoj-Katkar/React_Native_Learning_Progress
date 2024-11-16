import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Box_Model = () => {
  return (
    <View style={styles.container}>

        <View style={styles.box}>
            <Text >Box_Model-1</Text>
        </View>

        <View style={styles.box}>
            <Text>Box_Model-2</Text>
        </View>


    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"aqua",
        justifyContent:"center",
        alignItems:"center"
    },
    box:{
        height:"25%",
        width:"25%",
        backgroundColor:"orange",
        margin:10,
        // padding:20,
        paddingHorizontal:10,
        paddingVertical:30

        // Same we can do for the margin also like marginHorizontal and marginVertical also 

        

    }
})

export default Box_Model