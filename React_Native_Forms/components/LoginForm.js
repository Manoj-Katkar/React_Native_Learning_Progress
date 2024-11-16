import { View, Text, StyleSheet, TextInput, Button, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {

    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");

    const [isErrors , setIsErrors] = useState({});



    const handleLogin = () => {

        if(validateForm()){
            console.log("userName : " , userName);
            console.log("password : " , password);
    
            // Make Sure after submiting the form data will be empty 
            setUserName("");
            setPassword("");
            setIsErrors({});
        }




    }

    const validateForm = () => {

        let errors = {}

        if(!userName){
            errors.userName = "UserName Is Required"
        }

        if(!password){
            errors.password = "Password Is Required"
        }


        //  The I have to update the error state 
        setIsErrors(errors);


        return Object.keys(errors).length === 0;



    }

  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100} style={styles.container}>
      <View style={styles.form}>

        <Image source={require("../assets/google_logo.png")}  style={styles.image}/>

        <Text style={styles.label}>UserName : </Text>

        {/* here for userName I will check for the errors  */}
        {
            isErrors.userName ? <Text style={styles.errorText}>{isErrors.userName}</Text> : null
        }

        <TextInput
            placeholder='Enter Your userName'
            style={styles.inputText}

            value={userName}

            onChangeText={(userName) => {
                setUserName(userName)
            }}

        />


        <Text style={styles.label}>Password : </Text>

        {/* here for password I will check for the errors  */}
        {
            isErrors.password ? <Text style={styles.errorText}>{isErrors.password}</Text> : null
        }


        <TextInput
            placeholder='Enter Your Password'

            secureTextEntry   //for password should be hidden 
            style={styles.inputText}

            value={password}

            onChangeText={(password) => {
                setPassword(password)
            }}


        />

        <Button
            title='login' 
            onPress={handleLogin}
        />

      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:20,
        backgroundColor:"#f5f5f5"
    },
    form:{
        backgroundColor:"white",
        padding:20,
        borderRadius:10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:"bold"

    },
    inputText:{
        height:40,
        borderColor:"#ddd",
        borderWidth:1,
        marginBottom:15,
        padding:10,
        borderRadius:5
    },
    image:{
        width:300,
        height:100,
        marginBottom:50
    },
    errorText:{
        color:"red",
        marginBottom:10
    }


})

export default LoginForm