import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import FetchDataUsingAxios from './components/FetchDataUsingAxios'

const App = () => {
  return (
    <View style={styles.container}>

      <FetchDataUsingAxios/>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop: StatusBar.currentHeight || 0,  // Fallback to 0 if currentHeight is undefined
  }
})

export default App