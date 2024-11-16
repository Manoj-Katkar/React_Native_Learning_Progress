import {Text, StyleSheet, View, Platform, Image } from 'react-native'
import React from 'react'


const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};




  


const PokemonCard = (props) => {

    // here de-structure the props 
    let {
            name , 
            image , 
            type , 
            hp , 
            moves , 
            weakness
                        } = props;

    // Now According to the type I want to show the emojie related to that with differant borderColor 
    const {borderColor , emoji} = getTypeDetails(type);    //destructuring 


  return (



    <View style={styles.card}>
        
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>❤️{hp}</Text>
        </View>


        <Image source={image} style={styles.image}

                resizeMode='contain'
        
        />





        <View style={styles.typeContainer}>
            <View style={[styles.badge , {borderColor:`${borderColor}`}]}>
                <Text style={styles.typeEmoji}>{emoji}</Text>
                <Text style={styles.typeText}>{type}</Text>

            </View>
        </View>



        <View>

            <View style={styles.moveContainer}>
                {/* In JavaScript, the join() method is used to join all the elements of an array into a single string, with a specified separator between the elements. */}

                <Text style={styles.moveText}>Moves :  {moves.join(", ")}</Text>

            </View>


            <View style={styles.weaknessContainer}>
                {/* In JavaScript, the join() method is used to join all the elements of an array into a single string, with a specified separator between the elements. */}

                <Text style={styles.weaknessText}>Weakness :  {weakness.join(", ")}</Text>

            </View>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontWeight:600,
        fontSize:20,
        color:"red"
    },
    card:{
        backgroundColor:"white",
        borderRadius:16,
        borderWidth:3,
        padding:16,
        margin:16,

        // Now Implementing the shadow effect to the each platform differantlly 
        ...Platform.select({
            ios:{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,
                
            },
            android:{
                shadowColor: "red",
                shadowOffset: {
                    width: 2,
                    height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,
                elevation: 18,

            }
        }),
    },
    image:{
        width:"100%",
        height:150,
        marginBottom:16,
        

        
    },
    nameContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:32,
    },
    name:{
        fontSize:30,
        fontWeight:"bold"
    }, 
    hp:{
        fontSize:32,

    },
    typeContainer:{
        alignItems:"center",
        marginBottom:40
    },
    badge:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:6,
        paddingHorizontal:12,
        borderRadius:20,
        borderWidth:4
    },
    typeEmoji:{
        fontSize:30,
        marginRight:12

    },
    typeText:{
        fontSize:22,
        fontWeight:"bold"
    },
    moveContainer:{
        marginBottom:16,
    },
    moveText:{
        fontSize:22,
        fontWeight:"bold"
    },
    weaknessContainer:{
        marginBottom:8,
    },
    weaknessText:{
        fontSize:22,
        fontWeight:"bold"
    }

})

export default PokemonCard