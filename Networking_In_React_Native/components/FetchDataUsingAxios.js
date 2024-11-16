import { View, Text, StyleSheet, FlatList, ActivityIndicator, StatusBar, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FetchDataUsingAxios = () => {

    // !Note : In this application you will get the error because while fetching the data in fetch data url is wrong 
    

    const [postsList, setPostsList] = useState([]);

    const [error, setError] = useState(null);                 //! taken the state to maintain the errors that will get while making the api calls 

    const [isLoading, setIsLoading] = useState(false);

    // to allow the user to refresh and get the current data or feeds 
    const [refreshingState, setRefreshingState] = useState(false);

    // Taking the State to make the Post in json placehlder 
    const [isPosting, setIsPosting] = useState(false);



    // taking the more states 
    const [postTitle, setPostTitle] = useState("");

    const [postBody, setPostBody] = useState("");


    // !Implementing the post request using the axios like below 
    //^ const response = await axios.post(url, postData);   



    const addPost = async () => {

        // Now User Click to add that post in the Ui So I have to make the isPosting = true 
        // so the differant text will be visible to the user that is Adding....... so user will get to know that that post is getting added 
        setIsPosting(true);

        // ! Handling the Errors 

        try {
            //&first implementing the using the fetch 

            // const response =  await fetch("https://jsonplaceholder.typicode.com/posts" , {
            //     method:'post',
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body:JSON.stringify({
            //         title:postTitle,
            //         body:postBody
            //     })
            // })


            // const newPost = await response.json();

            // setPostsList([newPost , ...postsList]);


            //========================== Implementation of the post request using the axios =========================

            // Approach 
            // I have to create the one object which will have the title and the body of the post then add that using the post 
            let newPostUsingAxios = {
                title: postTitle,
                body: postBody
            }


            // &Same above thing I will try it implementing by the axios post method 

            axios.post('https://jsonplaceholder.typicode.com/posts', newPostUsingAxios).then((response) => {

                console.log("response ", JSON.stringify(response.data, undefined, 4));


                setPostsList([response.data, ...postsList])   //updating the original post list 

            })
                .catch((error) => {
                    console.log("error ", error);

                })

            // then I have to make title and body and isPosting to false 
            setPostTitle("");
            setPostBody("");

            setIsPosting(false);

            //also make sure the error is having the empty string in that state 
            setError("");

        }
        catch (error) {

            //for developer purpose we will console log the error 
            console.log("Error adding the new post : ", error);

            //and for user I have to update the state so with that I will update the UI if error occured 
            setError("Failed To add the new post")

        }






    }

    const handleRefreshing = () => {
        setRefreshingState(true);

        //then call the fetchData but with the differant limit value 
        fetchData(25);



    }




    let fetchData = async (limit = 10) => {

        try {

                //then I have to pause the loading state and show the data to the user 
                setIsLoading(true);

            axios.get(`https://jsonplaceholder.com/posts?_limit=${limit}`)
                .then((response) => {

                    //update the state 
                    setPostsList(response.data);

                    setIsLoading(false);



                    setRefreshingState(false); // Set refreshing state to false after fetching data

                })
                .catch((error) => {

                    console.log("error while fetching the data");

                    setIsLoading(false);

                    

                    setRefreshingState(false); // Set refreshing state to false after fetching data

                    
                    // handling the error 
                    // setError(error.message);   //object will have the error message that will come from axios only we can give custom error message also 
                    
                    setError("Failed to fetch post list");
                    

                })


        }
        catch (error) {

            console.log("Error While fetching the Data : ", error);  //!for our preferance we will console the errors 

            //then I have to pause the loading state and show the data to the user 
            setIsLoading(false);

            //here we will update the our state that is using the setError 

            setError("Failed to fetch post list");    //^ this state will be used to display the error to the user 


        }



    }

    console.log("error : " , error);
    

    // console.log("data : " , postsList);

    useEffect(() => {

        fetchData(10);

    }, [])


    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='blue' />
                <Text>Loading.............</Text>
            </View>
        )
    }
    else {
        return (
            <>

                {/* Here If I am getting the error while making the any API Call then I will make sure Update the UI accordinglly  */}

                {error ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                ) :

                    (
                        <>
                            <View style={styles.inputContainer}>
                                <Text>Enter Title</Text>

                                <TextInput
                                    placeholder='Post title'

                                    style={styles.input}

                                    value={postTitle}

                                    onChangeText={(postTitle) => setPostTitle(postTitle)}



                                />

                                <Text>Enter Body</Text>
                                <TextInput
                                    placeholder='Post body'

                                    style={styles.input}

                                    value={postBody}

                                    onChangeText={(postBody) => setPostBody(postBody)}



                                />

                                <Button
                                    title={isPosting ? "Adding......." : "Add Post"}

                                    onPress={addPost}

                                    disabled={isPosting}
                                />
                            </View>

                            <View style={styles.listContainer}>
                                {/* <Text>FetchDataUsingAxios</Text> */}

                                <FlatList

                                    data={postsList}

                                    renderItem={({ item }) => {

                                        return (
                                            <View style={styles.card}>

                                                <Text style={styles.titleText}> Title : {item.title}</Text>
                                                <Text style={styles.bodyText}>Body : {item.body}</Text>
                                            </View>
                                        )
                                    }}

                                    ItemSeparatorComponent={() => (
                                        <View style={{ height: 16 }} />
                                    )}

                                    ListEmptyComponent={<Text >No Post Found</Text>}

                                    ListHeaderComponent={<Text style={styles.headerText}>Start Of Post List</Text>}

                                    ListFooterComponent={<Text style={styles.footerText}>End Of Post List</Text>}

                                    refreshing={refreshingState}     //for refreshing it will take the state

                                    onRefresh={handleRefreshing}    //after the user will perform the refresh then what to do that I have to mension in the function 


                                />
                            </View>
                        </>
                    )
                }


            </>
        )
    }



}


const styles = StyleSheet.create({

    listContainer: {
        flex: 1,
        paddingHorizontal: 16,


    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,

    },
    titleText: {
        fontSize: 30
    },
    bodyText: {
        fontSize: 24,
        color: "#666666"
    },
    headerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12
    },
    footerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20
    },
    loadingContainer: {
        flex: 1, // Ensure the container takes the full height of the screen
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight || 0, // Fallback to 0 if currentHeight is undefined
        justifyContent: 'center', // Centers vertically
        alignItems: 'center', // Centers horizontally
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 8,
        padding: 8,
        borderRadius: 8
    },
    errorContainer:{
        backgroundColor:"#FFC0CB",
        padding:16,
        borderRadius:8,
        borderWidth:1,
        margin:16,
        alignItems:"center"
    },
    errorText:{
        color:"#D8000C",
        fontSize:16,
        textAlign:"center"
    }


})

export default FetchDataUsingAxios