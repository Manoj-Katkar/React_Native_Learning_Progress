import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import pokemonList from '../data.json'

const Lists = () => {
    return (
        <View>

            {pokemonList.map((currentItem, index) => {

                console.log(currentItem.id);
                
                return (
                    <View key={currentItem.id} style={styles.card}>
                        <Text style={styles.cardText}>{currentItem.type}</Text>
                        <Text style={styles.cardText}>
                            {`${currentItem.id})  ${currentItem.name}`}
                        </Text>
                    </View>
                )
            })}

        </View>
    )
}



const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16
    },
    cardText: {
        fontSize: 30
    }
})


export default Lists