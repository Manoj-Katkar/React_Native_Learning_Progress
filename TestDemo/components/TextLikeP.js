import { View, Text } from 'react-native'
import React from 'react'

const TextLikeP = () => {
  return (
    <View>
      <Text style={{fontSize:20,
        fontWeight:20,
        margin:10
      }}>This Is equivalent to Writing the Text using <Text style={{
        color:"red"
      }}>p , span in React Dom</Text> </Text>
    </View>
  )
}

export default TextLikeP