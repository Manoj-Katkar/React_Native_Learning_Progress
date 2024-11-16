import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'


import pokemonList from '../data.json'



const FlatListComponent = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <Text>FlatList</Text> */}

      {/* its takes the below props */}

      <FlatList

           data={pokemonList}  //list that you want to render in the UI 

          //data={[]}   //used when the data is not fetched so along with the ListEmptyComponent I have to use it to S=display some message in the Ui 

          renderItem={({item}) => {

            let {id , name} = item;

            console.log("item_Id : " , item.id);
            

            return (
                  <View key={item.id} style={styles.card}>

                      <Text style={styles.cardText}> {item.type} </Text>

                      <Text style={styles.cardText}>
                          {`${item.id})  ${item.name}`}
                      </Text>

                  </View>
            )
          }}

          keyExtractor={(item , index) => item.id.toString()}

          ItemSeparatorComponent={<View style={{height:16}}/>}

          ListEmptyComponent={ <View style={styles.noItemFound}><Text style={styles.noItemFoundText}>No items Found</Text></View> }

          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List Header</Text>}   // To Add the header to the Pokemon List 

          ListFooterComponent={<Text style={styles.footerText}>Pokemon List Footer</Text>}      //To Add the Footer Component  to the Pokemon List 
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
  noItemFound:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  },
  noItemFoundText:{
    fontSize:30,
    color:"purple"
  },
  headerText:{
    fontSize:30,
    color:"purple"
  },
  mainContainer: {
    // alignItems:"center"
  },
  footerText:{
    fontSize:30,
    color:"purple"
  }
})


export default FlatListComponent