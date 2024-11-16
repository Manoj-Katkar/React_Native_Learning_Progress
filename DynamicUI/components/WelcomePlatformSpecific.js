import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const WelcomePlatformSpecific = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>
                        Welcome !
                </Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeContainer : {
        flex:1,
        backgroundColor:"plum",
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        flex:1,
        backgroundColor:"plum",
        justifyContent:"center",
        alignItems:"center"
    },
    box:{
        width:300,
        height:300,
        backgroundColor:"aqua"
    },
    text:{
        ...Platform.select({
            ios:{
                fontSize:50,
                color:"red"
            },
            android:{
                fontSize:50,
                color:"magenta"
            }
        }),
        fontWeight:50
    }
    
})

export default WelcomePlatformSpecific