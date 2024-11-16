import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const BorderInReactNative = () => {
  return (
    <View>
      <Text>BorderInReactNative</Text>

      {/*  */}



        <TouchableOpacity style={styles.Btn}>
            <Text>Button-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn}>
            <Text>Button-2</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.Btn}>
            <Text>Button-3</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    Btn:{
        width:"30%",
        justifyContent:"center",
        alignItems:"center",
        fontSize:15,
        margin:10,
        padding:10,
        marginLeft:120,
        borderWidth:2,
        borderColor:"red",
        borderStyle:"dashed",
        borderRadius:10

    }
})

export default BorderInReactNative