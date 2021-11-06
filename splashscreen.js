import React from "react"
import {StyleSheet ,Text, style,View} from 'react-native';
import { fontSize } from "styled-system";

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:`#9932cc`,
    alignItems:'center',
    justifyContent:'center',
    
  },
  Text:{
    color:'white',
   fontSize:50,
   fontStyle:'italic',
  }
})



export default class splashscreen extends React.Component{
  render(){

  
  return (
    <View style={styles.background}>
      <Text style={styles.Text}>Univershity App</Text>
    </View>
  
  )
}
}