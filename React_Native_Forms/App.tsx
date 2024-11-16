import { View, Text, SafeAreaView, TextInput, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import TextTO_TextArea from './components/TextTO_TextArea';
import SwitchComponent from './components/SwitchComponent';
import LoginForm from './components/LoginForm';



const App = () => {

  let [name , setName] = useState("");


  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      
      {/* Now to take the input from the user use TextInput */}
      {/* TextInput With its Props  */}

      {/* <TextInput style={styles.input}

                value={name}

                onChangeText={(text)=>setName(text)}  //adding the event 

                placeholder='enter email'     //to show to user before entering the actual text 

                secureTextEntry={true}            //it will hide the data from the user 

                // secureTextEntry={false}           //it will hide the data from the user 

                keyboardType='numeric'           //means numeric keyboard will be appear when user will click on text (it takes differant values )

                // by-default every character of the first word will become the capital so restrict that behaviour I have to turn it off 
                
                autoCapitalize='none'                //it also takes the differant values refer to that too 

              
                
      /> */}


      {/* Rendering the Large Text Area Using the TextInput Inbuild Component */}

      {/* <TextTO_TextArea/> */}





      {/* To View the Text Entered By the user  */}
      {/* <Text style={styles.text}>My Name is {name} </Text> */}


      {/* Learning How to use the Switch  (Another Way Of the Taking the input In React Native) */}
      {/* <SwitchComponent/> */}



      {/*  Learning How To Create the Login Form In React Native */}
      <LoginForm/>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaViewContainer:{
    flex:1,
    backgroundColor:"#fff",
    paddingTop:StatusBar.currentHeight,
  },
  input:{
    height:40,
    margin:12,
    padding:10,
    borderWidth:1
  },
  text:{
    fontSize:30,
    padding:10,
    marginTop:50
  }
})

export default App