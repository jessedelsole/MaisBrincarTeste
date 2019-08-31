import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import * as CoresProjeto from '../Recursos/Constantes/CoresProjeto'

export default class BotaoSelecao extends React.Component{
  
  render(){
  return (
    <TouchableOpacity style={{ width: '100%'}} onPress={() => { this.props.onPress()}}>
    <View style={{ backgroundColor: 'white', height: 70, width: '100%', 
       alignItems: 'center',flexDirection:'row', paddingRight:60 }}>
      <Image style = {{marginRight:10,marginLeft:10}}source = {this.props.source}></Image>
      <Text style={{ color:'black', width:'100%' }}>{this.props.text}</Text>
    </View>
  </TouchableOpacity>
  );
  }
}
