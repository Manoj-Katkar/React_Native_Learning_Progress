import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MultipleStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstTextStyle}>MultipleStyles 1</Text>
      <Text style={styles.secondTextStyle}>MultipleStyles 2</Text>
      <Text style={styles.thirdTextStyle}>MultipleStyles 3</Text>
      <Text style={styles.fourthTextStyle}>MultipleStyles 4</Text>

    </View>
  )
}

const styles  = StyleSheet.create({
    container:{flex:1, backgroundColor:"plum" , padding:50},
    firstTextStyle:{fontSize:10 , color:"purple"},
    secondTextStyle:{fontSize:20 , color:"red"},
    thirdTextStyle:{fontSize:30 , color:"pink"},
    fourthTextStyle:{fontSize:40 , color:"black"},
})

export default MultipleStyles