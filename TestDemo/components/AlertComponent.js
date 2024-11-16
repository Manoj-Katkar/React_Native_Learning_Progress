import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {




  return (
    <View>
      <Text>AlertComponent</Text>
      <Button title='Alert-1' 
       onPress={() => {
        Alert.alert("Invalid Data !");    //one way 
       }}
    />

    <Button title='Alert-2' 
       onPress={() => {
        Alert.alert("Invalid Data !" , "DOB Incorrect !");   //another way to show the nested Message 
       }}
    />



    <Button title='Alert-3' 
       onPress={() => {
        Alert.alert("Invalid Data !" , "DOB Incorrect !" , [
            {
                text:'Cancel',
                onPress:() => {console.log("Cancel Pressed");}
            },

            {
                text:'Ok',
                onPress:() => {console.log("Ok Pressed")}
            } 
        ]);   //another way to show the nested Message and buttons also 
       }}
    />




    </View>
  )
}

export default AlertComponent