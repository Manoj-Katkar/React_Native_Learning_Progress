import { View, Text , useWindowDimensions } from 'react-native'
import React from 'react'



const UseWindowDimensionsDynamic = () => {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  
  return (
    <View style={styles.container}>
      <View style={[styles.box , {
            width:windowWidth > 500 ? "70%" : "90%",
            height:windowHeight > 600 ? "40%" : "90%",
      }]}>
        {/* <Text style={styles.text}>Dynamic UI App</Text> */}

        {/* Now we will set the font size using the  windowWidth and windowHeight*/}

        <Text style={{fontSize: windowWidth > 500 ? 50 : 24 }}>Dynamic UI App</Text>
  
      </View>
    </View>
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

export default UseWindowDimensionsDynamic