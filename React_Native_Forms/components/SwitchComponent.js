import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const SwitchComponent = () => {

    const [isDarkMode , setIsDarkMode] = useState(false);

    const handleDarkMode = () => {
        setIsDarkMode((previousState) => !previousState);
    }

  return (

    // Note : we can give the styling based on the dynamic variable value changes in the UI witing the jsx becasue StyleSheet gets renders At first (Means At once Only)

    <View style={[styles.switchContainer , {backgroundColor:isDarkMode? "black" : "white"}] }>

      <Text style={[styles.text , { color: isDarkMode ? 'white' : 'black' }]}>Dark Mode</Text>

      <Switch value={isDarkMode} onValueChange={handleDarkMode} 

            // Adding the style 
            style={{ transform: [{ scale: 1.5 }] }} // Increase size by 1.5 times

            // We Can Use Track Color to set the trackcolor for differant state 
            trackColor={{false:"767577" , true:"red"}}    // changes the color on the insider part of the switch 

            thumbColor="yellow"     //color of the circular part of the switch 
      />


    </View>
  )
}

const styles = StyleSheet.create({
    switchContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between", 
        paddingHorizontal:10,
        padding:50
        

    },
    text:{
        fontSize:20
    }
})

export default SwitchComponent