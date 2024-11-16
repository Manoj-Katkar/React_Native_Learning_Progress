import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPressHandle , title}) => {

    console.log("onPressHandle" , onPressHandle);
    console.log("title" , title);

  return (
    <Pressable
            onPress={onPressHandle}
            style={{
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"lightblue",
                borderRadius:20,
                padding:10,
                marginTop:10
            }}
    >
        <Text style={{color:"purple" , fontSize:18}}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton