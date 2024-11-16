import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const StatusBarForAndroid = () => {
  return (
    <View>
      <Text>StatusBar</Text>

      <StatusBar backgroundColor="red" barStyle="dark-content"/>

    </View>
  )
}

export default StatusBarForAndroid