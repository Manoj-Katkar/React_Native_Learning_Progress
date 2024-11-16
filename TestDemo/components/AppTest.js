import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ViewLikeDiv from './ViewLikeDiv';
import TextLikeP from './TextLikeP';
import ImageComponent from './ImageComponent';
import Scroll_View from './Scroll_View';
import ButtonComponent from './ButtonComponent';
import PressableComponent from './PressableComponent';
import Modals from './Modals';
import StatusBarForAndroid from './StatusBarForAndroid';
import LoadingActivityIndicator from './LoadingActivityIndicator';
import AlertComponent from './AlertComponent';

const AppTest = () => {
  return (
    <View style={styles.container}>
      <Text>First React Native App</Text>


      {/* learing View How it works  */}
      {/* <ViewLikeDiv/> */}

      {/* How Text Component Works  */}
      {/* <TextLikeP/> */}


      {/* Learning How to add the Images */}
      {/* <ImageComponent/> */}


      {/* Learning How Scroll View Works  */}
      {/* <Scroll_View/> */}


      {/* How Buttons Works In React Native */}
      {/* <ButtonComponent/> */}


      {/* How differant pressable user interaction how to handle like `onPress`, `onPressIn`, `onPressOut`, and `onLongPress` */}
      {/* <PressableComponent/> */}



      {/* How to show the modals  */}
      {/* <Modals/> */}


      {/* How to handle the status Bar which is only desined for the android */}
      {/* <StatusBarForAndroid/> */}


      {/* How to show the activity Loading Indicator To the User when internally in the our application we are doing some heavy task  */}
      {/* <LoadingActivityIndicator/> */}


      {/* How to Give the Alert In React - Native (Alert is the component) */}
      <AlertComponent/>
      
    </View>
  )
}


//here we give the style also in the object format 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"aqua",
        alignItems:"center",
        justifyContent:"center",
        margin:"2rem"
    },
});


export default AppTest