import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import * as CoresProjeto from '../Recursos/Constantes/CoresProjeto'

export default class BotaoLogin extends React.Component{
  
  render(){
  return (
    <TouchableOpacity style={{paddingRight:30,
      backgroundColor: CoresProjeto.Branco, padding: 10, width: '100%',
      margin: 10,  alignItems: 'center', borderRadius: 90,flexDirection:'row'
    }}
      onPress={() => { this.props.onPress() }}  >
           <Image style= {{marginLeft:10}} source ={this.props.source} />
      <Text style={{width: '100%', textAlign:'center',  fontSize: 16, color: CoresProjeto.Preto }}>{this.props.text}</Text>
    </TouchableOpacity>

  );
  }
}
