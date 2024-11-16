import { View, Text, Alert, Platform } from 'react-native'
import React from 'react'
import CustomButtom from './CustomButtom.ios'
import CustomButton from './CustomButton.android'

const ButtonSpecificPlatform = () => {
  return (
    <View style={{flex:1}}>
      <Text>ButtonSpecificPlatform</Text>

        {/* I Have TO Check the Platform First then I Have to Do The Rendering Accordinglly Using the Platform API  */}

      {Platform.OS === 'ios' ? <CustomButtom title="IOS Button" onPressHandle={() => Alert.alert("Text Pressed !")}/> :
      <CustomButton title="Android Button" onPressHandle={() => Alert.alert("Text Pressed !")}/>}
    </View>
  )
}

export default ButtonSpecificPlatform