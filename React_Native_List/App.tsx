import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Lists from './components/Lists'
import FlatListComponent from './components/FlatListComponent'
import SectionListComponent from './components/SectionListComponent'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <Text style={styles.text}>React Native List App</Text>

      {/* rendering the List Component  */}
      {/* <Lists/> */}


      {/* rendering the FlatList Component (Which is more performance wise better ) */}
      {/* <FlatListComponent/> */}


      {/* learning about the sectionList Inbuild Component */}
      <SectionListComponent/>

      {/* </ScrollView> */}

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    fontSize:30,
    fontWeight:"bold",
    color:"red",
    margin:15

  }
})

export default App