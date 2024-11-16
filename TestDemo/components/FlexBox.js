import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlexBox = ({children , style}) => {
  // console.log("children ", children);
  // console.log("style" , style);
  
  return (
    <View style={[styles.box  , style]}>
      <Text style={[styles.text , style]}>{children}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    box:{
        flexGrow:1,
        height:30,
        width:80,
        margin:10,
        padding:30,
    },
    text:{
        fontSize:10,
        fontWeight:"bold",
        textAlign:"center",
    }
})

export default FlexBox