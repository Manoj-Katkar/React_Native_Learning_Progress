import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

const ButtonComponent = () => {

  
    const [count, setCount] = useState(0);
    const ref = useRef();
    const handleClick = ()=> {
        setCount(count+1);
      console.log(ref.current);
        }
  return (
    <View style={{flex:1}}>
      <Text>ButtonComponent</Text>
      <Text style={{fontSize:25, color:'red'}}>{count}</Text>
      <Button
         title='Click Me'
         onPress={handleClick}
         ref={ref}
      />

      {/* We use this for the buttons in the actual Projects  */}
      <TouchableOpacity style={{borderColor:'red', borderWidth:2, padding:10, margin:10,alignItems:'center', justifyContent:'center'}}>
        <Text>Submit</Text>
      </TouchableOpacity>

     
    </View>
  )
}

export default ButtonComponent