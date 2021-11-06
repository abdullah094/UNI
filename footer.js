import React from "react"
import {StyleSheet ,Text, style,View,} from 'react-native';
import { fontSize } from "styled-system";
import { Button, Center, NativeBaseProvider, AppBar,IconButton, Tabs, TabBar, Icon,Title,Body,Icon,Left,Right,}
 from "native-base"




export default class header extends React.Component{
  render(){

  
  return(
    <Tabs isFitted variant='solid-rounded'>
  <TabBar>
    <Tab borderRadius='md' px={4} ml={4}>
      <Icon name='apps' />
    </Tab>
    <Tab borderRadius='md' px={4}>
      <Icon name='camera' />
    </Tab>
    <Tab borderRadius='md' px={4}>
      <Icon name='navigation' />
    </Tab>
    <Tab borderRadius='md' px={4} mr={4}>
      <Icon name='person' />
    </Tab>
  </TabBar>
</Tabs>
  )
  }
}

