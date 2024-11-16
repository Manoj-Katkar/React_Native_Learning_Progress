import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxShadow = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={[ styles.shadow1 , styles.shadowBox ]}>
            <Text style={styles.textFont}>BoxShadow - 1</Text>
        </View>

        <View style={[styles.shadow2 , styles.shadowBox]}>
            <Text style={styles.textFont}>BoxShadow - 2</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"transparent",
        color:"black",
        fontWeight:20
    },
    shadow1:{
        margin:10,
        padding:10,
        backgroundColor:"white",
        width:250,
        height:250
    },
    shadow2:{
        margin:10,
        padding:10,
        backgroundColor:"white",
        width:250,
        height:250
    },
    textFont:{
        fontSize:15
    },
    shadowBox:{    //this will work for the IOS but For the Android We Have to use the elevation Property 
        shadowColor:"red",
        shadowOffset:{
            // it will take the two arguments 
            width:0,
            height:11,
        },
        shadowOpacity:0.57,          //this sets the transperancy of the of the shadow 
        shadowRadius:15.19,           //this accept the number to set the blur radius
        elevation: 23 ,               //this is also used because this shadow should get applied to the android plaform application also 



    },
    androidShadow:{
        elevation:15,
    }
})

export default BoxShadow