// import { View, Text, StyleSheet, Dimensions } from 'react-native'
// import React, { useEffect, useState } from 'react'


// const App = () => {

//   // create the one state called as the dimensions 

//   const [dimensions , setDimensions] = useState({
//     window:Dimensions.get("window"),   //this will listen to the changes in the device dimensions and update the dimensions accordinglly 
//   })
 
//   //step 3 using useEffect 

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change" , ({window}) => {
//       // this callback will recive one object we are de-structuring the window out of it and that new window I have to set to that Dimension 
//       setDimensions({window});

//       // we will also write the cleanip function while un-mounting this component 
//       return () => {subscription?.remove()}  //step 4 we extract the device width and height from dimension state variable 

//     })
//   })


//   //step 5)  then we will get the height and width using the our state dimensions 

//   const {window} = dimensions;
//   const windowWidth = window.width;
//   const windowHeight = window.height;


//   return (
//     <View style={styles.container}>
//       <View style={[styles.box , {
//             width:windowWidth > 500 ? "70%" : "90%",
//             height:windowHeight > 600 ? "40%" : "90%",
//       }]}>
//         {/* <Text style={styles.text}>Dynamic UI App</Text> */}

//         {/* Now we will set the font size using the  windowWidth and windowHeight*/}

//         <Text style={{fontSize: windowWidth > 500 ? 50 : 24 }}>Dynamic UI App</Text>
  
//       </View>
//     </View>






//   )
// }



// // Now Based On the Device Screen App I am setting the width and height 

// // const windowWidth = Dimensions.get("window").width;
// // const windowHeight = Dimensions.get("window").height;

// // console.log("windowWidth : "  + windowWidth , "windowHeight : " + windowHeight);


// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"center",
//     justifyContent:"center",
//     backgroundColor:"plum"
//   },
//   box:{
//     // width:windowWidth > 500 ? "70%" : "90%",
//     // height:windowHeight > 600 ? "40%" : "90%",
//     backgroundColor:"lightblue",
//     alignItems:"center",
//     justifyContent:"center"
//   },
//   // text:{
//   //   fontSize:windowWidth > 500 ? 50 : 25
//   // }
// })

// export default App
















// Using the useWindowDimensions() getting the height and width of the device user is having to run our application 

import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import WelcomePlatformSpecific from './components/WelcomePlatformSpecific';
import ButtonSpecificPlatform from './components/CustomButtomPlatfromSpecific/ButtonSpecificPlatform';

const App = () => {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

    console.log("windowWidth " + windowWidth , "windowHeight" , + windowHeight);
    

  return (
    
      //   <View style={styles.container}>
      //   <View style={[styles.box , {
      //         width:windowWidth > 500 ? "70%" : "90%",
      //         height:windowHeight > 600 ? "40%" : "90%",
      //   }]}>
      //     {/* <Text style={styles.text}>Dynamic UI App</Text> */}

      //     {/* Now we will set the font size using the  windowWidth and windowHeight*/}

      //     <Text style={{fontSize: windowWidth > 500 ? 50 : 24 }}>Dynamic UI App</Text>

      //   </View>
      // </View>

      

      // learning How to write the platform specific code 

      // <WelcomePlatformSpecific/>



      // Learning Platform Specific Code with file extensions 
      <ButtonSpecificPlatform/>




  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"plum"
  },
  box:{
    backgroundColor:"lightblue",
    alignItems:"center",
    justifyContent:"center"
  },

})



export default App