import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingActivityIndicator = () => {
  return (
    <View>
      <Text>LoadingActivityIndicator</Text>
      <ActivityIndicator/>     {/* By default it will have the size as the small */}

      <ActivityIndicator size="large"/>    {/* it will increase the size of the loader */}   
      
      <ActivityIndicator size="large" color="midnightblue"/>

      <ActivityIndicator size="large" color="midnightblue" animating={false}/>  {/*this will track it should get shown on the UI or Not */}    
      

      
    </View>
  )
}

export default LoadingActivityIndicator