import React from "react"
import {StyleSheet ,Text, style,View,} from 'react-native';
import { fontSize } from "styled-system";
import { Button, Center, NativeBaseProvider, AppBar,IconButton, Header,Title,Body,Icon,Left,Right,}
 from "native-base"




export default class header extends React.Component{
  render(){

  
  return(
    <Header>
  <Left>
    <Button transparent>
      <Icon name='arrow-back' />
    </Button>
  </Left>
  <Body>
    <Title>Header</Title>
  </Body>
  <Right>
    <Button transparent>
      <Icon name='menu' />
    </Button>
  </Right>
</Header>
  )
  }
}

