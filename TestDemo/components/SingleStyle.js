import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SingleStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextChanges}>AppStyle </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{flex:1 , backgroundColor:"plum" , padding:50},
    TextChanges : {fontSize:20}
})


export default SingleStyle