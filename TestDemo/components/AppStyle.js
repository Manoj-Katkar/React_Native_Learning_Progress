import { ScrollView, StyleSheet, View} from 'react-native'
import React from 'react'
import SingleStyle from './SingleStyle'
import MultipleStyles from './MultipleStyles'
import Box_Model from './Box_Model'
import BorderInReactNative from './BorderInReactNative'
import BoxShadow from './BoxShadow'
import FlexBox from './FlexBox'


const AppStyle = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.ViewContainer}>


      

        {/* How to Apply the Style using the StyleSheet */}
        {/* <SingleStyle/> */}


        {/* In StyleSheet How to Create the Differant Styles for differant Inbuild Components  */}
        {/* <MultipleStyles/> */}


        {/* Understanding How th Box Model Works In React Native  */}
        {/* <Box_Model/> */}


        {/* Understanding How Border Works In React Native  */}
        {/* <BorderInReactNative/> */}

        {/* Understanding How Box-Shadow Property of Style works  */}
        {/* <BoxShadow/> */}


        {/* Understanding How Flex-Box Works In React Native */}
        
        {/* differnat width with flex it is taking  */}
        {/* <FlexBox style={{backgroundColor:"brown" , flex:1}}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"#0000FF" , flex:3}}>FlexBox - 2</FlexBox> */}

        {/* <FlexBox style={{backgroundColor:"brown" , alignSelf:"flex-start"}}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"brown" , alignSelf:"flex-start"}}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"brown" , alignSelf:"flex-start"}}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"brown" , alignSelf:"flex-start"}}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"brown" , alignSelf:"flex-start"}}>FlexBox - 1</FlexBox> */}

        {/* <FlexBox style={{backgroundColor:"#0000FF" , alignSelf:"flex-end"}}>FlexBox - 2</FlexBox>
        <FlexBox style={{backgroundColor:"#008000" , alignSelf:"center"}}>FlexBox - 3</FlexBox>
        <FlexBox style={{backgroundColor:"#FFFF00" , alignSelf:"stretch"}}>FlexBox - 4</FlexBox>
        <FlexBox style={{backgroundColor:"#800080" , alignSelf:"baseline"}}>FlexBox - 5</FlexBox> */}
        {/* <FlexBox style={{backgroundColor:"#FFA500"}}>FlexBox - 6</FlexBox> */}


        {/* For Learning of the flexBasis  */}


        {/* <FlexBox style={{backgroundColor:"brown" }}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"brown" }}>FlexBox - 2</FlexBox>
        <FlexBox style={{backgroundColor:"brown" , flexBasis:200 , flex:1}}>FlexBox - 3</FlexBox>
        <FlexBox style={{backgroundColor:"brown" , height:200 , flex:1}}>FlexBox - 4</FlexBox>
        <FlexBox style={{backgroundColor:"brown"}}>FlexBox - 5</FlexBox> */}




        {/* For learning of the How Flex-Shrink Works  */}
        {/* <FlexBox style={{backgroundColor:"#0000FF"  , flexShrink:1}}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"#FFA500" , flexShrink:1}}>FlexBox - 2</FlexBox> */}










      {/* For Learning the Flex-Grow  */}
        
        {/* Added to the each flexbox rather we can add it once for each FlexBox under Box Style from StyleSheet  */}
        
        {/* <FlexBox style={{backgroundColor:"#FFA500" ,  flexGrow:1}}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"#0000FF" ,  flexGrow:1}}>FlexBox - 2</FlexBox>
        <FlexBox style={{backgroundColor:"#008000" ,  flexGrow:1}}>FlexBox - 3</FlexBox>
        <FlexBox style={{backgroundColor:"#FFFF00" ,  flexGrow:1}}>FlexBox - 4</FlexBox>
        <FlexBox style={{backgroundColor:"#800080" ,  flexGrow:1}}>FlexBox - 5</FlexBox>
        <FlexBox style={{backgroundColor:"#FFA500" ,  flexGrow:1}}>FlexBox - 6</FlexBox> */}





        {/* <FlexBox style={{backgroundColor:"#FFA500" }}>FlexBox - 1</FlexBox>
        <FlexBox style={{backgroundColor:"#0000FF" }}>FlexBox - 2</FlexBox>
        <FlexBox style={{backgroundColor:"#008000" }}>FlexBox - 3</FlexBox>
        <FlexBox style={{backgroundColor:"#FFFF00" }}>FlexBox - 4</FlexBox>
        <FlexBox style={{backgroundColor:"#800080" }}>FlexBox - 5</FlexBox>
        <FlexBox style={{backgroundColor:"#FFA500"}}>FlexBox - 6</FlexBox> */}

        




      {/* ============================================ date : 06/11/2024 ==================================== */}


      {/* How the positions Work In the React Native (relative By-defalt position) */}

        {/* <FlexBox style={[{backgroundColor:"#FFA500" } , styles.Box , {top:100,left:100}]}>Box - 1</FlexBox>
        <FlexBox style={[{backgroundColor:"#0000FF" } , styles.Box]}>Box - 2</FlexBox>
        <FlexBox style={[{backgroundColor:"#008000" } , styles.Box , {top:100,left:100}]}>Box - 3</FlexBox>
        <FlexBox style={[{backgroundColor:"#FFFF00" } , styles.Box]}>Box - 4</FlexBox>
        <FlexBox style={[{backgroundColor:"#800080" } , styles.Box , {top:100,left:100}]}>Box - 5</FlexBox> */}


      {/* How the positions Work In the React Native (absolute)  */}

        <FlexBox style={[{backgroundColor:"#FFA500" , color:"black"} ] }>Box - 1</FlexBox>
        <FlexBox style={[{backgroundColor:"#0000FF" , color:"black"}  ]}>Box - 2</FlexBox>
        <FlexBox style={{backgroundColor:"#008000" , color:"black"}  }>Box - 3</FlexBox>
        <FlexBox style={{backgroundColor:"#FFFF00" , color:"black"} }>Box - 4</FlexBox>
        <FlexBox style={[{backgroundColor:"#800080" , color:"black"} , {position:"absolute" , top:10 , left:10}]}>Box - 5</FlexBox>





    </View>

    </ScrollView>
  )
}

// creating the StyleSheet API for the getting the depth Understanding of the FlexBox 

const styles = StyleSheet.create({
  container:{
    // flex:1,
    // flexDirection:"column",
    // justifyContent:"flex-start",
    // justifyContent:"flex-end",
    // justifyContent:"center",
    // justifyContent:"space-around",
    // justifyContent:"space-between",
    // justifyContent:"space-evenly",
    // marginTop:64,
    // alignItems:"flex-start",
    // alignItems:"flex-end",
    // alignItems:"center",

    // height:210,
    // flexWrap:"wrap",
    // flexWrap:"no-wrap",
    // flexWrap:"wrap-reverse",


    //alignContent:"flex-start",  //no change 
    // alignContent:"flex-start",
    // alignContent:"center",


    // borderWidth:6,
    // borderColor:"red",
    // rowGap:20,
    // columnGap:30,
    // gap:5,
    // padding:30



    // For learning flexShrink 
    // flex:1,
    // flexDirection:"row",
    // alignItems:"flex-start",
    // marginTop:20,
    // borderWidth:3,
    // borderColor:"red",
    // width:250





    // For Learning the flex-grow 
    flex:1,
    borderWidth:5,
    borderColor:"red",



  },
  Box:{
    height:30,
    width:80,
    margin:10,
    padding:30,
    color:"black"
  },
  ViewContainer:{
    flex:1,
    borderWidth:15,
    borderColor:"yellow",
  }
})

export default AppStyle