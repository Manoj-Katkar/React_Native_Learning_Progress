import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'




const logoImage = require("../assets/tiger.jpg");


const ImageComponent = () => {
  return (
    <View>
      <Text>ImageComponent</Text>

      {/*Inserting the image present in the local machine  */}
      {/* <Image source={logoImage}
      style={{ width: 300, height: 300 }}
      ></Image> */}

      {/* Inserting the Image using the network calls */}
      {/* Source will take it as the number that will point towards the original image means its like the object only */}
      {/* <Image source={{uri:"https://picsum.photos/id/237/200/300"}}
              style={{width: 300, height: 300}}
      /> */}


      {/* How to setup the background Image in React native  */}
      <ImageBackground source={logoImage} style={{flex:1}}>
         <Text>Image Text present above the background Image </Text>        
      </ImageBackground>


    </View>
  )
}

export default ImageComponent