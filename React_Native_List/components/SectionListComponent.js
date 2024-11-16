import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'

import groupedPokemonList from '../grouped-data.json'

const SectionListComponent = () => {
  return (
    <View >
      {/* <Text>SectionList</Text> */}

      {/* its takes the below props */}

      <SectionList

            sections={groupedPokemonList}

            renderItem={({item}) => {
                return(
                    <View style={styles.card}>
                        <Text style={styles.cardText}>{item}</Text>
                    </View>
                    
                )
            }}

            
            renderSectionHeader={({ section }) => {
                return (
                    <Text style={styles.sectionHeaderText}>{section.type}</Text>
                )
            } }


            ItemSeparatorComponent={() => {
                return (
                    <View style={{height:16}}/>
                )
            } }


            SectionSeparatorComponent={() => {    // this will seperate the section 
                return (
                    <View style={{height:16}}/>
                )
            }}
       />


    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        // marginBottom: 16
        
    },
    cardText: {
        fontSize: 30
    },
    sectionHeaderText:{
        backgroundColor:"red",
        fontSize:24,
        fontWeight:'bold'
    }
})

export default SectionListComponent