import { Text, StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'
import PokemonCard from './components/PokemonCard'

const App = () => {

  const charmanderData = {
    name: "Charmander",
    image: require('./assets/charmander.png'),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"]
  }


  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.text}>Pokemon-App</Text>

        {/* Insering the PokemonCard  */}
        {/* Now we will spread the all the details of the charmanderData and recieve in PokemonCard as the props */}

        <PokemonCard {...charmanderData} />

        <PokemonCard {...squirtleData} />


        <PokemonCard {...bulbasaurData} />


        <PokemonCard {...pikachuData} />


      </ScrollView>

    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"plum",
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingLeft: Platform.OS === 'android' ? 25 : 0,

  },
  text: {
    fontSize: 20,
    fontWeight: 700
  }
})

export default App