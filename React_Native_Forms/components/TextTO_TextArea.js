import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const TextTO_TextArea = () => {
  
  return (
    <View>
      <TextInput style={[styles.input , styles.multilineText]}

                  placeholder='Enter Message'   //note : in android for multiline text placeholder will be along the main axis it will be in the center position 
                  
                  multiline                   //this will change the TextItem to the mutiline text 
                  
                  textAlignVertical='top'   //this will set the placeholder message to the top 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    height:40,
    margin:12,
    padding:10,
    borderWidth:1
  },
  multilineText:{
    minHeight:100,

  }
})

export default TextTO_TextArea