import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto';


export default class ItemListaVideo extends React.Component{
  
  render(){
  return (
    <TouchableOpacity style={styles.container}
    onPress={()=>{ this.props.onPress()}}
    >
      
      <Image style={{width:150, height:100}}
       source={require('./../Recursos/Imagens/clapperboard.png')}
       resizeMode='center'>
       </Image>
      <View  style={{padding:5}}>  
         <Text style={{marginBottom:5, fontWeight:'bold'}}>{this.props.titulo}</Text>
         <Text>{this.props.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
   borderBottomColor:CoresProjeto.CinzaClaro, borderBottomWidth:1
    
  
  },
});
