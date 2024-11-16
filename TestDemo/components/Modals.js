import { View, Text, Modal, Button } from 'react-native'
import React, { useState } from 'react'

const Modals = () => {

  // creating the one state for the modal visibility 
  const [isVisible , setIsVisible] = useState(false);     //because at first the modal will be not visible to the user 


  const handlePress = ( ) => {
    console.log('Button is Clicked');
    setIsVisible(false);
    
  }
  return (
    <View style={{flex:1 , backgroundColor:"lightblue"  , padding:60}}>
      {/* <Text>Modals</Text> */}
      <Button
       title='Press-To-View-Modal'
       style={{width:40}}
       onPress={() => {
        setIsVisible(true);
       }}
      />
      

    {/*  Creating the modal */}

    <Modal visible={isVisible}                                 //this will keep track whether to display the modal or not 
    
            onRequestClose={() => {setIsVisible(false)}}       //when the user will press back button it will work 
            // animationType='slide'                               //this modal will come from the bottom in slide fashion 
            animationType='fade'                                 //it is like open with some cool effect fadeIn and fadeOut 
            // presentationStyle='pageSheet'
            presentationStyle='fullScreen'                       //it will maintain the apperance to display 
    >
        <View style={{flex:1 , backgroundColor:"lightblue"  , padding:60}}>
          <Text>Modal Content</Text>

          <Button title='Close' 
          onPress={handlePress}
          color="midnightblue"
          />
        </View>

    </Modal>


    </View>

    
  )
}

export default Modals